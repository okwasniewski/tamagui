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
      <_Path d="M72,104h32v48H72ZM232,56V216a7.9,7.9,0,0,1-3.8,6.8,8,8,0,0,1-7.8.4L192,208.9l-28.4,14.3a8.5,8.5,0,0,1-7.2,0L128,208.9,99.6,223.2a8.3,8.3,0,0,1-7.2,0L64,208.9,35.6,223.2a8,8,0,0,1-7.8-.4A7.9,7.9,0,0,1,24,216V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,96a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8Zm80,48a8,8,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8,8,0,0,0,200,144Zm0-32a8,8,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8,8,0,0,0,200,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'NewspaperClippingFill'

export const NewspaperClippingFill = memo<IconProps>(themed(Icon))
