import z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().min(1).max(300),
  accountId: z.number().nonnegative().min(1),
})

export const CommentValidation = z.object({
  thread: z.string().min(1).max(300),
  // accountId: z.number().nonnegative().min(1),
})