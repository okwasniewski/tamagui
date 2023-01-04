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
      <_Path d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80.2,80.2,0,0,0-113.2,0,7.9,7.9,0,0,1-11.3,0,8,8,0,0,1,0-11.3,96.2,96.2,0,0,1,135.8,0l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7ZM184.6,184.6a80.2,80.2,0,0,1-113.2,0l-4.3-4.3,18.4-18.4a8,8,0,0,0-5.7-13.6h-48a8,8,0,0,0-8,8v48a8.2,8.2,0,0,0,5,7.4,8,8,0,0,0,3,.6,7.8,7.8,0,0,0,5.7-2.4l18.3-18.3,4.3,4.3a96.1,96.1,0,0,0,135.8,0,8,8,0,0,0,0-11.3A7.9,7.9,0,0,0,184.6,184.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsClockwiseFill'

export const ArrowsClockwiseFill = memo<IconProps>(themed(Icon))
