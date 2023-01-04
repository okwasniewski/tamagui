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
      <_Path d="M237.2,151.9h0c0-.1-.1-.1-.1-.2a42.3,42.3,0,0,0-2.3-5.3L193.3,51.8a8.1,8.1,0,0,0-1.7-2.4,32,32,0,0,0-45.3,0A7.9,7.9,0,0,0,144,55V84H112V55a7.9,7.9,0,0,0-2.3-5.6,32,32,0,0,0-45.3,0,8.1,8.1,0,0,0-1.7,2.4L21.2,146.3a42.3,42.3,0,0,0-2.3,5.3c0,.1-.1.1-.1.2h0A48,48,0,1,0,112,167.8V100h32v67.8a48,48,0,1,0,93.2-15.9Zm-143.1,27a32,32,0,0,1-60.2-21.7l1.8-4.1A32,32,0,0,1,96,167.9h0A32.1,32.1,0,0,1,94.1,178.9Zm108.8,19.2A32,32,0,0,1,160,168h0a32,32,0,0,1,60.3-14.8l1.8,4.1A32,32,0,0,1,202.9,198.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'BinocularsFill'

export const BinocularsFill = memo<IconProps>(themed(Icon))
