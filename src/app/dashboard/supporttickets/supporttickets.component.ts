import { Component, output } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Tickets } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';


@Component({
  selector: 'app-supporttickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './supporttickets.component.html',
  styleUrl: './supporttickets.component.css'
})
export class SupportticketsComponent {
  ticket: Tickets[] = [];

  Add( ticketData: {title: string, text: string}){
    const ticketss: Tickets = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }
    this.ticket.unshift(ticketss);
  }

  closeTicket(id:string){
    this.ticket = this.ticket.map((Tickets) => {
      if ( Tickets.id === id){
        return { ...Tickets, status: 'closed'}
      }
      return Tickets;
    });
  }
}
