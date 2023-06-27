import { Card, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: any;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
                console.log(seconds);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const getMinutes = (ms: number) => {
        return Math.floor((ms / (1000 * 60)) % 60);
    };
    const getHours = (ms: number) => {
        return Math.floor((ms / (1000 * 60 * 60)) % 24);
    };

    const handleStartClick = () => {
        setIsActive(true);
    };
    const handleStopClick = () => {
        setIsActive(false);
        console.log('stop');
    };
    const handleResetClick = () => {
        setIsActive(false);
        setSeconds(0);
        console.log('reset');
    };
    return (
        <Card>
            <h5 className="mb-2 text-3xl font-bold ">Timer</h5>
            <div className="flex flex-row">
                <Button
                    className="disabled:text-gray-400"
                    type="button"
                    disabled={isActive == true}
                    onClick={handleStartClick}
                >
                    Start
                </Button>
                <Button
                    className="disabled:text-gray-400"
                    type="button"
                    disabled={isActive == false}
                    onClick={handleStopClick}
                >
                    Stop
                </Button>
                <Button
                    className="disabled:text-gray-400"
                    type="button"
                    disabled={seconds == 0}
                    onClick={handleResetClick}
                >
                    Reset
                </Button>
            </div>

            <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold">
                        {getHours(seconds)}
                    </span>
                    <span className="text-sm">Hours</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-3xl font-bold">
                        {getMinutes(seconds)}
                    </span>
                    <span className="text-sm">Minutes</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-3xl font-bold">{seconds}</span>
                    <span className="text-sm">Seconds</span>
                </div>
            </div>
        </Card>
    );
};

export default Timer;
