import { SignContainer } from "../../containers/SignContainer/SignContainer"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from "../../components/Button/Button";
import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer";

export interface LoginFormValues {
    email: string;
    password: string;
}

export const Login = () => {
    const initialValues: LoginFormValues = { email: '', password: '' };
    return (
        <LayoutContainer>
            <SignContainer
                heading="Sign In" link={{
                    name: "Need an account?",
                    path: "/register"
                }}
                handleButtonClick={() => { }}
            >
                <Formik
                    initialValues={initialValues}
                    validate={(values: LoginFormValues) => {
                        const errors: any = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }: any) => (
                        <Form className="form">
                            <Field placeholder="Email" className={"input"} type="email" name="email" />
                            <ErrorMessage className="error-label" name="email" component="div" />
                            <Field placeholder="Password" className="input" type="password" name="password" />
                            <ErrorMessage className="error-label" name="password" component="div" />
                            <Button type="submit" disabled={isSubmitting} name="Sign In" onClick={() => { }} />
                        </Form>
                    )}
                </Formik>
            </SignContainer>
        </LayoutContainer>
    )
}