import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentpagePComponent } from './appointmentpage-p.component';

describe('AppointmentpagePComponent', () => {
  let component: AppointmentpagePComponent;
  let fixture: ComponentFixture<AppointmentpagePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentpagePComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentpagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
