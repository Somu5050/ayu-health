import {StyleSheet} from 'react-native'
import {Color} from '../common'

export default StyleSheet.create({
    childContainer: {
        flex: 2,
        marginTop: 40
    },
    clearContainer: {
        alignSelf: 'center',
        paddingRight: 20
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    hollowContainer: {
        flex: 2
    },
    instructionText: {
        color: Color.hint,
        fontSize: 12,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    mainContainer: {
        flex: 1
    },
    otpChildContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    otpContainer: {
        flex: 1,
        backgroundColor: Color.background,
    },
    otpHeaderContainer: {
        backgroundColor: Color.aqua,
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    otpHeaderTitle: {
        color: Color.snow,
        fontWeight: '900',
        fontSize: 16,
        alignSelf: 'center',
        paddingLeft: 20
    },
    otpHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.text
    },
    otpInstruction: {
        fontSize: 14,
        color: Color.text
    },
    phoneContainer: {
        flex: 1,
        backgroundColor: Color.snow,
        padding: 20
    },
    resendContainer: {
        flexDirection: 'row'
    },
    resendHelper: {
        fontSize: 14,
        color: Color.text,
        fontWeight: 'bold'
    },
    resendText: {
        fontSize: 14,
        color: Color.orange,
        fontWeight: 'bold'
    },
    subHeading: {
        color: Color.charcoal,
        marginTop: 5,
        marginBottom: 30,
        fontSize: 14,
        fontWeight: '900'
    },
    verifyOtpContainer: {
        justifyContent: 'center', alignItems: 'center', width:'43%', height: 50, borderRadius: 5, marginTop: 40
    },
    verifyOtpText: {
        color: Color.snow,
        fontWeight: 'bold',
        fontSize: 16
    },
    warningContainer: {
        marginHorizontal: 5
    },
    warningText: {
        color: Color.errorRed,
        fontSize: 12,
        fontWeight: 'bold'
    }
})
