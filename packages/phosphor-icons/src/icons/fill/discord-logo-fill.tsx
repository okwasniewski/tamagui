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
      <_Path d="M247.3,169.8l-34-113.2a15.6,15.6,0,0,0-9.2-10.2h-.6l.6-.2A192.4,192.4,0,0,0,169.6,36a8,8,0,0,0-9.4,6.3,7.9,7.9,0,0,0,6.2,9.4c4.5.9,8.9,2,13.2,3.2A8,8,0,0,1,176,70h-.8A185.4,185.4,0,0,0,128,64a181.8,181.8,0,0,0-46.1,5.8,8,8,0,0,1-5.6-14.9h.1c4.3-1.2,8.7-2.3,13.2-3.2a8,8,0,0,0,6.3-9.4A8.1,8.1,0,0,0,86.5,36,191.2,191.2,0,0,0,51.9,46.4a15.6,15.6,0,0,0-9.2,10.2L8.7,169.8a16,16,0,0,0,4.9,16.7,34.7,34.7,0,0,0,2.9,2.5h.1c16.2,13.2,37.5,23.3,61.5,29.1a6.3,6.3,0,0,0,1.9.3,8,8,0,0,0,1.9-15.8,160.3,160.3,0,0,1-31.3-11.1h0a8,8,0,0,1,8.6-13.2c19,8.4,42.9,13.7,68.8,13.7s49.8-5.3,68.8-13.7a8,8,0,0,1,8.6,13.2h0a160.3,160.3,0,0,1-31.3,11.1,8,8,0,0,0,1.9,15.8,6.3,6.3,0,0,0,1.9-.3c24-5.8,45.3-15.9,61.5-29.1h.1a34.7,34.7,0,0,0,2.9-2.5A16,16,0,0,0,247.3,169.8ZM96,156a12,12,0,1,1,12-12A12,12,0,0,1,96,156Zm64,0a12,12,0,1,1,12-12A12,12,0,0,1,160,156Z" />
    </_Svg>
  )
}

Icon.displayName = 'DiscordLogoFill'

export const DiscordLogoFill = memo<IconProps>(themed(Icon))
