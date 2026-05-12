import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemory } from './new-memory';

describe('NewMemory', () => {
  let component: NewMemory;
  let fixture: ComponentFixture<NewMemory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMemory],
    }).compileComponents();

    fixture = TestBed.createComponent(NewMemory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
