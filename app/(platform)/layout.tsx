import { ClerkProvider } from "@clerk/nextjs"

// Layout for the Platform section of the app
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClerkProvider>{children}</ClerkProvider>
}
