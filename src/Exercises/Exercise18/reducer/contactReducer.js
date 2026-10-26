export const initialContacts = [
  {
    id: "c1",
    name: "Ahmed",
    phone: "610000000",
    email: "ahmed@example.com",
    isFavorite: false,
  },
  {
    id: "c2",
    name: "Amina",
    phone: "612222222",
    email: "amina@example.com",
    isFavorite: true,
  },
];

export function contactReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];

    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload);

    case "UPDATE_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? { ...contact, ...action.payload }
          : contact,
      );

    case "TOGGLE_FAVORITE":
      return state.map((contact) =>
        contact.id === action.payload
          ? {
              ...contact,
              isFavorite: !contact.isFavorite,
            }
          : contact,
      );

    default:
      return state;
  }
}
