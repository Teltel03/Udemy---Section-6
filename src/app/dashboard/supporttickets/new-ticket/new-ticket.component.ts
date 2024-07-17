import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule], 
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

    // submit(titleElement : HTMLInputElement ){
    //   const enteredTitle = titleElement.value;
    //   console.log('Entered Title: ' + enteredTitle)
    // } OR

    submit(title: string, ticketText: string, form: HTMLFormElement ){
      console.log(title);
      console.log(ticketText);
      form.reset();
    }
}
