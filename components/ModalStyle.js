import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    modal: {

        backgroundColor: "black",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: "20%"

    },
    button: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        width: 150,
        height: 70,
        borderRadius: 35
    },
    config: {

        backgroundColor: 'black',
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: "white"
    },
    controls: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '50%'
    }
});

export default styles;