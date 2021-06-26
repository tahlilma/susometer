import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { CountUp } from 'use-count-up';
import axios from 'axios';

import HomeNav from '../../components/HomeNav'

function SusScreen({ route }) {
  const [disabled, setDisabled] = useState(false);
  const [finished, setFinished] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sus] = useState(Math.floor(Math.random() * 101));

  const { name } = route.params;

  const countUpProps = {
    isCounting: disabled ? true : false,
    start: 0,
    end: sus,
    duration: 2,
    easing: 'easeOutCubic',
    suffix: " %",
    onComplete: () => setFinished(true)
  }
  
  const pressHandler = () => {
    setSubmitted(true);
    axios.post('https://susometer.herokuapp.com/createSus', { name: name, sus: `${sus}%` })
      .then(console.log('Submitted'))
      .catch(console.error);
    console.log(sus);
  }

  return (
    <>
      <HomeNav name={name}/>
      <Layout style={styles.container}>
        <CountUp {...countUpProps}>
          {({ value }) => (
            <>
              <Text category='h1'>{value}</Text>
              <Text category='h4'>SUS</Text>
            </>
          )}
        </CountUp>
        <Button 
          disabled={disabled}
          status='success' 
          style={{ marginTop: 10 }} 
          onPress={() => setDisabled(true)}
        >
          TEST SUS
        </Button>
        {finished ? 
          <Button disabled={submitted} style={{ marginTop: 10 }} status='success' onPress={pressHandler}>
            SUBMIT SUS
          </Button> : null
        }
      </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SusScreen;