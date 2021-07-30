import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from "../../../../constants/";

interface Props {

}

const SignUp = (props: Props) => {
     const navigation = useNavigation()
     const renderHeader = () => {
          return (
               <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.padding * 6, paddingHorizontal: SIZES.padding * 2 }} onPress={() => { navigation.navigate("Login") }}>
                    <Image source={icons.back} resizeMode="contain" style={{ width: 20, height: 20, tintColor: COLORS.white }} />
                    <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>iniciar sesión</Text>
               </TouchableOpacity>
          )
     }

     const renderLogo = () => {
          return (
               <View style={{
                    marginTop: SIZES.padding * 5,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
               }}>
                    <Image source={images.wallieLogo} resizeMode="contain" style={{ width: "60%" }} />
               </View>
          )
     }

     const renderForm = () => {
          return (
               <View style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3
               }}>
                    {/* full name */}
                    <View style={{
                         marginTop: SIZES.padding * 3
                    }}>
                         <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
                    </View>
               </View>
          )
     }

     return (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
               <View style={{ flex: 1, backgroundColor: COLORS.lime }}>
                    <ScrollView>
                         {renderHeader()}
                         {renderLogo()}
                         {renderForm()}
                    </ScrollView>
               </View>
          </KeyboardAvoidingView>
     )
}

export default SignUp
