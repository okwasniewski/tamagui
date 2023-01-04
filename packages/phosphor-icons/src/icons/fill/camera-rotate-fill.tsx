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
      <_Path d="M208,56H180.3L166.7,35.6A7.9,7.9,0,0,0,160,32H96a7.9,7.9,0,0,0-6.7,3.6L75.7,56H48A24.1,24.1,0,0,0,24,80V192a24.1,24.1,0,0,0,24,24H208a24.1,24.1,0,0,0,24-24V80A24.1,24.1,0,0,0,208,56ZM161.9,165.9a47.8,47.8,0,0,1-67.8,0H94L89.3,161l-1.4,8.3A8.1,8.1,0,0,1,80,176H78.7a8,8,0,0,1-6.6-9.2l4-24a8.1,8.1,0,0,1,6.6-6.6l24-4a8,8,0,1,1,2.6,15.8l-9,1.5,5.1,5.3A32,32,0,0,0,128,164a31.5,31.5,0,0,0,22.6-9.4,8,8,0,0,1,11.3,0A7.9,7.9,0,0,1,161.9,165.9Zm22-68.6-4,24a8.1,8.1,0,0,1-6.6,6.6l-24,4H148a8.1,8.1,0,0,1-7.9-6.7,8,8,0,0,1,6.6-9.2l9-1.5-5.1-5.3A32,32,0,0,0,128,100a31.5,31.5,0,0,0-22.6,9.4,8,8,0,0,1-11.3,0,7.9,7.9,0,0,1,0-11.3,47.8,47.8,0,0,1,67.8,0c.1,0,.1,0,.1.1l4.7,4.8,1.4-8.3a8,8,0,0,1,15.8,2.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'CameraRotateFill'

export const CameraRotateFill = memo<IconProps>(themed(Icon))
