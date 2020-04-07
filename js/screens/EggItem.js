import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Card, Text} from '@ui-kitten/components';

const EggItem = ({egg, onPickEgg, navigation}) => {
  return (
    <Card
      header={() => (
        <React.Fragment>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.vexels.com/media/users/3/131917/isolated/preview/343f36669c2fcf5c750a22a62f4783fc-rhombs-dots-easter-egg-by-vexels.png',
            }}
          />
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
  egg: {
    width: 38,
    height: 45,
    backgroundColor: 'red',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  card: {
    borderWidth: 0,
    padding: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
  },
  title: {
    margin: 0,
    textAlign: 'center',
  },
  image: {
    // backgroundColor: '#333',
    height: 100,
    width: '100%',
  },
});

export default EggItem;
