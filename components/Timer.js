import { useState, useEffect, useRef, useContext } from "react";
import { View, Text, TouchableHighlight } from 'react-native';
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
        return () => clearInterval(interval);
    }, [settings]);

    const totalTimeSeconds = mode === 'focus' ? settings.focusMinutes * 60 : settings.pauseMinutes * 60;
    const percentage = Math.round((secondsLeftRef.current / totalTimeSeconds) *100);

    let minutes = Math.floor(secondsLeftRef.current / 60);
    if ( minutes< 0 ) minutes = '0' + minutes;
    let seconds = secondsLeftRef.current % 60;
    if ( seconds < 10) seconds = '0' + seconds;

    return(
        <View style={styles.timer}>
            <Text style={styles.mode}>{mode}</Text>
            <Text style={styles.number}>{minutes + ':' + seconds}</Text>

            <View style={{flex: 2}}>
                <View style={styles.controls}>
                    <TouchableHighlight
                        style={[styles.touch, styles.playButton]}
                        onPress={() => {
                            setPaused(false);
                            pausedRef.current = false;
                        }}
                    >
                        <Text>Play</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.touch, styles.pauseButton]}
                        onPress={() => {
                            setPaused(true);
                            pausedRef.current = true;
                        }}
                    >
                        <Text>Pause</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.touch, styles.resetButton]}
                        onPress={() => {
                            setPaused(true);
                            pausedRef.current =true;
                            setSecondsLeft(settings.focusMinutes * 60);
                            secondsLeftRef.current = settings.focusMinutes * 60;
                        }}
                    >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
};

export default Timer;