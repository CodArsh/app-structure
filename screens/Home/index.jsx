import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'react-native-paper';
import {setUserData} from '../../redux/actions/userActions';
import LinearGradient from 'react-native-linear-gradient';
const Home = ({navigation}) => {
  const userData = useSelector(state => state.userData.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('data : ', userData);
  }, []);
  return (
    <LinearGradient
      colors={['rgb(230, 192, 254)', 'rgb(254, 254, 254)']}
      style={{flex: 1}}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 1.0}}>
      <Text>HOME SCREEN</Text>
      <Text>{userData?.email}</Text>
      <Text>{userData?.username}</Text>
      <Text>{userData?.phone}</Text>
      <Text>{userData?.password}</Text>

      <Button
        onPress={() =>
          dispatch(setUserData(''), navigation.navigate('SignIn'))
        }>
        Logout
      </Button>
    </LinearGradient>
  );
};

export default Home;
