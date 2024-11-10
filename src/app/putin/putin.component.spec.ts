import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutinComponent } from './putin.component';

describe('PutinComponent', () => {
  let component: PutinComponent;
  let fixture: ComponentFixture<PutinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
