import { Platform, StyleSheet } from "react-native";
import colors from "../../../util/constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.vfGrey,
    overflow: 'visible'
  },
  listStyle: { flex: 1, width: '100%' },
  listContentContainerStyle: { paddingBottom: 30, },
  contentView: {
    flex: 1,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 20 : 0,
    overflow: 'visible',
    zIndex: 1,
    backgroundColor: 'transparent'
  },
});