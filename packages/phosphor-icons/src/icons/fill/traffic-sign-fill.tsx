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
      <_Path d="M244,116.7,139.3,12a15.9,15.9,0,0,0-22.6,0L12,116.7a16.1,16.1,0,0,0,0,22.6L116.7,244a15.9,15.9,0,0,0,22.6,0L244,139.3A16.1,16.1,0,0,0,244,116.7ZM176,120v.8a.4.4,0,0,0-.1.3.9.9,0,0,1-.1.5.8.8,0,0,1-.1.4v.3l-.2.4c0,.1-.1.2-.1.4l-.2.3v.4l-.2.3c-.1.1-.2.2-.2.3l-.3.4-.2.3-.5.5h0l-24,24a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L148.7,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32.1,32.1,0,0,1,32-32h36.7l-10.4-10.3a8.1,8.1,0,0,1,11.4-11.4l24,24h0l.5.5.2.3.3.4c0,.1.1.2.2.3l.2.3v.4l.2.3c0,.2.1.3.1.4l.2.4v.3a.8.8,0,0,1,.1.4.9.9,0,0,1,.1.5.4.4,0,0,0,.1.3v.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'TrafficSignFill'

export const TrafficSignFill = memo<IconProps>(themed(Icon))
