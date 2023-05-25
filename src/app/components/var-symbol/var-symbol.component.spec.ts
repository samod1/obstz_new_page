import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarSymbolComponent } from './var-symbol.component';

describe('VarSymbolComponent', () => {
  let component: VarSymbolComponent;
  let fixture: ComponentFixture<VarSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
