import { COLORS } from './../shared/color.model';
import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../shared/color.model';

@Component({
    selector: 'app-color-selector',
    templateUrl: './color-selector.component.html',
    styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent {
    colors: Color[] = Object.values(COLORS);

    @Input() selectedColor: Color;

    @Output() selectedColorChange: EventEmitter<Color> = new EventEmitter();

    constructor(@Attribute('read-only') public readOnly: boolean = false) {}

    onColorSelected(color: Color): void {
        if (!this.readOnly) {
            this.selectedColorChange.emit(color);
        }
    }
}
