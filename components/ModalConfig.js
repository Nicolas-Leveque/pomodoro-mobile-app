import { useState, useContext } from 'react';
import { Text, View, Modal, TouchableHighlight } from "react-native";
import Slider from '@react-native-community/slider';
import SettingsContext from "../SettingsContext";
import styles from './ModalStyle';

function ModalConfig() {
    const [ modalVisible, setModalVisible ] = useState(false);
    const settings = useContext(SettingsContext);

    const handleOpen = () => setModalVisible(true);
    const handleClose = () => setModalVisible(false);

    return (
        <View
            style={styles.modal}
        >
            <Modal

                visible={modalVisible}
                animationType='slide'

            >
                <View
                    style={styles.config}
                >
                    <View
                        style={styles.controls}
                    >
                    <Text
                        style={styles.textStyle}
                    >Focus Time</Text>
                    <Slider
                        style={{width: 300, height: 40}}
                        minimunValue={10}
                        maximumValue={60}
                        value={settings.focusMinutes}
                        onValueChange={(value) => {
                            settings.setFocusMinutes(value)
                        }}
                        step={1}
                    />
                    <Text
                        style={styles.textStyle}
                    >{settings.focusMinutes}</Text>
                    <Text
                        style={styles.textStyle}
                    >Pause Time</Text>
                    <Slider
                        style={{width: 300, height: 40}}
                        minimumValue={1}
                        maximumValue={10}
                        value={settings.pauseMinutes}
                        onValueChange={(value) => {
                            settings.setPauseMinutes(value)
                        }}
                        step={1     }
                    />
                    <Text
                        style={styles.textStyle}
                    >{settings.pauseMinutes}</Text>
                </View>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={handleClose}
                    >
                        <Text>Close</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <TouchableHighlight
                style={styles.button}
                onPress={handleOpen}
            >
                <Text>Config</Text>
            </TouchableHighlight>
        </View>
    )
};

export default ModalConfig;