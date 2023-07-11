import React from "react";
import { ButtonItem } from "./ButtonsStyle";

interface ButtonsProps {
    onClick:() => void;
    title: string;
}

const Buttons: React.FC<ButtonsProps> = ({title, onClick}) => {
    return (
            <ButtonItem onClick={onClick}>{title}</ButtonItem>
    )
};

export default React.memo(Buttons);