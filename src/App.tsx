import { useState } from "react";

function App() {
  const [colour, setColour] = useState("Black");

  const colorPalette = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Turquoise",
    "Lime",
    "Indigo",
    "Crimson",
    "Teal",
    "Salmon",
    "SlateGray",
    "Gold",
  ];

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: colour }}>
        <div className="absolute bottom-10 p-3 inset-x-5 flex flex-wrap gap-1 justify-between">
          {colorPalette.map((color) => (
            <div
              key={color}
              className="px-4 py-3 rounded-lg text-white font-bold drop-shadow-xl"
              onClick={() => setColour(color)}
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
