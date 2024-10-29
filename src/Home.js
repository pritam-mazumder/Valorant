import {StyleSheet, Text, View, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>WE ARE VALORANT</Text>
      <Text style={styles.header2}>DEFY THE LIMITS</Text>
      <Text style={styles.desc}>
        Blend your style and experience on a global, competitive stage. You have
        13 rounds to attack and defend your side using sharp gunplay and
        tactical abilities. And, with one life per-round, you'll need to think
        faster than your opponent if you want to survive. Take on foes across
        Competitive and Unranked modes as well as Deathmatch and Spike Rush.
      </Text>
      <Image
        source={require('../assets/logo.png')}
        style={styles.png}
        resizeMode="contain"
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(236 232 227)',
    alignContent: 'center',
  },
  png: {
    width: '16%',
    height: '16%',
  },
  header1: {
    textAlign: 'center',
    fontFamily: 'Tungsten-Bold',
    fontSize: 42,
    marginBottom: 16,
  },
  header2: {
    textAlign: 'center',
    fontFamily: 'Tungsten-Bold',
    fontSize: 20,
    marginBottom: 16,
  },
  desc: {
    textAlign: 'center',
    fontFamily: 'dinnextw1g_medium',
    marginHorizontal: 48,
  },
});
