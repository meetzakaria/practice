import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Input() user: User = { id: 0, name: '', email: '' };
  @Output() onSave = new EventEmitter<User>();

  ngOnInit() {
    if (!this.user) {
      this.user = { id: 0, name: '', email: '' };
    }
  }

  submitForm() {
    this.onSave.emit(this.user);
    this.user = { id: 0, name: '', email: '' }; // reset form
  }
}
