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
      <_Path d="M88,75.3a16.1,16.1,0,0,1,0-22.6L116.7,24a15.9,15.9,0,0,1,22.6,0L168,52.7a16.1,16.1,0,0,1,0,22.6L139.3,104a15.9,15.9,0,0,1-22.6,0Zm144,41.4L203.3,88a15.9,15.9,0,0,0-22.6,0L152,116.7a16.1,16.1,0,0,0,0,22.6L180.7,168a15.9,15.9,0,0,0,22.6,0L232,139.3A16.1,16.1,0,0,0,232,116.7Zm-128,0L75.3,88a15.9,15.9,0,0,0-22.6,0L24,116.7a16.1,16.1,0,0,0,0,22.6L52.7,168a15.9,15.9,0,0,0,22.6,0L104,139.3A16.1,16.1,0,0,0,104,116.7ZM139.3,152a15.9,15.9,0,0,0-22.6,0L88,180.7a16.1,16.1,0,0,0,0,22.6L116.7,232a15.9,15.9,0,0,0,22.6,0L168,203.3a16.1,16.1,0,0,0,0-22.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'DiamondsFourFill'

export const DiamondsFourFill = memo<IconProps>(themed(Icon))
