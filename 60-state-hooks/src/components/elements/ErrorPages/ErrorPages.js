import React from 'react';

export default function ErrorPages(props) {
  const { code, title } = props;

  return (
    <section className="m-auto min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-wider text-blue-500">
          {code}
        </h1>
        <p className="text-2xl font-semibold uppercase py-4">{title}</p>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 font-semibold rounded-lg text-red-50 p-2">
            Home
        </a>
      </div>
    </section>
  );
};