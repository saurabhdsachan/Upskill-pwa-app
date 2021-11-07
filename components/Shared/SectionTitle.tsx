import React from 'react';

const SectionTitle = ({
  accent,
  feature,
  title,
  description,
}: {
  accent?: string;
  feature?: string;
  title: string;
  description?: string;
}): JSX.Element => {
  return (
    <div className="container mx-auto p-28">
      <div className="text-center max-w-4xl mx-auto">
        {feature && <p className="text-gray-500 font-semibold tracking-wide uppercase mb-2">{feature}</p>}
        <h2
          className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight tracking-normal  sm:text-4xl mb-5 ${
            accent === 'light' ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </h2>
        {description && <p className={`${accent === 'light' ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>}
      </div>
    </div>
  );
};

export default SectionTitle;
