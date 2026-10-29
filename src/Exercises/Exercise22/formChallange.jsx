import { useState } from "react";

export default function FormChallenge() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    accepted: false,
    role: "Student",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData({ ...formData });
  }

  return (
    <>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="accepted">
            <input
              id="accepted"
              name="accepted"
              type="checkbox"
              checked={formData.accepted}
              onChange={handleChange}
            />
            I accept the terms
          </label>
        </div>

        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData !== null && (
        <section>
          <h2>Submitted Data</h2>

          <p>Username: {submittedData.username}</p>

          <p>Email: {submittedData.email}</p>

          <p>Role: {submittedData.role}</p>

          <p>Accepted terms: {submittedData.accepted ? "Yes" : "No"}</p>
        </section>
      )}
    </>
  );
}
