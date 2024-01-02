// Importing necessary modules from Next.js and other components
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Defining the Footer component
export const Footer = () => {
  return (
    // Container for the fixed navbar
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      {/* Container for content within the navbar */}
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        {/* Logo component */}
        <Logo />
        {/* Container for buttons */}
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {/* Privacy policy button */}
          <Button size="sm" variant="ghost">
            Privacy policy
          </Button>
          {/* Terms of service button */}
          <Button size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  )
}
