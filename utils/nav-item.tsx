"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavItem() {
  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList className="flex-wrap bg-transparent">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}
          >
            <Link href="/">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuLink
            asChild
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}
          >
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
      
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-transparent shadow-none">
            <ul className="grid w-[200px] gap-4">
              <li className="space-y-2">
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <CircleHelpIcon className="w-4 h-4" />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <CircleIcon className="w-4 h-4" />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <CircleCheckIcon className="w-4 h-4" />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
