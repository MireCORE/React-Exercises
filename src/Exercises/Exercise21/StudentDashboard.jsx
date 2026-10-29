export default function StudentDashboard() {
  const stats = [
    {
      label: "Average Grade",
      value: "88%",
      icon: "📊",
    },
    {
      label: "Courses",
      value: "3",
      icon: "📚",
    },
    {
      label: "Study Hours",
      value: "45h",
      icon: "⏰",
    },
    {
      label: "Assignments",
      value: "12",
      icon: "✍️",
    },
  ];

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      nextLesson: "Components & Props",
      instructor: "Sarah Wilson",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      nextLesson: "Async/Await",
      instructor: "Mike Johnson",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      nextLesson: "Color Theory",
      instructor: "Emily Chen",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2024-03-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2024-03-25",
      status: "in-progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const statusStyles = {
    pending: "bg-rose-100 text-rose-700",
    completed: "bg-green-100 text-green-700",
    "in-progress": "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-5">
        {/* Header */}
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-sm sm:flex-row items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              Welcome back, Student!
            </h1>

            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Here's what's happening with your courses today.
            </p>
          </div>

          <div className="flex items-center justify-end gap-6">

            <span className="relative text-xl" aria-hidden="true">
              🔔
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-rose-500" />
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 font-semibold text-white">
              S
            </div>
          </div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[102px] items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">
                {stat.icon}
              </span>

              <div>
                <p className="text-sm text-slate-500">{stat.label}</p>

                <p className="mt-1 text-2xl font-bold text-slate-800">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Main Dashboard */}
        <main className="grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          {/* Course Progress */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-5 text-lg font-semibold text-slate-800">
              Course Progress
            </h2>

            <div className="space-y-4">
              {courses.map((course) => (
                <article key={course.id} className="rounded-xl bg-slate-50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-medium text-slate-800">
                      {course.name}
                    </h3>

                    <span className="text-sm text-slate-500">
                      {course.progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200"
                    role="progressbar"
                    aria-label={`${course.name} progress`}
                    aria-valuenow={course.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>Next: {course.nextLesson}</p>

                    <p>{course.instructor}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="space-y-5">
            {/* Upcoming Assignments */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Upcoming Assignments
              </h2>

              <div className="space-y-5">
                {assignments.map((assignment) => (
                  <article
                    key={assignment.id}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <h3 className="font-medium text-slate-800">
                        {assignment.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {assignment.course}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          statusStyles[assignment.status]
                        }`}
                      >
                        {assignment.status}
                      </span>

                      <time className="text-xs text-slate-500">
                        Due {assignment.dueDate}
                      </time>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Announcements */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-semibold text-slate-800">
                Announcements
              </h2>

              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <article
                    key={announcement.id}
                    className="border-l-4 border-blue-500 py-0.5 pl-4"
                  >
                    <h3 className="font-medium text-slate-800">
                      {announcement.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {announcement.message}
                    </p>

                    <time className="mt-1 block text-xs text-slate-400">
                      {announcement.time}
                    </time>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}
