import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyListService {

  constructor(private http: HttpClient) { }

  getProgrammingLanguages(): Observable<any> {
    return this.http.get(`http://localhost:3000/programming-languages`);
    
  }
  createProduct(data: any): Observable<any> {
    console.log('post', data);

    return this.http.post('http://localhost:3000/programming-languages', data)
  }
  removeProduct(inputValue: any){
    return this.http.delete(`http://localhost:3001/programming-languages/${inputValue}`)
  }
}
