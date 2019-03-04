import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReperfilamentoPage } from './modal-reperfilamento.page';

describe('ModalReperfilamentoPage', () => {
  let component: ModalReperfilamentoPage;
  let fixture: ComponentFixture<ModalReperfilamento>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReperfilamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReperfilamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
