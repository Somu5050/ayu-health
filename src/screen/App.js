/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Alert,
    Modal
} from 'react-native';
import {Color, DemoData, String, StorageService} from '../common';
import {PhoneInput, OtpInput} from '../element';
import {WarningIcon, ClearIcon, LogoIcon} from '../asset';
import style from './AppStyles';

const PHONE = String.PHONE;
export default class App extends Component{

    constructor() {
        super();
        this.state = {
            showPhoneError: false,
            showOtpError: false,
            phoneNum: null,
            showPhoneView: true,
            otpString: ''
        };
    }

    onChangePhoneText = (text) => {
        text = text.trim();
        if (isNaN(text) || text.includes('.')) {
            return;
        }
        if (text.startsWith('0') || text.startsWith('1') || text.startsWith('2') || text.startsWith('3') || text.startsWith('4') || text.startsWith('5')) {
            text = '';
        }
        this.setState({phoneNum: text, showPhoneError: text.length > 10});
    };

    onSubmitPhoneNum = () => this.onClose();

    onClose = () => this.setState({showPhoneView: !this.state.showPhoneView});

    onResend = () => Alert.alert(
            'OTP Resent', '',
            [{text: 'OK', onPress: () => console.log('OK')}]
        );

    onVerifyOtp = () => {
        StorageService.setAsyncStoreItem('token', String.TOKEN);
        let token = StorageService.getAsyncStoreItem('token').then(token =>
            Alert.alert(
                'You are verified',
                'Token: ' + token + ' saved',
                [{text: 'OK', onPress: () => console.log('OK')}]
            )
        )
    };

    encryptData = (text) => {
        let arr = text.split('');
        for(let i = 0; i < 8; i++){
            arr[i] = '*';
        }
        return arr.join('');
    };

    onOtpChange = (otpString) => this.setState({showOtpError: otpString.length === 4 && otpString !== DemoData.otp, otpString: otpString});

    renderErrorView = (view) => {
        const showError = view && view === PHONE ? this.state.showPhoneError : this.state.showOtpError;
        const errorString = view && view === PHONE ? String.PHONE_ERROR : String.OTP_ERROR;
        return(
            showError ?
                <View style={style.errorContainer}>
                    <View style={style.warningContainer}>
                        <WarningIcon height={12} width={12}/>
                    </View>
                    <Text style={style.warningText}>{errorString}</Text>
                </View> : null
        )
    };

    renderPhoneView = () => {
        return(
            <View style={style.phoneContainer}>
                <View style={style.logoContainer}>
                    <LogoIcon height={60} width={60}/>
                </View>
                <View style={style.childContainer}>
                    <Text style={style.heading}>{String.WELCOME_HEADING}</Text>
                    <Text style={style.subHeading}>{String.WELCOME_SUB_HEADING}</Text>
                    <PhoneInput
                        onChangeText={(text) => this.onChangePhoneText(text)}
                        onSubmitPhoneNum={this.onSubmitPhoneNum}
                        showError={this.state.showPhoneError}
                        value={this.state.phoneNum}
                    />
                    <View>
                        {this.renderErrorView(PHONE)}
                        <Text style={style.instructionText}>{String.PHONE_INSTRUCTION}</Text>
                    </View>
                </View>
                <View style={style.hollowContainer}/>
            </View>
        )
    };

    renderOtpView = () => {
        const enableVerify = !this.state.showOtpError && this.state.otpString.length === 4;
        return(
            <View style={style.otpContainer}>
                <View style={style.otpHeaderContainer}>
                    <Text style={style.otpHeaderTitle}>{String.OTP_HEADER}</Text>
                    <TouchableOpacity style={style.clearContainer}
                                      onPress={this.onClose}>
                        <ClearIcon width={30} height={30}/>
                    </TouchableOpacity>
                </View>
                <View style={style.mainContainer}>
                    <View style={style.otpChildContainer}>
                        <View>
                            <Text style={style.otpHeading}>{String.OTP_HEADING}</Text>
                            <Text style={style.otpInstruction}>{String.OTP_INSTRUCTION + this.encryptData(this.state.phoneNum)}</Text>
                        </View>
                        <OtpInput onOtpChange={this.onOtpChange} showError={this.state.showOtpError}/>
                        {this.renderErrorView(null)}
                        <View style={style.resendContainer}>
                            <Text style={style.resendHelper}>{String.RESEND_HELPER}</Text>
                            <TouchableOpacity onPress={this.onResend}>
                                <Text style={style.resendText}>{String.RESEND}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            disabled={!enableVerify}
                            style={[style.verifyOtpContainer, {
                                backgroundColor: enableVerify ? Color.orange : Color.fadedOrange}]}
                            onPress={this.onVerifyOtp}
                        >
                            <Text style={style.verifyOtpText}>{String.VERIFY_OTP}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.mainContainer}/>
                </View>
            </View>
        )
    };

    render(){
        return(
            <SafeAreaView style={style.mainContainer}>
                {
                    this.state.showPhoneView ?
                        this.renderPhoneView() : this.renderOtpView()
                }
            </SafeAreaView>
        )
    }
}