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
      <_Path d="M88,72V48a8,8,0,0,1,16,0V72a8,8,0,0,1-16,0Zm72,104a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V184A8,8,0,0,0,160,176ZM48,104H72a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm160,48H184a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-86.1,27.3-11.3,11.3a32,32,0,0,1-45.2-45.2l11.3-11.3a8.1,8.1,0,0,0,0-11.4,8,8,0,0,0-11.3,0L54.1,134.1a47.9,47.9,0,1,0,67.8,67.8l11.4-11.3a8,8,0,0,0,0-11.3A8.1,8.1,0,0,0,121.9,179.3ZM190.6,65.4a31.9,31.9,0,0,1,0,45.2l-11.3,11.3a8.1,8.1,0,0,0,0,11.4,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l11.3-11.4a47.9,47.9,0,0,0-67.8-67.8L122.7,65.4a8,8,0,0,0,0,11.3,8.1,8.1,0,0,0,11.4,0l11.3-11.3A31.9,31.9,0,0,1,190.6,65.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'LinkBreakFill'

export const LinkBreakFill = memo<IconProps>(themed(Icon))
