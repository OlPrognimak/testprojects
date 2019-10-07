import {Component, Input} from "@angular/core";

@Component({
  selector: '[myEditatbeCell]',
  // styleUrls: ['./components.cell.css'],
  template:
      `  
        <p-cellEditor>
          <ng-template pTemplate="input">
            <input pInputText type="text" [(ngModel)]="cellValue"/>
          </ng-template>
          <ng-template pTemplate="output">
            {{cellValue}}
          </ng-template>
        </p-cellEditor>
  `
})

export class EditableCell {
  @Input() cellValue: string;
}


