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
      <_Path d="M239.2,95a64.3,64.3,0,0,1-18.9,41.5l-81,81a15.9,15.9,0,0,1-22.6,0L33.6,134.4a59.9,59.9,0,0,1,2.3-87A57.7,57.7,0,0,1,79,32.8a64.4,64.4,0,0,1,33.8,12.3,4,4,0,0,1,.5,6.1L94.9,69.6a8,8,0,0,0,0,11.3l34.4,34.3-15,15.1a7.9,7.9,0,0,0,0,11.3,8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3l20.7-20.7a8,8,0,0,0,0-11.3L111.9,75.2l21.7-21.6h0l4-4a59.9,59.9,0,0,1,87,2.3A57.7,57.7,0,0,1,239.2,95Z" />
    </_Svg>
  )
}

Icon.displayName = 'HeartStraightBreakFill'

export const HeartStraightBreakFill = memo<IconProps>(themed(Icon))
