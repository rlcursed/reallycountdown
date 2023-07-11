import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";

const ComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

interface ButtonGroupProps {
    status: number;
    handleStart:() => void;
    handlePause:() => void;
    handleReset:() => void;
    handleContinue:() => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({handleStart, handlePause, handleReset, handleContinue, status }) => {
    return(
        <ComponentContainer>
                {status === 0 ?
                    <Buttons onClick={handleStart} title="START"/> 
                :
                ""
                }
                {status === 1 ?
                <ComponentContainer>
                    <Buttons onClick={handlePause} title="PAUSE"/> 
                    <Buttons onClick={handleReset} title="RESET"/> 
                </ComponentContainer>
                :
                ""
                }
                {status === 2 ?
                <ComponentContainer>
                    <Buttons onClick={handleContinue} title="CONTINUE"/> 
                    <Buttons onClick={handleReset} title="RESET"/> 
                </ComponentContainer>
                :
                ""
                }
            </ComponentContainer>
    )
}

export default React.memo(ButtonGroup);