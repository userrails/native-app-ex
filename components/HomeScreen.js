import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.menus}>
          <Button color="red" title="Home" onPress={() => this.props.navigation.navigate('Home')} />
          <Button color="orange" title="Login" onPress={() => navigate('Login', {name: 'Sraj'})}/>
          <Button title="Profile" onPress={() => this.props.navigation.navigate('ProfileImage')}/>
          <Button color="green" title="Notes" onPress={() => this.props.navigation.navigate('AlignTextCenterScreen')}/>
          <Button color="lightgreen" title="Color List" onPress={() => this.props.navigation.navigate('ColorList')}/>
        </View>
        <View style={styles.menus}>
          <Button color="purple" title="Touchable" onPress={() => this.props.navigation.navigate('TouchHighlight')}/>
          <Button color="blue" title="Layouts" onPress={() => this.props.navigation.navigate('Layouts')}/>
          <Button color="red" title="FlexWrap" onPress={() => this.props.navigation.navigate('FlexWrap')} />
          <Button color="orange" title="ACFlexEnd" onPress={() => this.props.navigation.navigate('AlignContentFlexEnd')}/>
        </View>
        <View style={styles.menus}>
          <Button title="ACCenter" onPress={() => this.props.navigation.navigate('AlignContentCenter')}/>
          <Button color="green" title="ACFlexStart" onPress={() => this.props.navigation.navigate('AlignContentFlexStart')}/>
          <Button color="lightgreen" title="ACSpaceBetween" onPress={() => this.props.navigation.navigate('AlignContentSpaceBetween')}/>
        </View>
        <View style={styles.menus}>
          <Button color="purple" title="ACSpaceAround" onPress={() => this.props.navigation.navigate('AlignContentSpaceAround')}/>
          <Button color="blue" title="ACStretch" onPress={() => this.props.navigation.navigate('AlignContentStretch')}/>
          <Button color="orange" title="Position" onPress={() => this.props.navigation.navigate('Position')}/>
          <Button color="lightgreen" title="ZIndex" onPress={() => this.props.navigation.navigate('ZIndex')}/>
        </View>
        <View>
          <Text style={styles.navigationText}>Welcome to Home Screen.</Text>  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default HomeScreen;