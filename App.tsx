import { AppRegistry, ScrollView, Text, View } from 'react-native';
import appInfo from "./app.json";
import { PaperProvider, Appbar, TextInput } from 'react-native-paper';
import { TabScreen, Tabs, TabsProvider } from 'react-native-paper-tabs';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import RNFS from "react-native-fs";
import papaparse from "papaparse";
import { useRef, useState } from 'react';
import { Svg } from 'react-native-svg';
import { FormBuilder } from 'react-native-paper-form-builder';

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="BlueScout"></Appbar.Content>
      </Appbar.Header>

      <TabsProvider>
        <Tabs disableSwipe={false}>

          <TabScreen label='Match'>
            <ScrollView contentContainerStyle={styles.formView}>

              <View style={styles.formRow}>
                <View style={styles.formRowInput}>
                  <Text>Team Number</Text>
                  <TextInput ></TextInput>
                </View>
              </View>

            </ScrollView>
          </TabScreen>

          <TabScreen label='Robot'>
            <ScrollView contentContainerStyle={styles.formView}>
              
            </ScrollView>
          </TabScreen>

        </Tabs>
      </TabsProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appInfo.expo.name, () => App);
