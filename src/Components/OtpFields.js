import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import colors from '../styles/colors'

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';



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

const styles=StyleSheet.create({
    root: {padding: 20, minHeight: 300},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
      width: 290,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop:30
    },
    cellRoot: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: colors.themeColor,
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor:colors.themeColor,
      borderBottomWidth: 2,
    },
  });

export default OtpFields;