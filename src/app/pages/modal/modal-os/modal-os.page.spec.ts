import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOSPage } from './modal-os.page';

describe('ModalOSPage', () => {
  let component: ModalOSPage;
  let fixture: ComponentFixture<ModalOS>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
