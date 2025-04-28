import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { Colors } from '../../thema/colors';
const SearchIcon = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 22C17.53 22 22 17.52 22 12C22 6.48 17.53 2 12 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 12 22Z"
      stroke="gray"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <Path
      d="M19.69 19.71L22 22"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
export default SearchIcon;
