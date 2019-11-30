import { Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit{
  navbarOpen = false;
  public clicked = false;
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
  }
  constructor(
  ) {}
  ngOnInit() {}
  public onClick(event): void {
      event.preventDefault();
      event.stopPropagation();
      this.clicked = true;
  }
}

