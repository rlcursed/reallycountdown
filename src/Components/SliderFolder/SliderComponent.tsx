import React from 'react';

import { SliderContainer } from './SliderStyles';

interface SliderComponents {
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean
}

const SliderComponents: React.FC<SliderComponents> = ({value, onChange, disabled}) => {
    return (
        <SliderContainer>
            <input
                type="range"
                min="0"
                max="43200"
                value={value}
                step="15"
                onChange={onChange}
                disabled={disabled}
            />
        </SliderContainer>

    );
}

export default React.memo(SliderComponents);