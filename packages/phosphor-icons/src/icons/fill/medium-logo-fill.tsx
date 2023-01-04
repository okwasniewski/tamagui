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
      <_Path d="M136,128c0,37.5-28.7,68-64,68S8,165.5,8,128,36.7,60,72,60,136,90.5,136,128Zm48-64c-5.7,0-16.4,2.8-24.3,21.3-5,11.5-7.7,26.7-7.7,42.7s2.7,31.2,7.7,42.7c7.9,18.5,18.6,21.3,24.3,21.3s16.4-2.8,24.3-21.3c5-11.5,7.7-26.7,7.7-42.7s-2.7-31.2-7.7-42.7C200.4,66.8,189.7,64,184,64Zm56,0a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8,8,0,0,0,240,64Z" />
    </_Svg>
  )
}

Icon.displayName = 'MediumLogoFill'

export const MediumLogoFill = memo<IconProps>(themed(Icon))
