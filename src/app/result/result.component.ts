import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {{ score }} / {{ total }}</p>
      <button routerLink="/home">Back to Home</button>
    </div>
  `,
  styles: [`
    .result-container {
      text-align: center;
      margin-top: 100px;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class ResultComponent implements OnInit {
  score: number = 0;
  total: number = 7;

  ngOnInit(): void {
    const storedScore = localStorage.getItem('quizScore');
    this.score = storedScore ? parseInt(storedScore, 10) : 0;
  }
}
