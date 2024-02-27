import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, ApplicationRef, Injector, OnDestroy } from '@angular/core';
import { AgentComponent } from '../hub/agent/agent.component';
import { Agent } from '../hub/hubAgent';
import { HubService } from '../hub/hub.service';
import { AgentModalComponent } from './agent-modal/agent-modal.component';
@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule, AgentComponent, AgentModalComponent],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {
  activeTab: string = 'knowledgeBases';
  agentList: Agent[] = [];
  isModalVisible: boolean = false;

  hubService: HubService = inject(HubService);
  constructor() {
    this.agentList = this.hubService.getAllAgents();
  }
  showModal(): void {
    this.isModalVisible = true;
  }
  @Output() close = new EventEmitter<void>(); // This emits an event when the modal should close

  closeModal(): void {
    this.isModalVisible = false;
    this.close.emit(); // Notify the parent component to close the modal
  }
  addNewAgent(newAgent: Agent): void {
    // You might want to assign a unique ID for the new agent
    newAgent.id = this.agentList.length + 1;
    this.agentList.push(newAgent);
    this.closeModal();
  }
}
