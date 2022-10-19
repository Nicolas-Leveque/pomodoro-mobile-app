import { useState, useEffect, useRef, useContext } from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import SettingsContext from "../SettingsContext";
import styles from './TimerStyle';

function Timer() {
    const settings = useContext(SettingsContext);

    const [ paused, setPaused ] = useState(true);
    const [ mode, setMode ] = useState('focus');
    const [ secondsLeft, setSecondsLeft ] = useState(0);

    const pausedRef = useRef(paused);
    const modeRef = useRef(mode);
    const secondsLeftRef = useRef(secondsLeft);

    function chronometer() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    };

    useEffect(() => {
        const switchMode = () => {
            const nextMode = modeRef.current === 'focus' ? 'pause' : 'focus';
            const nextSeconds = (nextMode === 'focus' ? settings.focusMinutes : settings.pauseMinutes ) * 60;
            setMode(nextMode);
            modeRef.current = nextMode;
            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        };
        secondsLeftRef.current = settings.focusMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        const interval = setInterval(() => {
            if (pausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }
            chronometer();
        }, 1000);
    }, [settings]);

    const totalTimeSeconds = mode === 'focus' ? settings.focusMinutes * 60 : settings.pauseMinutes * 60;
    const percentage = Math.round((secondsLeftRef.current / totalTimeSeconds) *100);

    let minutes = Math.floor(secondsLeftRef.current / 60);
    let seconds = secondsLeftRef.current % 60;
    if ( seconds < 10) seconds = '0' + seconds;

    return(
        <View style={styles.timer}>
            <Text style={styles.mode}>{mode}</Text>
            <Text style={styles.number}>{minutes + ':' + seconds}</Text>

            <View style={styles.controls}>
                <Button
                    title='Play'
                    onPress={() => {
                        setPaused(false);
                        pausedRef.current = false;
                    }}
                />
                <Button
                    title='Pause'
                    onPress={() => {
                        setPaused(true);
                        pausedRef.current = true;
                    }}
                />
            </View>
        </View>
    )
};

export default Timer;