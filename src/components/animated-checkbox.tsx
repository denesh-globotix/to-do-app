import React, { useEffect, memo } from 'react'
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedProps,
    withTiming,
    interpolateColor,
} from 'react-native-reanimated'
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const checkMarkPath = 'M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4'

// const AnimatedPath = Animated.createAnimatedComponent(Path)

// interface Props {
//     checked?:boolean
// }

const AnimatedCheckbox = () => {
    // const { checked } = Props
    const checkmarkColor = '#000000'
    const highlightColor = '#ff0000'
    const boxOutlineColor = '#000000'

    // const progress = useSharedValue(0)

    // useEffect(() => {
    //     progress.value = withTiming( checked ? 1 : 0, {
    //         duration: Easing.linear
    //     })
    // }, [checked])

    // const animatedBoxProps = useAnimatedProps(
    //     () => (
    //         {
    //             stroke: interpolateColor(Easing.bezier(0.16, 1, 0.3, 1)(progress.value)
    //             )}
    //     )
    // )

    return (
        <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>
            <Path
                d={checkMarkPath}
                stroke="black"
            />
            {/* <Path
                d={outlineBoxPath}
                stroke="black"
            /> */}
        </Svg>
    )
}

export default AnimatedCheckbox