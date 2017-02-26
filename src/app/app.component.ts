import { Component, HostListener } from '@angular/core';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scrollDown() {
    
  }

  scrollUp() {
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
  //we'll do some stuff here when the window is scrolled
  }
}