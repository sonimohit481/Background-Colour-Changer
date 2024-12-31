import { useState } from "react";
import Version2 from "./screens/Version2";
import { Header } from "./compnents";
import Version1 from "./screens/Version1";

const App = () => {
  const [isBasic, setIsBasic] = useState(false);
  const [currentColor, setCurrentColor] = useState<string>("#fafafa");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: currentColor }}>
      <Header isBasic={isBasic} setIsBasic={setIsBasic} />
      {isBasic ? (
        <Version1
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      ) : (
        <Version2
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      )}
    </div>
  );
};

export default App;
