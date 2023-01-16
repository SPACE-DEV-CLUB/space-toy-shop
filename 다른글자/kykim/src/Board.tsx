import React from 'react';
import getBoard from './utils/getBoard';

interface BoardProps {
  stage?: number;
}
const Board = ({ stage = 1 }: BoardProps) => {
  const board = getBoard(stage);

  return (
    <>
      {board.map((tileRow, indexA) => (
        <div key={indexA}>
          {tileRow.map((tile, indexB) => (
            <li key={`${indexA}_${indexB}`}>{tile}</li>
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
