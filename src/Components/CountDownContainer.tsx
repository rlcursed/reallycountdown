import React from 'react';
import styled from 'styled-components';
import ButtonGroup from './ButtonsFolder/ButtonsGroup';
import AppLogic from './applogic';
import CountDownInputsLogic from './CountDownInputsLogic';
import { AppContainer } from './CountDownStyles';
import SliderComponent from './SliderFolder/SliderComponent';

const CountDownContainer = () => {

    const {
            active,
            seconds,
            minutes,
            status,
            handleMinutesChange,
            handleSecondsChange,
            handleStart,
            handlePause,
            handleContinue,
            handleReset,
            handleSliderChange,
            totalSeconds
    } = AppLogic()

    
    return(
        <AppContainer>
                <CountDownInputsLogic
                handleMinutesChange={handleMinutesChange}
                handleSecondsChange={handleSecondsChange}
                active={active}
                seconds={seconds}
                minutes={minutes}
                />
                <SliderComponent value={totalSeconds} disabled={active} onChange={handleSliderChange}  key={1} />
                <ButtonGroup
                handleStart={handleStart}
                handlePause={handlePause}
                handleContinue={handleContinue}
                handleReset={handleReset}
                status={status}
                />
        </AppContainer>
    )
}

export default React.memo(CountDownContainer)