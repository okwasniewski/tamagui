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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={`${color}`}
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="128" r="12" />
      <_Circle cx="176" cy="128" r="12" />
      <_Circle cx="80" cy="128" r="12" />
    </_Svg>
  )
}

Icon.displayName = 'DotsThreeCircleRegular'

export const DotsThreeCircleRegular = memo<IconProps>(themed(Icon))
