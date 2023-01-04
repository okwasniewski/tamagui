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
      <_Path d="M25.6,115.2A67.8,67.8,0,0,1,53,93.5a40,40,0,1,1,54,0,68.1,68.1,0,0,1,21,14.3,68.1,68.1,0,0,1,21-14.3,40,40,0,1,1,54,0,67.8,67.8,0,0,1,27.4,21.7,8,8,0,0,1-1.6,11.2,8.1,8.1,0,0,1-11.2-1.6,52,52,0,0,0-83.2,0h0l-.6.6h-.1l-.5.5-.3.2a.1.1,0,0,1-.1.1l-.3.2-.3.2-.5.3h-.2l-1.7.6h-3.3l-.8-.2h-.3l-.9-.4-.3-.2a4.7,4.7,0,0,1-.9-.6h-.1l-.3-.3h-.2c-.2-.2-.4-.3-.5-.5h-.1l-.6-.7a52,52,0,0,0-83.1.1A8,8,0,0,1,32,128a7.7,7.7,0,0,1-4.8-1.6A8,8,0,0,1,25.6,115.2ZM203,197.5a40,40,0,1,0-54,0,68.1,68.1,0,0,0-21,14.3,68.1,68.1,0,0,0-21-14.3,40,40,0,1,0-54,0,67.8,67.8,0,0,0-27.4,21.7A8,8,0,0,0,32,232H224a8,8,0,0,0,6.4-12.8A67.8,67.8,0,0,0,203,197.5Z" />
    </_Svg>
  )
}

Icon.displayName = 'UsersFourFill'

export const UsersFourFill = memo<IconProps>(themed(Icon))
