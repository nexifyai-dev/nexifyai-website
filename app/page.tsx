export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          NeXifyAI
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600">
          chat it. automate it.
        </p>
        <p className="mt-4 text-base leading-7 text-gray-500">
          An AI-powered automation platform that lets you chat your way to
          productivity.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get Started
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
