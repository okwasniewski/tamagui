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
      <_Path d="M168,143.3V48a40,40,0,0,0-80,0v95.3A59.4,59.4,0,0,0,68,188a60,60,0,0,0,120,0A59.4,59.4,0,0,0,168,143.3ZM128,24a24.1,24.1,0,0,1,24,24V80H104V48A24.1,24.1,0,0,1,128,24Z" />
    </_Svg>
  )
}

Icon.displayName = 'ThermometerSimpleFill'

export const ThermometerSimpleFill = memo<IconProps>(themed(Icon))
