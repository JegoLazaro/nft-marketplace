import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../constants";

const BidsTab = () => {
  const bids = [
    {
      nftName: "Deadly Sins #2945",
      nftCollection: "Deadly Sins Society",
      price: "100",
      currentBid: "90",
      image: require("../assets/images/nft05.jpg"),
    },
    {
      nftName: "Teddy Troops #2019",
      nftCollection: "Teddy Troops",
      price: "$200",
      currentBid: "$180",
      image: require("../assets/images/nft04.jpg"),
    },
    {
      nftName: "Deadly Sins #1212",
      nftCollection: "Deadly Sins Society",
      image: require("../assets/images/nft11.jpg"),
      price: "270",
      currentBid: "230",
    },
    {
      id: "6",
      nftName: "Salty Seagull #395",
      nftCollection: "Salty Seagulls Society",
      image: require("../assets/images/nft06.jpg"),
      price: "2900",
      currentBid: "2350",
    },
    {
      id: "7",
      nftName: "Safari Squad #702",
      nftCollection: "Safari Squad",
      image: require("../assets/images/nft13.jpg"),
      price: "3700",
      currentBid: "3050",
    },

    // Add more bids as needed
  ];

  const handleAcceptBid = (bid) => {
    console.log(`Accepted bid for ${bid.nftName}`);
  };

  const handleDeclineBid = (bid) => {
    console.log(`Declined bid for ${bid.nftName}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <ScrollView style={styles.scrollView}>
        {bids.map((bid, index) => (
          <View key={index} style={styles.bidContainer}>
            <Image style={styles.nftImage} source={bid.image} />
            <Text
              style={[styles.bidText, { fontWeight: 700, color: "#30b6cf" }]}
            >
              NFT Name: {`${bid.nftName}`}
            </Text>
            <Text style={[styles.bidText, { textDecorationStyle: "dashed" }]}>
              {`Collection: ${bid.nftCollection}`}
            </Text>
            <Text style={styles.bidText}>{`Price: ${bid.price} ETH`}</Text>
            <Text style={styles.bidText}>
              {`Current Bid: ${bid.currentBid} ETH`}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.acceptButton]}
                onPress={() => handleAcceptBid(bid)}
              >
                <Text style={styles.buttonText}>Accept Bid</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.declineButton]}
                onPress={() => handleDeclineBid(bid)}
              >
                <Text style={styles.buttonText}>Decline Bid</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
  },
  bidContainer: {
    backgroundColor: COLORS.primary,
    padding: 14,
    marginBottom: 16,
    borderRadius: 10,
    position: "relative",
  },
  nftImage: {
    resizeMode: "contain",
    width: "100%",
    height: 100, // Adjust as needed
    borderRadius: 10,
    marginHorizontal: 120,
    marginBottom: -90,
  },
  bidText: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.white,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  acceptButton: {
    backgroundColor: "green",
    marginRight: 8,
  },
  declineButton: {
    backgroundColor: "red",
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default BidsTab;
