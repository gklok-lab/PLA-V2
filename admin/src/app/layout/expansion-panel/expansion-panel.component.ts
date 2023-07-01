import { Component, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  animations: [
    trigger('panelExpand', [
      state('transition', style({ height: '0', overflow: 'hidden' })),
      state('collapsed', style({ height: '0', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class ExpansionPanelComponent {
  @Input() initiallyExpanded: boolean = false;
  isExpanded: boolean = this.initiallyExpanded;

  
  
  togglePanel(): void {
    this.isExpanded = !this.isExpanded;
  }


  
}
