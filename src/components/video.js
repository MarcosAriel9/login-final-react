import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'

export default function video(props) {
    console.log(props)
    const {idVideo} =props;
  return (
    <View>
      <YoutubeIframe
      height={230}
      play={true}
      videoId={idVideo}
      />
    </View>
  )
}

const styles = StyleSheet.create({})