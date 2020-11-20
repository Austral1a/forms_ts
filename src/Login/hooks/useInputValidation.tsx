import {useMemo} from 'react'
import {patterns, isInputValid} from '../../helpers'

export const useInputValidation = (patternName: string, inputName: string): boolean => {
    return useMemo(
        () => isInputValid(patterns[patternName], inputName),
        [inputName, patternName]
    )
}
