import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Agent } from '../hub/hubAgent';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Import FormsModule here
})
export class ChatComponent {
  messages = []; // Holds the chat messages
  newMessage = ''; // Binds to the input field
  agentName: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  sendMessage(): void {
    if (!this.newMessage.trim()) return; // Don't send empty messages
    this.messages.push({ content: this.newMessage, sentBy: 'user' }); // Add user message
    this.newMessage = ''; // Reset input field

    // Here you would typically call your backend service to get the response
    // For now, we'll just simulate a response
    setTimeout(() => {
      this.messages.push({ content: 'This is a simulated response.', sentBy: 'bot' });
    }, 1000);
  }

  ngOnInit(): void {
    // Retrieve the navigation state
    const navigation = this.router.getCurrentNavigation();
    this.agentName = navigation?.extras?.state?.agentName;
    if (!this.agentName) {
      this.agentName = localStorage.getItem('agentName');
    }

    // Clear the stored name after it's been used to avoid stale data
    localStorage.removeItem('agentName');
    console.log(this.agentName); //
    // Implement a greeting message using the agent's name if available
    if (this.agentName) {
      this.messages.push({ content: `Hello, how can I assist you regarding ${this.agentName}?`, sentBy: 'bot' });
    } else {
      this.messages.push({ content: 'Hello, how can I assist you today?', sentBy: 'bot' });
    }
  }


  /* Not important Below*/

  selectedKnowledgeBase: string = 'KnowledgeBase';
  selectedWebSearch: string = 'Web Search';
  knowledgeBases = [
    { id: 'kb1', name: 'Knowledge Base 1' },
    { id: 'kb2', name: 'Knowledge Base 2' }
    // Add more knowledge base options as needed
  ];

  // Call this when the knowledge base selection changes
  onKnowledgeBaseChange(): void {
    console.log('Knowledge Base selected:', this.selectedKnowledgeBase);
    // Implement actions based on the new knowledge base selection
  }

  // Call this when the web search option changes
  onWebSearchChange(): void {
    console.log('Web Search option selected:', this.selectedWebSearch);
    // Implement actions based on the new web search selection
  }
}
