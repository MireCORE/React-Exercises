import React, { useState } from "react";
import languageContext from "./LanguageContext";
import LanguageComponent from "./LanguageComponent";

function App() {
  const [language, setLanguage] = useState("English");

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Spanish" : "English"));
  };

  return (
    <languageContext.Provider value={language}>
      <button onClick={handleLanguage}>
        Switch to {language === "English" ? "Spanish" : "English"}
      </button>

      <LanguageComponent />
    </languageContext.Provider>
  );
}

export default App;
