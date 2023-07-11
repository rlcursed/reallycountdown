import React from 'react';
import {InputsItem } from './InputsStyle';

interface InputsProps {
    title: string;
    value: number | string;
    type: string;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const Inputs: React.FC<InputsProps> = ({title, value, type, onChange, disabled}) => {
    return(
            <InputsItem
                title={title}
                value={value}
                type={type}
                onChange={onChange}
                disabled={disabled}
            />  
    )
}

export default React.memo(Inputs)