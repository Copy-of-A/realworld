import { Form, Formik } from 'formik';
import { Button } from '../../components/Button/Button';
import './formContainer.scss'

export interface FormContainerProps {
    children: React.ReactNode;
    buttonName: string;
    initialValues: any;
    validateForm: (values: any) => any;
}

export const FormContainer = ({ children, buttonName, initialValues, validateForm }: FormContainerProps) => {
    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }: any) => (
                <Form className="form">
                    {children}
                    <Button type="submit" disabled={isSubmitting} name={buttonName} />
                </Form>
            )}
        </Formik>
    )
}