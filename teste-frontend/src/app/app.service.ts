import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {AppModule} from "./app.module";

@Injectable()
export class AppService {

  constructor( private http: HttpClient) {
  }
  searchJson(): Observable<Object> {
    const url ='backend';
    return this.http.get(url);
  }
}
