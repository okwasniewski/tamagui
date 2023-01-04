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
      <_Path d="M223.9,149.1a7.9,7.9,0,0,1-5.6,9.8l-25.1,6.8,6.7,25a7.9,7.9,0,0,1-5.6,9.8l-2.1.3a8,8,0,0,1-7.7-5.9l-7.9-29.6L136,141.9v46.8l21.7,21.6a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,203.3l-18.3,18.4a8.1,8.1,0,0,1-11.4-11.4L120,188.7V141.9L79.4,165.3l-7.9,29.6a8,8,0,0,1-7.7,5.9l-2.1-.3a7.9,7.9,0,0,1-5.6-9.8l6.7-25-25.1-6.8a8,8,0,1,1,4.2-15.4l29.5,7.9L112,128,71.4,104.6l-29.5,7.9a7.6,7.6,0,0,1-2.1.3,8,8,0,0,1-2.1-15.7l25.1-6.8-6.7-25a8,8,0,0,1,15.4-4.2l7.9,29.6L120,114.1V67.3L98.3,45.7a8.1,8.1,0,0,1,11.4-11.4L128,52.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L136,67.3v46.8l40.6-23.4,7.9-29.6a8,8,0,1,1,15.4,4.2l-6.7,25,25.1,6.8a8,8,0,0,1-2.1,15.7l-2.1-.3-29.5-7.9L144,128l40.6,23.4,29.5-7.9A7.9,7.9,0,0,1,223.9,149.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'SnowflakeFill'

export const SnowflakeFill = memo<IconProps>(themed(Icon))
