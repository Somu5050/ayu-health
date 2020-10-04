import {StyleSheet} from 'react-native'
import {Color} from '../../common'

export default StyleSheet.create({
    actionContainer: {
        height: 23,
        width: 23,
        borderRadius: 23/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commonPadding: {
        padding: 10
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        borderWidth: 2
    },
    textInputContainer: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontWeight: 'bold'
    }
})
