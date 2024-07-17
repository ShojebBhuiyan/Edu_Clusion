import { z } from "zod";

export const SubscriptionSchema = z.object({
  email: z.string().email(),
});
