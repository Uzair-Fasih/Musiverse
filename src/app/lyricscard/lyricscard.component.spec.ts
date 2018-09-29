import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricscardComponent } from './lyricscard.component';

describe('LyricscardComponent', () => {
  let component: LyricscardComponent;
  let fixture: ComponentFixture<LyricscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
