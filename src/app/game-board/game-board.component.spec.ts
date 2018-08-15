import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('fillArray', () => {
    it('should fill array 0 by default', () => {
      // given
      const expectData = 0;
      // when
      const result = component.fillArray();
      // then
      expect(result[0]).toEqual(expectData);
    });

    it('should fill array 41 element by default', () => {
      // given
      const expectData = 41;
      // when
      const result = component.fillArray();
      // then
      expect(result.length).toEqual(expectData);
    });
    it('should fill array with 1', () => {
      // given
      const expectData = 1;
      // when
      const result = component.fillArray(1);
      // then
      expect(result[0]).toEqual(expectData);
    });
    it('should fill array with 4 size', () => {
      // given
      const expectData = [1, 1, 1, 1];
      // when
      const result = component.fillArray(1, 4);
      // then
      expect(result).toEqual(expectData);
    });
  });
});
