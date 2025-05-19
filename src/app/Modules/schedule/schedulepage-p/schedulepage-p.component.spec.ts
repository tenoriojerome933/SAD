import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulepagePComponent } from './schedulepage-p.component';

describe('SchedulepagePComponent', () => {
  let component: SchedulepagePComponent;
  let fixture: ComponentFixture<SchedulepagePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulepagePComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulepagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
