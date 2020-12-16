import {NavigationProp, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;
type Props = {
  navigation: DetailScreenNavigationProp;
};
const DetailsScreen = ({navigation}: Props) => {
  const route = useRoute();
  const {itemId, otherParam} = route.params as DetailsParam;
  console.log('detail');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detalis Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details Again.."
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;
