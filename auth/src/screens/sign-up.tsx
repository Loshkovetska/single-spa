import {
  Button,
  Field,
  FieldContent,
  FieldLabel,
  Input,
  Separator,
} from "@e-commerce/ui-utils";
import { Link, useNavigate } from "react-router";
import { useForm } from "../lib/hooks/use-form";
import { signUpSchema } from "../lib/schema";

type DefaultValues = {
  fname: string;
  email: string;
  password: string;
};

export function SignUp() {
  const navigate = useNavigate();

  const form = useForm<DefaultValues>({
    formValues: {
      fname: "",
      email: "",
      password: "",
    },
    schema: signUpSchema,
  });

  const onSubmit = (values: DefaultValues) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/");
  };
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-heading-base text-center">Sign Up</h1>
        <p className="text-paragraph-base text-center">Welcome to CRM</p>
      </div>
      <div className="flex flex-col gap-4">
        <Field>
          <FieldLabel>Full Name</FieldLabel>
          <FieldContent>
            <Input
              name="fname"
              value={form.formValues.fname}
              onChange={form.onChange}
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldContent>
            <Input
              type="email"
              name="email"
              value={form.formValues.email}
              onChange={form.onChange}
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <FieldContent>
            <Input
              type="password"
              name="password"
              value={form.formValues.password}
              onChange={form.onChange}
            />
          </FieldContent>
        </Field>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={!form.formState.isValid}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        Sign In
      </Button>
      <Separator className="h-px" />
      <p className="text-paragraph-sm text-center">
        Already have an account{" "}
        <Link
          to="/sign-in"
          className="text-label-sm"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}
