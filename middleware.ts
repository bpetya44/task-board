import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ['/'],
    afterAuth(auth, req) {
        //if user is signed in and is trying to access a public route
        if (auth.userId && auth.isPublicRoute) {
            let path = '/select-org';

            if (auth.orgId) {
                path = `/organizations/ ${auth.orgId}`;

            }

            const orgSelection = new URL(path, req.url);

            return NextResponse.redirect(orgSelection);
        }

        //if user is not signed in and is trying to access a protected route
        if (!auth.userId && !auth.isPublicRoute) {
            // Redirect to sign in page with the return URL set to the current URL the user is trying to access
            return redirectToSignIn({ returnBackUrl: req.url });
        }

        //if user is authenticated and don't have an organization selected and is not trying to access the organization selection page
        if (auth.userId && !auth.orgId && req.nextUrl.pathname !== '/select-org') {
            const orgSelection = new URL('/select-org', req.url);
            return NextResponse.redirect(orgSelection);
        }
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};