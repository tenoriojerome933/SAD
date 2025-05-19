import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectService } from '../../../connect.service';

@Component({
  selector: 'app-viewlivequeue',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './viewlivequeue.component.html',
  styleUrl: './viewlivequeue.component.css'
})
export class ViewlivequeueComponent implements OnInit {
  queueData: any;
  waitingData: any;
  callNextToken: any;
  isCallingNext: boolean = false;
  // currentDate: Date;

  constructor(private conn: ConnectService) {}

  ngOnInit(): void {
    this.getqueue();
    this.waitingqueue();
    this.callNext();
    
    // this.currentDate = new Date();
    // this.setCurrentDate();
  }

  getqueue(): void {
    this.conn.getQueue().subscribe(
      (data: any) => {
        this.queueData = data;
      },
      (error) => {
        console.error('Error fetching current queue data:', error);
      }
    );
  }

  waitingqueue(): void {
    this.conn.waitingQueue().subscribe(
      (data: any) => {
        this.waitingData = data;
      },
      (error) => {
        console.error('Error fetching waiting queue data:', error);
      }
    );
  }

  callNext(): void {
  if (this.isCallingNext) return; // prevent double clicks

  this.isCallingNext = true;
  this.conn.callNextToken().subscribe(
    (response: any) => {
      this.isCallingNext = false;
      if (response.success) {
        this.getqueue();
        this.waitingqueue();
      } else {
        console.error('Failed to call next token.');
      }
    },
    (error) => {
      this.isCallingNext = false;
      console.error('Error calling next token:', error);
    }
  );
}

  // setCurrentDate(): void {
  //   const date = new Date();
  //   const formattedDate = date.toLocaleDateString(); // Format it as per your requirements
  //   document.getElementById('current-date')!.innerText = formattedDate;
  // }
}
