import { useEffect, useRef, useState } from "react";

const initialTime = "00: 00: 00";

function StopWatch() {
    const [stopwatch, setStopwatch] = useState(initialTime);
    const [currentSeconds, setCurrentSeconds] = useState(0);

    const intervalRef = useRef(null);

    const onStart = () => {
        // Prevent multiple intervals
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setCurrentSeconds(prevSeconds => {
                const seconds = prevSeconds + 1;

                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;

                setStopwatch(
                    `${String(hours).padStart(2, "0")}: ${String(minutes).padStart(2, "0")}: ${String(secs).padStart(2, "0")}`
                );

                return seconds;
            });
        }, 1000);
    };

    const onStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const onReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        setCurrentSeconds(0);
        setStopwatch(initialTime);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
            Stopwatch: {stopwatch}

            <div>
                <button onClick={onStart}>Start</button>
                <button onClick={onStop}>Stop</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;