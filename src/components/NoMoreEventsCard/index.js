import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { cCard, cHeading } from './styles.module.scss';

const NoMoreEventsCard = () => (
  <div className={cCard}>
    <Text className={cHeading}>
      Sorry,
      <br />
      mehr is grad nit los.
      <br />
      #corona
    </Text>
  </div>
);

export default NoMoreEventsCard;
