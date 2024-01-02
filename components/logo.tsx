// Importing necessary modules from Next.js and other libraries
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

// Loading custom font for the component
const headingFont = localFont({
  src: "../public/fonts/font.woff2",
})

// Defining the Logo component
export const Logo = () => {
  return (
    // Link wrapped around the logo and text
    <Link href="/">
      {/* Container for logo and text */}
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        {/* Logo image */}
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        {/* Text */}
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  )
}
