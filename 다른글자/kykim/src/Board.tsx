import styled from '@emotion/styled';
import React, { memo } from 'react';
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
        <Row key={indexA}>
          {tileRow.map((tile, indexB) => (
            <Tile key={`${indexA}_${indexB}`} onClick={() => onClickTile(tile)}>
              {tile}
            </Tile>
          ))}
        </Row>
      ))}
    </>
  );
};

const Row = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;
const Tile = styled.li`
  list-style: none;
  padding: 10px 5px;
  border: 1px solid #7f7f7f;
  &:hover {
    background-color: #7f7f7f;
  }
`;
export default memo(Board);
