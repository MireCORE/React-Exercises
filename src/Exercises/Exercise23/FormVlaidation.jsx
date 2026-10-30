import { useState } from "react";

const initialFormData = {
  fullName: "",
  email: "",
  role: "",
  experience: "",
  skills: [],
  acceptedTerms: false,
  notifications: false,
};

const roleOptions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const skillOptions = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  "UI Design",
  "API Development",
];

// Validate all fields
function validateForm(formData) {
  const errors = {};

  // Full Name
  const name = formData.fullName.trim();

  if (!name) {
    errors.fullName = "Full name is required";
  } else if (/\d/.test(name)) {
    errors.fullName = "Numbers are not allowed in the name";
  } else if (!/^[\p{L}\p{M}\s'-]+$/u.test(name)) {
    errors.fullName = "Use letters, spaces, hyphens or apostrophes only";
  } else if ((name.match(/\p{L}/gu) || []).length < 2) {
    errors.fullName = "Full name must contain at least 2 letters";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Role
  if (!formData.role) {
    errors.role = "Please select a role";
  }

  // Years of Experience
  // Years of Experience
  if (formData.experience === "") {
    errors.experience = "Experience is required";
  } else if (
    !Number.isInteger(Number(formData.experience)) ||
    Number(formData.experience) < 1 ||
    Number(formData.experience) > 50
  ) {
    errors.experience = "Experience must be between 1 and 50 years";
  }

  // Skills
  if (formData.skills.length === 0) {
    errors.skills = "Please select at least one skill";
  }

  // Terms and Conditions
  if (!formData.acceptedTerms) {
    errors.acceptedTerms = "You must agree to the terms";
  }

  return errors;
}

// Show errors only for touched fields or after Submit
function getVisibleErrors(formData, touched, hasSubmitted) {
  const allErrors = validateForm(formData);

  return Object.fromEntries(
    Object.entries(allErrors).filter(
      ([field]) => hasSubmitted || touched[field],
    ),
  );
}

export default function DeveloperApplicationForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Shared styles
  const inputClass = (hasError) =>
    `w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-800
    outline-none transition focus:ring-2 ${
      hasError
        ? "border-red-400 focus:ring-red-100"
        : "border-slate-300 focus:border-rose-500 focus:ring-rose-100"
    }`;

  const errorClass = "mt-2 text-xs leading-4 text-red-500";

  // Update text inputs, select and ordinary checkboxes
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    const nextValue = type === "checkbox" ? checked : value;

    const nextFormData = {
      ...formData,
      [name]: nextValue,
    };

    const nextTouched = {
      ...touched,
      [name]: true,
    };

    setFormData(nextFormData);
    setTouched(nextTouched);

    setErrors(getVisibleErrors(nextFormData, nextTouched, hasSubmitted));

    setSubmittedData(null);
  }

  // Validate a field when the user leaves it
  function handleBlur(name) {
    const nextTouched = {
      ...touched,
      [name]: true,
    };

    setTouched(nextTouched);

    setErrors(getVisibleErrors(formData, nextTouched, hasSubmitted));
  }

  // Add or remove a skill
  function handleSkillChange(skill) {
    const nextSkills = formData.skills.includes(skill)
      ? formData.skills.filter((item) => item !== skill)
      : [...formData.skills, skill];

    const nextFormData = {
      ...formData,
      skills: nextSkills,
    };

    const nextTouched = {
      ...touched,
      skills: true,
    };

    setFormData(nextFormData);
    setTouched(nextTouched);

    setErrors(getVisibleErrors(nextFormData, nextTouched, hasSubmitted));

    setSubmittedData(null);
  }

  // Submit and validate the whole form
  function handleSubmit(event) {
    event.preventDefault();

    setHasSubmitted(true);

    const allTouched = {
      fullName: true,
      email: true,
      role: true,
      experience: true,
      skills: true,
      acceptedTerms: true,
    };

    setTouched(allTouched);

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedData(null);
      return;
    }

    setSubmittedData({
      ...formData,
      skills: [...formData.skills],
    });
  }

  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-4 sm:py-6">
      <div className="mx-auto w-full max-w-[405px] rounded-xl border border-slate-200 bg-white px-7 py-7 shadow-lg">
        <h1 className="mb-7 text-center text-[21px] font-semibold leading-7 text-slate-900">
          Developer Application Form
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur("fullName")}
                className={inputClass(Boolean(errors.fullName))}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
              />

              {errors.fullName && (
                <p
                  id="fullName-error"
                  className={errorClass}
                  aria-live="polite"
                >
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={inputClass(Boolean(errors.email))}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />

              {errors.email && (
                <p id="email-error" className={errorClass} aria-live="polite">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Role
              </label>

              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                onBlur={() => handleBlur("role")}
                className={inputClass(Boolean(errors.role))}
                aria-invalid={Boolean(errors.role)}
                aria-describedby={errors.role ? "role-error" : undefined}
              >
                <option value="">Select a role</option>

                {roleOptions.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              {errors.role && (
                <p id="role-error" className={errorClass} aria-live="polite">
                  {errors.role}
                </p>
              )}
            </div>

            {/* Years of Experience */}
            <div>
              <label
                htmlFor="experience"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Years of Experience
              </label>

              <input
                id="experience"
                name="experience"
                type="number"
                min="0"
                step="1"
                value={formData.experience}
                onChange={handleChange}
                onBlur={() => handleBlur("experience")}
                className={inputClass(Boolean(errors.experience))}
                aria-invalid={Boolean(errors.experience)}
                aria-describedby={
                  errors.experience ? "experience-error" : undefined
                }
              />

              {errors.experience && (
                <p
                  id="experience-error"
                  className={errorClass}
                  aria-live="polite"
                >
                  {errors.experience}
                </p>
              )}
            </div>

            {/* Skills */}
            <fieldset>
              <legend className="mb-3 text-xs font-medium text-slate-700">
                Skills
              </legend>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {skillOptions.map((skill) => (
                  <label
                    key={skill}
                    className="flex cursor-pointer items-center gap-2 text-xs text-slate-700"
                  >
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleSkillChange(skill)}
                      className="h-3.5 w-3.5 shrink-0 accent-rose-600"
                    />

                    <span>{skill}</span>
                  </label>
                ))}
              </div>

              {errors.skills && (
                <p className={errorClass} aria-live="polite">
                  {errors.skills}
                </p>
              )}
            </fieldset>

            {/* Terms and Conditions */}
            <div className="pt-1">
              <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-slate-700">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  onBlur={() => handleBlur("acceptedTerms")}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-rose-600"
                  aria-invalid={Boolean(errors.acceptedTerms)}
                  aria-describedby={
                    errors.acceptedTerms ? "terms-error" : undefined
                  }
                />

                <span>I agree to the terms and conditions</span>
              </label>

              {errors.acceptedTerms && (
                <p id="terms-error" className={errorClass} aria-live="polite">
                  {errors.acceptedTerms}
                </p>
              )}
            </div>

            {/* Optional Notifications */}
            <div className="pt-1">
              <label className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-slate-700">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-rose-600"
                />

                <span>Receive notifications about new opportunities</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl border-2 border-white bg-rose-600 py-2.5 text-sm font-semibold text-white ring-2 ring-rose-500 transition hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200"
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Successful Submission */}
        {submittedData && (
          <section
            aria-live="polite"
            className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4"
          >
            <h2 className="text-sm font-semibold text-green-800">
              Application Submitted Successfully
            </h2>

            <div className="mt-3 space-y-2 text-xs text-slate-700">
              <p>
                <strong>Full Name:</strong> {submittedData.fullName}
              </p>

              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>

              <p>
                <strong>Role:</strong> {submittedData.role}
              </p>

              <p>
                <strong>Experience:</strong> {submittedData.experience} years
              </p>

              <p>
                <strong>Skills:</strong> {submittedData.skills.join(", ")}
              </p>

              <p>
                <strong>Accepted Terms:</strong>{" "}
                {submittedData.acceptedTerms ? "Yes" : "No"}
              </p>

              <p>
                <strong>Notifications:</strong>{" "}
                {submittedData.notifications ? "Yes" : "No"}
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
