import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    controls: {
        height: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: '100%'
    },
    timer: {
        marginTop: 25,
        height: "70%",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    number: {
        color: '#fff',
        fontSize: 100,
    },
    mode: {
        fontSize: 30,
        color: '#fff',

    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: '50%',

    },
    playButton: {
        backgroundColor: '#4CAF50'
    },
    pauseButton: {
        backgroundColor: '#FF6F00'
    },
    resetButton: {
        backgroundColor: '#E53935',

    }
});

export default styles;
