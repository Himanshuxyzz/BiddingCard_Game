import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
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
const wheelSize = width * 0.95;
const oneTurn = 360;

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

const FortuneWheel = forwardRef(
  (
    { totalAmount, segmentOptions, onSpinStart, onSpinEnd, setFinishedState },
    ref
  ) => {
    const [segments, setSegments] = useState(segmentOptions);
    const numberOfSegments = segments.length;
    const angleBySegment = oneTurn / numberOfSegments;
    const angleOffset = angleBySegment / 2;
    const knobFill = "rgba(255, 197, 197, 1)";

    const makeWheel = () => {
      const data = Array.from({ length: numberOfSegments }).fill(1);
      const arcs = d3Shape.pie()(data);
      return arcs.map((arc, index) => {
        const instance = d3Shape
          .arc()
          .padAngle(0.01)
          .outerRadius(width / 2)
          .innerRadius(0);

        return {
          path: instance(arc),
          color: segmentClr[index],
          value: index + 1,
          centroid: instance.centroid(arc),
          name: segments[index],
        };
      });
    };

    const _wheelPaths = useRef(makeWheel());
    const _angle = useRef(new Animated.Value(0));
    const [finished, setFinished] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
      if (setFinishedState) {
        setFinishedState(finished);
      }
    }, [finished, setFinishedState]);

    useEffect(() => {
      // Update wheel segments when segmentOptions change
      _wheelPaths.current = makeWheel();
    }, [segmentOptions]);

    const _getWinnerIndex = (currentAngle) => {
      const deg = Math.abs(Math.round(currentAngle % oneTurn));
      if (currentAngle < 0) {
        return Math.floor(deg / angleBySegment);
      } else {
        return (
          (numberOfSegments - Math.floor(deg / angleBySegment)) %
          numberOfSegments
        );
      }
    };

    const _spinWheel = () => {
      if (!finished) return;
      console.log("Spin button pressed");
      onSpinStart();
      setFinished(false);

      const spinDuration = 5000;
      const randomOffset = Math.random() * 360;
      const initialAngle = _angle.current._value;
      const targetAngle = initialAngle + 360 * numberOfSegments + randomOffset;

      const customEase = (t) => {
        return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 0.5 + (t - 0.5) * 2;
      };

      Animated.timing(_angle.current, {
        toValue: targetAngle,
        duration: spinDuration,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          const finalAngle = targetAngle % 360;
          const winnerIndex = _getWinnerIndex(finalAngle);
          setWinner(segments[winnerIndex]);
          const remainingSegments = [...segments];
          if (remainingSegments.length === 1) {
            // If only one segment left, set winner and keep it on the wheel
            onSpinEnd(remainingSegments[0]);
            setFinished(true);
          } else {
            const removedSegment = remainingSegments.splice(winnerIndex, 1)[0];
            // Delay before removing the winner from the wheel
            setTimeout(() => {
              setSegments(remainingSegments);
              onSpinEnd(removedSegment);
              setFinished(true);
            }, 1600); // Adjust the delay time as needed for a smoother animation
          }

          const segmentIndex = Math.floor(finalAngle / angleBySegment);
          const nearestAngle = segmentIndex * angleBySegment;
          _angle.current.setValue(nearestAngle);
        }
      });
    };

    useImperativeHandle(ref, () => ({
      spinWheel: _spinWheel,
    }));

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
                  const name = arc.name ? arc.name.split("") : [];
                  const textY = y - (name.length * 20) / 2;

                  return (
                    <G key={`arc-${i}`}>
                      <Path d={arc.path} fill={arc.color} />
                      <G
                        rotation={
                          (i * oneTurn) / numberOfSegments + angleOffset
                        }
                        origin={`${x}, ${y}`}
                      >
                        <Text
                          x={x}
                          y={textY}
                          fill="black"
                          textAnchor="middle"
                          fontSize={15}
                          fontWeight={700}
                        >
                          {name.map((char, index) => (
                            <TSpan
                              x={x}
                              dy={16}
                              key={`arc-${i}-slice-${index}`}
                            >
                              {char}
                            </TSpan>
                          ))}
                        </Text>
                      </G>
                    </G>
                  );
                })}
              </G>
            </Svg>
          </Animated.View>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        {renderSvgWheel()}
        <RNText
          style={{
            fontWeight: 600,
            fontSize: 24,
            color: "rgba(249, 182, 12, 1)",
            marginTop: 30,
          }}
        >
          BC amount - Rs. {totalAmount && totalAmount}
        </RNText>
        {/* <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity
            style={[styles.button, !finished && styles.buttonDisabled]}
            onPress={_spinWheel}
            disabled={!finished}
          >
            <RNText style={styles.buttonText}>
              {finished ? "SPIN" : "SPINNING"}
            </RNText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, !finished && styles.buttonDisabled]}
            onPress={_spinWheel}
            disabled={!finished}
          >
            <RNText style={styles.buttonText}>
              {finished ? "SPIN" : "SPINNING"}
            </RNText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, !finished && styles.buttonDisabled]}
            onPress={_spinWheel}
            disabled={!finished}
          >
            <RNText style={styles.buttonText}>
              {finished ? "SPIN" : "SPINNING"}
            </RNText>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  winnerText: {
    fontSize: 32,
    fontFamily: "Menlo",
    color: "white",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
});

export default FortuneWheel;
