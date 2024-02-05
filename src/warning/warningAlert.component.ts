import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'warning',
  standalone: true,
     imports: [CommonModule],
  templateUrl: './warningAlert.component.html',
  styleUrl: './warningAlert.component.css'
})
export class warningAlertComponent {

   showWarning = false;
//    msg:String= "warning alert please try again later sometime!";
//    showMsg:boolean=false;

//  onClick(){
//   console.log("waring!");
//   this.msg;
// this.showMsg= true;
//  }
}