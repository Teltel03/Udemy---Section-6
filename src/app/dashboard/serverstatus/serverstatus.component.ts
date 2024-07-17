import { Component, OnDestroy, OnInit } from '@angular/core';
// import { interval } from 'rxjs';


@Component({
  selector: 'app-serverstatus',
  standalone: true,
  imports: [],
  templateUrl: './serverstatus.component.html',
  styleUrl: './serverstatus.component.css'
})
export class ServerstatusComponent implements OnInit, OnDestroy{
    currentStatus: 'online' | 'offline' | 'unknown' = 'online';
    private interval? : ReturnType<typeof setInterval>;
    

    ngOnInit(){
      console.log('on init')
      this.interval = setInterval(() => {
        const rnd = Math.random();

        if (rnd < 0.5){
          this.currentStatus ='online';
        }
        else if (rnd < 0.9){
          this.currentStatus ='offline';
        }
        else{
          this.currentStatus ='unknown';
        }
      }, 5000);
    }
    ngAfterViewInit(){
      console.log('After view init');
    }

    ngOnDestroy() {
        clearTimeout(this.interval);
        console.log('des')
      
    }
}
