import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {ErrorMessage, Formik, Form, Field, useFormik, useField, FormikProps} from 'formik'
import {Input, Button} from '../Components'
import {useValidations, useLoginFormManagement} from './hooks'
import './Login.scss'

interface FormErrors {
    isEmailValid?: boolean;
    isPasswordValid?: boolean;
}

// @ts-ignore
const TextField = ({...props}) => {
    // @ts-ignore
    const [field, meta] = useField(props)
    return (
        <div className='input-container'>
            <input className='input-container__input' {...field} {...props} />
            {meta.touched && meta.error ? <p className='input-container__error'>{meta.error}</p> : null}
        </div>
    )
}

export const Login: FC = () => {

    // const [emailState, setEmailState] = useState<string>('')
    // const [passwordState, setPasswordState] = useState<string>('')
  /*  const [formErrors, setFormErrors] = useState<FormErrors>({
        isEmailValid: false,
        isPasswordValid: false
    })
*/
    // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setEmailState(e.target.value)
    // const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => setPasswordState(e.target.value)
/*
    const handleEmailBlur = (): boolean => isEmailValid
    const handlePasswordBlur = (): boolean => isPasswordValid
   */ /* useEffect(() => {
         let errors: FormErrors = {}
         errors = {...errors, isEmailValid, isPasswordValid}
         setFormErrors(errors)
     }, [isEmailValid, isPasswordValid])*/

    /*
        const {
            initialValues,
            handleSubmit
        } = useLoginFormManagement()
    */

/*
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: () => console.log('submitted'),
        validate: useValidations
    })
*/

    // const isBtnDisabled: boolean = Object.values(formErrors).includes(false)

    interface Values {
        email: string;
        password: string;
    }

    const validate = (values: Values) => {
        // TODO: Re-write useValidations
        const errors: Values = {email: '', password: ''};
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 15) {
            errors.password = 'Must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={() => console.log('submitted')}
            validate={validate}
        >
            {(props: FormikProps<Values>) => (
                <Form className='form-login'>
                    <TextField name='email' type='text' placeholder='Email' />
                    <TextField name='password' type='password' placeholder='Password' />
                    <Button
                        type='submit'
                        text='Login'
                        onClick={() => console.log(props.isValid)}
                        disabled={!!props.errors.email || !!props.errors.password}
                    />
                </Form>
            )}
        </Formik>
    )

/*
{/!*
            <Form isValid={!isBtnDisabled} onSubmit={(e) => e.preventDefault()} className='form-login'>
                <Input
                    type='email'
                    placeholder='Email'
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailState}
                    hasError={!formErrors.isEmailValid}
                    errorMessage={'err'}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordState}
                    hasError={!formErrors.isPasswordValid}
                    errorMessage={'err'}
                />
                <Button
                    text='Login'
                    onClick={() => {
                    console.log('clicked')
                }} />
            </Form>*!/}*/
}
