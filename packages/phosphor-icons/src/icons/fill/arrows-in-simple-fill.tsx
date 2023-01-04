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
      <_Path d="M213.7,53.7,187.3,80l18.4,18.3a8.4,8.4,0,0,1,1.7,8.8A8,8,0,0,1,200,112H152a8,8,0,0,1-8-8V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7L176,68.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4ZM104,144H56a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L68.7,176,42.3,202.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L80,187.3l18.3,18.4A8.3,8.3,0,0,0,104,208a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,112,200V152A8,8,0,0,0,104,144Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsInSimpleFill'

export const ArrowsInSimpleFill = memo<IconProps>(themed(Icon))
