import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
})
export class LetterComponent {
  @ViewChild('f') emailForm: NgForm;

  onSubmit() {
    console.log(this.emailForm);
  }
}
