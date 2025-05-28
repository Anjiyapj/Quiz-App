import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="background">
      <div class="container">
        <h1>Welcome to the Quiz App</h1>
        <p>Test your knowledge with fun questions!</p>
        <button (click)="startQuiz()">Start Quiz</button>
      </div>
    </div>
  `,
  styles: [`
    .background {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ff6ec4, #7873f5); /* Pink to Purple */
    }

    .container {
      background: white;
      padding: 40px 60px;
      border-radius: 15px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      text-align: center;
      max-width: 400px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      margin-bottom: 30px;
      color: #666;
      font-size: 18px;
    }

    button {
      padding: 12px 24px;
      font-size: 16px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }
  `]
})

export class HomeComponent {
  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/quiz']);
  }
}
