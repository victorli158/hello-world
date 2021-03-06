import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default CustomInput;
