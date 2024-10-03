import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloButtonComponent } from './hello-button.component';

describe('HelloButtonComponent', () => {
  let component: HelloButtonComponent;
  let fixture: ComponentFixture<HelloButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
