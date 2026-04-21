export const emailSchema = {
  reg: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  errorMessage: "Invalid email address",
};

export const passwordSchema = {
  reg: /^.{6,}$/,
  errorMessage: "Invalid password",
};

export const fnameSchema = {
  reg: /^\w{2,50}$/i,
  errorMessage: "Invalid format",
};

export const signInSchema = {
  email: emailSchema,
  password: passwordSchema,
};

export const signUpSchema = {
  fname: fnameSchema,
  ...signInSchema,
};
