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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,184c-24.7,0-44.1-14.1-44.1-32a8,8,0,0,1,16,0c0,7.6,11.6,16,28.1,16,13.3,0,28.1-6.6,28.1-16s-12.2-13.4-30.8-18.2c-8.7-2.2-17.7-4.5-24.8-8.2-9.7-5.2-14.6-12.4-14.6-21.6,0-18.2,18.1-32,42.1-32,17.2,0,31.9,7.2,38.5,18.7a8,8,0,0,1-3,10.9,7.9,7.9,0,0,1-10.9-3C148.9,92.2,139.3,88,128,88c-14.6,0-26.1,7-26.1,16,0,6.8,10.8,10.1,27.3,14.3,19.1,4.9,42.9,11,42.9,33.7C172.1,169.9,152.7,184,128,184Z" />
    </_Svg>
  )
}

Icon.displayName = 'StripeLogoFill'

export const StripeLogoFill = memo<IconProps>(themed(Icon))
