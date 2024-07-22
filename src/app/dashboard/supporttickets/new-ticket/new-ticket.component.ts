import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, viewChild, ViewChild } from '@angular/core';
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

  @Output() add = new EventEmitter<{title: string, text: string}>();
  
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

    submit(title: string, ticketText: string){
      this.add.emit({ title: title, text: ticketText});
      this.form().nativeElement.reset()
      // this.form().nativeElement.reset();
      console.log('submit')
      // form.reset();
    }
}
