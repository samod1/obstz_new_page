import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveMinutesComponent } from './executive-minutes.component';

describe('ExecutiveMinutesComponent', () => {
  let component: ExecutiveMinutesComponent;
  let fixture: ComponentFixture<ExecutiveMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveMinutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
