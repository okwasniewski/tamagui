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
      <_Path d="M207.6,63.8C186.8,53.5,159.3,48,128,48S69.2,53.5,48.4,63.8,16,88.8,16,104v48c0,15.2,11.8,29.9,32.4,40.2S96.7,208,128,208s58.8-5.5,79.6-15.8S240,167.2,240,152V104C240,88.8,228.2,74.1,207.6,63.8ZM120,159.9v32c-19-.7-35-3.5-48-7.5V153C86.3,157,102.5,159.3,120,159.9Zm16,0c17.5-.6,33.7-2.9,48-6.9v31.4c-13,4-29,6.8-48,7.5ZM32,152V133.5a84.5,84.5,0,0,0,16.4,10.7l7.6,3.4V178C40.2,170.2,32,160.3,32,152Zm168,26V147.6l7.6-3.4A84.5,84.5,0,0,0,224,133.5V152C224,160.3,215.8,170.2,200,178Z" />
    </_Svg>
  )
}

Icon.displayName = 'CoinFill'

export const CoinFill = memo<IconProps>(themed(Icon))
