import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDescComponent } from './character-desc.component';

describe('CharacterDescComponent', () => {
  let component: CharacterDescComponent;
  let fixture: ComponentFixture<CharacterDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
