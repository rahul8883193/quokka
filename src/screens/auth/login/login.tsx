/**
 * Login Screen
 */
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ImageUrlConstants} from '../../../constants/imageUrl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './style';

import {Formik} from 'formik';
import {colors} from '../../../constants/colors';

import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  authActions,
  selectUser,
  setUser,
} from '../../../redux/slices/authSlice';
import {AppInput} from '../../../components/appInput';
import AppContainer from '../../../components/appContainer';
import {nf, wp, hp, wpx, hpx} from '../../../helper/metrics';
import AppButton from '../../../components/appButton';
import {LoginPayload} from '../../../types/authTypes';

import {Row} from '../../../components/row';
import {loginValidation} from '../../../helper/yupValidation';
import AppLoader from '../../../components/loader';
import auth from '@react-native-firebase/auth';
import {showErrorSnackBar} from '../../../utils/common';
import GradientContainer from '../../../components/gradientContainer';

export default function Login(props: any) {
  const [rememberMe, setRememberMe] = useState(false);
  const formRef = useRef<any>(null);
  const {navigation} = props;

  const [loader, setLoader] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleLoginClick = (values: LoginPayload) => {
    setLoader(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        setLoader(false);
        console.log('User account created & signed in!', res);
        dispatch(setUser(res.user.toJSON()));
        navigation.reset({index: 0, routes: [{name: 'app'}]});
      })
      .catch(error => {
        setLoader(false);
        console.log('error', error);
        if (error.code === 'auth/user-not-found') {
          console.log('That email address is already in use!');
          showErrorSnackBar('Email not found');
        }

        if (error.code === 'auth/wrong-password') {
          console.log('That email address is invalid!');
          showErrorSnackBar('Invalid credentials!');
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const initialValues: LoginPayload = {
    email: '',
    password: '',
  };

  return (
    <GradientContainer style={styles.container}>
      <KeyboardAwareScrollView>
        {/* <Image style={styles.logo} source={s.logo} /> */}
        <Text style={styles.titleStyle}>{'Login your account'}</Text>
        <Text style={styles.subTitleStyle}>
          {'Use your credentials to access your account.'}
        </Text>
        <Formik
          initialValues={initialValues}
          innerRef={formRef}
          onSubmit={(values: any, setSubmitting: any) => {
            handleLoginClick(values);
            // submit(values);
          }}
          validationSchema={loginValidation}>
          {(props: any) => (
            <>
              <View>
                <AppInput
                  title={'Email address'}
                  icon={ImageUrlConstants.emailIcon}
                  placeholder={'Email address'}
                  onChangeText={(value: any) => {
                    props.setFieldValue('email', value.toLowerCase());
                  }}
                  value={props.values.email}
                  error={(props.touched.email && props.errors.email) || ''}
                  onBlur={() => {
                    props.setFieldTouched('email', true);
                  }}
                  keyboardType={'email-address'}
                />
                <>
                  <AppInput
                    passEyeIcon
                    title={'Password'}
                    icon={ImageUrlConstants.passwordIcon}
                    placeholder={'Your password'}
                    onChangeText={(value: any) =>
                      props.setFieldValue('password', value)
                    }
                    value={props.values.password}
                    error={
                      (props.touched.password && props.errors.password) || ''
                    }
                    onBlur={() => {
                      props.setFieldTouched('password', true);
                    }}
                  />
                  <Row style={styles.rememberAndForgotPasswordContainerStyle}>
                    <Row style={styles.rememberDetailContainerStyle}>
                      <TouchableOpacity
                        onPress={() => {
                          setRememberMe(!rememberMe);
                        }}>
                        {rememberMe ? (
                          <Image
                            source={ImageUrlConstants.checkIc}
                            style={styles.emptyCheckBoxStyles}
                          />
                        ) : (
                          <View
                            style={[
                              styles.emptyCheckBoxStyles,
                              {borderColor: colors.borderColor},
                            ]}
                          />
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        hitSlop={{right: 5, left: 5, top: 5, bottom: 5}}
                        activeOpacity={0.9}
                        onPress={() => {
                          setRememberMe(!rememberMe);
                        }}>
                        <Text style={styles.rememberMeTextStyle}>
                          {
                            'By logging in, I accept the terms & conditions of the platform.'
                          }
                        </Text>
                      </TouchableOpacity>
                    </Row>
                  </Row>
                </>
              </View>
              <AppButton
                disabled={!rememberMe}
                buttonImage={true}
                onPress={props.handleSubmit}
                title={'Sign in'}
                style={{marginTop: hpx(20)}}
              />
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <Row style={styles.donthaveAccountContainer}>
        <Text
          style={
            styles.donthaveAccountLabelStyle
          }>{`don't have an account?`}</Text>
        <Text
          style={styles.signupLabelStyle}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          {'Register'}
        </Text>
      </Row>
      <AppLoader visible={loader} />
    </GradientContainer>
  );
}
