import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlivequeueComponent } from './viewlivequeue.component';

describe('ViewlivequeueComponent', () => {
  let component: ViewlivequeueComponent;
  let fixture: ComponentFixture<ViewlivequeueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewlivequeueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlivequeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
