import React, { Component } from 'react';
import { View, Image, StyleSheet, Button, Text } from 'react-native';

class ProfileImage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    
    let pic1 = {
      uri: 'https://www.static-contents.youth4work.com/y4w/Images/UserThumbImage/160_160/23720.png?v=20161110184144'
    }
    // this images are random images from web used for website testing purpose
    let pic2 = {
      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
    }

    return (
      <View style={styles.container}>
        <View style={styles.menus}>
          <Button color="orange" title="Home" onPress={() => this.props.navigation.navigate('Home')} />
          <Button color="orange" title="Login" onPress={() => navigate('Login', {name: 'Sraj'})}
          />
          <Button title="Profile" onPress={() => this.props.navigation.navigate('ProfileImage')}
          />
          <Button color="green" title="Notes" onPress={() => this.props.navigation.navigate('AlignTextCenterScreen')}
          />
        </View>
        <View>
          <Text style={styles.navigationText}>Profile Image</Text>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Image style={styles.image} source={pic1}/>
            </View>
            <View>
              <Image style={styles.image} source={pic2}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  menus: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  navigationText: {
    fontSize: 20,
    color: 'red',
    marginLeft: 40
  },
})

export default ProfileImage;