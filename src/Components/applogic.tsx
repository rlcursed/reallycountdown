import React, {useCallback, useState, useEffect} from "react";

const AppLogic = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);
    const [status, setStatus] = useState<number>(0);
    const [totalSeconds, setTotalSeconds] = useState<number>(0);

// ОСНОВНОЙ ФУНКЦИОНАЛ

    useEffect(() => {

        let intervalId: string | number | NodeJS.Timer | undefined;;
            if(active) {
                intervalId = setInterval(() => {
                    if(seconds > 0) {
                        setSeconds(seconds - 1);
                    } else if(minutes > 0) {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }else{
                        clearInterval(intervalId);
                        setStatus(0);
                        setActive(!active)
                    }
                }, 1000);
            }
            return () => {
                clearInterval(intervalId);
            }
        }, [active, seconds, minutes]);

// КНОПКИ

    const handleStart = useCallback(() => {
        setActive(!active);
        setStatus(1)
    }, [active]);

    const handlePause = useCallback(() => {
        setActive(false);
        setStatus(2);
    }, [active]);

    const handleContinue = useCallback(() => {
        setActive(true);
        setStatus(1);
    }, [active]);

    const handleReset = useCallback(() => {
        setActive(false);
        setStatus(0);
        setSeconds(0);
        setMinutes(0);
    }, [active]);

// ЧЕНДЖЕРЫ

    const handleMinutesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinutes = parseInt(event.target.value)
        setMinutes(newMinutes);
        setTotalSeconds(newMinutes * 60 + seconds);
    }, [minutes]);

    const handleSecondsChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newSeconds = parseInt(event.target.value)
        setSeconds(newSeconds);
        setTotalSeconds(minutes * 60 + newSeconds);
    }, [seconds]);

    const handleSliderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const totalSeconds = parseInt(event.target.value, 10);
        setTotalSeconds(totalSeconds);
        setMinutes(Math.floor(totalSeconds / 60));
        setSeconds(totalSeconds % 60);
    },[minutes]);

    return(
        {
            seconds,
            minutes,
            active,
            status,
            handleStart,
            handlePause,
            handleContinue,
            handleReset,
            handleMinutesChange,
            handleSecondsChange,
            handleSliderChange,
            totalSeconds
        }
    )
}

export default AppLogic