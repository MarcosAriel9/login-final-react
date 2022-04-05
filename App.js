import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import Navigation from './src/navigations/navigation'
// import { firebaseApp } from './src/utils/firebase'
// import * as firebase from 'firebase'

export default function App() {
  console.disableYellowBox = true

  // useEffect(() => {
  //   firebase.outh().onAuthStateChanged((user) => {
  //     console.log(user)
  //   })
  // }, [])

  return <Navigation />
}
