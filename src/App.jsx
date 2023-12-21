import "./App.css";
import { useState } from "react";

function App() {
  let [changeLang, setLang] = useState("Greeting Message");
  const handleLangTH = () => {
    setLang((changeLang = "สวัสดี!"));
  };
  const handleLangEN = () => {
    setLang((changeLang = "Hi!"));
  };
  const handleLangCN = () => {
    setLang((changeLang = "你好!"));
  };
  return (
    <div className="App">
      <div className="greeting-container">{changeLang}</div>
      <div className="buttons">
        <button onClick={handleLangTH}>สวัสดี!</button>
        <button onClick={handleLangEN}>Hi!</button>
        <button onClick={handleLangCN}>你好!</button>
      </div>
    </div>
  );
}

export default App;
