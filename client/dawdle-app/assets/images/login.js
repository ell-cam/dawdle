import React from 'react';
import { Svg, Path } from 'react-native-svg';

const LoginSVG = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      {/* Background Circle */}
      <Path
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z"
        fill={color}
      />
      {/* Lock Icon */}
      <Path
        d="M17 10V17H7V10H17ZM17 8C17 7.44772 16.5523 7 16 7H15V4C15 2.89543 14.1046 2 13 2C11.8954 2 11 2.89543 11 4V7H8C7.44772 7 7 7.44772 7 8V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V8Z"
        fill="#fff"
      />
    </Svg>
  );
};

export default LoginSVG;