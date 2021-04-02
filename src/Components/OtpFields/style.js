import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
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