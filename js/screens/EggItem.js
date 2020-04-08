import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Card, Text} from '@ui-kitten/components';

const EggItem = ({egg, onPickEgg, navigation}) => {
  return (
    <Card
      header={() => (
        <React.Fragment>
          <Image style={styles.image} source={egg.image} />
          <View styles={styles.egg}></View>
          <Text style={styles.title} category="h6">
            {egg.title}
          </Text>
        </React.Fragment>
      )}
      style={styles.card}
      onPress={() => onPickEgg(egg, navigation)}></Card>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    padding: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontFamily: 'Tahu!',
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 100,
    borderWidth: 2,
    borderColor: '#f6f6f6',
    borderRadius: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
  },
  egg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default EggItem;
