/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
//import type { Node } from 'react';
import Viewer from './component/view';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
/*
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.subcontainer}/>
      </View>
    )
  }
}
*/
/*
class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'blue'}}>

        <View style={{flex: 1, backgroundColor: 'red' }}/>
        <View style={{flex: 1, backgroundColor: 'green' }}/>
        <View style={{flex: 1, backgroundColor: 'brown' }}/>
        
      </View>
    );
  }
}*/
//No cambia nada ya que es el mismo componente, esto es
/*
  class App extends Component { es igual a === function App(){ (Componente de función)
*/

export default class App extends Component {
  state = {
    color1: 'blue',
    color2: 'blue',
  }

  handleColor() {
    if (!this.state.pressed) {
      this.setState({ pressed: true, color1: 'red', color2: 'blue' });
    } else {
      this.setState({ pressed: false, color1: 'blue', color2: 'red' });
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ backgroundColor: this.state.color1, alignItems:'center', flex:1, borderWidth:8, borderColor:'yellow' }}
          onPress={() => this.handleColor()}
        >
          <Text >Boton</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: this.state.color2, 
        alignItems: 'center', flex:1, borderWidth:8, borderColor:'pink' }}
          onPress={() => this.handleColor()}
        >
          <Text>Boton</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff'
  }
})
/*
const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    justifyContent : 'center',
    alignItems:'center',
  },
  subcontainer:{
    height:40,
    width : 40,
    backgroundColor: 'red',
  },

  /*sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },*/
//}

//export default App;

/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};*/
/*
const Hello = () => <Text>Hola mundo</Text>;


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Text>Hola mundo</Text>
            <Hello/>
          <Section title="Step ONEFGFG">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
*/

