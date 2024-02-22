import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {BaseColors} from '../../config/theme';
import {Button, Snackbar} from 'react-native-paper';
import CInput from '../../components/CInput';
import {isEmpty} from 'lodash';
import {
  makeNewAccount_API_CALL,
  signinAccount_API_CALL,
} from '../../services/api';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/actions/userActions';
const SignIn = ({navigation}) => {
  //user data set in rudex
  const dispatch = useDispatch();

  const errObj = {
    emailErr: 'Enter your email address',
    showEmailError: false,

    passwordError: 'Enter your password',
    showPasswordError: false,
  };

  const [errorObj, setErrorObj] = useState(errObj);
  const [email, setEmail] = useState('arsil8356@gmail.com');
  const [password, setPassword] = useState('123556');
  const [loading, setLoading] = useState(false);

  const signInAccount = async () => {
    setLoading(true);
    const sentData = {
      email: email,
      password: password,
    };
    const response = await signinAccount_API_CALL(sentData);
    if (response?.data?.status) {
      setLoading(false);
      dispatch(setUserData(response?.data?.user));
      navigation.replace('BottomTabNavigator');
      setEmail('');
      setPassword('');
    } else {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'SignIn Failed',
        text2: 'Email and Password does not match',
      });
    }
  };

  return (
    <LinearGradient
      colors={['rgb(230, 192, 254)', 'rgb(254, 254, 254)']}
      style={styles.main}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 1.0}}>
      <View />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.mainTitle}>Welcome to Yupp !</Text>
      </View>
      <View style={{width: '90%'}}>
        <CInput
          lable="Email"
          value={email}
          onChangeText={e => (
            setEmail(e), setErrorObj({...errorObj, showEmailError: false})
          )}
          icon="email"
          errorMsg={errorObj.emailErr}
          errVisible={errorObj.showEmailError}
          onBlur={() =>
            isEmpty(email) && setErrorObj({...errorObj, showEmailError: true})
          }
        />
        <CInput
          secureTextEntry
          lable="Password"
          value={password}
          onChangeText={e => (
            setPassword(e), setErrorObj({...errorObj, showPasswordError: false})
          )}
          icon="lock"
          errorMsg={errorObj.passwordError}
          errVisible={errorObj.showPasswordError}
          onBlur={() =>
            isEmpty(password) &&
            setErrorObj({...errorObj, showPasswordError: true})
          }
        />
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <Text>Create new account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: BaseColors.primaryDark}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <Button
          loading={loading}
          style={{
            backgroundColor: BaseColors.black,
            marginBottom: 5,
            paddingVertical: 10,
          }}
          icon="shield-account"
          mode="contained"
          onPress={() => signInAccount()}>
          <Text style={{fontSize: 20}}>Sign In</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default SignIn;
