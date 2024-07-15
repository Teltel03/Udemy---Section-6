import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-supporttickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './supporttickets.component.html',
  styleUrl: './supporttickets.component.css'
})
export class SupportticketsComponent {

}
