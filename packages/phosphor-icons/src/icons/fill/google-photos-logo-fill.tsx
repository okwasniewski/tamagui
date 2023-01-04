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
      <_Path d="M232,124H187a67.4,67.4,0,0,0,13-40,68.1,68.1,0,0,0-68-68,8,8,0,0,0-8,8V69A67.4,67.4,0,0,0,84,56a68.1,68.1,0,0,0-68,68,8,8,0,0,0,8,8H69a67.4,67.4,0,0,0-13,40,68.1,68.1,0,0,0,68,68,8,8,0,0,0,8-8V187a67.4,67.4,0,0,0,40,13,68.1,68.1,0,0,0,68-68A8,8,0,0,0,232,124ZM84,72a51.5,51.5,0,0,1,40,18.8V116H32.6A52.1,52.1,0,0,1,84,72Zm88,112a51.5,51.5,0,0,1-40-18.8V140h91.4A52.1,52.1,0,0,1,172,184Z" />
    </_Svg>
  )
}

Icon.displayName = 'GooglePhotosLogoFill'

export const GooglePhotosLogoFill = memo<IconProps>(themed(Icon))
