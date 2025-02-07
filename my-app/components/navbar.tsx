"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center bg-gray-400 dark:bg-black">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="bg-gray-800 text-white p-2 hover:bg-white hover:text-gray-900">
              <Link className= "bg-gray-900" href="/" legacyBehavior passHref>
                <NavigationMenuLink >Inicio</NavigationMenuLink>
              </Link>

            </NavigationMenuItem >
            <NavigationMenuItem className="bg-gray-800 text-white p-2 hover:bg-white hover:text-gray-900">
              <Link className= "bg-gray-900" href="/socios" legacyBehavior passHref>
                <NavigationMenuLink >Socios</NavigationMenuLink>
              </Link>
              
            </NavigationMenuItem >
            <NavigationMenuItem className="bg-gray-800 text-white p-2  hover:bg-white hover:text-gray-900">
            <Link href="/movimientos" legacyBehavior passHref>
                <NavigationMenuLink >Movimientos</NavigationMenuLink>
              </Link>
              
            </NavigationMenuItem>
            <NavigationMenuItem className="bg-gray-800 text-white p-2  hover:bg-white hover:text-gray-900">
              <Link href="/asistencias" legacyBehavior passHref>
                <NavigationMenuLink>Asistencias</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="bg-gray-800 text-white p-2  hover:bg-white hover:text-gray-900">           
                  <Link href="/reuniones" legacyBehavior passHref>
                <NavigationMenuLink>Reuniones</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="hidden md:inline-flex">
              Login
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium">
                  Inicio
                </Link>
                <Link href="/asistencias" className="text-sm font-medium">
                  Asistencia
                </Link>
                <Link href="/movimientos" className="text-sm font-medium">
                  Movimientos
                </Link>
                <Link href="/socios" className="text-sm font-medium">
                  socios
                </Link>
                <Link href="/reuniones" className="text-sm font-medium">
                  Reuniones
                </Link>
                <Button className="w-full">Login</Button>
                
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


