import React from "react";
import AppLogic from "./applogic";
import Inputs from "./InputFolder/Inputs";
import { InputsContainer } from "./CountDownStyles";
import SliderComponent from "./SliderFolder/SliderComponent";
import { InputsStyleContainer } from "./CountDownStyles";

interface CountDownInputsProps {
    active: boolean;
    seconds: number;
    minutes: number;
    handleMinutesChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSecondsChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSliderChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    totalSeconds: number;
}

const CountDownInputsLogic: React.FC<CountDownInputsProps> = ({active, totalSeconds ,seconds, minutes,handleMinutesChange, handleSecondsChange, handleSliderChange}) => {

    return (
        <InputsContainer>
        <InputsStyleContainer>
            <Inputs 
            
                title={"minutes"}
                value={minutes > 10 ? minutes : "0" + minutes}
                type="number"
                onChange={handleMinutesChange}
                disabled={active ? true : false}
                />
                <Inputs 
                title={"seconds"}
                value={seconds > 10 ? seconds : "0" + seconds}
                type="number"
                onChange={handleSecondsChange}
                disabled={active ? true : false}
                />
            </InputsStyleContainer>
                <SliderComponent value={totalSeconds} disabled={active} onChange={handleSliderChange}  key={1} />
        </InputsContainer>
    )
}

export default React.memo(CountDownInputsLogic);