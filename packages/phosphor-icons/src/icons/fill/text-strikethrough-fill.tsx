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
      <_Path d="M224,128a8,8,0,0,1-8,8H175.9c9.2,7.1,16.1,17.2,16.1,32s-7,25.7-19.8,34.8S144.6,216,128,216s-32.3-4.7-44.2-13.2S64,181.3,64,168a8,8,0,0,1,16,0c0,17.3,22,32,48,32s48-14.7,48-32c0-14.9-10.5-23.6-38.8-32H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM76.3,104a6.9,6.9,0,0,0,2.5-.4,8,8,0,0,0,5.1-10.1,19.2,19.2,0,0,1-.8-5.5c0-18.2,19.3-32,44.9-32,19.5,0,36.1,8.3,42.3,21A8.1,8.1,0,0,0,181,80.7,7.9,7.9,0,0,0,184.7,70c-9-18.5-30.7-30-56.7-30C93.3,40,67.1,60.6,67.1,88a36,36,0,0,0,1.6,10.5A8,8,0,0,0,76.3,104Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextStrikethroughFill'

export const TextStrikethroughFill = memo<IconProps>(themed(Icon))
