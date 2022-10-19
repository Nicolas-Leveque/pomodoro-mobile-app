import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    controls: {
        flex: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    timer: {
        marginTop: 150,
        flex: 3,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: '#fff',
        fontSize: 100,
    },
    mode: {
        fontSize: 30,
        color: '#fff',

    }
});

export default styles;
