import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  articles: Article[] = [
    { id: 1, name: 'Chips', description: 'Description 1', price: 1.2, quantity: 0 },
    { id: 2, name: 'Schokolade', description: 'Description 2', price: 2, quantity: 0 },
    { id: 3, name: 'Pizza', description: 'Description 2', price: 5, quantity: 0 },
    { id: 4, name: 'Baguette', description: 'Description 2', price: 3.5, quantity: 0 },
    // Add more articles as needed
  ];

  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }
}