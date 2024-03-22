
import { Component } from '@angular/core';
import { Article } from './article.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [];

  constructor(private dataService: DataService) {
    this.articles = this.dataService.getArticles();
  }

  changeQuantity(article:Article, amount){
    article.quantity = article.quantity + amount;
    if(article.quantity < 0){
      article.quantity = 0;
    }
  }

  sendBuyRequest() {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.articles)
    };
    
    fetch('https://nodered.vserver.feuerwehr-hart.at/Snacks', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      this.articles.forEach(element => {
        element.quantity = 0;
      });
  }
  getTotalPrice(): number {
    return this.articles.reduce((total, article) => total + (article.price * article.quantity), 0);
  }
}