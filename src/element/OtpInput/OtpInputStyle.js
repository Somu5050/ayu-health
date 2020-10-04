import {StyleSheet} from 'react-native'
import {Color} from '../../common'

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '20%',
        marginTop: 20
    },
    textInput: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 10
    },
    textInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 60,
        borderWidth: 1.5,
        borderRadius: 5,
        backgroundColor: Color.snow
    }
})
