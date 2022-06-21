import Button from '@components/Shared/Button/Button';
import Layout from '@components/Shared/Layout';
import { useAuthStore } from '@context/authContext';
import { ArrowRightIcon } from '@heroicons/react/solid';
import useAuth from '@hooks/useAuth';
import { blurredBgImage } from '@public/images/bg-base-64';
import fetcher from '@utils/fetcher';
import { classNames } from '@utils/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Else, If, Then } from 'react-if';

const Auth: React.FC = () => {
  const router = useRouter();
  const { setAuthData } = useAuthStore();
  const { login } = useAuth();
  const [mobileValue, setMobileValue] = useState<string>('');

  const mobileValidation = (values) => {
    const errors = {};
    if (!values.mobile) {
      // @ts-ignore
      errors.mobile = 'Required';
    } else if (!/^([6789]{1})([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/i.test(values.mobile)) {
      // @ts-ignore
      errors.mobile = 'Invalid mobile number';
    }

    return errors;
  };

  const otpValidation = (values) => {
    const errors = {};
    if (!values.otp) {
      // @ts-ignore
      errors.otp = 'Required';
    } else if (!/^[\d]{6}$/i.test(values.otp)) {
      // @ts-ignore
      errors.otp = 'Enter 6 digit OTP';
    }

    return errors;
  };

  const onMobileSubmit = async (values, { setSubmitting }) => {
    const endpoint = `/user/v1/otp?number=${values?.mobile}&countryCode=91`;
    const resp = await fetcher(endpoint);

    if (resp.status === 200) {
      toast.success('OTP sent successfully', { id: 'success' });
      setMobileValue(values?.mobile);
      setSubmitting && setSubmitting(false);
    } else {
      toast.error('Try again', { id: 'error' });
      setSubmitting && setSubmitting(false);
    }
  };

  const onOTPSubmit = async (values, { setSubmitting }) => {
    const endpoint = `/user/v1/login/otp`;
    const resp = await fetcher(endpoint, {
      method: 'POST',
      body: {
        countryCode: '91',
        number: mobileValue,
        otp: values?.otp,
      },
    });

    if (resp.status === 200 && resp.data?.success) {
      toast.success('Login successful', { id: 'success' });
      const { creator, userId, username, name, number, phoneNumber, profileImgUrl } = resp?.data?.data;
      setSubmitting && setSubmitting(false);
      setAuthData({ creator, userId, username, name, number, phoneNumber, profileImgUrl });
      if (userId && username) {
        login({ token: resp?.data?.message, cb: () => router.push(router?.query?.returnUrl?.toString() || '/') });
      } else {
        login({
          token: resp?.data?.message,
          cb: () =>
            router.push(`/profile/update?returnUrl=${router?.query?.returnUrl?.toString()}` || '/profile/update'),
        });
      }
    } else {
      toast.error('OTP not valid', { id: 'error' });
      setSubmitting && setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Login / Signup | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} showShare={false} showBooking={false} />
      <Layout.Body>
        <div className="p-8">
          <div className="fixed top-10 right-0 z-20">
            <Image
              className="object-cover rounded-full"
              src="https://res.cloudinary.com/dui8mpatf/image/upload/v1652427250/pep/Saly-38_y1ovez.png"
              alt="Chef Jordan"
              width={180}
              height={180}
              placeholder="blur"
              layout="intrinsic"
              blurDataURL={blurredBgImage}
            />
          </div>
          <h1 className="w-60 text-4xl my-16 leading-snug">
            Hey,
            <br />
            Login Now
          </h1>

          <If condition={!mobileValue}>
            <Then>
              <Formik
                initialValues={{ mobile: '' }}
                validate={(values) => mobileValidation(values)}
                onSubmit={(values, { setSubmitting }) => onMobileSubmit(values, { setSubmitting })}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <label htmlFor="mobile" className="my-2 block">
                      Mobile
                    </label>
                    <div className="flex space-x-2">
                      <input
                        readOnly
                        type="text"
                        placeholder="+91"
                        className="text-center w-1/4 h-14 block rounded-xl bg-slate-200 border-b border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100"
                      />
                      <Field name="mobile">
                        {({ field, form, meta }) => (
                          <div className="flex-1">
                            <input
                              {...field}
                              autoFocus
                              type="tel"
                              placeholder="Mobile Number"
                              className={classNames(
                                meta.touched && meta.error
                                  ? 'border border-red-400 bg-red-50'
                                  : 'border border-transparent bg-slate-200',
                                'px-6 h-14 block w-full rounded-xl  focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100'
                              )}
                            />
                            <div className="h-10 py-1 text-center">
                              {meta.touched && meta.error && (
                                <ErrorMessage name="mobile" component="small" className="text-xs text-red-600" />
                              )}
                            </div>
                          </div>
                        )}
                      </Field>
                    </div>

                    <Button bg="slate" size="xl" type="submit" disabled={isSubmitting}>
                      Send OTP <ArrowRightIcon className="h-4 w-4 ml-2" aria-hidden="true" />
                    </Button>
                  </Form>
                )}
              </Formik>
            </Then>
            <Else>
              <Formik
                initialValues={{ otp: '' }}
                validate={(values) => otpValidation(values)}
                onSubmit={(values, { setSubmitting }) => onOTPSubmit(values, { setSubmitting })}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <label htmlFor="otp" className="my-2 block">
                      OTP
                    </label>
                    <Field name="otp">
                      {({ field, form, meta }) => (
                        <div className="flex-1">
                          <input
                            {...field}
                            autoFocus
                            type="text"
                            placeholder="OTP"
                            className={classNames(
                              meta.touched && meta.error
                                ? 'border border-red-400 bg-red-50'
                                : 'border border-transparent bg-slate-200',
                              'px-6 h-14 block w-full rounded-xl  focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100'
                            )}
                          />
                          <div className="h-10 py-1 text-center">
                            {meta.touched && meta.error && (
                              <ErrorMessage name="otp" component="small" className="text-xs text-red-600" />
                            )}
                          </div>
                        </div>
                      )}
                    </Field>
                    <Button bg="slate" size="xl" type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              <div>
                <p className="text-xs text-center my-4">OTP has been sent to {mobileValue}</p>
                <div className="flex justify-between space-x-4">
                  <Button className="text-xs" onClick={() => setMobileValue('')}>
                    Change Number
                  </Button>
                  <Button
                    className="text-xs"
                    onClick={() => onMobileSubmit({ mobile: mobileValue }, { setSubmitting: () => {} })}
                  >
                    Resend OTP
                  </Button>
                </div>
              </div>
            </Else>
          </If>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default React.memo(Auth);
