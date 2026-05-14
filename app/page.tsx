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
          Die KI-gestützte Automatisierungsplattform — chatte dich zur Produktivität.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/signup"
            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Jetzt starten
          </a>
          <a
            href="#features"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
          >
            Mehr erfahren <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
