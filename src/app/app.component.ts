import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class.darkmode')
  public darkmode: boolean = false;

  @HostListener('window:keyup.d')
  public toggleDarkMode() {
    this.darkmode = !this.darkmode;
  }
}
