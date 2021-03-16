import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  prevRoute;
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    const navigation = this.router.getCurrentNavigation();
    let prev = navigation.extras.state;
    if (prev) this.prevRoute = prev;
  }

  ngOnInit(): void {
    console.log('Prev:', this.prevRoute);
  }

  signIn(value) {
    this.authService.login(value)
      .subscribe(result => {
        if (result && !this.prevRoute)
          this.router.navigate(['/']);

        if (result && this.prevRoute)
          this.router.navigate([`/${this.prevRoute.prev}`]);

      }, () => {
        this.invalidLogin = true;
        setTimeout(() => {
          this.invalidLogin = false;
        }, 3000);
      })
  }

}
