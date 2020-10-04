import React, {Component} from 'react';
import {View, Keyboard} from 'react-native';
import style from './OtpInputStyle'
import OtpBox from "./OtpBox";

export default class OtpInput extends Component{

    constructor(props) {
        super(props);
        this.inputs = {};
        this.focusNextField = this.focusNextField.bind(this);
        this.state = {
            otpString: '',
            otpData: [
                {
                    index: 0,
                    focus: true,
                    value: ''
                },{
                    index: 1,
                    focus: false,
                    value: ''
                },{
                    index: 2,
                    focus: false,
                    value: ''
                },{
                    index: 3,
                    focus: false,
                    value: ''
                }
            ]
        }
    }

    onChangeText = (currIndex, text) => {
        if (isNaN(text)) {
            return;
        }
        let otpData = this.state.otpData;
        const preItem = otpData[currIndex - 1];
        const currItem = otpData[currIndex];
        const nextItem = otpData[currIndex + 1];
        currItem.value = text;
        if(text.length === 1){
            if(nextItem){
                nextItem.focus = true;
                currItem.focus = false;
                this.focusNextField(currIndex + 1);
            } else if(this.props.showError){
                Keyboard.dismiss();
            }
        }
        this.setState({otpData: otpData});
        this.props.onOtpChange(otpData.filter((item) => item.value).map((item) => item.value).join(''));
    };

    handleBackSpace = (currIndex) => {
        let otpData = this.state.otpData;
        const preItem = otpData[currIndex - 1];
        const currItem = otpData[currIndex];
        const nextItem = otpData[currIndex + 1];

        if(preItem){
            this.focusNextField(currIndex - 1);
            preItem.focus = true;
            currItem.focus = false;
            preItem.value = '';
        }
        this.setState({otpData: otpData});
        this.props.onOtpChange(otpData.filter((item) => item.value).map((item) => item.value).join(''));
    };

    focusNextField(index) {
        this.inputs[index].focus();
    }

    render(){
        const {showError} = this.props;
        return(
            <View style={style.mainContainer}>
                <View>
                    <OtpBox
                        onRef={(ref) => this.inputs[0] = ref}
                        onChangeText={(text) => this.onChangeText(0, text)}
                        handleBackSpace={this.handleBackSpace}
                        showError={showError}
                        otpData={this.state.otpData[0]}
                    />
                </View>
                <View>
                    <OtpBox
                        onRef={(ref) => this.inputs[1] = ref}
                        onChangeText={(text) => this.onChangeText(1, text)}
                        handleBackSpace={this.handleBackSpace}
                        showError={showError}
                        otpData={this.state.otpData[1]}
                    />
                </View>
                <View>
                    <OtpBox
                        onRef={(ref) => this.inputs[2] = ref}
                        onChangeText={(text) => this.onChangeText(2, text)}
                        handleBackSpace={this.handleBackSpace}
                        showError={showError}
                        otpData={this.state.otpData[2]}
                    />
                </View>
                <View>
                    <OtpBox
                        onRef={(ref) => this.inputs[3] = ref}
                        onChangeText={(text) => this.onChangeText(3, text)}
                        handleBackSpace={this.handleBackSpace}
                        showError={showError}
                        otpData={this.state.otpData[3]}
                    />
                </View>
            </View>

        )
    }
}