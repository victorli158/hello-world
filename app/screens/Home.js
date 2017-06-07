import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import colors from '../config/colors';
import { PrimaryButton } from '../components/Buttons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleCreatePress = this.handleCreatePress.bind(this);
  }

  handleCreatePress() {
    this.props.navigation.navigate('CreateTrip');
  }

  render() {
    return (
      <View>
        <PrimaryButton text="Create Trip" onPress={this.handleCreatePress} />
        <Text>Upcoming Trips</Text>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
