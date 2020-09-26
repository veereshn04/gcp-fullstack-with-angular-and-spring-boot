// import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable,throwError } from 'rxjs';
// import { map } from 'rxjs/operators';


const endpoint = 'http://localhost:8080/hello-world-bean';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  welcomeMessageFromService: string
  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {

    

    this.http.get<HelloWorldBean>(endpoint).subscribe(
      ressponse => this.handleSuccessfulResponse(ressponse),
      error => this.handleErrorResponse(error));
    // console.log(ressponse.message));
    // console.log("Execute Hello World Bean Service")

    //console.log('executeHelloWorldBeanService');
    return this.welcomeMessageFromService;
  }


  executeHelloWorldBeanServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers}).subscribe(
      ressponse => this.handleSuccessfulResponse(ressponse),
      error => this.handleErrorResponse(error));
    // console.log(ressponse.message));
    // console.log("Execute Hello World Bean Service")

    //console.log('executeHelloWorldBeanService');
    return this.welcomeMessageFromService;
  }

  handleSuccessfulResponse(ressponse) {
    this.welcomeMessageFromService = ressponse.message
    //  console.log(ressponse);
  }
  handleErrorResponse(error) {
    console.log(error)
    //  console.log(error.error)
    //  console.log(error.error.path)
    this.welcomeMessageFromService = error.error.path + error.error.status

  }
  createBasicAuthenticationHttpHeader() {
    let username = 'javahangout'
    let password = 'login'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':'+password);

    return basicAuthHeaderString;
  }
  // private extractData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }
  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: HttpErrorResponse): any {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }
}
