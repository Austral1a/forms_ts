import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {Input, Button, Form} from '../Components'
import {useValidations} from './hooks'
import './Login.scss'

interface FormErrors {
    isEmailValid?: boolean;
    isPasswordValid?: boolean;
}

export const Login: FC = () => {

    const [emailState, setEmailState] = useState<string>('')
    const [passwordState, setPasswordState] = useState<string>('')
    const [formErrors, setFormErrors] = useState<FormErrors>({
        isEmailValid: false,
        isPasswordValid: false
    })

    const {
        isEmailValid,
        isPasswordValid
    } = useValidations(emailState, passwordState)


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setEmailState(e.target.value)
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => setPasswordState(e.target.value)

    const handleEmailBlur = (): boolean => isEmailValid
    const handlePasswordBlur = (): boolean => isPasswordValid

    useEffect(() => {
        let errors: FormErrors = {}
        errors = {...errors, isEmailValid, isPasswordValid}
        setFormErrors(errors)
    }, [isEmailValid, isPasswordValid])

    const isBtnDisabled: boolean = Object.values(formErrors).includes(false)
    return (
        <div className='login'>
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
            </Form>
        </div>
    )
}
