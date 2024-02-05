import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'success',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './successAlert.component.html',
  styleUrl: './successAlert.component.css'
})
export class successAlertComponent {

  showSuccess=false;
//   msg:String = "Successfully completed, Have a good day!";
//   showFlag:boolean=false;

//  onClick(){
//   console.log("success");
//     this.msg;
//     this.showFlag=true;
//    }
}

