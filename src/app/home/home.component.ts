import { Component, OnInit } from '@angular/core';
import { DemoAppService } from '../demo-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articleList: any;
  weatherData: any;

  constructor(private demoAppService: DemoAppService) { }

  ngOnInit(): void {
    this.demoAppService.getAllArticles().subscribe(
      (result: any) => {
        this.articleList = result?.articles;
      });

    this.demoAppService.getUserLocation().subscribe(
      (result: any) => {
        const location = result;
        this.demoAppService.getWeatherDetails(location.latitude, location.longitude)
          .subscribe(
            (result: any) => {
              this.weatherData = result;
        });
      });
  }
  getArticle(data: string) {
    this.demoAppService.getArticle(data).subscribe(
      (result: any) => {
        const articleObj = result;
    })
  }
}
