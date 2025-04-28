import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../thema/colors';
const AddList = props => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5 5H12V7H5V5ZM8 13H5V11H8V13ZM5 10V8H12V10H5ZM17 13H15V15H13V13H11V11H13V9H15V11H17V13Z"
      fill={Colors.SPOTIFYGREEN}
      fillOpacity={0.85}
    />
  </Svg>
);
export default AddList;
