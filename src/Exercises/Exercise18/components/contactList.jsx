import { useContext } from "react";

import { ContactContext } from "../context/contactContext";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const { contacts } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <p>No contacts yet.</p>;
  }

  return (
    <section>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </section>
  );
}
