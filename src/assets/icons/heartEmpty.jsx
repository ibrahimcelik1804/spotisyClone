import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../../thema/colors';
const HeartEmpty = props => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="heart">
      <Path
        id="Icon"
        d="M58.6066 16.3934C64.4644 22.2513 64.4644 31.7487 58.6066 37.6066L38.1213 58.0919C36.9497 59.2635 35.0502 59.2635 33.8786 58.0919L13.3934 37.6066C7.53553 31.7487 7.53553 22.2513 13.3934 16.3934C18.0504 11.7364 23.6717 10.3104 29.3438 13.0781C31.595 14.1766 34.5468 16.3934 36 19.2891C37.4531 16.3934 40.4049 14.1766 42.6562 13.0781C48.3283 10.3104 53.9496 11.7364 58.6066 16.3934Z"
        stroke={Colors.SPOTIFYGREEN}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default HeartEmpty;
