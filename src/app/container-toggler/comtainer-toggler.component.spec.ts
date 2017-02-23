import {
  async,
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By }           from '@angular/platform-browser';

import { ContainerTogglerComponent } from './container-toggler.component';

describe('Container Toggler component - ', () => {
  let comp: ContainerTogglerComponent;
  let fixture: ComponentFixture<ContainerTogglerComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerTogglerComponent]
    })
    .compileComponents()
    .then(() => {
    fixture = TestBed.createComponent(ContainerTogglerComponent);
    comp = fixture.componentInstance;
    });
  }));

  it ('Should have the component', () => {
    fixture = TestBed.createComponent(ContainerTogglerComponent);
    comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

});
