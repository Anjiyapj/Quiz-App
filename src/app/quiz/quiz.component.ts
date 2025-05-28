import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="quiz-container" *ngIf="currentIndex < questions.length">
    <h2>Question {{ currentIndex + 1 }}:</h2>
    <p>{{ questions[currentIndex].question }}</p>
    
    <div class="options">
      <button 
        *ngFor="let option of questions[currentIndex].options" 
        [class.selected]="option === selectedOption"
        (click)="selectOption(option)">
        {{ option }}
      </button>
    </div>

    <button class="next-btn" [disabled]="!selectedOption" (click)="nextQuestion()">Next</button>
  </div>

  <div class="quiz-container" *ngIf="currentIndex >= questions.length">
    <h2>Quiz Completed!</h2>
    <p>Your Score: {{ score }} / {{ questions.length }}</p>
    <button routerLink="/home">Back to Home</button>
  </div>
`,
styles: [`
  .quiz-container {
    text-align: center;
    padding: 40px;
    animation: fadeIn 0.6s ease-in;
  }

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
  }

  button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 16px;
    width: 200px;
  }

  button:hover {
    background-color: #0056b3;
  }

  .selected {
    background-color: #28a745 !important;
  }

  .next-btn {
    margin-top: 20px;
    background-color: #17a2b8;
  }

  .next-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`]

})
export class QuizComponent {
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 'Paris'
    },
    {
      question: 'What is 5 + 3?',
      options: ['5', '8', '10', '15'],
      answer: '8'
    },
    {
      question: 'What is the boiling point of water?',
      options: ['90°C', '50°C', '100°C', '150°C'],
      answer: '100°C'
    }
  ];

  currentIndex = 0;
  score = 0;
  selectedOption: string | null = null;

  constructor(private router: Router) {}

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (this.selectedOption === this.currentQuestion.answer) {
      this.score++;
    }

    this.selectedOption = null;
    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      localStorage.setItem('quizScore', this.score.toString());
      this.router.navigate(['/result']);
    }
  }

  isLastQuestion() {
    return this.currentIndex === this.questions.length - 1;
  }
}
