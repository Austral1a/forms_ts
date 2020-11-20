import {useInputValidation} from './index'
import {patternNames} from '../../helpers'

interface Validations {
    isEmailValid: boolean;
    isPasswordValid: boolean;
}

export const useValidations = (emailVal: string, passwordVal: string): Validations => {
    const {email, password} = patternNames;

    return {
        isEmailValid: useInputValidation(email, emailVal),
        isPasswordValid: useInputValidation(password, passwordVal)
    };
}
