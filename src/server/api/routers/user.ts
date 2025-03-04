import { currentUser } from "@clerk/nextjs/server";
import { registrationSchema } from "@/types/registration";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(registrationSchema)
    .mutation(async ({ ctx, input }) => {
      const result = registrationSchema.safeParse(input);
      let zodErrors = {};
      if (!result.success) {
        result.error.issues.forEach((issue) => {
          zodErrors = { ...zodErrors, [String(issue.path[0])]: issue.message };
        });
      }

      if (Object.keys(zodErrors).length > 0) {
        return { errors: zodErrors };
      } else if (!result.success) {
        return { errors: `raw result: ${result}` };
      }

      console.log("input: ", input);

      const currentUserDetails = await currentUser().catch((error) => {
        console.log("error: ", error);
      });
      if (!currentUserDetails?.emailAddresses[0]?.emailAddress) {
        return new Error("No email address found");
      }
      console.log("user: ", currentUserDetails);

      // Function to create user profile
      const addUser = async () => {
        const newUser = await ctx.db.user
          .create({
            data: {
              accountId: input.accountId,
              lastName: input.lastName,
              firstName: input.firstName,
              clerkId: currentUserDetails.id,
              email: currentUserDetails.emailAddresses[0]!.emailAddress,
            },
          })
          .catch((error) => {
            console.log("error: ", error);
            return new Error(error);
          });

        return newUser;
      };

      // Add user and default tasks
      const createdUser = await addUser();

      if (createdUser instanceof Error) {
        return createdUser;
      }

      console.log("user.id: ", createdUser.id);
      return { user: createdUser };
    }),
});
