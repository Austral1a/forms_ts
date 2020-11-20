import React, {FC, MouseEventHandler} from 'react';
import classNames from 'classnames/dedupe';
import './Button.scss';

interface Props {
    text: string;
    disabled?: boolean;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({
    text,
    onClick,
    disabled,
    className
}) => {
    const customClasses: string = classNames('button', className);
    return (
        <button className={customClasses} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}