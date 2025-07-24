import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = { id: 0, name: '', email: '' };

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.storage.getUsers();
  }

  saveUser(user: User) {
    if (user.id === 0) {
      user.id = new Date().getTime();
      this.storage.addUser(user);
    } else {
      this.storage.updateUser(user);
    }
    this.loadUsers();
    this.selectedUser = { id: 0, name: '', email: '' };
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
  }

  deleteUser(id: number) {
    this.storage.deleteUser(id);
    this.loadUsers();
  }
}
