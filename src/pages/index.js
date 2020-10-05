import React from 'react';
import dynamic from 'next/dynamic';

const Container = dynamic(() => import('src/components/game/container'), {
  ssr: false,
});

function index(props) {
  return (
    <>
      <div className="page">
        <Container />
      </div>
      <style jsx>{`
        .page {
          display: flex;
          width: 100vw;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default index;
