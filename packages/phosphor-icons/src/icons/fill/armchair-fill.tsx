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
      <_Path d="M216,159v41a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V159a32,32,0,1,1,40-31v40a8,8,0,0,0,16,0V136h64v32a8,8,0,0,0,16,0V128a32,32,0,1,1,40,31ZM95.3,120h65.4A48,48,0,0,1,208,80h3.7a3.9,3.9,0,0,0,4.3-3.9V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72v4.2a3.9,3.9,0,0,0,4.3,3.9H48A48,48,0,0,1,95.3,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArmchairFill'

export const ArmchairFill = memo<IconProps>(themed(Icon))
