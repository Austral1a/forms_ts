import {useCallback} from 'react'

interface LoginFormFields {
    email: string;
    password: string;
}

export const useLoginFormManagement = () => {
    const handleSubmit = useCallback(
        (e) => e.preventDefault(),
        []
    )

    const initialValues: LoginFormFields = {
        email: '',
        password: ''
    }
    return {
        handleSubmit,
        initialValues
    }
}
