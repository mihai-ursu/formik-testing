import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Formik, Form, Field } from "formik";
import formFields from "data/form.json";
import validate from "helper/validate";
import getInitialFormValues from "helper/getInitialFormValues";

export default function Home() {
  const initialValues = getInitialFormValues(formFields);

  return (
    <>
      <Head>
        <title>Formik Form</title>
        <meta name="description" content="Testing the Formik forms library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Formik
          initialValues={initialValues}
          validate={validate(formFields)}
          onSubmit={(values, actions) => {
            // Perform submit logic here
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {formFields.map((field) => (
                <div key={field.name} className="form-field-container">
                  <Field
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`${styles.formField} ${
                      errors[field.name] && styles.formFieldError
                    }`}
                  />
                  {errors[field.name] && (
                    <div className="form-error">{errors[field.name]}</div>
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
}
