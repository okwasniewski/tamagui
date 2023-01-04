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
      <_Path d="M223.3,116a117.3,117.3,0,0,1,.7,12A96,96,0,0,1,70,204.5c24.6-6.2,53.5-18.5,82-34.9S205.6,134.2,223.3,116Zm22.5-56c-5.5-9.5-20.3-18.4-59.8-8.5A96,96,0,0,0,32,128a117.3,117.3,0,0,0,.7,12C4.4,169.2,4.8,186.5,10.2,196c3.7,6.4,11.9,12.8,29.8,12.8a121.7,121.7,0,0,0,25.5-3.2l4.5-1.1a105,105,0,0,1-14.2-13.3c-18.7,3.3-29.3,1-31.7-3.2-1.5-2.6-.7-7.5,2.3-13.4A85.7,85.7,0,0,1,37.1,159a95.2,95.2,0,0,0,18.7,32.2l6.2-1.3c24-5.3,53.1-17.5,82-34.2s54-35.8,70.6-53.9a62,62,0,0,0,4.3-4.8,95.2,95.2,0,0,0-18.7-32.2,83.9,83.9,0,0,1,19-1.5c6.6.4,11.2,2.1,12.7,4.7,2.4,4.2-.9,14.5-13,29a107.3,107.3,0,0,1,4.4,19l3.1-3.3C251.7,85.2,250.9,68.9,245.8,60Z" />
    </_Svg>
  )
}

Icon.displayName = 'PlanetFill'

export const PlanetFill = memo<IconProps>(themed(Icon))
