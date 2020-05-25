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
            <View>
                <Text>Welcome! Store some data:</Text>
                <TouchableOpacity onPress={this.storeData}>
                    <Text>Store Data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.getData}>
                    <Text>Read Data</Text>
                </TouchableOpacity>
            </View>
            )
    }

//store string data
    const storeData = async (value) => {
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
