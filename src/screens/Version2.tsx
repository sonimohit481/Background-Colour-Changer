import React, { useState, useCallback } from "react";

const getTextColor = (bgColor: string): string => {
  const [r, g, b] = bgColor.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
};

const Version2 = ({
  currentColor,
  setCurrentColor,
}: {
  currentColor: string;
  setCurrentColor: (args: string) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string>("#000000");

  const openModal = () => {
    setIsModalOpen(true);
    setTempColor(currentColor);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const targetElement = target as HTMLElement;

    if (targetElement) {
      const width = targetElement.offsetWidth;
      const height = targetElement.offsetHeight;

      const r = Math.floor((offsetX / width) * 255);
      const g = Math.floor((offsetY / height) * 255);
      const b = Math.floor(255 - (offsetX / width) * 255);

      const color = `rgb(${r}, ${g}, ${b})`;
      setTempColor(color);
    }
  };

  const applyPickerColor = () => {
    setCurrentColor(tempColor);

    closeModal();
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-outer") {
      closeModal();
    }
  };

  return (
    <div className="w-full h-screen" style={{ backgroundColor: currentColor }}>
      <div className="absolute bottom-10 left-0 right-0">
        <div className=" p-3 inset-x-5 flex flex-wrap gap-2 justify-center">
          <button
            onClick={openModal}
            className="px-4 py-2 bg-gradient-to-r from-indigo-400 via-purple-700 to-pink-400 text-white  rounded-full shadow hover:bg-blue-600"
          >
            Color Picker
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          id="modal-outer"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white w-96 h-96 relative"
            onMouseMove={handleMouseMove}
            onClick={applyPickerColor}
          >
            <div
              className="absolute inset-0 flex items-center justify-center "
              style={{ backgroundColor: tempColor }}
            >
              <p
                className="text-lg font-bold px-4 py-2 rounded-lg  border-2 border-black shadow-md"
                style={{ color: getTextColor(tempColor) }}
              >
                {tempColor.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Version2;
