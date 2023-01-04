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
      <_Path d="M241.6,171.2,141.3,96l23.5-17.6A8.1,8.1,0,0,0,168,72a40,40,0,0,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.7-3.8L123.3,89.5l-.2.2L14.4,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM24,184l104-78,104,78H24Z" />
    </_Svg>
  )
}

Icon.displayName = 'CoatHangerFill'

export const CoatHangerFill = memo<IconProps>(themed(Icon))
