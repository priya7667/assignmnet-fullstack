import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    email: ''
  };

  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.addData(this.formData).subscribe(response => {
      console.log('Data submitted', response);
      this.formData = { name: '', email: '' }; // Reset form
    });
  }

}
