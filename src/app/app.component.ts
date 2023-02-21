import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  assets = ["/assets/img/star.jpg", "", "", "/assets/img/cash.jpg"]
  clicked = false;

  onClick(event?: MouseEvent) {
    this.clicked = !this.clicked;
  }
}
