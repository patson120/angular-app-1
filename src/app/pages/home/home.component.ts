import { Component, OnInit } from '@angular/core';
import { HelloWorldComponent } from '../../components/hello-world/hello-world.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HelloWorldComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  message: string = "La terre tourne au tour du soleil !! (message de la page home)"

  ngOnInit(): void {}

  changeMessage(newMessage: string) {
    this.message = newMessage
  }
}
