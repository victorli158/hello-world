import React from 'react';
import { View, Text, Button } from 'react-native';


class Login extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => navigate('Login')}
          title="Login"
        />
        <Button
          onPress={() => navigate('SignUp')}
          title="Sign Up"
        />
      </View>
    )
  }
}

export default Login;
