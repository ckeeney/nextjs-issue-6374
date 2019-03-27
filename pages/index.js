import React from 'react'
import {Formik, Form, Field} from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'formik';


let DateField = ({ field, formik: { setFieldValue }}) => (
    <DatePicker
        selected={field.value}
        onChange={(date) => setFieldValue(field.name, date)}
        id={field.name}
    />
);

DateField = connect(DateField);

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