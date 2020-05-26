/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-community/async-storage';

export default class App extends React.Component {
    render(){
        return(
            <SafeAreaView styles={styles.container}>
                <Text>Welcome! Store some data:</Text>
                <TouchableOpacity onPress={this.storeData}>
                    <Text>Store Data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getData}>
                    <Text>Read Data</Text>
                </TouchableOpacity>
            </SafeAreaView>
            )
    }

    storeData = async (value) => {
      try {
        await AsyncStorage.setItem('setting', 'v.1.0.1');
        alert('saved');
      } catch (e) {
        // saving error
        alert('error');
      }
    }

//store object data
// const storeData = async (value) => {
//   try {
//     const jsonValue = JSON.stringify(value)
//     await AsyncStorage.setItem('@storage_Key', jsonValue)
//   } catch (e) {
//     // saving error
//   }
// }

//read string data
    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('setting')
        if(value !== null) {
          alert(value)
        }
      } catch(e) {
          alert('error')
      }
    }

//read object data
//     getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key')
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch(e) {
//     // error reading value
//   }
// }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
