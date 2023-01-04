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
      <_Path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm85.5,94.5a37.9,37.9,0,0,0-12-7.9l21.1-30a8,8,0,0,0,.5-8.3A8.1,8.1,0,0,0,240,100H192a8,8,0,0,0,0,16h32.6l-19.2,27.4a8,8,0,0,0-.5,8.3A8.1,8.1,0,0,0,212,156a20,20,0,1,1-14.1,34.1,8.1,8.1,0,0,0-11.4,11.4,36.1,36.1,0,0,0,51-51Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextHThreeFill'

export const TextHThreeFill = memo<IconProps>(themed(Icon))
