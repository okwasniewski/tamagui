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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM159.6,86.5l-32,96A7.9,7.9,0,0,1,120,188a7.3,7.3,0,0,1-2.5-.4,8,8,0,0,1-5.1-10.1L140.9,92H104a8,8,0,0,1,0-16h48a7.9,7.9,0,0,1,6.5,3.3A8.1,8.1,0,0,1,159.6,86.5Z" />
    </_Svg>
  )
}

Icon.displayName = 'NumberSquareSevenFill'

export const NumberSquareSevenFill = memo<IconProps>(themed(Icon))
