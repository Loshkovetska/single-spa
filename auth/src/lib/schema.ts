export const emailSchema = {
  reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  errorMessage: "Invalid email address",
};

export const passwordSchema = {
  reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
  errorMessage: "Invalid password",
};

export const fnameSchema = {
  reg: /^[\p{L} '.-]{2,50}$/u,
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
