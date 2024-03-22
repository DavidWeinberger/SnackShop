import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  articles: Article[] = [
    { id: 1, name: 'Chips', price: 1.5, quantity: 0 },
    { id: 2, name: 'Schokolade', price: 2, quantity: 0 },
    { id: 3, name: 'Pizza', price: 5, quantity: 0 },
    { id: 4, name: 'Baguette', price: 3.5, quantity: 0 },
    { id: 5, name: 'Spende', price: 1, quantity: 0 },
    // Add more articles as needed
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }
}