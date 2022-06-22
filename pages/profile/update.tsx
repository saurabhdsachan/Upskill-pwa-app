import Button from '@components/Shared/Button/Button';
import Layout from '@components/Shared/Layout';
import LottieAnimation from '@components/Shared/LottieAnimation';
import { useAuthStore } from '@context/authContext';
import welcomeLottie from '@public/lotties/welcome.json';
import { updateProfile } from '@utils/apiData';
import { classNames } from '@utils/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { observer } from 'mobx-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

const FormValidation = (values) => {
  const errors = {};
  if (!values.name) {
    // @ts-ignore
    errors.name = 'Required';
  } else if (!/^[a-zA-Z ]{2,30}$/i.test(values.name)) {
    // @ts-ignore
    errors.name = 'Invalid name';
  }
  if (!values.username) {
    // @ts-ignore
    errors.username = 'Required';
  } else if (!/^[a-zA-Z][0-9a-zA-Z_\.]{2,30}$/i.test(values.username)) {
    // @ts-ignore
    errors.username = 'Min 3 characters, Allowed characters a-z, 0-9, ., and _ ';
  }

  return errors;
};

const UpdateProfile: React.FC = observer(() => {
  const { authData, setAuthData } = useAuthStore();
  const router = useRouter();

  const onFormSubmit = async (values, { setSubmitting }) => {
    const resp = await updateProfile({ realname: values?.name, username: values?.username });

    if (resp.status === 200) {
      setSubmitting && setSubmitting(false);
      if (resp?.data?.error?.length === 0) {
        toast.success('Profile updated successfully', { id: 'success' });
        setAuthData({ ...authData, username: values?.username, name: values?.name });
      } else {
        toast.error(resp?.data?.message, { id: 'error' });
      }
    } else {
      toast.error('Try again', { id: 'error' });
      setSubmitting && setSubmitting(false);
    }
  };

  const getUserData = useCallback(() => {
    if (authData?.username) {
      router.push(router?.query?.returnUrl?.toString() || '/bookings/booked?type=today');
    }
  }, [authData, router]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <Layout>
      <Head>
        <title>Update Profile | Pep</title>
      </Head>

      <Layout.Body>
        <div className="bg-white items-center justify-center">
          <LottieAnimation animationData={welcomeLottie} loop={false} width={160} height={160} delay={200} />
        </div>
        <div className="px-6 text-center">
          <h3 className="mt-2 text-2xl">Welcome to Pep!</h3>
          <p className="mb-6 text-slate-400">Lets complete your profile first</p>
        </div>
        <div className="px-10">
          <Formik
            initialValues={{ name: authData?.name || '', username: authData?.username || '' }}
            validate={(values) => FormValidation(values)}
            onSubmit={(values, { setSubmitting }) => onFormSubmit(values, { setSubmitting })}
          >
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor="name" className="mb-2 block">
                  Name
                </label>
                <Field name="name">
                  {({ field, form, meta }) => (
                    <div className="flex-1">
                      <input
                        {...field}
                        autoFocus={!authData?.name}
                        type="text"
                        placeholder="Enter name"
                        className={classNames(
                          meta.touched && meta.error
                            ? 'border border-red-400 bg-red-50'
                            : 'border border-transparent bg-slate-200',
                          'px-6 h-14 block w-full rounded-xl  focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100'
                        )}
                      />
                      <div className="h-8 py-1 text-center">
                        {meta.touched && meta.error && (
                          <ErrorMessage name="name" component="small" className="text-xs text-red-600" />
                        )}
                      </div>
                    </div>
                  )}
                </Field>
                <label htmlFor="username" className="mb-2 block">
                  Username
                </label>
                <Field name="username">
                  {({ field, form, meta }) => (
                    <div className="flex-1">
                      <input
                        {...field}
                        readOnly={authData?.username}
                        autoFocus={authData?.name}
                        type="text"
                        placeholder="Choose your username"
                        className={classNames(
                          meta.touched && meta.error
                            ? 'border border-red-400 bg-red-50'
                            : 'border border-transparent bg-slate-200',
                          'px-6 h-14 block w-full rounded-xl  focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-100 focus:border-slate-100'
                        )}
                      />
                      <div className="h-8 py-1 text-center">
                        {meta.touched && meta.error && (
                          <ErrorMessage name="username" component="small" className="text-xs text-red-600" />
                        )}
                      </div>
                    </div>
                  )}
                </Field>

                <Button bg="blue" size="xl" type="submit" disabled={isSubmitting} className="mt-6">
                  Done
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout.Body>
    </Layout>
  );
});

export default React.memo(UpdateProfile);
