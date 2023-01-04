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
      <_Path d="M224,67.5a35.5,35.5,0,0,0-11.3-25.7c-14-13.2-36.7-12.7-50.6,1.2L140.2,64.9a24.1,24.1,0,0,0-33.2.8l-7,7a16.1,16.1,0,0,0,0,22.6l2.1,2.1L51.7,147.7a40.3,40.3,0,0,0-11,35.8l-9.8,22.4a13.6,13.6,0,0,0,2.9,15.2,15.8,15.8,0,0,0,11.3,4.7,16.3,16.3,0,0,0,6.4-1.3l21-9.2a40.3,40.3,0,0,0,35.8-11l50.3-50.4,2.1,2.1a15.9,15.9,0,0,0,22.6,0l7-7a24.1,24.1,0,0,0,.8-33.2l22.4-22.3A36.2,36.2,0,0,0,224,67.5ZM137.9,152H70.1l43.3-43.3,33.9,33.9Zm64.2-69.9-28,28a8.1,8.1,0,0,0,0,11.4l4.9,4.8a8.1,8.1,0,0,1,0,11.4l-7,7L111.3,84l7-7a8,8,0,0,1,11.4,0l4.8,4.9a8.1,8.1,0,0,0,11.4,0l27.5-27.6c7.9-7.8,20.6-8.2,28.3-.8A19.7,19.7,0,0,1,208,67.7,19.4,19.4,0,0,1,202.1,82.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'EyedropperSampleFill'

export const EyedropperSampleFill = memo<IconProps>(themed(Icon))
