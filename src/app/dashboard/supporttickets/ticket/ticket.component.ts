import { Component, input, output, signal } from '@angular/core';
import { Tickets } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Tickets>();
  close = output();
  detailsVisible = signal (false);

  onToggle(){
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible)
  }

  completed(){
    this.close.emit();
  }
}
