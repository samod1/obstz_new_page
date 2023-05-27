import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalConferenceComponent } from './regional-conference.component';

describe('RegionalConferenceComponent', () => {
  let component: RegionalConferenceComponent;
  let fixture: ComponentFixture<RegionalConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalConferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
