import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTramitarComponent } from './processo-tramitar.component';

describe('ProcessoTramitarComponent', () => {
  let component: ProcessoTramitarComponent;
  let fixture: ComponentFixture<ProcessoTramitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoTramitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoTramitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
