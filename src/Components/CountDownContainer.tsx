import React from 'react';
import styled from 'styled-components';
import ButtonGroup from './ButtonsFolder/ButtonsGroup';
import AppLogic from './applogic';
import CountDownInputsLogic from './CountDownInputsLogic';
import { AppContainer } from './CountDownStyles';

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
                handleSliderChange={handleSliderChange}
                totalSeconds={totalSeconds}
                />
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