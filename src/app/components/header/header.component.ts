import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  @Input() isAuth!: boolean
  authStatusFromServiceSubscribe!: Observable<boolean>

  ngOnInit(): void {
    this.authStatusFromServiceSubscribe = this.authService.getAuthStatus()

  }
}
