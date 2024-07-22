import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{
   //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  
  ngAfterViewInit(){
    console.log('After view init');
    console.log(this.form().nativeElement);
  }
  
  ngOnInit(){
    console.log('oninit');
    console.log(this.form().nativeElement);
    
  }

    // submit(titleElement : HTMLInputElement ){
    //   const enteredTitle = titleElement.value;
    //   console.log('Entered Title: ' + enteredTitle)
    // } OR

    submit(title: string, ticketText: String){
      console.log(title);
      console.log(ticketText);
      console.log('submit');
      this.form().nativeElement.reset();
      // form.reset();
    }
}
