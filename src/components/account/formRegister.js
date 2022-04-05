import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validations'
import { isEmpty, size, ss } from 'lodash'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'
import Loading from '../loading'

export default function formRegister(props) {

    const navigation = useNavigation();
    
    const{toastRef}=props;

    const [showPass, setShowPass] = useState(false)
    const [showPassRepeat, setShowPassRepeat] = useState(false)

    const [formData, setFormData] = useState(defaultFormValues())

    const [loading, setLoading] = useState(false)

    const onSubmit = ()=>{
      if(isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.passwordR)){
        toastRef.current.show("Todos los campos son obligatorios")
        //console.log("Todos los campos son obligatorios")
      }else if(!validateEmail(formData.email)){
        toastRef.current.show("Email no valido")
        //console.log("Email no valido")
      }else if(size(formData.password)<6){
        toastRef.current.show("La contraseña debe tener al menos 6 caracteres")
        //console.log("La contraseña debe tener al menos 6 caracteres")
      }else if(formData.password !== formData.passwordR){
        toastRef.current.show("Las contraseñas no coinciden")
        //console.log("Las contraseñas no coinciden")
      }
      else{
        setLoading(true)
        firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password).then(response=>{
          setLoading(false)
          navigation.navigate("index")
          //console.log(response)
        }).catch(err=>{
          setLoading(false)
          toastRef.current.show("El correo ya fue registrado")
          //console.log(err)
        })
        //toastRef.current.show("OK")
        //console.log("OK")
      }
      //console.log(formData)
      //console.log(validateEmail(formData.email))
    }

    const capturarDatos = (e, type)=>{
        // console.log(type)
        //console.log(e.nativeEvent.text)
        setFormData({...formData, [type]:e.nativeEvent.text})
    }

  return (
    <View style={styles.formContainer}>
      <Input
      onChange={(e)=>capturarDatos(e, "email")}
      placeholder="Correo Electronico"
      containerStyle={styles.formInput}
      rightIcon={
          <Icon
          type='material-community'
          name='at'
          iconStyle={styles.icon}
          />
        }
      />
      <Input
      onChange={(e)=>capturarDatos(e, "password")}
      placeholder="Contraseña"
      containerStyle={styles.formInput}
      password={true}
      secureTextEntry={showPass ? false : true}
      rightIcon={
        <Icon
        type='material-community'
        name={showPass ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={()=>setShowPass(!showPass)}
        />
        }
      />
      <Input
      onChange={(e)=>capturarDatos(e, "passwordR")}
      placeholder="Repetir Contraseña"
      containerStyle={styles.formInput}
      password={true}
      secureTextEntry={showPassRepeat ? false : true}
      rightIcon={
        <Icon
        type='material-community'
        name={showPassRepeat ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon}
        onPress={()=>setShowPassRepeat(!showPassRepeat)}
        />
        }
      />
      <Button
      title="Registrar"
      containerStyle={styles.containerBtnRegister}
      buttonStyle={styles.btnRegister}
      onPress={()=>onSubmit()}
      />
      <Loading isVisible={loading} text={"Creando Cuenta"} />
    </View>
  )
}

function defaultFormValues(){
    return{
        email:"",
        password:"",
        passwordR:""
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    formInput:{
        width:"100%",
        marginTop: 20
    },
    containerBtnRegister:{
        marginTop: 20,
        width: "95%"
    },
    btnRegister:{
        backgroundColor:"#fcb823"
    },
    icon:{
        color:"#c1c1c1"
    }
})