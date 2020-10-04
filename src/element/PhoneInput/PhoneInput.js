import React, {Component} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {Color} from '../../common'
import {PhoneIcon, ErrorPhoneIcon, RightArrowIcon} from '../../asset';
import style from './PhoneInputStyles'

export default class PhoneInput extends Component{

    render(){
        const {onChangeText, showError, value, onSubmitPhoneNum} = this.props;
        const enableButton = (value && value.length !== 10) || value == null;
        return(
            <View style={[style.mainContainer, {
                borderColor: showError ? Color.errorRed : Color.aqua
            }]}>
                <View style={style.commonPadding}>
                    {
                        showError ?
                            <ErrorPhoneIcon/>
                            : <PhoneIcon/>
                    }
                </View>
                <TextInput
                    numberOfLines={1}
                    style={[style.textInputContainer, {
                        color: showError ? Color.errorRed : Color.text
                    }]}
                    multiline={false}
                    maxLength={20}
                    autoFocus={true}
                    keyboardType={'numeric'}
                    placeholder={'Enter mobile number'}
                    placeholderTextColor={Color.hint}
                    value={value}
                    onChangeText={(text) => onChangeText(text)}
                />

                <TouchableOpacity style={style.commonPadding} disabled={enableButton} onPress={onSubmitPhoneNum}>
                    <View style={[style.actionContainer, {
                        backgroundColor: value && value.length === 10 ?
                            Color.aqua : enableButton ?
                                Color.fadedAqua : Color.aqua
                    }]}>
                    <RightArrowIcon width={20} height={20} resizeMode={'contain'}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}