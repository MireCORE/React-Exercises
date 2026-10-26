import { createContext, useReducer } from "react";

import { contactReducer, initialContacts } from "../reducer/contactReducer";

export const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [contacts, dispatch] = useReducer(contactReducer, initialContacts);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}
