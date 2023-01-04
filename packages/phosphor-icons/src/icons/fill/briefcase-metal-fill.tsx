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
      <_Path d="M28,120H228a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V124A4,4,0,0,1,28,120Zm-4,88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V188a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4ZM232,80v20a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V80A16,16,0,0,1,40,64H80V56a23.9,23.9,0,0,1,24-24h48a23.9,23.9,0,0,1,24,24v8h40A16,16,0,0,1,232,80ZM160,56a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v8h64Z" />
    </_Svg>
  )
}

Icon.displayName = 'BriefcaseMetalFill'

export const BriefcaseMetalFill = memo<IconProps>(themed(Icon))
