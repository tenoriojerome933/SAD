import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  API_URL = 'http://127.0.0.1:8000/'; // Ensure this URL matches your backend server's address

  constructor(private http: HttpClient) {}

  // Fetch the current queue
  getQueue(){
    return this.http.get(this.API_URL + 'api/home/getQueue');
  }

  waitingQueue(){
    return this.http.get(this.API_URL + 'api/home/waitingQueue');
  }

  // Call next token in the queue
  callNextToken(){
    return this.http.post(this.API_URL + 'api/home/callNext', {});
  }

  // Fetch appointment data
  getAppointment(){
    return this.http.get(this.API_URL + 'api/appointment/getAppointment');
  }

  // Set status to 'waiting'
  updateStatusToWaiting(requestId: number) {
    return this.http.post(this.API_URL + 'api/appointment/setWaiting', {
      request_id: requestId
    });
  }

  // Set status to 'rejected'
  updateStatusToRejected(requestId: number) {
    return this.http.post(this.API_URL + 'api/appointment/setRejected', {
      request_id: requestId
    });
  }

    login(data: any){
    return this.http.post(this.API_URL + 'api/login', data);
  }

}
