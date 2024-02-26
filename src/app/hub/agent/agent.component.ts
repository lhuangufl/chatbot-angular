import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agent } from '../hubAgent';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})

export class AgentComponent {

  @Input() housingLocation!: Agent;

}
