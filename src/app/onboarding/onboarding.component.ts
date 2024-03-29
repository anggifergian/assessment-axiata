import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss']
})

export class OnboardingComponent {
    constructor(
        private router: Router,
    ) {}

    onAzureLogin() {
        this.router.navigate(['/axiata/allticket']);
    }
}
