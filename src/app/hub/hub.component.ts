import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agent } from './hubAgent';
import { HubService } from './hub.service';
import { AgentComponent } from './agent/agent.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [CommonModule,
            AgentComponent],
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent {
  housingLocationList: Agent[] = [];
  hubService: HubService = inject(HubService);

  constructor() {
    this.housingLocationList = this.hubService.getAllHousingLocations();
  }
}
