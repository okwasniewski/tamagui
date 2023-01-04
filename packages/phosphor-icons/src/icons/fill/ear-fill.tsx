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
      <_Path d="M188,152a28,28,0,0,1-56,0c0-15.7,9.3-23.7,16.8-30.1S160,111.9,160,104a32,32,0,0,0-64,0,8,8,0,0,1-16,0,48,48,0,0,1,96,0c0,15.7-9.3,23.7-16.8,30.1S148,144.1,148,152a12,12,0,0,0,24,0,8,8,0,0,1,16,0ZM128,16a88.1,88.1,0,0,0-88,88c0,33.5,12.5,45.5,22.5,55.2,7.8,7.5,13.5,13,13.5,28.8a52,52,0,0,0,92.1,33.1,8.1,8.1,0,0,0-1.1-11.3,7.9,7.9,0,0,0-11.2,1.1A36,36,0,0,1,92,188c0-22.6-9.8-32-18.4-40.4S56,130.7,56,104a72,72,0,0,1,144,0,8,8,0,0,0,16,0A88.1,88.1,0,0,0,128,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'EarFill'

export const EarFill = memo<IconProps>(themed(Icon))
