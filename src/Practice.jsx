import { useEffect, useState } from "react";
import "./index.css";

const RegisterList = () => {
  const [persons, setPersons] = useState(() => {
    try {
      const savedPersons = localStorage.getItem("registeredPersons");
      return savedPersons ? JSON.parse(savedPersons) : [];
    } catch {
      return [];
    }
  });

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  // Save the list whenever it changes
  useEffect(() => {
    localStorage.setItem("registeredPersons", JSON.stringify(persons));
  }, [persons]);

  // Register a new person
  const handleFormInfo = (e) => {
    e.preventDefault();
    setError("");

    const cleanName = name.trim();
    const cleanPhone = phoneNumber.trim();
    const cleanCity = city.trim();

    if (!cleanName || !cleanPhone || !cleanCity) {
      setError("Please complete all fields.");
      return;
    }

    if (cleanPhone.length === 10) {
      setPhoneNumber();
    } else {
      setError("Phone number must contain 10 number.");
      return;
    }

    const newPerson = {
      id: crypto.randomUUID(),
      name: cleanName,
      phoneNumber: cleanPhone,
      city: cleanCity,
    };

    setPersons((prevPersons) => [...prevPersons, newPerson]);

    // Clear the form
    setName("");
    setPhoneNumber("");
    setCity("");
  };

  // Delete a person
  const handleDelete = (id) => {
    setPersons((prevPersons) =>
      prevPersons.filter((person) => person.id !== id),
    );
  };

  return (
    <div className="register-container">
      <h1>Simple Registering List</h1>

      <div className="register-card">
        <h2>Add Your Information</h2>

        <form onSubmit={handleFormInfo}>
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="city">City:</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter your city"
            id="city"
            name="city"
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>

      <div className="people-section">
        <h2>Registered People ({persons.length})</h2>

        {persons.length === 0 ? (
          <p className="empty-message">No people registered yet.</p>
        ) : (
          <div className="people-list">
            {persons.map((person, index) => (
              <div className="person-card" key={person.id}>
                <div className="person-info">
                  <h3>
                    {index + 1}. {person.name}
                  </h3>
                  <p>
                    <strong>Phone:</strong> {person.phoneNumber}
                  </p>
                  <p>
                    <strong>City:</strong> {person.city}
                  </p>
                </div>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDelete(person.id)}
                  aria-label={`Delete ${person.name}`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterList;
