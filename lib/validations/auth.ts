import z from "zod";

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

export const SignUpValidation = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(16),
    confirmPassword: z.string().min(6).max(16),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword === password) {
      return true;
    }
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The passwords did not match",
      path: ["confirmPassword"],
    });
  });
