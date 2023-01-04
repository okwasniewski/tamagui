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
      <_Path d="M216,48V88a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3L188,79.3,156.3,111a8,8,0,0,1-5.7,2.4A7.7,7.7,0,0,1,145,111a7.9,7.9,0,0,1,0-11.3L176.7,68,162.3,53.7a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,168,40h40A8,8,0,0,1,216,48Zm-4.9,112.6a8.4,8.4,0,0,0-8.8,1.7L188,176.7,53.7,42.3A8.1,8.1,0,0,0,42.3,53.7L176.7,188l-14.4,14.3a8.4,8.4,0,0,0-1.7,8.8A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.1,160.6ZM99.7,145,42.3,202.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L111,156.3A8,8,0,0,0,99.7,145Z" />
    </_Svg>
  )
}

Icon.displayName = 'ShuffleSimpleFill'

export const ShuffleSimpleFill = memo<IconProps>(themed(Icon))
