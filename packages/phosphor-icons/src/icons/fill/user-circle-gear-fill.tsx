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
      <_Path d="M128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm103.2-2a8,8,0,0,1-7,4,7.6,7.6,0,0,1-4-1.1l-4.6-2.7a24,24,0,0,1-7.6,4.4V84a8,8,0,0,1-16,0V78.6a24,24,0,0,1-7.6-4.4l-4.6,2.7a7.6,7.6,0,0,1-4,1.1,8,8,0,0,1-4-14.9l4.6-2.7A21.2,21.2,0,0,1,176,56a21.2,21.2,0,0,1,.4-4.4l-4.6-2.7a7.9,7.9,0,0,1-3-10.9,8.1,8.1,0,0,1,11-2.9l4.6,2.7a24,24,0,0,1,7.6-4.4V28a8,8,0,0,1,16,0v5.4a24,24,0,0,1,7.6,4.4l4.6-2.7a8.1,8.1,0,0,1,11,2.9,7.9,7.9,0,0,1-3,10.9l-4.6,2.7A21.2,21.2,0,0,1,224,56a21.2,21.2,0,0,1-.4,4.4l4.6,2.7A7.9,7.9,0,0,1,231.2,74ZM200,64a8,8,0,1,0-8-8A8,8,0,0,0,200,64Zm22.4,44.6a8,8,0,0,0-7,8.8A94.2,94.2,0,0,1,216,128a87.6,87.6,0,0,1-22.2,58.4,81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23A88,88,0,0,1,128,40a75,75,0,0,1,8.2.4,8,8,0,1,0,1.4-16c-3.1-.3-6.4-.4-9.6-.4A104,104,0,0,0,57.8,204.7l1.3,1.2a104,104,0,0,0,137.8,0l1.3-1.2A103.7,103.7,0,0,0,232,128a101.9,101.9,0,0,0-.7-12.4A8,8,0,0,0,222.4,108.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'UserCircleGearFill'

export const UserCircleGearFill = memo<IconProps>(themed(Icon))
