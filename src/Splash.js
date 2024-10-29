import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/intro.png')}
        style={styles.gif}
        resizeMode="contain"
      />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(236 232 227)',
  },
  gif: {
    width: '30%',
    height: '30%',
  },
});
