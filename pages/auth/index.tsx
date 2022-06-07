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
  const { authData, setAuthData } = useAuthStore();
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<Inputs>();
  const [showOTPField, setShowOTPField] = useState<boolean>(false);
  const [mobile, setMobile] = useState<number>(0);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setMobile(data?.mobile);
    onMobileSubmit(data?.mobile);
  };

  const onMobileSubmit = async (mobile) => {
    const endpoint = `/user/v1/otp?number=${mobile}&countryCode=91`;
    const resp = await fetcher(endpoint);

    const progress = new Promise((resolve, reject) => {
      if (resp.status === 200) {
        resolve('foo');
        setShowOTPField(true);
      } else {
        reject('');
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
        const { userId, username, name, number, phoneNumber, profileImgUrl } = resp?.data?.data;
        setAuthData({ userId, username, name, number, phoneNumber, profileImgUrl });
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
          <h1 className="text-4xl my-16 text-slate-900 leading-10">
            Hey, <br />
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
                          type="number"
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
            <button
              type="submit"
              className="mt-8 uppercase inline-flex items-center justify-center w-full p-5 border-b border-transparent text-sm font-medium text-white bg-slate-900 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 rounded-xl"
            >
              {showOTPField ? 'Login / Signup' : 'Send OTP'} <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
            <If condition={showOTPField}>
              <Then>
                <div className="mt-6">
                  <div className="flex justify-between">
                    <button
                      className="text-xs px-2 py-1 rounded-full border border-slate-300"
                      onClick={() => setShowOTPField(false)}
                    >
                      Change Number
                    </button>
                    <button
                      className="text-xs px-2 py-1 rounded-full border border-slate-300"
                      onClick={() => onMobileSubmit(mobile)}
                    >
                      Resend OTP
                    </button>
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
