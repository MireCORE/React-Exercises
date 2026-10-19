import { useState } from "react";

const DateFetch = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (inputValue.trim() === "") {
      setError("Please enter a username");
      setUser(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setUser(null);

      const response = await fetch(
        `https://api.github.com/users/${inputValue.trim()}`,
      );

      if (!response.ok) {
        throw new Error("This user does not exist");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter a Username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.login}</h2>
          <p>Name: {user.name || "Not provided"}</p>
          <p>Public repositories: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default DateFetch;
