import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {ErrorMessage, Formik, Form, Field, useFormik} from 'formik'
import {Input, Button} from '../Components'
import {useValidations, useLoginFormManagement} from './hooks'
import './Login.scss'

interface FormErrors {
    isEmailValid?: boolean;
    isPasswordValid?: boolean;
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

    const formik = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: () => console.log('submitted'),
        validate: useValidations
    })

    // const isBtnDisabled: boolean = Object.values(formErrors).includes(false)
    return (
        <Form onSubmit={formik.handleSubmit} className='form-login'>
            <Input
                name='email'
                type='email'
                placeholder='Email'
                // onBlur={handleEmailBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                hasError={!!formik.errors.email}
                errorMessage={formik.errors.email}
            />
            <Input
                name='password'
                type='password'
                placeholder='Password'
                // onBlur={handlePasswordBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                hasError={!!formik.errors.password}
                errorMessage={formik.errors.password}
            />
            <Button
                type='submit'
                text='Login'
                onClick={() => console.log('logged in')}
                disabled={formik.isValid}
            />
        </Form>
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
