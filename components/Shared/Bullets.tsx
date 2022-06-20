import React from 'react';

const Bullets = ({ data, title }: { data: string[]; title?: string }) => {
  return (
    <div className="mt-4">
      {title && <h2 className="font-bold">Highlights</h2>}
      <div className="prose prose-sm break-words">
        <ul role="list">
          {data.map((item) => (
            <li key={item}>
              <span className="text-xs">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Bullets);
