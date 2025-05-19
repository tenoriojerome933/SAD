import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConnectService } from '../../../connect.service';

@Component({
  selector: 'app-viewappoinment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './viewappoinment.component.html',
  styleUrls: ['./viewappoinment.component.css']
})
export class ViewappoinmentComponent implements OnInit {
  appointmentData: any;

  constructor(private conn: ConnectService) {}

  ngOnInit(): void {
    this.getappointment();
  }
 
  getappointment(): void {
    this.conn.getAppointment().subscribe(
      (data: any) => {
        this.appointmentData = data;
        console.log('Fetched appointment data:', this.appointmentData);
      },
      (error: any) => {
        console.error('Error fetching appointment data:', error);
      }
    );
  }

  handleCheck(requestId: number): void {
  alert('Clicked check for ID: ' + requestId);
  this.conn.updateStatusToWaiting(requestId).subscribe(
    () => {
      alert('Accepted! Status changed to "waiting".');
      this.getappointment();
    },
    (error: any) => {
      console.error('Failed to update to waiting:', error);
      alert('Failed to accept appointment.');
    }
  );
}

  handleReject(requestId: number): void {
    this.conn.updateStatusToRejected(requestId).subscribe(
      () => {
        alert('Rejected! Status changed to "rejected".');
        this.getappointment();
      },
      (error: any) => {
        console.error('Failed to reject appointment:', error);
        alert('Failed to reject appointment.');
      }
    );
  }

  trackByQueueId(index: number, item: any): number {
    return item.queue_id;
  }
}
