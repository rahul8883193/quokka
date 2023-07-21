/**
 * Register Screen
 * @flow
 * @format
 */
import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {ImageUrlConstants} from '../../../constants/imageUrl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {Row} from '../../../components/row';
import {Formik, FormikProps} from 'formik';
import {colors} from '../../../constants/colors';
import {signUp} from '../../../helper/yupValidation';
import {AppInput} from '../../../components/appInput';
import AppButton from '../../../components/appButton';
import {RegisterPayload} from '../../../types/authTypes';
import {useAppDispatch} from '../../../redux/hooks';
import GradientContainer from '../../../components/gradientContainer';
import AppLoader from '../../../components/loader';
import auth from '@react-native-firebase/auth';
import {showErrorSnackBar, showSuccessSnackBar} from '../../../utils/common';
import {setUser} from '../../../redux/slices/authSlice';

export default function RegisterScreen(props: any) {
  const [rememberMe, setRememberMe] = useState(false);
  const [loader, setLoader] = useState(false);

  const formRef = useRef<FormikProps<RegisterPayload>>(null);
  const {navigation} = props;

  const dispatch = useAppDispatch();

  const initialValues: RegisterPayload = {
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    name: '',
  };
  const registerSubmit = (values: RegisterPayload) => {
    setLoader(true);
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(res => {
        setLoader(false);
        showSuccessSnackBar('User account created & signed in!');
        console.log('User account created & signed in!', res);
        dispatch(setUser(res.user.toJSON()));
        navigation.reset({index: 0, routes: [{name: 'app'}]});
      })
      .catch(error => {
        setLoader(false);

        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showErrorSnackBar('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showErrorSnackBar('Invalid email address!');
        }

        console.error(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return (
    <GradientContainer style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.loginLabelStyle}>{'Create an account'}</Text>
        <Text style={styles.setUpLableStyle}>
          Setup a new account in a minute.
        </Text>

        <Formik
          initialValues={initialValues}
          innerRef={formRef}
          onSubmit={values => {
            registerSubmit(values);
          }}
          validationSchema={signUp}>
          {({
            setFieldValue,
            errors,
            setFieldTouched,
            values,
            touched,
            handleSubmit,
          }) => (
            <>
              <AppInput
                title={'Email address'}
                icon={ImageUrlConstants.emailIcon}
                inputContainerStyle={styles.inputStyle}
                placeholder={'Email address'}
                onChangeText={(value: string) => {
                  setFieldValue('email', true);
                  setFieldValue('email', value);
                }}
                value={values.email}
                error={(touched.email && errors.email) || ''}
                onBlur={() => setFieldTouched('email', true)}
                keyboardType={'email-address'}
              />

              <AppInput
                passEyeIcon
                title={'Password'}
                icon={ImageUrlConstants.passwordIcon}
                inputContainerStyle={styles.inputStyle}
                placeholder={'Enter password'}
                onChangeText={(val: string) => {
                  setFieldTouched('password', true);
                  setFieldValue('password', val);
                }}
                value={values.password}
                error={(touched.password && errors.password) || ''}
                onBlur={() => setFieldTouched('password', true)}
              />

              <AppInput
                passEyeIcon
                title={'Confirm Password'}
                icon={ImageUrlConstants.passwordIcon}
                inputContainerStyle={styles.inputStyle}
                placeholder={'Enter confirm password'}
                onChangeText={(value: string) => {
                  setFieldTouched('confirmPassword', true);
                  setFieldValue('confirmPassword', value);
                }}
                value={values.confirmPassword}
                error={
                  (touched.confirmPassword && errors.confirmPassword) || ''
                }
                onBlur={() => setFieldTouched('confirmPassword', true)}
              />

              <Row style={styles.termsConditionStyle}>
                <Row style={styles.termsContainerStyle}>
                  <TouchableOpacity
                    hitSlop={{right: 5, left: 5, top: 5, bottom: 5}}
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
                  <Text style={styles.iAgreewith}>
                    {
                      'By signing up, I accept the terms & conditions of the platform.'
                    }
                  </Text>
                </Row>
              </Row>

              <AppButton
                disabled={!rememberMe}
                onPress={() => handleSubmit()}
                title={'Submit'}
                style={styles.button}
              />

              <Row style={styles.alreadyAccountContainer}>
                <Text style={styles.alreadyAccountLabelStyle}>
                  {'Already a user? '}
                </Text>
                <Text
                  style={styles.signupLabelStyle}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  {'Login'}
                </Text>
              </Row>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <AppLoader visible={loader} />
    </GradientContainer>
  );
}
