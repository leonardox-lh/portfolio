import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSplash = true;
  hideSplash = false;

  ngOnInit(): void {
    setTimeout(() => { this.hideSplash = true; }, 2000);
    setTimeout(() => { this.showSplash = false; window.scrollTo(0, 0); }, 2700);
  }
}
