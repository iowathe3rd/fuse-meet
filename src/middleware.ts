import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/favicon.ico"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
