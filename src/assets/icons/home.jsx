import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../thema/colors';
const Home = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.59 22H5.37C4.06 22 3 21.05 3 19.89V10.42C3 9.76004 3.35 9.14004 3.95 8.74004L11.31 3.83004C12.02 3.36004 12.94 3.36004 13.65 3.83004L21.01 8.74004C21.61 9.14004 21.96 9.76004 21.96 10.42V19.89C21.96 21.05 20.9 22 19.59 22Z"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M9.47998 22V15.57C9.47998 14.99 9.94998 14.52 10.53 14.52H14.59C15.17 14.52 15.64 14.99 15.64 15.57V22"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <Path
      d="M20.91 8.32V3.05C20.91 2.47 20.44 2 19.86 2H17.75C17.17 2 16.7 2.47 16.7 3.05V5.86"
      stroke="gray"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </Svg>
);
export default Home;
