import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../../thema/colors";
const PlayIcon = (props) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.5 14.5V5.5L14.5 10L7.5 14.5Z"
      fill={Colors.SPOTIFYGREEN}
      fillOpacity={1}
    />
  </Svg>
);
export default PlayIcon;
