import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
         <Link href="https://www.utc.edu.ec/">
         <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Universidad Tecnica de Cotopaxi
          </p>
         </Link>
          <div className="flex items-center space-x-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terminos y Condiciones
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Politica de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

