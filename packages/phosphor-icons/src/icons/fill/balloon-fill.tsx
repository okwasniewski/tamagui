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
      <_Path d="M128,16a88.1,88.1,0,0,0-88,88c0,23.4,9.4,49.4,25.1,69.5,11.9,15.2,26.2,25.7,41.3,30.9L96.6,229a8,8,0,0,0,.8,7.5A7.9,7.9,0,0,0,104,240h48a7.9,7.9,0,0,0,6.6-3.5,8,8,0,0,0,.8-7.5l-9.8-24.6c15.1-5.2,29.4-15.7,41.3-30.9C206.6,153.4,216,127.4,216,104A88.1,88.1,0,0,0,128,16Zm48.7,87.9h-1.4a8.1,8.1,0,0,1-7.9-6.7,39.7,39.7,0,0,0-32.7-32.7,8.1,8.1,0,0,1-6.6-9.3,7.9,7.9,0,0,1,9.2-6.5,55.9,55.9,0,0,1,45.9,45.9A7.9,7.9,0,0,1,176.7,103.9Z" />
    </_Svg>
  )
}

Icon.displayName = 'BalloonFill'

export const BalloonFill = memo<IconProps>(themed(Icon))
