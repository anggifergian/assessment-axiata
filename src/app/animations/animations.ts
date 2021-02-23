import { animate, state, style, transition, trigger } from "@angular/animations";

export const onSideNavChange = trigger('onSideNavChange', [
    state('close', style({'min-width': '50px'})),
    state('open', style({'min-width': '200px'})),
    transition('close <=> open', animate('250ms ease-in'))
]);

export const onMainContentChange = trigger('onMainContentChange', [
    state('close', style({'margin-left':'62px'})),
    state('open', style({'margin-left':'200px'})),
    transition('close <=> open', animate('250ms ease-in'))
]);