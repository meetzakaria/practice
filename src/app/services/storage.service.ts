import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  
  private storageKey = 'users';

  getUsers(): User[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveUsers(users: User[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
  }

  updateUser(updatedUser: User): void {
    let users = this.getUsers();
    users = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    this.saveUsers(users);
  }

  deleteUser(id: number): void {
    const users = this.getUsers().filter(u => u.id !== id);
    this.saveUsers(users);
  }
}