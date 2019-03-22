import React from 'react'
import {Formik, Form, Field} from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const DateField = ( {label, field} ) => (
    <DatePicker
        selected={field.value}
        onChange={field.onChange}
        showTimeInput
        id={field.name}
        timeFormat="HH:mm"
        timeIntervals={1}
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
                {({isSubmitting, values, ...other}) => {
                    return (
                        <Form>
                            <Field name="scheduleTime" label="Schedule" component={DateField}/>
                            <button type='submit'>Submit Form</button>
                        </Form>
                    )
                }}
            </Formik>
        )
    }
}

export default IndexPage