import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class ProfileImage extends Component {
  render() {
    let pic1 = {
      uri: 'https://www.static-contents.youth4work.com/y4w/Images/UserThumbImage/160_160/23720.png?v=20161110184144'
    }
    // this images are random images from web used for website testing purpose
    let pic2 = {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
    }

    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={pic1}/>
        </View>
        <View>
          <Image style={styles.image} source={pic2}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
  }
})

export default ProfileImage;