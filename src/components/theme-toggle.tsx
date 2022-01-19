import React from 'react'
import { Text, HStack, Switch, useColorMode, ColorMode } from 'native-base'

export default function ThemeToggle() {
    return (
        <HStack space={2} alignItems="center">
            <Text>
                Dark
            </Text>
            <Switch isChecked={colorMode === 'light'}>

            </Switch>

        </HStack>
    )
}