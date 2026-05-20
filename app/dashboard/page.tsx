import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return redirect("/login")

  // Weiterleitung zur NeXify AI Workstation
  return redirect("https://nexifyai.vercel.app")
}
