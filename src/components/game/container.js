import React, { useEffect, useState, useRef } from 'react';

import Square from 'src/components/game/square.js';
import SimonSays from 'src/components/game/simon-says.js';
import { pieces } from 'src/components/game/pieces';

export default function index() {
  const [gameState, SetGameState] = useState('waiting');
  const [score, SetScore] = useState(0);
  const [simonSaysFruit, SetSimonSaysFruit] = useState(null);

  const activeRef = useRef(null);
  const [activeSquare, SetActiveSquare] = useState(null);

  const columns = 6;
  const rows = 6;

  const [showSquares, SetShowSquares] = useState([]);

  const DetermineVisible = (denominator) => {
    //  denominator = 2 is 50% to show on each square

    const newShowSquares = [];
    const arraySize = columns * rows;
    for (let i = 0; i < arraySize; i += 1) {
      newShowSquares.push(
        Math.floor(Math.random() * denominator) === 1 ? true : false
      );
    }

    SetShowSquares(newShowSquares);
  };

  const [populatedSquares, SetPopulatedSquares] = useState([]);

  const PopulateSquares = (numFruits) => {
    //  Put fruit in each square from the selection available (higher numFruits = more difficult)
    const fruitBank = Object.keys(pieces);
    const availableFruits = [];
    //  Create available fruits array of numFruits size
    for (let fruitIterator = 0; fruitIterator < numFruits; fruitIterator += 1) {
      availableFruits.push(
        ...fruitBank.splice(Math.floor(Math.random() * fruitBank.length), 1)
      );
    }

    const arraySize = columns * rows;
    const newSquares = [];
    for (let i = 0; i < arraySize; i += 1) {
      //  Get random fruit within availableFruits
      newSquares.push(availableFruits[Math.floor(Math.random() * numFruits)]);
    }

    SetPopulatedSquares(newSquares);

    //  Return one of the available fruits (used as a winner)
    return {
      values: newSquares,
      winner: availableFruits[Math.floor(Math.random() * numFruits)],
    };
  };

  const GameplayLoop = async (
    round,
    numFruits,
    numFlashes,
    fruitTimer,
    answerTimer
  ) => {
    SetGameState('playing'); //  Reset active square selected to null
    SetActiveSquare(null);
    activeRef.current = null;
    SetSimonSaysFruit(null);
    //  Populate squares with random fruit from the selection
    const boardObject = PopulateSquares(numFruits);

    //  Begin flashing fruits on the board
    const maxFlashes = numFlashes;
    let flashes = 0;
    const showFruitTimer = setInterval(() => {
      DetermineVisible(2);

      if (flashes >= maxFlashes) {
        //  Stop flashing fruits
        clearTimeout(showFruitTimer);
        DetermineVisible(0);

        //  Show the correct fruit and begin countdown to select it
        SetSimonSaysFruit(boardObject.winner);

        setTimeout(() => {
          //  Check if player lost (not having correct square selected within countdown)

          if (boardObject.winner === boardObject.values[activeRef.current]) {
            SetScore(round * 1000);
            //  Fire gameplay loop again recursive call with changed parameters
            //  Such as fewer flashes, more fruits

            const newNumFruits = round % 4 === 0 ? numFruits + 1 : numFruits;
            const newNumFlashes =
              round % 10 === 0 && numFlashes > 1 ? numFlashes - 1 : numFlashes;

            GameplayLoop(
              round + 1,
              newNumFruits,
              newNumFlashes,
              fruitTimer - 10,
              answerTimer - 10
            );
          } else {
            SetGameState('lost');
          }
        }, answerTimer);
      }

      flashes += 1;
    }, fruitTimer);
  };

  return (
    <>
      <div className="holder">
        <div className="info">
          <SimonSays fruit={simonSaysFruit} visible={true} />
          {score}
        </div>
        <div className="container">
          {gameState === 'lost' && `You scored ${score}`}
          {gameState !== 'playing' ? (
            <button
              onClick={() => {
                SetScore(0);
                GameplayLoop(1, 2, 4, 1500, 3000);
              }}
            >
              Start Game
            </button>
          ) : (
            populatedSquares.map((square, index) => (
              <Square
                dimensions={100 / rows}
                index={index}
                fruit={square}
                visible={showSquares[index]}
                active={index === activeSquare ? true : false}
                Action={() => {
                  activeRef.current = index;
                  SetActiveSquare(index);
                }}
              />
            ))
          )}
        </div>
        <div className="after"></div>
      </div>
      <style jsx>{`
        .holder {
          display: flex;
          justify-content: space-between;
          width: 100%;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .holder {
            flex-direction: row;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          max-width: 100vmin;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 100vmin;
          width: 100vmin;
          height: 100vmin;
          flex-wrap: wrap;
        }
        .after {
          max-width: 100vmin;
        }
      `}</style>
    </>
  );
}
