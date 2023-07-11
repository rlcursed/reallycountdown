import React, {useCallback, useState, useEffect} from "react";

const AppLogic = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [active, setActive] = useState(false);
    const [status, setStatus] = useState(0)

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

    const handleMinutesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinutes = parseInt(event.target.value)
        setMinutes(newMinutes);
    }, [minutes]);

    const handleSecondsChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newSeconds = parseInt(event.target.value)
        setSeconds(newSeconds);
    }, [seconds])

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
            handleSecondsChange
        }
    )
}

export default AppLogic