import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../thema/colors";
const ArrowBack = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10ZM10 9H14V11H10V14L6 10L10 6V9Z"
      fill={Colors.SPOTIFYGREEN}
      fillOpacity={0.85}
    />
  </Svg>
);
export default ArrowBack;
