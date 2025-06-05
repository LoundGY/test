import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    worker.postMessage('start');
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
  }, []);

  return <div>{d !== null ? d : 'Calculating...'}</div>;
}
