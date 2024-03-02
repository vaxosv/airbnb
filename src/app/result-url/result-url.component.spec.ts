import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultURLComponent } from './result-url.component';

describe('ResultURLComponent', () => {
  let component: ResultURLComponent;
  let fixture: ComponentFixture<ResultURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultURLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
