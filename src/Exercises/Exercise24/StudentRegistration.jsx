import { useState } from "react";
import { useForm } from "react-hook-form";

const gradeOptions = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const subjectOptions = ["Mathematics", "Science", "English"];

export default function StudentRegistrationForm() {
  const [registeredStudent, setRegisteredStudent] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      studentName: "",
      email: "",
      gradeLevel: "",
      subjects: [],
    },
  });

  // Register student
  function onSubmit(data) {
    setRegisteredStudent(data);
  }

  // Input styles
  const inputClass = (hasError) =>
    `w-full rounded-md border px-3 py-3 text-base
    outline-none transition
    ${
      hasError
        ? "border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-slate-800 focus:border-blue-600"
    }`;

  // Error message styles
  const errorClass = "mt-2 text-sm text-red-500";

  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-[560px] rounded-xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-8 text-3xl font-bold text-black">
          Student Registration
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6"
        >
          {/* Student Name */}
          <div>
            <label
              htmlFor="studentName"
              className="mb-2 block text-base font-medium text-black"
            >
              Student Name
            </label>

            <input
              id="studentName"
              type="text"
              {...register("studentName", {
                required: "Name is required",

                validate: (value) => {
                  const name = value.trim();

                  if (!name) {
                    return "Name is required";
                  }

                  if (/\d/.test(name)) {
                    return "Numbers are not allowed";
                  }

                  if (name.length < 2) {
                    return "Name must contain at least 2 characters";
                  }

                  if (!/^[\p{L}\p{M}\s'-]+$/u.test(name)) {
                    return "Only letters, spaces, hyphens and apostrophes are allowed";
                  }

                  return true;
                },
              })}
              className={inputClass(Boolean(errors.studentName))}
              aria-invalid={Boolean(errors.studentName)}
              aria-describedby={errors.studentName ? "name-error" : undefined}
            />

            {errors.studentName && (
              <p id="name-error" className={errorClass} role="alert">
                {errors.studentName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-base font-medium text-black"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              className={inputClass(Boolean(errors.email))}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />

            {errors.email && (
              <p id="email-error" className={errorClass} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Grade Level */}
          <div>
            <label
              htmlFor="gradeLevel"
              className="mb-2 block text-base font-medium text-black"
            >
              Grade Level
            </label>

            <select
              id="gradeLevel"
              {...register("gradeLevel", {
                required: "Please select a grade",
              })}
              className={inputClass(Boolean(errors.gradeLevel))}
              aria-invalid={Boolean(errors.gradeLevel)}
              aria-describedby={errors.gradeLevel ? "grade-error" : undefined}
            >
              <option value="">Select Grade</option>

              {gradeOptions.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>

            {errors.gradeLevel && (
              <p id="grade-error" className={errorClass} role="alert">
                {errors.gradeLevel.message}
              </p>
            )}
          </div>

          {/* Subjects Interest */}
          <fieldset>
            <legend className="mb-3 text-base font-medium text-black">
              Subjects Interest
            </legend>

            <div className="space-y-3">
              {subjectOptions.map((subject) => (
                <label
                  key={subject}
                  className="flex cursor-pointer items-center gap-3 text-base text-slate-800"
                >
                  <input
                    type="checkbox"
                    value={subject}
                    {...register("subjects", {
                      validate: (values) =>
                        values.length > 0 || "Select at least one subject",
                    })}
                    className="h-4 w-4 accent-blue-600"
                  />

                  {subject}
                </label>
              ))}
            </div>

            {errors.subjects && (
              <p className={errorClass} role="alert">
                {errors.subjects.message}
              </p>
            )}
          </fieldset>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-rose-600 py-3 text-lg font-semibold text-white transition hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200"
          >
            Register
          </button>
        </form>

        {/* Successful Registration */}
        {registeredStudent && (
          <section
            aria-live="polite"
            className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4"
          >
            <h2 className="mb-3 text-lg font-semibold text-green-700">
              Registration Successful!
            </h2>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <strong>Student Name:</strong> {registeredStudent.studentName}
              </p>

              <p>
                <strong>Email:</strong> {registeredStudent.email}
              </p>

              <p>
                <strong>Grade:</strong> {registeredStudent.gradeLevel}
              </p>

              <p>
                <strong>Subjects:</strong>{" "}
                {registeredStudent.subjects.join(", ")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                reset();
                setRegisteredStudent(null);
              }}
              className="mt-4 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Register Another Student
            </button>
          </section>
        )}
      </div>
    </main>
  );
}
