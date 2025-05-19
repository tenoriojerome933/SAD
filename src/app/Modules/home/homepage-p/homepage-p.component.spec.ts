import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePComponent } from './homepage-p.component';

describe('HomepagePComponent', () => {
  let component: HomepagePComponent;
  let fixture: ComponentFixture<HomepagePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepagePComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
