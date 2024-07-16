import { Component } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css'
})
export class ServerstatusComponent {
    currentStatus: 'online' | 'offline' | 'unknown' = 'online';

    constructor(){
      setInterval(() => {
        const rnd = Math.random();

        if (rnd < 0.5){
          this.currentStatus ='online'
        }
        else if (rnd < 0.9){
          this.currentStatus ='offline'
        }
        else{
          this.currentStatus ='unknown'
        }
      }, 5000);
    }
}
