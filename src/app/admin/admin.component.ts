import { Component, ViewChild, OnInit, NgModule } from '@angular/core';
import { first } from 'rxjs/operators';

// import { User } from '@app/_models';
// import { UserService } from '@app/_services';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogBoxComponent } from '@app/dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];


@Component({ 
  selector: 'admin',
  templateUrl: 'admin.component.html'
})
export class AdminComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<UsersData>();

  @ViewChild(MatTable,{static:true}) table: MatTable<any[]>;

    // loading = false;
    // users: User[] = [];

    constructor(public dialog: MatDialog) { 
      this.dataSource.data = ELEMENT_DATA;
    }

    openDialog(action,obj) {
      obj.action = action;
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '250px',
        data:obj
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result.event == 'Add'){
          this.addRowData(result.data);
        }else if(result.event == 'Update'){
          this.updateRowData(result.data);
        }else if(result.event == 'Delete'){
          this.deleteRowData(result.data);
        }
      });
    }

    addRowData(row_obj){
      var d = new Date();
      this.dataSource.data.push({
        id:d.getTime(),
        name:row_obj.name
      });
      this.table.renderRows();
      
    }
    updateRowData(row_obj){
      this.dataSource.data = this.dataSource.data.filter((value,key)=>{
        if(value.id == row_obj.id){
          value.name = row_obj.name;
        }
        return true;
      });
    }
    deleteRowData(row_obj){
      this.dataSource.data = this.dataSource.data.filter((value,key)=>{
        return value.id != row_obj.id;
      });
    }

    // ngOnInit() {
    //     this.loading = true;
    //     this.userService.getAll().pipe(first()).subscribe(users => {
    //         this.loading = false;
    //         this.users = users;
    //     });
    // }
}