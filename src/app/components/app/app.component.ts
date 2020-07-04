import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-xxx',
  templateUrl: `./app.component.html`,
  styleUrls: [`app.component.css`]
})
export class AppComponent {
  // private http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  users: any[];
  posts: any[];
  comments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users = response);
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(res => this.posts = res);
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(res => this.comments = res);
  }

}
