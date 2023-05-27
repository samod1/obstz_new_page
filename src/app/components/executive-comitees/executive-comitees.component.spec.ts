import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveComiteesComponent } from './executive-comitees.component';

describe('ExecutiveComiteesComponent', () => {
  let component: ExecutiveComiteesComponent;
  let fixture: ComponentFixture<ExecutiveComiteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveComiteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveComiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
