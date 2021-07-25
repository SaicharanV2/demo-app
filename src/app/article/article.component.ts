import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  this.article =  this.dataService.article;
  }

}
