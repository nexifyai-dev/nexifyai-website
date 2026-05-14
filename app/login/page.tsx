import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message?: string }
}) {
  const signIn = async (formData: FormData) => {
    "use server"
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return redirect("/login?message=Ungültige Anmeldedaten")
    return redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-8">Bei NeXifyAI anmelden</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
            <input id="email" name="email" type="email" required
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passwort</label>
            <input id="password" name="password" type="password" required
              className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
          {searchParams.message && (
            <p className="text-sm text-red-600 bg-red-50 p-2 rounded">{searchParams.message}</p>
          )}
          <button formAction={signIn}
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
            Anmelden
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Noch kein Konto?{" "}
          <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Registrieren</a>
        </p>
      </div>
    </div>
  )
}
