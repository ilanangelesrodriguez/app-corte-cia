"use client"

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar"
import { Link } from "@heroui/link"
import NextLink from "next/link"
import clsx from "clsx"
import { ThemeSwitch } from "@/components/theme-switch"
import { LoginButton } from "@/components/buttons/loginButton"
import { Logo } from "@/components/icons"
import { siteConfig } from "@/config/site"

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      className="fixed top-0 w-full bg-background/60 backdrop-blur-md border-b border-white/10 z-50"
    >
      {/* Left Navigation */}
      <NavbarContent className="hidden lg:flex basis-1/3" justify="start">
        <ul className="flex gap-8">
          {siteConfig.leftNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-default-600 hover:text-primary transition-colors duration-200",
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Center Logo */}
      <NavbarContent className="basis-1/3" justify="center">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo className="text-primary" />
            <p className="font-bold text-xl">Corte & Cía</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Right Navigation */}
      <NavbarContent className="hidden lg:flex basis-1/3" justify="end">
        <NavbarItem className="flex gap-8 items-center">
          {siteConfig.rightNavItems.map((item) => (
            <NextLink
              key={item.href}
              className={clsx(
                "text-default-600 hover:text-primary transition-colors duration-200",
                "data-[active=true]:text-primary data-[active=true]:font-medium",
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          ))}
          <ThemeSwitch />
          <LoginButton />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/80 backdrop-blur-md mt-2">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[...siteConfig.leftNavItems, ...siteConfig.rightNavItems].map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className="text-default-600 hover:text-primary transition-colors w-full text-lg"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <LoginButton mobile />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}

