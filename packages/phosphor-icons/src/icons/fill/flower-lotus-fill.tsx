import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Circle as _Circle,
  Defs as _Defs,
  Ellipse as _Ellipse,
  G as _G,
  Line as _Line,
  LinearGradient as _LinearGradient,
  Path as _Path,
  Polygon as _Polygon,
  Polyline as _Polyline,
  RadialGradient as _RadialGradient,
  Rect as _Rect,
  Stop as _Stop,
  Svg as _Svg,
  Symbol as _Symbol,
  Text as _Text,
  Use as _Use,
} from 'react-native-svg'

import { IconProps } from '../../IconProps'
import { themed } from '../../themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg
      viewBox="0 0 256 256"
      {...otherProps}
      height={size}
      width={size}
      fill={`${color}`}
    >
      <_Rect width="256" height="256" fill="none" />
      <_Path d="M250.5,121.3a15.9,15.9,0,0,0-9.9-7.5,77.1,77.1,0,0,0-27.9-1.8,86.7,86.7,0,0,0-2.6-40.9,15.9,15.9,0,0,0-18.5-10.7,82.3,82.3,0,0,0-26.2,10.8,94.4,94.4,0,0,0-27.8-34.4,15.9,15.9,0,0,0-19.2,0A94.4,94.4,0,0,0,90.6,71.2,82.3,82.3,0,0,0,64.4,60.4,15.9,15.9,0,0,0,45.9,71.1,86.7,86.7,0,0,0,43.3,112a77.1,77.1,0,0,0-27.9,1.8A15.9,15.9,0,0,0,4,133.6c3.5,12.6,14.3,36.7,47.1,55.6S112.5,208,127.9,208h.2c15.4,0,44.2,0,76.8-18.8s43.6-43,47.1-55.6A16,16,0,0,0,250.5,121.3ZM128,49.6c9.6,7.2,32,28.4,32,70.4s-22.4,63.2-32,70.4h0c-9.6-7.2-32-28.4-32-70.4S118.4,56.8,128,49.6ZM19.3,129.3c6.2-1.6,15.9-2.8,28.4-.6a117.1,117.1,0,0,0,9.7,20.9,137.9,137.9,0,0,0,33.2,38.6,123.4,123.4,0,0,1-31.5-12.9C31.3,159.2,22.3,139.5,19.3,129.3Zm177.6,46a123.4,123.4,0,0,1-31.5,12.9,137.9,137.9,0,0,0,33.2-38.6,117.1,117.1,0,0,0,9.7-20.9,68.8,68.8,0,0,1,28.3.5C233.7,139.5,224.7,159.2,196.9,175.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'FlowerLotusFill'

export const FlowerLotusFill = memo<IconProps>(themed(Icon))
