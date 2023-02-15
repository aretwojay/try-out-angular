import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  assets = ["/assets/star.jpg", "", "", "/assets/cash.jpg"]
  clicked = false;

  onClick(event?: MouseEvent) {
    this.clicked = !this.clicked;
  }
}
