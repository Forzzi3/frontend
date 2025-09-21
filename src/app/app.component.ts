import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  text = '';
  response = '';
  
  readResult = '';
  readError = '';
  constructor(private http: HttpClient) {}

  send() {
    this.http.post('http://localhost:3000/api/save', { message: this.text })
      .subscribe({
        next: () => this.response = 'Успешно отправлено!',
        error: (err) => this.response = 'Ошибка: ' + err.message
      });
  }

  read() {
    this.http.get<{ content: string }>('http://localhost:3000/api/read')
      .subscribe({
        next: (res) => this.readResult = res.content,
        error: (err) => this.readError = 'Ошибка: ' + err.message
      });
  }
}
