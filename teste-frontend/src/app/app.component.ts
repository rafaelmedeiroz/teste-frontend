import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {RegionalAverage} from "./regionalAverage";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-frontend';
  averages: RegionalAverage[] = [];
  nationalAverage: number;
  showTable = false;
  constructor(private appService: AppService) {
  }
  ngOnInit() {
  }
  searchJson() {
    this.appService.searchJson().subscribe((json: any) => {
      this.averages = json.regionals.map(r => new RegionalAverage(r));
      this.nationalAverage = json.national.toFixed(2);
      this.showTable = true;
    });
  }
}
