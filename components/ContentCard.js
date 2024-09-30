import React from 'react';

const contentCard = ({ title, items }) => {
  return (
    <div className="rounded-lg p-6 m-4 bg-indigo-950 border-2 border-white ring-2 ring-indigo-700 shadow-2xl">
      <h3 className="text-xl font-bold mb-4 text-yellow-300 font-shadow">{title}</h3>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-2 text-white font-shadow">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default contentCard;