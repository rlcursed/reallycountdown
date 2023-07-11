import React from 'react';
import styled from 'styled-components';
import ButtonGroup from './ButtonsFolder/ButtonsGroup';
import AppLogic from './applogic';
import CountDownInputsLogic from './CountDownInputsLogic';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    height: 500px;
    background-color: black;
`
const ComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

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
    } = AppLogic()

    
    return(
        <AppContainer>
            <ComponentContainer>
                <CountDownInputsLogic
                handleMinutesChange={handleMinutesChange}
                handleSecondsChange={handleSecondsChange}
                active={active}
                seconds={seconds}
                minutes={minutes}
                />
            </ComponentContainer>
            <ComponentContainer>
                <ButtonGroup
                handleStart={handleStart}
                handlePause={handlePause}
                handleContinue={handleContinue}
                handleReset={handleReset}
                status={status}
                />
            </ComponentContainer>
        </AppContainer>
    )
}

export default CountDownContainer