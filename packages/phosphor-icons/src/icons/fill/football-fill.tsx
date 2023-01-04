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
      <_Path d="M226,56.3A32.3,32.3,0,0,0,199.7,30c-31.4-5.3-90.4-7.7-133.9,35.8S24.7,168.3,30,199.7A32.3,32.3,0,0,0,56.3,226a206.3,206.3,0,0,0,33.3,2.8c31.1,0,69.8-7.7,100.6-38.6C233.7,146.7,231.3,87.7,226,56.3ZM59,210.2A15.9,15.9,0,0,1,45.8,197a178.7,178.7,0,0,1-2.7-30.6l46.5,46.5A179.5,179.5,0,0,1,59,210.2ZM165.7,101.7l-15.1,15,9,9a8,8,0,0,1,0,11.3,8.3,8.3,0,0,1-5.7,2.3,8,8,0,0,1-5.6-2.3l-9-9L128,139.3l9,9a8,8,0,0,1,0,11.3,7.8,7.8,0,0,1-5.7,2.3,7.6,7.6,0,0,1-5.6-2.3l-9-9-15,15.1a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l15.1-15-9-9A8,8,0,0,1,107.7,119l9,9L128,116.7l-9-9a8,8,0,0,1,11.3-11.3l9,9,15-15.1a8.1,8.1,0,0,1,11.4,11.4Zm.7-58.6A179.5,179.5,0,0,1,197,45.8,15.9,15.9,0,0,1,210.2,59a178.7,178.7,0,0,1,2.7,30.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'FootballFill'

export const FootballFill = memo<IconProps>(themed(Icon))
