// Importing necessary modules from Next.js and other components
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Defining the Navbar component
export const Navbar = () => {
  return (
    // Container for the fixed navbar
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      {/* Container for content within the navbar */}
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* Logo component */}
        <Logo />
        {/* Container for buttons */}
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {/* Login button */}
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          {/* Sign-up button */}
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
