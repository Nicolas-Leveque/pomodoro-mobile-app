import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    controls: {
        flex: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: '100%'
    },
    timer: {
        marginTop: 25,
        flex: 3,
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
        backgroundColor: '#E53935'
    },
    resetBlock: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"

    },
    resetButton: {
        backgroundColor: 'red',
        width: 150,
        height: 70,
        borderRadius: 35
    }
});

export default styles;
