const validate =
  (formFields: { [key: string]: string | boolean | undefined }[]) =>
  (values: { [key: string]: string }) => {
    const errors = {} as { [key: string]: string };

    formFields.forEach((field) => {
      const regex = new RegExp(field?.regex as string);

      if (field.required && !values[field.name as string]) {
        errors[field.name as string] = `${field.label} is required`;
      } else if (regex && !regex.test(values[field.name as string])) {
        errors[field.name as string] = `Invalid ${field.label}`;
      }
    });

    return errors;
  };

export default validate;
