import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { Colors } from '../../thema/colors';
const HomeFilled = props => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.93 9.37V3.23C20.93 2.56 20.46 2 19.88 2H17.77C17.19 2 16.72 2.55 16.72 3.23V6.5"
      fill={Colors.SPOTIFYGREEN}
    />
    <Path
      d="M14.6 15.3101H10.54C10.39 15.3101 10.28 15.4301 10.28 15.5701V22.0001H14.87V15.5701C14.87 15.4201 14.75 15.3101 14.61 15.3101H14.6Z"
      fill={Colors.SPOTIFYGREEN}
    />
    <Path
      d="M21.03 8.74004L13.66 3.83004C12.95 3.36004 12.03 3.36004 11.32 3.83004L3.95001 8.74004C3.35001 9.14004 3 9.76004 3 10.42V19.89C3 21.05 4.07001 22 5.37001 22H8.69V15.57C8.69 14.56 9.52001 13.73 10.54 13.73H14.6C15.61 13.73 16.45 14.56 16.45 15.57V22H19.61C20.92 22 21.98 21.05 21.98 19.89V10.42C21.98 9.76004 21.63 9.14004 21.03 8.74004Z"
      fill={Colors.SPOTIFYGREEN}
    />
  </Svg>
);
export default HomeFilled;
