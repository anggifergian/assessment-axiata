import { animate, state, style, transition, trigger } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
    state('close', style({'min-width': '50px'})),
    state('open', style({'min-width': '200px'})),
    transition('close <=> open', animate('250ms ease-in'))
]);

export const onMainContentChange = trigger('onMainContentChange', [
    state('close', style({'margin-left': '57px'})),
    state('open', style({'margin-left': '200px'})),
    transition('close <=> open', animate('250ms ease-in'))
]);

export const animateText = trigger('animateText', [
    state('hide', style({ display: 'none', opacity: 0, })),
    state('show', style({ display: 'block', opacity: 1, })),
    transition('hide => show', animate('0ms 5s ease')),
]);
