import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
  })
export class ModalComponent {
  @Input() img: string | undefined;
  @Input() url: string | undefined;
}
