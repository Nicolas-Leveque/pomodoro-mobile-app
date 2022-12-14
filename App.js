import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SettingsContext from "./SettingsContext";
import Timer from "./components/Timer";
import ModalConfig from "./components/ModalConfig";

export default function App() {
  const [ focusMinutes, setFocusMinutes ] = useState(25);
  const [ pauseMinutes, setPauseMinutes ] = useState(5);
  const [ showSettings, setShowSettings ] = useState(false);
  return (
    <View style={styles.container}>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          focusMinutes,
          setFocusMinutes,
          pauseMinutes,
          setPauseMinutes
        }}>
        <Timer />
          <ModalConfig />

      </SettingsContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
      width: '100%'
  },
});
