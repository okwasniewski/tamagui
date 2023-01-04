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
      <_Path d="M231.6,175.1A56.2,56.2,0,0,1,176,224C96.6,224,32,159.4,32,80A56.2,56.2,0,0,1,80.9,24.4,16.3,16.3,0,0,1,97.6,34l20.1,46.9A15.9,15.9,0,0,1,116.3,96L99.7,121.4h0a76.5,76.5,0,0,0,35.2,35L160,139.7a15.6,15.6,0,0,1,15.1-1.3l46.9,20A16.3,16.3,0,0,1,231.6,175.1ZM160,104a8.5,8.5,0,0,0,5.7-2.3L200,67.3V88a8,8,0,0,0,16,0V48a8,8,0,0,0-8-8H168a8,8,0,0,0,0,16h20.7L154.3,90.3a8.1,8.1,0,0,0,0,11.4A8.5,8.5,0,0,0,160,104Z" />
    </_Svg>
  )
}

Icon.displayName = 'PhoneOutgoingFill'

export const PhoneOutgoingFill = memo<IconProps>(themed(Icon))
