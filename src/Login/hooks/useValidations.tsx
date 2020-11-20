import {useInputValidation} from './index'
import {patternNames} from '../../helpers'

interface Errors {
    email: boolean;
    password: boolean;
}

interface Values {
    email: string;
    password: string;
}

export const useValidations = (values: Values): Errors => {
    const {email, password} = patternNames;
    return {
        email: useInputValidation(email, values.email),
        password: useInputValidation(password, values.password)
    }
}
