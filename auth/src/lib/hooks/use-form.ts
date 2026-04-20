import { useRef, useState } from "react";

type UseFormParams<T> = {
  formValues: T;
  schema: Record<string, { reg: RegExp; errorMessage: string }>;
};

type FormType<T> = {
  formValues: T;
  formState: {
    isValid: boolean;
    isTouched: boolean;
    errors?: Record<string, string>;
  };
};

export function useForm<T>(params: UseFormParams<T>) {
  const schema = useRef(params.schema);
  const [form, setForm] = useState<FormType<T>>({
    formValues: params.formValues,
    formState: {
      isValid: false,
      isTouched: false,
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errors = {};
    const currentSchema = schema.current[e.target.type];
    if (currentSchema.reg?.test(e.target.value)) {
      errors[e.target.name] = currentSchema.errorMessage;
    }
    setForm((prev) => {
      const formValues = {
        ...prev.formValues,
        [e.target.name]: e.target.value,
      };
      const noErrors = !Object.keys({
        ...prev.formState.errors,
        ...errors,
      }).length;

      return {
        ...prev,
        formValues,
        formState: {
          ...prev.formState,
          isTouched: true,
          isValid:
            noErrors &&
            Object.values(formValues).filter((c) => c.length).length ===
              Object.values(formValues).length,
          errors: !noErrors ? errors : undefined,
        },
      } as FormType<T>;
    });
  };
  const handleSubmit =
    (callback: (values: T) => void) =>
    (
      e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>,
    ) => {
      e.preventDefault();
      const { formValues } = form;
      callback(formValues);
    };

  return { handleSubmit, onChange, ...form };
}
