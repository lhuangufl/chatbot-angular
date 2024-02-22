import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor() {}

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
}
