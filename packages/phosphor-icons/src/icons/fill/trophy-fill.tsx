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
      <_Path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H23.9a16,16,0,0,0-16,16V96a40,40,0,0,0,40,40h4c9.7,29.9,36.2,52.3,68.1,55.6V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.6A79.7,79.7,0,0,0,204.3,136H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM47.9,120a24,24,0,0,1-24-24V80H48v31.1a86.9,86.9,0,0,0,.5,8.9ZM232,96a24.1,24.1,0,0,1-24,24h-.4a70.3,70.3,0,0,0,.4-8V80h24Z" />
    </_Svg>
  )
}

Icon.displayName = 'TrophyFill'

export const TrophyFill = memo<IconProps>(themed(Icon))
