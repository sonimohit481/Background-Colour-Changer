import { useState } from "react";
import Version2 from "./screens/Version2";
import { Header } from "./compnents";
import Version1 from "./screens/Version1";

const App = () => {
  const [isBasic, setIsBasic] = useState(false);
  return (
    <div>
      <Header isBasic={isBasic} setIsBasic={setIsBasic} />
      {isBasic ? <Version1 /> : <Version2 />}
    </div>
  );
};

export default App;
