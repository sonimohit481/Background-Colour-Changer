import { useState, useCallback } from "react";

type Color = {
  name: string;
  value: string;
};

type Palette = {
  name: string;
  colors: Color[];
};

const palettes: Palette[] = [
  {
    name: "Vibrant",
    colors: [
      { name: "Red", value: "#FF0000" },
      { name: "Orange", value: "#FFA500" },
      { name: "Yellow", value: "#FFFF00" },
      { name: "Green", value: "#008000" },
      { name: "Blue", value: "#0000FF" },
      { name: "Purple", value: "#800080" },
    ],
  },
  {
    name: "Pastel",
    colors: [
      { name: "Pink", value: "#FFC0CB" },
      { name: "Mint", value: "#98FF98" },
      { name: "Lavender", value: "#E6E6FA" },
      { name: "Sky Blue", value: "#87CEEB" },
      { name: "Peach", value: "#FFDAB9" },
    ],
  },
  {
    name: "Dark",
    colors: [
      { name: "Slate Gray", value: "#708090" },
      { name: "Crimson", value: "#DC143C" },
      { name: "Teal", value: "#008080" },
      { name: "Indigo", value: "#4B0082" },
      { name: "Gold", value: "#FFD700" },
    ],
  },
];

const getTextColor = (bgColor: string): string => {
  const [r, g, b] = bgColor.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
};

const Version1 = ({
  currentColor,
  setCurrentColor,
}: {
  currentColor: string;
  setCurrentColor: (args: string) => void;
}) => {
  const [currentPalette, setCurrentPalette] = useState<Palette>(palettes[0]);

  const handleColorChange = useCallback((color: string) => {
    setCurrentColor(color);
  }, []);

  return (
    <div className="w-full h-screen" style={{ backgroundColor: currentColor }}>
      <div className="absolute bottom-10 left-0 right-0">
        <div className=" p-3 inset-x-5 flex flex-wrap gap-2 justify-center">
          {currentPalette.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(color.value)}
              className="px-4 py-3 rounded-lg font-bold  "
              style={{
                backgroundColor: color.value,
                color: getTextColor(color.value),
              }}
            >
              {color.name}
            </button>
          ))}
        </div>
        <div className="p-3 inset-x-5 flex flex-wrap gap-2 justify-center">
          <div className=" flex gap-2 mt-2">
            {palettes.map((palette) => (
              <button
                key={palette.name}
                onClick={() => setCurrentPalette(palette)}
                className="px-3 py-2 bg-gray-200 rounded shadow hover:bg-gray-300"
              >
                {palette.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version1;
