import { useContext, useState } from "react";

import { ContactContext } from "../context/contactContext";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
};

export default function ContactForm() {
  const { dispatch } = useContext(ContactContext);

  const [form, setForm] = useState(emptyForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      return;
    }

    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id: crypto.randomUUID(),
        ...form,
        isFavorite: false,
      },
    });

    setForm(emptyForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
}
