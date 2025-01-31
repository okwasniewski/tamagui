import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2" stroke={color} />
      <Path d="M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2" stroke={color} />
      <Line x1="22" x2="22" y1="11" y2="13" stroke={color} />
      <Line x1="10" x2="10" y1="7" y2="13" stroke={color} />
      <Line x1="10" x2="10" y1="17" y2="17.01" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'BatteryWarning'

export const BatteryWarning = memo<IconProps>(themed(Icon))
