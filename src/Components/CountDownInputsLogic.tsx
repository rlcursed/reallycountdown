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
}

const CountDownInputsLogic: React.FC<CountDownInputsProps> = ({active, seconds, minutes,handleMinutesChange, handleSecondsChange}) => {

    return (
        <>
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
        </>
    )
}

export default React.memo(CountDownInputsLogic);