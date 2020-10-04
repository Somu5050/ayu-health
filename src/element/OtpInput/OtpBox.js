import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {Color} from '../../common'
import style from './OtpInputStyle'

export default class OtpBox extends Component{

    constructor(){
        super();
        this.focused = false;
    }

    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this)
        }
    }

    focus() {
        this.focused = false;
        this.textInput.focus();
        this.focused = this.textInput.isFocused();
    }

    render(){
        const {onChangeText, handleBackSpace, showError, otpData, data} = this.props;
        const {index, value, focus} = otpData;
        const focused = focus && value.length === 0 && (index === 0 || this.focused);
        return(
            <View style={[style.textInputContainer, {
                borderColor: showError ? Color.errorRed : (focused ? Color.aqua : Color.gray)
            }]}>
                <TextInput
                    ref={input => this.textInput = input}
                    placeholder={focused || (value && value.length > 0) ? '' : '*'}
                    style={style.textInput}
                    autoFocus={index === 0}
                    onChangeText={(text) => onChangeText(text)}
                    keyboardType={'numeric'}
                    value={value}
                    maxLength={1}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            handleBackSpace(index)
                        }
                    }}
                />
            </View>
        )
    }
}
