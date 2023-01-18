const getBoard = (stage: number) => {
  const board: string[][] = new Array(stage + 3);
  const randNumA = Math.floor(Math.random() * (stage + 3));
  const randNumB = Math.floor(Math.random() * (stage + 3));

  for (let i = 0; i < stage + 3; i++) {
    board[i] = new Array(stage + 3).fill('계절');
  }

  board[randNumA][randNumB] = '게절';
  return board;
};

export default getBoard;
