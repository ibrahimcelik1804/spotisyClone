import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../thema/colors';
const HeartIcon = props => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20 5.65C20 11.14 11.23 17.38 9.97 17.38C8.71 17.38 0 11.15 0 5.65C0 4.48 0.359999 3.34 1.03 2.39C1.7 1.44 2.65 0.71 3.75 0.33C4.85 -0.0599998 6.04 -0.1 7.16 0.22C8.28 0.54 9.27 1.2 10 2.11C10.52 1.45 11.19 0.92 11.95 0.55C12.71 0.18 13.54 0 14.38 0C15.12 0 15.85 0.14 16.53 0.43C17.21 0.71 17.83 1.13 18.36 1.66C18.88 2.19 19.3 2.81 19.58 3.49C19.86 4.18 20.01 4.91 20.01 5.65H20Z"
      fill="red"
    />
  </Svg>
);
export default HeartIcon;
