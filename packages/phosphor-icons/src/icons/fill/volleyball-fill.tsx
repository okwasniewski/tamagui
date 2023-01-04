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
      <_Path d="M232,127.6A104,104,0,1,0,37.9,180c2,3.4,4.2,6.7,6.5,9.9l.5.7a103.9,103.9,0,0,0,178.2-20.7,7.2,7.2,0,0,0,.9-2,105.7,105.7,0,0,0,8-39.3v-1ZM44.5,155.9A88.2,88.2,0,0,1,77.3,56.1L94.4,85.8a104.4,104.4,0,0,0-49.9,70.1Zm32.8,44a84.2,84.2,0,0,1-18.4-17.4,88,88,0,0,1,43.5-82.9L118.8,128Zm132.4-39.3a88.2,88.2,0,0,1-93.5,3.8L132.6,136h83A89.3,89.3,0,0,1,209.7,160.6ZM181.4,120a105,105,0,0,0-35.7-78.2A87.9,87.9,0,0,1,215.6,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'VolleyballFill'

export const VolleyballFill = memo<IconProps>(themed(Icon))
