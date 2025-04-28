import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../thema/colors";
const Moon = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 2C15.82 2 17.53 2.5 19 3.35C16.01 5.08 14 8.3 14 12C14 15.7 16.01 18.92 19 20.65C17.53 21.5 15.82 22 14 22C8.48 22 4 17.52 4 12C4 6.48 8.48 2 14 2Z"
      fill="gold"
      fillOpacity={1}
    />
  </Svg>
);
export default Moon;
