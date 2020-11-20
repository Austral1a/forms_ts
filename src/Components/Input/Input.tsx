import React, {FC, ChangeEvent, FocusEvent} from 'react';
import classNames from 'classnames'
// import './Input.scss';

interface Props {
    type: string;
    placeholder?: string;
    disabled?: boolean;
    errorMessage?: string;
    value?: string;
    hasError?: boolean;
    icon?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({
    type,
    placeholder,
    errorMessage,
    hasError,
    icon,
    value,
    className,
    onChange,
    onInput,
    onBlur,
    onFocus
}) => {
    const renderError: boolean | undefined = hasError && !!value
    const customClassesContainer: string = classNames('input-container', className);
    const customClassesInput: string = classNames('input-container__input', {'input-container__input_error': renderError});
    return(
        <div className={customClassesContainer}>
            {icon && <span className='input-container__icon'><img src={icon}/></span>}
            <input
                type={type}
                placeholder={placeholder}
                className={customClassesInput}
                onChange={onChange}
                onInput={onInput}
                onBlur={onBlur}
                value={value}
                onFocus={onFocus}
            />
            {renderError && <p className='input-container__error'>{errorMessage}</p>}
        </div>
    );
};