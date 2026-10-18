import { useEffect, useState } from "react";

const ChangingTitle = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Asc");

  useEffect(() => {
    if (name.trim() === "") {
      document.title = "welcome";
    } else {
      document.title = `${greeting.trim()} ${name.trim()}`;
    }
  }, [name, greeting]);

  return (
    <div>
      <h1>Enter Your Name: </h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Choose Greeting: </h2>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
    </div>
  );
};

export default ChangingTitle;
