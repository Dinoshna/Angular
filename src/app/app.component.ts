import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { successAlertComponent } from '../success/successAlert.component';
import { warningAlertComponent } from '../warning/warningAlert.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [successAlertComponent, warningAlertComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'udemy-proj1';
  showWarning = false;
  showSuccess = false;

  warning() {
    this.showWarning = !this.showWarning;
    this.showSuccess = false; // Hide success message
  }

  success() {
    this.showSuccess = !this.showSuccess;
    this.showWarning = false; // Hide warning message
  }
}
