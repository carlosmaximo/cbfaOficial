import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInspecaoPage } from './modal-inspecao.page';

describe('ModalInspecaoPage', () => {
  let component: ModalInspecaoPage;
  let fixture: ComponentFixture<ModalInspecao>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInspecaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInspecaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
