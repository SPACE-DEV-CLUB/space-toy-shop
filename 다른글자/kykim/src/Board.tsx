import React from 'react';
import getBoard from './utils/getBoard';

interface BoardProps {
  stage?: number;
  onCorrect?: () => void;
  onIncorrect?: () => void;
}
const Board = ({ stage = 1, onCorrect = () => {}, onIncorrect = () => {} }: BoardProps) => {
  const board = getBoard(stage);

  const onClickTile = (tileText: string) => {
    if (tileText === '게절') {
      onCorrect();
    } else {
      onIncorrect();
    }
  };
  return (
    <>
      {board.map((tileRow, indexA) => (
        <div key={indexA}>
          {tileRow.map((tile, indexB) => (
            <li key={`${indexA}_${indexB}`} onClick={() => onClickTile(tile)}>
              {tile}
            </li>
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
