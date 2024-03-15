
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

  getTotalPrice(): number {
    return this.articles.reduce((total, article) => total + (article.price * article.quantity), 0);
  }
}