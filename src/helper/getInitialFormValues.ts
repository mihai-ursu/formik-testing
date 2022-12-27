const getInitialFormValues = (
  formFields: { [key: string]: string | boolean | undefined }[]
): {
  [key: string]: string;
} => {
  const initialValues = formFields.reduce<{ [key: string]: string }>(
    (acc, field) => {
      acc[field.name as string] = "";
      return acc;
    },
    {}
  );

  return initialValues;
};

export default getInitialFormValues;
