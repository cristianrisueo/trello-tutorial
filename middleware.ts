import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import { NextResponse } from "next/server"

// Protects all the routes except the lading page
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    //? If we are logged in and in the landing page
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org" // If we haven't an organization chosen

      if (auth.orgId) {
        path = `/organization/${auth.orgId}` // I we already have an organization chosen
      }

      //  Creates the Url and returns it
      const orgSelection = new URL(path, req.url)
      return NextResponse.redirect(orgSelection)
    }

    //?  If we're not authenticated and in the landing page
    if (!auth.userId && !auth.isPublicRoute) {
      // Come back to loggin but if they log come back to the original url
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    //?  If the user is authenticated, doesn't have any org selected and is outside the page to select one
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url)
      return NextResponse.redirect(orgSelection)
    }
  }, // This is the sessions control. Controls 3 scenarios
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
