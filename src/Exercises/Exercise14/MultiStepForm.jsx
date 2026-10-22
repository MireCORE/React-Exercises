import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SUBMIT":
      return initialState;

    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Submitted form data:", {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
    });

    dispatch({ type: "SUBMIT" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step {state.step} of 3</h2>

      {state.step === 1 && (
        <div>
          <h3>Personal Information</h3>

          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />

          <button type="button" onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Contact Information</h3>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          >
            Previous
          </button>

          <button type="button" onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Confirm
          </button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Confirm Your Information</h3>

          <p>
            <strong>First Name:</strong> {state.firstName || "Not provided"}
          </p>

          <p>
            <strong>Last Name:</strong> {state.lastName || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong> {state.email || "Not provided"}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone || "Not provided"}
          </p>

          <button
            type="button"
            onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          >
            Previous
          </button>

          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default MultiStepForm;
