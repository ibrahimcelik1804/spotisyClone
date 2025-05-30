import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FaceIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 20 20"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z"
      fill="#3b5998"
    />
  </Svg>
);
export default FaceIcon;
