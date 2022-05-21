import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'PFE';
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.autoAuthUser();
  }

}
