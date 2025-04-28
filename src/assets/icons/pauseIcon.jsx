import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PauseIcon = props => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 14H7V6H9V14ZM13 14H11V6H13V14Z"
      fill="white"
      fillOpacity={0.54}
    />
  </Svg>
);
export default PauseIcon;
