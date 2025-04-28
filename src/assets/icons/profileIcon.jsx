import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { Colors } from '../../thema/colors';
const ProfileIcon = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11 10.0301C12.42 10.0301 13.58 8.88012 13.58 7.45012C13.58 6.02012 12.42 4.87012 11 4.87012C9.58 4.87012 8.41998 6.02012 8.41998 7.45012C8.41998 8.88012 9.58 10.0301 11 10.0301Z"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M4.54999 19.0599C4.54999 15.4999 7.44 12.6099 11 12.6099C14.56 12.6099 17.45 15.4999 17.45 19.0599"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M11 21C16.52 21 21 16.52 21 11C21 5.48 16.52 1 11 1C5.48 1 1 5.48 1 11C1 16.52 5.48 21 11 21Z"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </Svg>
);
export default ProfileIcon;
