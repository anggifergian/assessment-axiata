import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { onMainContentChange, onSideNavChange, animateText } from "../animations/animations";

@Component({
    selector: 'app-axiata',
    templateUrl: './axiata.component.html',
    styleUrls: ['./axiata.component.scss'],
    animations: [onSideNavChange, onMainContentChange, animateText]
})
export class AxiataComponent {
    public sideNavState: boolean = false;
    public linkText: boolean = false;

    constructor(
        private router: Router
    ) {}

    onSinenavToggle() {
        this.sideNavState = !this.sideNavState;
        this.linkText = this.sideNavState;
    }

    logout() {
        this.router.navigate(['/onboarding']);
    }
}