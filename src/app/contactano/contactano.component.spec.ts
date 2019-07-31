import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanoComponent } from './contactano.component';

describe('ContactanoComponent', () => {
  let component: ContactanoComponent;
  let fixture: ComponentFixture<ContactanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
