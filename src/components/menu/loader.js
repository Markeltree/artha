import React, { useState, useEffect } from 'react';

export default function Loader({children}) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600)
    return () => clearTimeout(timer);
  }, []);

  return(
    <div id='mainpreloader'>
    {loading
      ? <div className='preloader fadeOut'>
          <div className="mainpreloader">
            <span></span>
          </div>
        </div>
      : children}
    </div>
  );
}