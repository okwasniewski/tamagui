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
      <_Path d="M63.6,46.4a104.3,104.3,0,0,1,52-21.7,4,4,0,0,1,4.4,4V120H95.7A104.1,104.1,0,0,0,63.4,52.4,3.9,3.9,0,0,1,63.6,46.4ZM46,64.1a104.8,104.8,0,0,0-21.3,51.4,4.1,4.1,0,0,0,4,4.5H79.6A88,88,0,0,0,51.9,63.6,4,4,0,0,0,46,64.1ZM192.4,46.4a104.3,104.3,0,0,0-52-21.7,4,4,0,0,0-4.4,4V120h24.3a104.1,104.1,0,0,1,32.3-67.6A3.9,3.9,0,0,0,192.4,46.4Zm38.9,69.1A104.8,104.8,0,0,0,210,64.1a4,4,0,0,0-5.9-.5A88,88,0,0,0,176.4,120h50.9A4.1,4.1,0,0,0,231.3,115.5Zm-206.6,25A104.8,104.8,0,0,0,46,191.9a4,4,0,0,0,5.9.5A88,88,0,0,0,79.6,136H28.7A4.1,4.1,0,0,0,24.7,140.5ZM210,191.9a104.8,104.8,0,0,0,21.3-51.4,4.1,4.1,0,0,0-4-4.5H176.4a88,88,0,0,0,27.7,56.4A4,4,0,0,0,210,191.9ZM63.6,209.6a104.3,104.3,0,0,0,52,21.7,4,4,0,0,0,4.4-4V136H95.7a104.1,104.1,0,0,1-32.3,67.6A3.9,3.9,0,0,0,63.6,209.6ZM160.3,136H136v91.3a4,4,0,0,0,4.4,4,104.3,104.3,0,0,0,52-21.7,3.9,3.9,0,0,0,.2-6A104.1,104.1,0,0,1,160.3,136Z" />
    </_Svg>
  )
}

Icon.displayName = 'BasketballFill'

export const BasketballFill = memo<IconProps>(themed(Icon))
