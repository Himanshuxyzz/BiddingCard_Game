import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text as RNText,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Easing,
} from "react-native";
import { Svg, Path, G, Text, TSpan } from "react-native-svg";
import * as d3Shape from "d3-shape";

const { width } = Dimensions.get("window");
const numberOfSegments = 12;
const wheelSize = width * 0.95;
const fontSize = 26;
const oneTurn = 360;
const angleBySegment = oneTurn / numberOfSegments;
const angleOffset = angleBySegment / 2;
// const knobFill = color({ hue: "purple" });
const knobFill = "rgba(255, 197, 197, 1)";

const segmentClr = [
  "#8B2F8A",
  "#D770A1",
  "#E496B6",
  "#F0BDCA",
  "#CA498C",
  "#FDE3DF",
  "#CA498C",
  "#FDE3DF",
  "#E6BFCE",
  "#CF9BBD",
  "#B977AC",
  "#A2539B",
];

const segmentNames = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
  "Option 10",
  "Option 11",
  "Option 12",
]; // Add your custom names here

const makeWheel = () => {
  const data = Array.from({ length: numberOfSegments }).fill(1);
  const arcs = d3Shape.pie()(data);
  //   const colors = color({
  //     luminosity: "dark",
  //     count: numberOfSegments,
  //   });

  return arcs.map((arc, index) => {
    const instance = d3Shape
      .arc()
      .padAngle(0.01)
      .outerRadius(width / 2)
      .innerRadius(0);

    return {
      path: instance(arc),
      //   color: colors[index],
      color: segmentClr[index],

      value: index + 1, //[200, 2200]
      centroid: instance.centroid(arc),
      name: segmentNames[index], // Add the custom name for the segment
    };
  });
};

const FortuneWheel = () => {
  const _wheelPaths = useRef(makeWheel());
  const _angle = useRef(new Animated.Value(0));
  const [finished, setFinished] = useState(true); // Changed initial state to true
  const [winner, setWinner] = useState(null);

  const _getWinnerIndex = (currentAngle) => {
    const deg = Math.abs(Math.round(currentAngle % oneTurn));

    // Handle clockwise and counterclockwise rotations
    if (currentAngle < 0) {
      // Wheel turning counterclockwise
      return Math.floor(deg / angleBySegment);
    } else {
      // Wheel turning clockwise
      return (
        (numberOfSegments - Math.floor(deg / angleBySegment)) % numberOfSegments
      );
    }
  };

  const _spinWheel = () => {
    if (!finished) return;
    console.log("Spin button pressed");
    setFinished(false);

    // const spinDuration = 8000;
    const spinDuration = 5000 + Math.random() * 2000;
    const randomOffset = Math.random() * 360;

    const initialAngle = _angle.current._value;
    const targetAngle = initialAngle + 360 * 10 + randomOffset;

    Animated.timing(_angle.current, {
      toValue: targetAngle,
      duration: spinDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(({ finished }) => {
      // Calculate the final angle after the animation completes
      const finalAngle = targetAngle % 360;
      const winnerIndex = _getWinnerIndex(finalAngle);
      setWinner(_wheelPaths.current[winnerIndex].value);
      setFinished(true);

      // Snap the knob to the nearest segment angle
      const segmentIndex = Math.floor(finalAngle / angleBySegment);
      const nearestAngle = segmentIndex * angleBySegment;

      // Directly set the knob angle without animating the wheel rotation
      _angle.current.setValue(nearestAngle);
    });
  };

  const _renderWinner = () => {
    return <RNText style={styles.winnerText}>Winner is: {winner}</RNText>;
  };

  const _renderKnob = () => {
    const knobSize = 30;
    const YOLO = Animated.modulo(
      Animated.divide(
        Animated.modulo(
          Animated.subtract(_angle.current, angleOffset),
          oneTurn
        ),
        new Animated.Value(angleBySegment)
      ),
      1
    );

    return (
      <Animated.View
        style={{
          width: knobSize,
          height: knobSize * 2,
          justifyContent: "flex-end",
          zIndex: 1,
          transform: [
            {
              rotate: YOLO.interpolate({
                inputRange: [-1, -0.5, -0.0001, 0.0001, 0.5, 1],
                outputRange: [
                  "0deg",
                  "0deg",
                  "35deg",
                  "-35deg",
                  "0deg",
                  "0deg",
                ],
              }),
            },
          ],
        }}
      >
        <Svg
          width={knobSize}
          height={(knobSize * 100) / 57}
          viewBox={`0 0 57 100`}
          style={{ transform: [{ translateY: 8 }] }}
        >
          <Path
            d="M28.034,0C12.552,0,0,12.552,0,28.034S28.034,100,28.034,100s28.034-56.483,28.034-71.966S43.517,0,28.034,0z   M28.034,40.477c-6.871,0-12.442-5.572-12.442-12.442c0-6.872,5.571-12.442,12.442-12.442c6.872,0,12.442,5.57,12.442,12.442  C40.477,34.905,34.906,40.477,28.034,40.477z"
            fill={knobFill}
          />
        </Svg>
      </Animated.View>
    );
  };

  const renderSvgWheel = () => {
    return (
      <View style={styles.container}>
        {_renderKnob()}
        <Animated.View
          style={{
            alignItems: "center",
            justifyContent: "center",
            transform: [
              {
                rotate: _angle.current.interpolate({
                  inputRange: [-oneTurn, 0, oneTurn],
                  outputRange: [`-${oneTurn}deg`, `0deg`, `${oneTurn}deg`],
                }),
              },
            ],
          }}
        >
          <Svg
            width={wheelSize}
            height={wheelSize}
            viewBox={`0 0 ${width} ${width}`}
            style={{ transform: [{ rotate: `-${angleOffset}deg` }] }}
          >
            <G y={width / 2} x={width / 2}>
              {_wheelPaths.current.map((arc, i) => {
                const [x, y] = arc.centroid;
                const number = arc.value.toString();
                const name = arc.name ? arc.name.split("") : [];
                console.log(name);
                // Calculate the vertical position for the text
                const textY = y - (name.length * 20) / 2; // Center the text vertically

                return (
                  <G key={`arc-${i}`}>
                    <Path d={arc.path} fill={arc.color} />
                    <G
                      rotation={(i * oneTurn) / numberOfSegments + angleOffset}
                      origin={`${x}, ${y}`}
                    >
                      <Text
                        x={x}
                        // y={y - 70}
                        y={textY}
                        fill="black"
                        textAnchor="middle"
                        fontSize={15}
                        fontWeight={700}
                      >
                        {/* {Array.from({ length: number.length }).map((_, j) => {
                          return (
                            <TSpan
                              x={x}
                              dy={fontSize}
                              key={`arc-${i}-slice-${j}`}
                            >
                              {number.charAt(j)}
                            </TSpan>
                          );
                        })} */}
                        {name &&
                          name.map((char, index) => {
                            return (
                              <TSpan
                                x={x}
                                dy={16}
                                key={`arc-${i}-slice-${index}`}
                              >
                                {char}
                              </TSpan>
                            );
                          })}
                      </Text>
                    </G>
                  </G>
                );
              })}
            </G>
          </Svg>
        </Animated.View>
        {/* {finished && _renderWinner()} */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderSvgWheel()}
      <RNText
        style={{
          fontWeight: 600,
          fontSize: 20,
          color: "rgba(249, 182, 12, 1)",
        }}
      >
        BC amount - Rs. 2.04cr
      </RNText>

      {finished && _renderWinner()}
      <TouchableOpacity
        style={[styles.button, !finished && styles.buttonDisabled]}
        onPress={_spinWheel}
        disabled={!finished}
      >
        <RNText style={styles.buttonText}>
          {finished ? "SPIN" : "SPINNING"}
        </RNText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  winnerText: {
    fontSize: 32,
    fontFamily: "Menlo",
    // position: "absolute",
    // bottom: 10,
    color: "white",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
    // marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "gray", // Change the color for the disabled state
  },
});

export default FortuneWheel;
