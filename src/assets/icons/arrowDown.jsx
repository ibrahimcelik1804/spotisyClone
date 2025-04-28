import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../thema/colors';
const DownArrow = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14 9L10 13L6 9M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
      stroke={Colors.WHITE}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DownArrow;
