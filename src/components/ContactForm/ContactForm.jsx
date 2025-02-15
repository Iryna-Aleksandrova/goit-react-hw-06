import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(onlyLetters, "Only letters")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),

  number: Yup.string()
    .matches(/^\+?[0-9\s\-()]*$/, "Invalid phone number")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Phone number is required"),
});

const ContactForm = ({ onAdd }) => {
  const contactId = useId();
  const phoneId = useId();
  const handelSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(4),
    });
    actions.resetForm();
  };
  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.div}>
            <label htmlFor={contactId} className={s.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              className={s.input}
              id={contactId}
            ></Field>
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.div}>
            <label htmlFor={phoneId} className={s.label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              className={s.input}
              id={phoneId}
            ></Field>
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
