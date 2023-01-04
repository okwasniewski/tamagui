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
      <_Path d="M220.2,104l-20-34.7a28.1,28.1,0,0,0-47.3-1.9l-17.3-30A28.1,28.1,0,0,0,97.3,27.1a29.4,29.4,0,0,0-9.9,9.6,27.9,27.9,0,0,0-11.5-6.2,27.1,27.1,0,0,0-21.2,2.8A27.9,27.9,0,0,0,44.4,71.5l3.4,5.8A28.5,28.5,0,0,0,36,81a28.1,28.1,0,0,0-10.2,38.2l42,72.8a88,88,0,1,0,152.4-88Zm-6.7,62.6A71.2,71.2,0,0,1,180,210.3,72.1,72.1,0,0,1,81.6,184l-42-72.8a12,12,0,0,1,20.8-12l22,38.1a8,8,0,1,0,13.9-8l-22-38.1h0l-16-27.7a12,12,0,0,1-1.2-9.1,11.8,11.8,0,0,1,5.6-7.3,12,12,0,0,1,9.1-1.2,12.5,12.5,0,0,1,7.3,5.6L87,65.4h.1l26,45a7.7,7.7,0,0,0,6.9,4,7.3,7.3,0,0,0,4-1.1,8,8,0,0,0,2.9-10.9l-26-45h0a12,12,0,1,1,20.8-12l30,51.9h0l6.3,11a48.1,48.1,0,0,0-10.9,61,8,8,0,0,0,13.8-8,32,32,0,0,1,11.7-43.7,8.1,8.1,0,0,0,3.8-4.9,8.4,8.4,0,0,0-.8-6l-10-17.4a12,12,0,0,1,13.5-17.5,11.8,11.8,0,0,1,7.2,5.5l20,34.7A70.9,70.9,0,0,1,213.5,166.6Zm-125.8,78a8.2,8.2,0,0,1-6.6,3.4,8.6,8.6,0,0,1-4.6-1.4A117.9,117.9,0,0,1,41.1,208a8,8,0,1,1,13.8-8,102.6,102.6,0,0,0,30.8,33.4A8.1,8.1,0,0,1,87.7,244.6ZM168,31a8,8,0,0,1,8-8h0a60.2,60.2,0,0,1,52,30,7.9,7.9,0,0,1-3,10.9,7.1,7.1,0,0,1-4,1.1,8,8,0,0,1-6.9-4A44,44,0,0,0,176,39,8,8,0,0,1,168,31Z" />
    </_Svg>
  )
}

Icon.displayName = 'HandWavingFill'

export const HandWavingFill = memo<IconProps>(themed(Icon))
