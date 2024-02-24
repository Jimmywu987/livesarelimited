import { publicProcedure, router } from "@/server/trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => "hello"),
});

export type AppRouter = typeof appRouter;
