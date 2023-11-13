import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { COLORS, NFTData, SIZES } from "../constants";
import { FocusedStatusBar, NFTCard } from "../components";

const NftTab = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <View
        style={{
          height: 800,
        }}
      >
        <View
          style={{
            marginTop: 15,
            height: "50%",
          }}
        >
          <ScrollView style={styles.scrollView}>
            <View style={styles.row}>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft05.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Deadly Sins #2945
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Deadly Sins Society
                  </Text>
                </View>
              </View>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft15.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Pastelbud #632
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Pastelbudz
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft09.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Fudbuddies #395
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Fudbuddies
                  </Text>
                </View>
              </View>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft03.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Disco Solaris #9164
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Disco Solaris
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft05.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Deadly Sins #2945
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Deadly Sins Society
                  </Text>
                </View>
              </View>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft15.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Pastelbud #632
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Pastelbudz
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft05.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Deadly Sins #2945
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Deadly Sins Society
                  </Text>
                </View>
              </View>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft15.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Pastelbud #632
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Pastelbudz
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft11.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Deadly Sins #648
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Deadly Sins Society
                  </Text>
                </View>
              </View>
              <View style={styles.cell}>
                <Image
                  style={{
                    resizeMode: "contain",
                    width: "85%",
                    borderRadius: 50,
                    marginBottom: 60,
                    borderRadius: 90,
                  }}
                  source={require("../assets/images/nft16.jpg")}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    marginBottom: 28,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: SIZES.large,
                      fontWeight: 600,
                    }}
                  >
                    Salty Seagull #7533
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: SIZES.medium,
                      fontWeight: 400,
                      color: COLORS.gray,
                    }}
                  >
                    Salty Seagulls Society
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
    height: "100%",
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },
  cell: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    marginRight: 8,
  },
  cellText: {
    fontSize: 24,
  },
});

export default NftTab;
