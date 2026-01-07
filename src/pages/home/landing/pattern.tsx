import { memo, useEffect } from 'react';

const Pattern = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='pattern'>
      <div>
        <div>
          {[...new Array(18).keys()].map((index) => (
            <div key={`c${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
});
export default Pattern;
