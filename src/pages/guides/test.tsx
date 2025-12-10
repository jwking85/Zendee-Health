import React from 'react';

const TestGuides: React.FC = () => {
  return (
    <main className="flex-grow w-full p-8">
      <h1 className="text-4xl font-bold">TEST - Guides Index Page</h1>
      <p className="mt-4">If you can see this, the route is working.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border p-4 rounded">Guide 1</div>
        <div className="border p-4 rounded">Guide 2</div>
        <div className="border p-4 rounded">Guide 3</div>
      </div>
    </main>
  );
};

export default TestGuides;
