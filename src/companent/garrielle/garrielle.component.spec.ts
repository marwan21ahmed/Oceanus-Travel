import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrielleComponent } from './garrielle.component';

describe('GarrielleComponent', () => {
  let component: GarrielleComponent;
  let fixture: ComponentFixture<GarrielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarrielleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarrielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
