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
      <_Path d="M221.4,36.3a16.3,16.3,0,0,0-17,4L187.5,57.2a111.5,111.5,0,0,0-119,0L51.6,40.3a16.3,16.3,0,0,0-17-4A15.9,15.9,0,0,0,24,51.3V136c0,49.1,40.1,89.6,91.6,95.3a4,4,0,0,0,4.4-4v-32l-13.4-13.4a8.3,8.3,0,0,1-.4-11.4,8.1,8.1,0,0,1,11.5-.2L128,180.7l10.3-10.4a8.1,8.1,0,0,1,11.5.2,8.3,8.3,0,0,1-.4,11.4L136,195.3v32a4,4,0,0,0,4.4,4c51.5-5.7,91.6-46.2,91.6-95.3V51.3A15.9,15.9,0,0,0,221.4,36.3ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,0,1-16,0V69a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'CatFill'

export const CatFill = memo<IconProps>(themed(Icon))
