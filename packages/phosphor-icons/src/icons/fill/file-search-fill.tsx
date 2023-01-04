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
      <_Path d="M213.6,82.3l-55.9-56-.3-.2-.3-.3-.3-.2-.3-.2c-.1-.1-.2-.1-.2-.2l-.5-.3h-.2l-.5-.3H155l-.7-.3H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A7.8,7.8,0,0,0,213.6,82.3ZM165.4,189.5a8,8,0,0,1-5.6,2.3,8.3,8.3,0,0,1-5.7-2.3l-10.9-11A36.8,36.8,0,0,1,124,184a36,36,0,1,1,36-36,35.8,35.8,0,0,1-5.5,19.2l10.9,10.9A8,8,0,0,1,165.4,189.5ZM152,88V43.3L196.7,88Z" />
      <_Path d="M124,128a19.9,19.9,0,0,0-14.1,5.9,19.8,19.8,0,0,0,0,28.2,19.9,19.9,0,0,0,28.2,0,19.8,19.8,0,0,0,0-28.2A19.9,19.9,0,0,0,124,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileSearchFill'

export const FileSearchFill = memo<IconProps>(themed(Icon))
