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
      <_Path d="M224.1,79.9l-.3-.4A43.9,43.9,0,0,0,168,41.7a44,44,0,0,0-80,0A43.9,43.9,0,0,0,32.2,79.5l-.3.4a15.7,15.7,0,0,0-4.6,15.2L54.8,211.7A15.9,15.9,0,0,0,70.3,224H185.7a15.9,15.9,0,0,0,15.5-12.3L228.7,95.1A15.7,15.7,0,0,0,224.1,79.9ZM76,56a27.4,27.4,0,0,1,13.1,3.3,8.4,8.4,0,0,0,7.1.2,8.2,8.2,0,0,0,4.5-5.6,28,28,0,0,1,54.6,0,8.2,8.2,0,0,0,4.5,5.6,8.4,8.4,0,0,0,7.1-.2A27.4,27.4,0,0,1,180,56a28,28,0,0,1,27,20.5L168.4,87.6,133.9,73.8a15.1,15.1,0,0,0-11.8,0L87.6,87.6,49,76.5A28,28,0,0,1,76,56ZM42.9,91.4h0l37.9,10.9L94.9,208H70.3ZM185.7,208H161.1l14.1-105.7,37.9-10.9h0Z" />
    </_Svg>
  )
}

Icon.displayName = 'PopcornFill'

export const PopcornFill = memo<IconProps>(themed(Icon))
