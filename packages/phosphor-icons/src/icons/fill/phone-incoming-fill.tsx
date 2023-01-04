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
      <_Path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z" />
      <_Path d="M152.1,97.1a.9.9,0,0,0,.1.5v.3a.8.8,0,0,1,.1.4l.2.4c0,.1.1.2.1.4l.2.3c0,.1.1.2.1.4l.2.3.3.3.2.3a.8.8,0,0,0,.2.4c.1.1.3.2.4.4a.3.3,0,0,1,.1.2h.2l.4.4.4.2.3.3.3.2.3.2h.4l.3.2h.4l.4.2H200a8,8,0,0,0,0-16H179.3l34.4-34.3a8.1,8.1,0,0,0-11.4-11.4L168,76.7V56a8,8,0,0,0-16,0V96.8A.4.4,0,0,1,152.1,97.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'PhoneIncomingFill'

export const PhoneIncomingFill = memo<IconProps>(themed(Icon))
