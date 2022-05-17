import Layout from '@components/Shared/Layout';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { blurredBgImage } from '@public/images/bg-base-64';
import fetcher from '@utils/fetcher';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  mobile: number;
  otp: string;
};

const index: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const endpoint = `/users/${data.mobile}`;
    const resp = await fetcher(endpoint, { data: 'sss' });
    console.log('resp', resp);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <div className="col-span-2">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Mobile
                </label>
                <div className="mt-1">
                  <input
                    {...register('mobile', { required: true })}
                    type="tel"
                    placeholder="Mobile Number"
                    className="p-4 block w-full rounded-xl bg-slate-200 border-b border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-300 focus:border-slate-300"
                  />
                </div>
              </div>
            </div>
            {/* <div className="mt-4">
              <div className="col-span-2">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <div className="mt-1">
                  <input
                    {...register('otp', { required: true })}
                    type="number"
                    className="p-4 block w-full rounded-xl bg-slate-200 border-b border-transparent focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-300 focus:border-slate-300"
                  />
                </div>
              </div>
            </div> */}
            <button
              type="submit"
              className="mt-8 uppercase inline-flex items-center justify-center w-full p-5 border-b border-transparent text-sm font-medium text-white bg-slate-900 hover:bg-white-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-400 rounded-xl"
            >
              Send OTP <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </form>
        </div>
      </Layout.Body>
    </Layout>
  );
};

export default index;
