import React, { useContext } from "react";
import languageContext from "./LanguageContext";

const LanguageComponent = () => {
  const Language = useContext(languageContext);
  return <h1>{Language === "English" ? "Hello!" : "Hola!"}</h1>;
};

export default LanguageComponent;
