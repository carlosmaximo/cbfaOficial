import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServicoPage } from './modal-os.page';

describe('ModalServicoPage', () => {
  let component: ModalServicoPage;
  let fixture: ComponentFixture<ModalOS>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalServicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
