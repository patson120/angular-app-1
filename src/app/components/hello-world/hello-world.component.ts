import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { UsersService } from '../../services/users.service'
import { UserType } from '../../types'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent implements OnInit {


  @Input("message")
  public message!: string

  @Output()
  private changeMessageEvent = new EventEmitter<string>()

  private _users: UserType[] = [];


  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {

  }

  changeMessage(): void {
    this.changeMessageEvent.emit("Hello World te dit bonjour")
    this._users = this._usersService.getAllUsers()    
  }

}
