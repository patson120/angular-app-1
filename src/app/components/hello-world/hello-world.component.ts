import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

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

  constructor() { }

  ngOnInit(): void {

  }

  changeMessage(): void {
    this.changeMessageEvent.emit("Hello World te dit bonjour")
  }

}
