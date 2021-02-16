import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Shimmer from './src/components/Shimmer';

const WIDTH = Dimensions.get('screen').width;



export default function App() {
 
    return (
      <View style={styles.container}>
        <View>
          <Shimmer width={WIDTH-20} height={70}/>
        </View>
      </View>
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    margin: 8,
  },
  avatar: { 
    borderRadius: 30, 
    width: 60, 
    overflow: 'hidden' 
  },
  upperText: { 
    marginLeft: 8, 
    marginTop: 14 
  },
  lowerText: { 
    marginLeft: 8, 
    marginTop: 4 
  },

  Roudin: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF'
  }
  
});