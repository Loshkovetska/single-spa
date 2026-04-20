import {
  Button,
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
  Input,
  Separator,
} from "@e-commerce/ui-utils";
import { Link, useNavigate } from "react-router";
import { useForm } from "../lib/hooks/use-form";
import { signInSchema } from "../lib/schema";

type DefaultValues = { email: string; password: string };

export function SignIn() {
  const navigate = useNavigate();
  const form = useForm<DefaultValues>({
    formValues: { email: "", password: "" },
    schema: signInSchema,
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
        <h1 className="text-heading-base text-center">Sign In</h1>
        <p className="text-paragraph-base text-center">Welcome to CRM</p>
      </div>
      <div className="flex flex-col gap-4">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldContent>
            <Input
              type="email"
              name="email"
              value={form.formValues["email"]}
              onChange={form.onChange}
            />
          </FieldContent>
          {form.formState.errors?.email && (
            <FieldError errors={[{ message: form.formState.errors?.email }]} />
          )}
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <FieldContent>
            <Input
              name="password"
              type="password"
              value={form.formValues["password"]}
              onChange={form.onChange}
            />
          </FieldContent>
          {form.formState.errors?.password && (
            <FieldError
              errors={[{ message: form.formState.errors?.password }]}
            />
          )}
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
        Don't have an account{" "}
        <Link
          to="/sign-up"
          className="text-label-sm"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
