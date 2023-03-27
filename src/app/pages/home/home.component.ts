import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  assets = ["/assets/img/star.jpg", "", "", "/assets/img/cash.jpg"]
  clicked = false;

  onClick(event?: MouseEvent) {
    this.clicked = !this.clicked;
  }
}
