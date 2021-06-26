import React, { useState } from 'react';
import { StyleSheet } from 'react-native';  
import { Layout, Input, Text, Button } from '@ui-kitten/components';

function IdentityStack({ navigation }) {
  const [name, setName] = useState('');

  return (
    <Layout style={styles.center}>
      <Text style={styles.topText} category="h2">Make A Identity</Text>
      <Input
        placeholder='Name'
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Button
        status='success'
        disabled={name.length < 1 ? true : false}
        onPress={() => navigation.navigate('HomeStack', { name: name })}
        style={styles.buttonStyle}
      >
        Proceed
      </Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topText: { 
    marginBottom: 10
  },
  buttonStyle: {
    marginTop: 10
  }
})

export default IdentityStack;