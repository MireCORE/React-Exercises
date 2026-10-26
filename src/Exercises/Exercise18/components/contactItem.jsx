import { useContext, useState } from "react";

import { ContactContext } from "../context/contactContext";

export default function ContactItem({ contact }) {
  const { dispatch } = useContext(ContactContext);

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
  });

  function startEditing() {
    setForm({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    });

    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function saveEdit(event) {
    event.preventDefault();

    dispatch({
      type: "UPDATE_CONTACT",
      payload: {
        ...form,
        id: contact.id,
      },
    });

    setIsEditing(false);
  }

  function deleteContact() {
    dispatch({
      type: "DELETE_CONTACT",
      payload: contact.id,
    });
  }

  function toggleFavorite() {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: contact.id,
    });
  }

  return (
    <article>
      {isEditing ? (
        <form onSubmit={saveEdit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <button type="submit">Update</button>

          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <h2>
            {contact.name}
            {contact.isFavorite && " ★"}
          </h2>

          <p>{contact.phone}</p>
          <p>{contact.email}</p>

          <button onClick={toggleFavorite}>
            {contact.isFavorite ? "Unfavorite" : "Favorite"}
          </button>

          <button onClick={startEditing}>Edit</button>

          <button onClick={deleteContact}>Delete</button>
        </div>
      )}
    </article>
  );
}
