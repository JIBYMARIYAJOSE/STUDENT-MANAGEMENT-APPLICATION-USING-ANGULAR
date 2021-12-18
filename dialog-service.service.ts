import { Injectable } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

//import { MatConfirmDialogueComponent } from './mat-confirm-dialogue/mat-confirm-dialogue.component';
@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialogue(value:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = value;
   
  }
  getAlert(name:string){
    

		if (confirm('Do you want delete ' +name) == true) {
			return true
		} else {
			alert('Delete canceled');
      return false
		}
  }//end of get()
   
    

  
}
