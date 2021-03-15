import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { GithubProfileService } from 'src/app/services/github-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: GithubProfileService
  ) { }

  ngOnInit(): void {
    const username = this.route.paramMap
      .pipe(
        map(params => params.get('username')),
        switchMap(data => this.service.getAll(data)),
      )
      .subscribe(profile => {
        console.log("Data", profile);
      });
  }

}
