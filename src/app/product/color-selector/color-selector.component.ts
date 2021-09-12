import { Component } from '@angular/core';

@Component({
    selector: 'app-color-selector',
    templateUrl: './color-selector.component.html',
    styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent {
    colors = [
        { name: 'black', code: '#020203' },
        { name: 'brown', code: '#984D32' },
        { name: 'beige', code: '#D59D80' },
        { name: 'darkorange', code: '#FF5D00' },
        { name: 'orange', code: '#FF9900' },
        { name: 'yellow', code: '#F5C621' },
        { name: 'red', code: '#E20907' },
        { name: 'prune', code: '#A7004E' },
        { name: 'darkpink', code: '#E6397C' },
        { name: 'pink', code: '#FF79C9' },
        { name: 'purple', code: '#D551EE' },
        { name: 'darkpurple', code: '#7B61FF' },
        { name: 'darkblue', code: '#2D54A2' },
        { name: 'blue', code: '#438ECC' },
        { name: 'bluelight', code: '#5CC5EB' },
        { name: 'greenlight', code: '#9EC75F' },
        { name: 'green', code: '#4DAF50' },
        { name: 'darkgreen', code: '#00887B' },
    ];
    selectedColor = { name: 'darkorange', code: '#FF5D00' };

    constructor() {}

    selectColor(color): void {
        this.selectedColor = color;
    }
}
