import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './style';


const OtpFields = ({ value, onChangeText, cellCount, ...rest }) => {
    const ref = useBlurOnFulfill({ value, cellCount });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue: onChangeText,
    });

    return (

        <CodeField
            ref={ref}
            {...props}
            {...rest}
            value={value}
            onChangeText={onChangeText}
            cellCount={cellCount}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <View
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[styles.cellRoot, isFocused && styles.focusCell]}>
                    <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                </View>
            )}
        />

    );
};

export default OtpFields;