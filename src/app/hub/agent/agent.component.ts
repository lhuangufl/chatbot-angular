import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agent } from '../hubAgent';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})

export class AgentComponent {

  @Input() agent!: Agent;

  constructor(private router: Router) {}

  startChat(agent: Agent): void {
    console.log(agent.name);
    localStorage.setItem('agentName', agent.name); // Store the agent name in local storage
    this.router.navigate(['/chat']);
  }
}
