import Image from 'next/image';
import React from 'react';
import SectionTitle from '../Shared/SectionTitle';

const ChooseUs = (): JSX.Element => {
  return (
    <div className="relative">
      <SectionTitle
        feature="Best Service"
        title="Why Pick Spacejoy"
        description="Our design experts will transform any room in your home on our smart 3D desktop App. Shop handpicked products within your budget and style, directly from your room design, within Spacejoy."
      />
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center">
          <div className="border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
            <div className="text-center">
              <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-red-100 flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,c_scale,w_300/v1622188237/spj-v2/3d-icons/spj-22_ypkbw5.webp"
                  alt="No markups"
                  height={'200'}
                  width={'200'}
                  layout="intrinsic"
                />
              </div>
              <h3 className="text-xl mb-2">No markups</h3>
              <p className="text-sm text-gray-500">
                Our design experts will transform any room in your home on our smart 3D desktop App.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
            <div className="text-center">
              <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-yellow-100 flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,c_scale,w_300/v1622188240/spj-v2/3d-icons/spj-23_lgp9bw.webp"
                  alt="Comp Service"
                  height={'200'}
                  width={'200'}
                  layout="intrinsic"
                />
              </div>
              <h3 className="text-xl mb-2">Comp Service</h3>
              <p className="text-sm text-gray-500">
                Our design experts will transform any room in your home on our smart 3D desktop App.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
            <div className="text-center">
              <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-green-100 flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,c_scale,w_300/v1622188220/spj-v2/3d-icons/spj-1_jas7do.webp"
                  alt="Returns"
                  height={'200'}
                  width={'200'}
                  layout="intrinsic"
                />
              </div>
              <h3 className="text-xl mb-2">Returns</h3>
              <p className="text-sm text-gray-500">
                Our design experts will transform any room in your home on our smart 3D desktop App.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 p-10 flex-1 rounded-xl flex items-center justify-center md:mx-2 xl:mx-3">
            <div className="text-center">
              <div className="rounded-full h-28 w-28 mb-5 mx-auto bg-indigo-100 flex justify-center items-center">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto,c_scale,w_300/v1622188230/spj-v2/3d-icons/spj-11_ievy9p.webp"
                  alt="24/7 Support"
                  height={'200'}
                  width={'200'}
                  layout="intrinsic"
                />
              </div>
              <h3 className="text-xl mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-500">
                Our design experts will transform any room in your home on our smart 3D desktop App.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
