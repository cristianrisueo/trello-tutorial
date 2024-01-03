import { authMiddleware } from "@clerk/nextjs"

// Protects all the routes except the lading page
export default authMiddleware({
  publicRoutes: ["/"],
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

