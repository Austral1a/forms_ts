import React, {FC, MouseEventHandler} from 'react';
import classNames from 'classnames/dedupe';
import './Button.scss';

interface Props {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    disabled?: boolean;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({
    type,
    text,
    onClick,
    disabled,
    className
}) => {
    const customClasses: string = classNames('button', className);
    return (
        <button type={type} className={customClasses} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}