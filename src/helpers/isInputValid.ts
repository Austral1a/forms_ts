export const isInputValid = (validator: RegExp, text: string): boolean => {
    return validator.test(text)
}
