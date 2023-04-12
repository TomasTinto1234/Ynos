import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import Main from './Main'
import store from './src/redux'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const persistor = persistStore(store)

//Fonts
import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import {
  useFonts as useRoboto,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import {
  useFonts as useStick,
  StickNoBills_400Regular,
  StickNoBills_600SemiBold,
  StickNoBills_700Bold,
} from '@expo-google-fonts/stick-no-bills';

export default function App() {

  const [montserratLoaded] = useMontserrat({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  const [stickLoaded] = useStick({
    StickNoBills_400Regular,
    StickNoBills_600SemiBold,
    StickNoBills_700Bold
  });

  if (!montserratLoaded || !robotoLoaded || !stickLoaded) return null

  return (
    <>
    <StatusBar style='auto' />
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NativeRouter>
          <SafeAreaProvider>
            <SafeAreaView edges={['top']}>
              <Main />
            </SafeAreaView>
          </SafeAreaProvider>
        </NativeRouter>
      </Provider>
    </PersistGate>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
