import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://as1.ftcdn.net/v2/jpg/03/22/34/80/1000_F_322348081_hKH0Ib5SmD6dCFqTZH249fcn30hviN8G.jpg",
    "https://img.freepik.com/premium-vector/laundry-infographics-with-sequence-four-different-stages-washing-process-washing-clothes_625536-77.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComonentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
