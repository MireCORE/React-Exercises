import { ContactProvider } from "./Exercises/Exercise18/context/contactContext";

import ContactForm from "./Exercises/Exercise18/components/contactForm";
import ContactList from "./Exercises/Exercise18/components/contactList";

export default function App() {
  return (
    <ContactProvider>
      <main>
        <h1>ContactApp</h1>

        <ContactForm />

        <ContactList />
      </main>
    </ContactProvider>
  );
}
