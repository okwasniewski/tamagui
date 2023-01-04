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
      <_Path d="M247.5,181.7h-.1L231.1,97.2c0-.1,0-.1-.1-.2a60,60,0,0,0-59-49.3h0L84,48A59.9,59.9,0,0,0,24.9,97.6v.2L8.6,181.6h0a35.9,35.9,0,0,0,29.2,41.7,31.8,31.8,0,0,0,6.2.6,36.4,36.4,0,0,0,25.5-10.5l.4-.5,40.7-45,34.9-.2L186.1,213l.5.5A36,36,0,0,0,212,224a33.6,33.6,0,0,0,6.3-.6A36.1,36.1,0,0,0,247.5,181.7ZM104,116H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V92a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H152A8,8,0,0,1,144,108Zm71.5,99.7a20.1,20.1,0,0,1-17.5-5.4l-31.1-34.5H172a60,60,0,0,0,51-28.3l8.7,45.2A20,20,0,0,1,215.5,207.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'GameControllerFill'

export const GameControllerFill = memo<IconProps>(themed(Icon))
