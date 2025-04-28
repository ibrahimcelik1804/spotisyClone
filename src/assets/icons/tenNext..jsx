import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { Colors } from '../../thema/colors';
const TenNext = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14 12C14 15.31 11.31 18 8 18C4.69 18 2 15.31 2 12C2 8.69 4.69 6 8 6V10L13 5L8 0V4C3.58 4 0 7.58 0 12C0 16.42 3.58 20 8 20C12.42 20 16 16.42 16 12H14Z"
      fill={Colors.SPOTIFYGREEN}
      fillOpacity={0.85}
    />
    <Path
      d="M6.86 14.94V10.67H6.77L5 11.3V11.99L6.01 11.68V14.94H6.86Z"
      fill={Colors.SPOTIFYGREEN}
      fillOpacity={0.85}
    />
    <Path
      d="M8.25 12.44V13.18C8.25 15.08 9.56 15 9.69 15C9.83 15 11.13 15.09 11.13 13.18V12.44C11.13 10.85 9.82 10.62 9.69 10.62C9.55 10.62 8.25 10.53 8.25 12.44ZM10.29 12.32V13.29C10.29 14.06 10.08 14.32 9.7 14.32C9.32 14.32 9.1 14.06 9.1 13.29V12.32C9.1 11.57 9.32 11.31 9.69 11.31C10.07 11.3 10.29 11.57 10.29 12.32Z"
      fill={Colors.SPOTIFYGREEN}
      fillOpacity={0.85}
    />
  </Svg>
);
export default TenNext;
