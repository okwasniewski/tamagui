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
      <_Path d="M239.2,97.4A16.4,16.4,0,0,0,224.6,86l-59-3.8a.5.5,0,0,1-.4-.3l-22-55.5a16.3,16.3,0,0,0-30.4,0l-22,55.5a.5.5,0,0,1-.4.3L31.4,86A16.4,16.4,0,0,0,16.8,97.4,16.8,16.8,0,0,0,22,115.5l45.2,37.6a.8.8,0,0,1,.2.8L53.9,207a18.6,18.6,0,0,0,7,19.6,18,18,0,0,0,20.1.6l46.9-29.7h.2l50.5,31.9a16.1,16.1,0,0,0,8.7,2.6,16.8,16.8,0,0,0,9.5-3.1,16.6,16.6,0,0,0,6.3-17.7l-14.5-57.3a.8.8,0,0,1,.2-.8L234,115.5A16.8,16.8,0,0,0,239.2,97.4Zm-15.4,5.8-45.3,37.6a16.8,16.8,0,0,0-5.4,17l14.5,57.3c.1.4.1.5,0,.6a.7.7,0,0,1-.3.3h-.2L136.7,184a16,16,0,0,0-8.7-2.5V32c.1,0,.2,0,.3.3l22.1,55.5a16.4,16.4,0,0,0,14.1,10.4l59.1,3.8c.1,0,.2,0,.3.4S223.9,103.1,223.8,103.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'StarHalfFill'

export const StarHalfFill = memo<IconProps>(themed(Icon))
