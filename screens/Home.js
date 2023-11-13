import { View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { useState } from 'react';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
    const [nft, setNft] = useState(NFTData);
    const handleSearch = (value) => {
        if (!value.length) return setNft(NFTData);

        const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

        if (filteredData.length) {
            setNft(filteredData);
        } else {
            setNft(NFTData);
        }
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
        <FocusedStatusBar />
        <View style={{flex : 1}}>
            <View style={{
                    zIndex : 0,
                    marginTop: 215
                }}>
                <FlatList 
                    data={nft}
                    renderItem={({item}) => <NFTCard data={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    // ListHeaderComponent={}
                />   
            </View>
            <View style={{
                position : "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex : -1
                }}>
                    <View style={{height: 300, backgroundColor: COLORS.primary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                    <HomeHeader onSearch={handleSearch}/>
                    </View>
                    <View style={{flex: 1, backgroundColor: COLORS.gray}}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home