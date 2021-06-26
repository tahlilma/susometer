import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';
import axios from 'axios'

import LeaderBoardNav from '../../components/LeaderBoardNav'
import LeaderBoardItem from '../../components/LeaderBoardItem';

function LeaderBoardScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const refreshing = () => {
    setLoading(true);
    axios.get('https://susometer.herokuapp.com/getSus')
      .then(res => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch(console.error);
  }

  useEffect(() => {
    refreshing();
  }, []);

  if (loading) {
    return (
      <>
        <LeaderBoardNav disabled={true} />
        <Layout style={styles.center}> 
          <Spinner size='large'/>
        </Layout>
      </>
    )
  }
  return (
    <>
      <LeaderBoardNav onRefresh={refreshing} />
      <Layout style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <LeaderBoardItem 
              sus={item.sus}
              name={item.name}
            />
          )}
        />
      </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LeaderBoardScreen;