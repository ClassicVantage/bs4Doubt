
import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert,Modal } from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class HomeScreen extends Component {
    UserSignUp=(emailId,password)=>{
firebase.auth().createUserWithEmailAndPassword(emailId,password)
.then((response)=>{
    return Alert.alert("U got added now give treat")
})
.catch(function(error){
var ErrorCode=error.code;
var ErrorMessage=error.message;
return Alert.alert(ErrorMessage)
})
UserLogIn=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then((response)=>{
        return Alert.alert("Signed In successfully, you have -Yoda")
    })
    .catch(function(error){
    var ErrorCode=error.code;
    var ErrorMessage=error.message;
    return Alert.alert(ErrorMessage)
    })
    

    }

    addItem=(itemName, description) =>{
        var userName = this.state. userName db.collection("exchange_requests").add({
        "username" : userName, 
        "item_name" : itemName, 
        "description" : description
        this.setState({
        itemName :' ',
         description : ' '
        })
        return Alert. alert(
        'Item ready to exchange',
        ' ',
        [
        {text: 'OK', onPress: () => {
        this.props. navigation.navigate('Home Screen')
        }}
        ]
        );
        }
render(){
    return(
        <View>

            <Modal 
            animationType="fade"
            transperent={true}
            visible={this.state.isVisible}
            

                <TextInput
                style={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={8}
                onChangeText={(text)=>{
                    this.setState({
                        firstName:text
                    })
                }
                />
            </Modal>
            <TextInput
            style={style.InputBox}
            placeholder='TinyTintin@pooopaaa.com'
            keyBoardType='email-address'
            onChangeText={(text)=>{
                this.setState({
                    emailId: text 
                })
            }}
            />

            <TextInput
            style={style.InputBox}
            secureTextEntry={true}
            placeHolder='POOOPOOOPAAAPAAA'
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            />
            <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}
            >
            <Text>KRIPYA KARUN LOGIN KARA BUN</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.button}
            onPress = {()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
                <Text>Sign Up</Text>

            </TouchableOpacity>

            <TouchableOpacity
            style={[style.button,{marginTop:10}]}
            onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
            >

                <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1f3c88'
    },
    profileContainer:{
        flex:1,
        justifyContent :'center',
        alignItems:'center', 
        borderRadius 
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00',
        color : '#ff3d00'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        BorderColor: '#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }

})