import React from 'react';
import { ListItem, Icon } from '@ui-kitten/components';

const LeaderBoardItem = ({ sus, name }) => {
  return (
    <ListItem
      disabled={true}
      accessoryLeft={(props) => <Icon {...props} name='person-outline' />}
      title={sus}
      description={name}
    />
  )
}

export default LeaderBoardItem;