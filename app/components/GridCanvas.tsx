import { useDrop } from "react-dnd";
import { useState } from "react";

const GridCanvas = () => {
  const [gridState, setGridState] = useState<(string | null)[][]>(
    new Array(6).fill(null).map(() => new Array(12).fill(null))
  );

  const [, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item: { type: string }, monitor) => {
      const position = monitor.getClientOffset();
      if (position) {
        const colIdx = Math.floor(position.x / 100); // Snap to column (100px per column)
        const rowIdx = Math.floor(position.y / 100); // Snap to row (100px per row)

        if (rowIdx < 6 && colIdx < 12) {
          const newGridState = [...gridState];
          newGridState[rowIdx][colIdx] = item.type; // Place component in the grid
          setGridState(newGridState);
        }
      }
    },
  }));

  return (
    <div
      ref={drop}
      className="grid grid-cols-12 gap-2 p-6 bg-gray-200 w-full"
      style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
    >
      {gridState.map((row, rowIdx) =>
        row.map((component, colIdx) => (
          <div
            key={`${rowIdx}-${colIdx}`}
            className="border-2 border-gray-300 p-4 min-h-[100px] flex items-center justify-center bg-white"
          >
            {component ? (
              <div className="w-full h-full bg-blue-200 p-4 rounded-md flex justify-center items-center">
                {component === "Progress Bar" && (
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                )}
                {component === "Question Text" && (
                  <p className="text-center text-white">Question Text</p>
                )}
                {component === "Timer" && (
                  <div className="text-center text-white">Timer: 00:00</div>
                )}
                {component === "Option" && (
                  <div className="text-center text-white">Option</div>
                )}
              </div>
            ) : (
              <span className="text-gray-400">Drop component here</span>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default GridCanvas;
