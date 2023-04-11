import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import { MainMenuScreen } from './src/screens/MainMenuScreen'


export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/' element={<MainMenuScreen />} />
      </Routes>
    </View>
  );
}
