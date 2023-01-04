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
      <_Path d="M96.6,177a7.9,7.9,0,0,0-10.1,5c-6.6,19.7-27.9,25.8-40.2,27.7,1.9-12.3,8-33.6,27.7-40.2a8,8,0,1,0-5.1-15.1c-16.4,5.4-28.4,18.4-34.8,37.5a91.8,91.8,0,0,0-4.6,26.6,8,8,0,0,0,8,8,91.8,91.8,0,0,0,26.6-4.6c19.1-6.4,32.1-18.4,37.5-34.8A7.9,7.9,0,0,0,96.6,177Z" />
      <_Path d="M227.6,41.8a15.7,15.7,0,0,0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2,26.1l-9,8.9H74.7a16.2,16.2,0,0,0-11.3,4.7L31.1,100.5a15.9,15.9,0,0,0-4,15.9,16,16,0,0,0,12.2,11.1l39.5,7.9,41.8,41.8,7.9,39.5a16,16,0,0,0,11.1,12.2,14.7,14.7,0,0,0,4.6.7,15.6,15.6,0,0,0,11.3-4.7l32.4-32.3a16.2,16.2,0,0,0,4.7-11.3V120l8.9-9C230.1,82.4,229.3,53.1,227.6,41.8ZM74.7,79.4H120L80.1,119.3l-37.7-7.5ZM176.6,181.3l-32.4,32.3-7.5-37.7L176.6,136Z" />
    </_Svg>
  )
}

Icon.displayName = 'RocketLaunchFill'

export const RocketLaunchFill = memo<IconProps>(themed(Icon))
