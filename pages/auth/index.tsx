import Button from '@components/Shared/Button/Button';
import Layout from '@components/Shared/Layout';
import { useAuthStore } from '@context/authContext';
import { ArrowRightIcon } from '@heroicons/react/solid';
import useAuth from '@hooks/useAuth';
import { blurredBgImage } from '@public/images/bg-base-64';
import fetcher from '@utils/fetcher';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Else, If, Then } from 'react-if';

type Inputs = {
  mobile: number;
  otp: string;
};

const Auth: React.FC = () => {
  const router = useRouter();
  const { setAuthData } = useAuthStore();
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<Inputs>();
  const [showOTPField, setShowOTPField] = useState<boolean>(false);
  const [mobile, setMobile] = useState<number>(0);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setMobile(data?.mobile);
    onMobileSubmit(data?.mobile);
  };

  const onMobileSubmit = async (mobile) => {
    if (!mobile) {
      toast.error('Enter mobile number');

      return;
    }
    const endpoint = `/user/v1/otp?number=${mobile}&countryCode=91`;
    const resp = await fetcher(endpoint);

    const progress = new Promise((resolve, reject) => {
      if (resp.status === 200) {
        resolve(resp?.data);
        setShowOTPField(true);
      } else {
        reject(resp?.statusText);
      }
    });

    toast.promise(progress, {
      loading: 'submitting',
      success: 'OTP sent successfully',
      error: 'Please try again',
    });
  };

  const onOTPSubmit: SubmitHandler<Inputs> = async (data) => {
    const endpoint = `/user/v1/login/otp`;
    const resp = await fetcher(endpoint, {
      method: 'POST',
      body: {
        countryCode: '91',
        number: mobile,
        otp: data.otp,
      },
    });

    const progress = new Promise((resolve, reject) => {
      if (resp.status === 200 && resp.data?.success) {
        const { creator, userId, username, name, number, phoneNumber, profileImgUrl } = resp?.data?.data;
        setAuthData({ creator, userId, username, name, number, phoneNumber, profileImgUrl });
        setShowOTPField(false);
        resolve('foo');
        login({ token: resp?.data?.message, cb: () => router.push(router?.query?.returnUrl?.toString() || '/') });
      } else {
        reject('');
      }
    });

    toast.promise(progress, {
      loading: 'submitting',
      success: 'Login successful',
      error: 'OTP not valid',
    });
  };

  return (
    <Layout>
      <Head>
        <title>Login / Signup | Pep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Header backflow={true} />
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
          <form onSubmit={handleSubmit(showOTPField ? onOTPSubmit : onSubmit)}>
            <div className="mt-4">
              <If condition={showOTPField}>
                <Then>
                  <div className="mt-4">
                    <div className="col-span-2">
                      <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                        OTP
                      </label>
                      <div className="mt-1">
                        <input
                          {...register('otp', { required: showOTPField })}
                          type="text"
                          className="text-center p-4 block w-full rounded-xl bg-slate-200 border-b border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100"
                        />
                      </div>
                    </div>
                  </div>
                </Then>
                <Else>
                  <div className="col-span-2">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                      Mobile
                    </label>
                    <div className="mt-1">
                      <input
                        {...register('mobile', { required: showOTPField })}
                        type="tel"
                        placeholder="Mobile Number"
                        className="p-4 block w-full rounded-xl bg-slate-200 border-b border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100"
                      />
                    </div>
                  </div>
                </Else>
              </If>
            </div>
            <Button bg="slate" size="xl" type="submit" className="mt-8 uppercase bg-slate-900">
              {showOTPField ? 'Login / Signup' : 'Send OTP'}{' '}
              <ArrowRightIcon className="h-4 w-4 ml-2" aria-hidden="true" />
            </Button>
            <If condition={showOTPField}>
              <Then>
                <div>
                  <p className="text-xs text-center my-4">OTP has been sent to {mobile}</p>
                  <div className="flex justify-between space-x-4">
                    <Button className="text-xs" onClick={() => setShowOTPField(false)}>
                      Change Number
                    </Button>
                    <Button className="text-xs" onClick={() => onMobileSubmit(mobile)}>
                      Resend OTP
                    </Button>
                  </div>
                </div>
              </Then>
            </If>
          </form>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default Auth;
