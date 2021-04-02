import { StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import commonStyles from '../../styles/commonStyles'
import fontFamily from '../../styles/fontFamily'

export default StyleSheet.create({
    textInput:{
        ...commonStyles.fontBold22,
        borderBottomColor:colors.themeColor,
        borderBottomWidth:1,

    }
})
