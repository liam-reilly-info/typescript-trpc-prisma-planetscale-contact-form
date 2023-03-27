import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactSubmissionsRouter = createTRPCRouter({
  add: publicProcedure
  .input(z.object({ 
    name: z.string().min(1).max(255),
    email: z.string().min(1).max(255),
    phone: z.string().min(1).max(255),
    message: z.string().min(1).max(255)}))
  .mutation(async ({ ctx, input }) => {
     await ctx.prisma.submissions.create({
        data: input
    });
  }),
  getAll: publicProcedure
    .query(({ ctx }) => {
        return ctx.prisma.submissions.findMany();
    })
});
