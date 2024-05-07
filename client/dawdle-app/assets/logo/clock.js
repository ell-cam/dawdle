import Svg, { G, Path, Circle, Mask, Rect } from "react-native-svg";
import { View, StyleSheet } from "react-native";

const ClockSvg = ({ scale = 1, invert = false }) => {
  const scaledSize = (value) => value * scale;

  const styles = StyleSheet.create({
    svgContainer: {
      overflow: "hidden",
      borderRadius: invert ? scaledSize(100) : 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2.84,
      elevation: 5,
    },
  });

  return (
    <View style={styles.svgContainer}>
      <Svg
        width={scaledSize(100)}
        height={scaledSize(100)}
        viewBox={`0 0 ${scaledSize(100)} ${scaledSize(100)}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G id="Clock" transform={`scale(${scale})`}>
          <Path
            id="Ellipse 9"
            d="M51.6289 98.295C62.0881 98.0653 71.4108 95.5056 79.5843 88.9663C87.7577 82.427 95.8146 70.9855 98.3481 60.8202C100.882 50.6549 98.522 41.2225 94.3758 31.6029C90.2296 21.9833 83.0407 13.9953 73.9163 8.86909C64.792 3.74288 54.2381 1.76277 43.8801 3.2337C33.522 4.70462 23.9343 9.545 16.5934 17.0094C9.25244 24.4738 4.56547 34.1483 3.25426 44.5429C1.94305 54.9375 4.08033 65.4758 9.33694 74.5348L50.5801 50.5335L51.6289 98.295Z"
            fill="white"
          />
          <G id="Ellipse 8">
            <Mask
              id="path-2-outside-1_224_2738"
              maskUnits="userSpaceOnUse"
              x="-1.02675"
              y="-0.987184"
              width="102.318"
              height="102.318"
              fill="black"
            >
              <Rect
                fill="white"
                x="-1.02675"
                y="-0.987184"
                width="102.318"
                height="102.318"
              />
              <Path d="M98.2719 47.8004C97.6798 37.3233 93.6599 27.3314 86.8311 19.3633C80.0024 11.3953 70.7436 5.89319 60.4806 3.70424C50.2176 1.5153 39.5196 2.76096 30.0341 7.24939C20.5486 11.7378 12.8016 19.2201 7.98634 28.5439C3.17104 37.8677 1.55442 48.516 3.38544 58.8489C5.21647 69.1817 10.3936 78.6261 18.1195 85.7276C25.8454 92.8291 35.6917 97.1937 46.1419 98.1495C56.5922 99.1052 67.0668 96.599 75.9527 91.0168L50.4998 50.5L98.2719 47.8004Z" />
            </Mask>
            <Path
              d="M98.2719 47.8004C97.6798 37.3233 93.6599 27.3314 86.8311 19.3633C80.0024 11.3953 70.7436 5.89319 60.4806 3.70424C50.2176 1.5153 39.5196 2.76096 30.0341 7.24939C20.5486 11.7378 12.8016 19.2201 7.98634 28.5439C3.17104 37.8677 1.55442 48.516 3.38544 58.8489C5.21647 69.1817 10.3936 78.6261 18.1195 85.7276C25.8454 92.8291 35.6917 97.1937 46.1419 98.1495C56.5922 99.1052 67.0668 96.599 75.9527 91.0168L50.4998 50.5L98.2719 47.8004Z"
              fill="white"
            />
            <Path
              d="M98.2719 47.8004C97.6798 37.3233 93.6599 27.3314 86.8311 19.3633C80.0024 11.3953 70.7436 5.89319 60.4806 3.70424C50.2176 1.5153 39.5196 2.76096 30.0341 7.24939C20.5486 11.7378 12.8016 19.2201 7.98634 28.5439C3.17104 37.8677 1.55442 48.516 3.38544 58.8489C5.21647 69.1817 10.3936 78.6261 18.1195 85.7276C25.8454 92.8291 35.6917 97.1937 46.1419 98.1495C56.5922 99.1052 67.0668 96.599 75.9527 91.0168L50.4998 50.5L98.2719 47.8004Z"
              stroke="white"
              strokeWidth="0.6"
              mask="url(#path-2-outside-1_224_2738)"
            />
          </G>

          <Circle cx="50" cy="50" r="1" fill="black" />

          <G id="Group 3">
            <Path
              id="Rectangle 32"
              d="M50.9688 51.3771L51.3882 51.114L76.2927 90.813L75.8733 91.0762L50.9688 51.3771Z"
              fill="white"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default ClockSvg;
