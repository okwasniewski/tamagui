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
      <_Path d="M180.6,211a8.1,8.1,0,0,1-6.6,9.2h-1.3a8.1,8.1,0,0,1-7.9-6.7l-3.9-23.5a8,8,0,0,1,15.8-2.7ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184Zm-39.5-3.1a7.9,7.9,0,0,0-9.2,6.5L75.4,211a8.1,8.1,0,0,0,6.6,9.2h1.3a8.1,8.1,0,0,0,7.9-6.7l3.9-23.5A8,8,0,0,0,88.5,180.9ZM248,112c0,16.2-13.4,30.9-37.7,41.3C188.2,162.8,159,168,128,168s-60.2-5.2-82.3-14.7C21.4,142.9,8,128.2,8,112c0-8.4,3.7-20.8,21.2-32.5,11.3-7.6,26.9-13.8,45.2-17.9A63.6,63.6,0,0,1,173,50.5a64.7,64.7,0,0,1,9.1,11.2C223.4,71.1,248,89.7,248,112ZM80,96.8v3.1a7.8,7.8,0,0,0,6.1,7.7A189.1,189.1,0,0,0,128,112a189.1,189.1,0,0,0,41.9-4.4,7.8,7.8,0,0,0,6.1-7.7V96a47.5,47.5,0,0,0-6.1-23.4h0a51.7,51.7,0,0,0-8.2-10.7A47.4,47.4,0,0,0,127.4,48C101.2,48.3,80,70.2,80,96.8Z" />
    </_Svg>
  )
}

Icon.displayName = 'FlyingSaucerFill'

export const FlyingSaucerFill = memo<IconProps>(themed(Icon))
