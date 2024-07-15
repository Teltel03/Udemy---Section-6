import { Component } from '@angular/core';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportticketsComponent } from './dashboard/supporttickets/supporttickets.component';
import { ServerstatusComponent } from './dashboard/serverstatus/serverstatus.component';
import { HeaderComponent } from './header/header.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TrafficComponent, SupportticketsComponent, ServerstatusComponent, HeaderComponent, DashboardItemComponent ],
})
export class AppComponent {

}
