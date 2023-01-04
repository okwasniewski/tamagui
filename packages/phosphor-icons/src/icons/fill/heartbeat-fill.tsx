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
      <_Path d="M236,92c0,30.6-17.7,62-52.6,93.4A314.3,314.3,0,0,1,131.9,223a8.1,8.1,0,0,1-7.8,0c-3.2-1.8-60.4-34.3-88.6-80.9a4,4,0,0,1,3.4-6.1H72a7.9,7.9,0,0,0,6.7-3.6l9.3-14,25.3,38a8.1,8.1,0,0,0,9.2,3.2,8.8,8.8,0,0,0,4.3-3.3L140.3,136h19.4a8.2,8.2,0,0,0,8.3-7.5,8,8,0,0,0-8-8.5H136a7.9,7.9,0,0,0-6.7,3.6l-9.3,14-25.3-38a8.1,8.1,0,0,0-9.2-3.2,8.8,8.8,0,0,0-4.3,3.3L67.7,120H27.8a4,4,0,0,1-3.8-2.8A86.2,86.2,0,0,1,20,92,60,60,0,0,1,128,56,60,60,0,0,1,236,92Z" />
    </_Svg>
  )
}

Icon.displayName = 'HeartbeatFill'

export const HeartbeatFill = memo<IconProps>(themed(Icon))
