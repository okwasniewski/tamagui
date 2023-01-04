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
      <_Path d="M144,104V64a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7L172,72.7l30.3-30.4a8.1,8.1,0,0,1,11.4,11.4L183.3,84l14.4,14.3a8.4,8.4,0,0,1,1.7,8.8A8,8,0,0,1,192,112H152A8,8,0,0,1,144,104Zm-40,40H64a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8L72.7,172,42.3,202.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L84,183.3l14.3,14.4A8.3,8.3,0,0,0,104,200a8.5,8.5,0,0,0,3.1-.6A8,8,0,0,0,112,192V152A8,8,0,0,0,104,144Zm79.3,28,14.4-14.3a8.4,8.4,0,0,0,1.7-8.8A8,8,0,0,0,192,144H152a8,8,0,0,0-8,8v40a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3L172,183.3l30.3,30.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4ZM107.1,56.6a8.4,8.4,0,0,0-8.8,1.7L84,72.7,53.7,42.3A8.1,8.1,0,0,0,42.3,53.7L72.7,84,58.3,98.3a8.4,8.4,0,0,0-1.7,8.8A8,8,0,0,0,64,112h40a8,8,0,0,0,8-8V64A8,8,0,0,0,107.1,56.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsInFill'

export const ArrowsInFill = memo<IconProps>(themed(Icon))
