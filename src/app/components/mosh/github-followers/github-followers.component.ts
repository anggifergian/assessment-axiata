import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers;
  page;
  orderBy;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        followers => {
          this.followers = followers;
        });

    this.route.queryParamMap
      .subscribe(
        query => {
          this.page = query.get('page');
          this.orderBy = query.get('order');
        });

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, order: 'newest' },
      queryParamsHandling: 'merge',
    })
  }

}
