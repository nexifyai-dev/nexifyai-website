import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return redirect("/login")

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">NeXifyAI</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <form>
                <button formAction={async () => {
                  "use server"
                  await createClient().auth.signOut()
                  return redirect("/login")
                }}
                className="text-sm text-gray-600 hover:text-gray-900">
                  Abmelden
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h2>
        <p className="text-gray-600">Willkommen in deinem NeXifyAI-Arbeitsbereich. Chatten, automatisieren, bauen.</p>
      </main>
    </div>
  )
}
