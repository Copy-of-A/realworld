import { ErrorMessage, Field } from "formik";
import { FormContainer } from "../../containers/FormContainer/FormContainer";
import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer"
import { SignContainer } from "../../containers/SignContainer/SignContainer"
import { LoginFormValues } from "../Login/Login";

export interface RegisterFormValues extends LoginFormValues {
    username: string;
}

export const Register = () => {
    const initialValues: RegisterFormValues = { username: '', email: '', password: '' };
    const validateForm = (values: RegisterFormValues) => {
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
        
        if (values.username === "") {
            errors.username = 'Required';
        }
        return errors;
    }
    return (
        <LayoutContainer>
            <SignContainer
                heading="Sign Up" link={{
                    name: "Have an account?",
                    path: "/login"
                }}
            >
                <FormContainer buttonName="Sign Up" initialValues={initialValues} validateForm={validateForm}>
                    <Field placeholder="Username" className="input" type="text" name="username" />
                    <ErrorMessage className="error-label" name="username" component="div" />
                    <Field placeholder="Email" className="input" type="email" name="email" />
                    <ErrorMessage className="error-label" name="email" component="div" />
                    <Field placeholder="Password" className="input" type="password" name="password" />
                    <ErrorMessage className="error-label" name="password" component="div" />
                </FormContainer>
            </SignContainer>
        </LayoutContainer>
    )
}