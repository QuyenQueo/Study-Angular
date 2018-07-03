import {Injectable} from '@angular/core';
import {HttpHeaders, HttpHandler} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

const httpOptions = {
    header: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  'my-auth-token',
    })
};

interface Student {
    id: number;
    name: string;
}

@Injectable()
export class HomeService {
    // studentUrl = 'http://5a8d3d92d6c8840012dde9c5.mockapi.io/Angular/student-test';

    // constructor(
    //     private http: HttpClient,
    //     private handleError: HttpHandler,
    // ) {}

    // addStudent(student: Student) {
    //     return this.http.post<any>(this.studentUrl, student, httpOptions).pipe(
    //         (res) => {
    //             console.log(res);
    //         });
    // }
}
