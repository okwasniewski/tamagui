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
      <_Path d="M132.2,25.2a7.9,7.9,0,0,0-8.4,0A153.5,153.5,0,0,0,96.2,48C77.8,67.1,68,87.9,68,108a60,60,0,0,0,120,0C188,60.1,134.5,26.6,132.2,25.2ZM128,152a23.9,23.9,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40A23.9,23.9,0,0,1,128,152Zm95.6,74.4A8,8,0,0,1,216,232a6.7,6.7,0,0,1-2.4-.4L128,204.4,42.4,231.6a6.7,6.7,0,0,1-2.4.4,8,8,0,0,1-7.6-5.6,7.9,7.9,0,0,1,5.2-10l64-20.4-64-20.4a8,8,0,1,1,4.8-15.2L128,187.6l85.6-27.2a8,8,0,1,1,4.8,15.2l-64,20.4,64,20.4A7.9,7.9,0,0,1,223.6,226.4Z" />
    </_Svg>
  )
}

Icon.displayName = 'CampfireFill'

export const CampfireFill = memo<IconProps>(themed(Icon))
