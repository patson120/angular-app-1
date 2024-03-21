import { Injectable } from '@angular/core';
import { UserType } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  
  getAllUsers(): UserType[] {
    return [
      {
        id: 1,
        name: "John",
      },
      {
        id: 2,
        name: "Doe",
      }
    ]
  }
}
