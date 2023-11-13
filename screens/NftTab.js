import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

import { COLORS, SIZES } from '../constants';

const NftTab = () => {
  const data = [
    { id: '1', nftName: 'Deadly Sins #2945', nftCollection: 'Deadly Sins Society', image: require('../assets/images/nft05.jpg') },
    { id: '2', nftName: 'Pastelbud #632', nftCollection: 'Pastelbudz', image: require('../assets/images/nft15.jpg') },
    { id: '3', nftName: 'Fudbuddies #395', nftCollection: 'Fudbuddies', image: require('../assets/images/nft09.jpg') },
    { id: '4', nftName: 'Melting Moonboy #5145', nftCollection: 'Melting Moonboy', image: require('../assets/images/nft02.jpg') },
    { id: '5', nftName: 'Deadly Sins #1212', nftCollection: 'Deadly Sins Society', image: require('../assets/images/nft11.jpg') },
    { id: '6', nftName: 'Salty Seagull #395', nftCollection: 'Salty Seagulls Society', image: require('../assets/images/nft06.jpg') },
    { id: '7', nftName: 'Safari Squad #702', nftCollection: 'Safari Squad', image: require('../assets/images/nft13.jpg') },
    { id: '8', nftName: 'Salty Seagull #3911', nftCollection: 'Salty Seagulls Society', image: require('../assets/images/nft16.jpg') },
    { id: '9', nftName: 'Melting Moonboy #91', nftCollection: 'Melting Moonboy', image: require('../assets/images/nft07.jpg') },
    { id: '10', nftName: 'Teddy Troops #2019', nftCollection: 'Teddy Troops', image: require('../assets/images/nft04.jpg') },
    
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cell}>
      <Image
        style={styles.image}
        source={item.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.largeText}>{item.nftName}</Text>
        <Text style={styles.mediumText}>{item.nftCollection}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.scrollView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
  cell: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  image: {
    resizeMode: 'contain',
    width: '85%',
    borderRadius: 50,
    marginBottom: 60,
    borderRadius: 90,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 28,
  },
  largeText: {
    color: '#fff',
    fontSize: SIZES.large,
    fontWeight: 600,
  },
  mediumText: {
    textAlign: 'center',
    fontSize: SIZES.medium,
    fontWeight: 400,
    color: COLORS.gray,
  },
});

export default NftTab;
