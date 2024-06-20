import React, { useEffect, useCallback, useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState<JSX.Element[][]>([]);

  const createTable = useCallback((letter: string, rowIndex: number) => {
    return (
      <div
        key={`${letter}${rowIndex}`}
        className="w-[50px] h-[50px] bg-slate-500 rounded-full flex justify-center items-center text-white font-bold text-xl"
      >
        <p>
          {letter}
          {rowIndex + 1}
        </p>
      </div>
    );
  }, []);

  useEffect(() => {
    const generateGrid = () => {
      const alphabet = "ABCDEFGHIJKL".split("");
      const numRows = 10;
      const gridElements: JSX.Element[][] = [];

      for (let i = 0; i < numRows; i++) {
        const rowElements: JSX.Element[] = [];
        for (let j = 0; j < alphabet.length; j++) {
          rowElements.push(createTable(alphabet[j], i));
        }
        gridElements.push(rowElements);
      }

      return gridElements;
    };

    setGrid(generateGrid());
  }, [createTable]);

  return (
    <div className="mx-72 bg-slate-200 relative">
      <img src="/theater.jpg" alt="theater" className="w-[360px] imgCenter" />
      <div className="w-[100%] h-[auto] bg-slate-400 flex flex-col items-center gap-8 p-10">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-12 gap-8">
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
