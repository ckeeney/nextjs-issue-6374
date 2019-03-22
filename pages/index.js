import React from 'react'
import {Formik, Form, Field} from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const DateField = ( {field} ) => (
    <DatePicker
        selected={field.value}
        onChange={field.onChange}
        id={field.name}
    />
);

class IndexPage extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{scheduleTime: null}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => {
                    return (
                        <Form>
                            <Field name="scheduleTime" component={DateField}/>
                            <button type='submit'>Submit Form</button>
                        </Form>
                    )
                }}
            </Formik>
        )
    }
}

export default IndexPage