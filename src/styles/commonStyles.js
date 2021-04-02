import { StyleSheet } from "react-native";
import colors from "./colors";
import fontFamily from "./fontFamily";
import { textScale} from "./responsiveSize";

export default StyleSheet.create({
    
  regularFont14:{
    fontSize:textScale(14),
    fontFamily:fontFamily.regular,

  },
  fontBold14:{
    fontSize:textScale(14),
    fontFamily:fontFamily.bold,
  },
  fontBold18:{
    fontSize:textScale(18),
    fontFamily:fontFamily.bold,
  },
  fontBold22:{
    fontSize:textScale(22),
    fontFamily:fontFamily.bold,
  },
})