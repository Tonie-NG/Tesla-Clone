import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import car from "../assets/images/car.png";
import { styles } from "./styles";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model</Text>
          <View style={styles.charging}>
            <Feather name="battery-charging" size={24} color="gray" />
            <Text style={styles.chargingText}>Charging</Text>
          </View>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <AntDesign name="user" size={24} color="gray" />
      </View>
      <Image source={car} style={styles.car} />
    </View>
  );
};

export default index;
