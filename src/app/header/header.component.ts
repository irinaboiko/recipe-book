import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  @Output() targetSelected = new EventEmitter<string>();

  onSelect(target: string) {
    this.targetSelected.emit(target);
  }
}
