import { memo, useEffect } from 'react';
import './index.less';

const Form = memo(() => {
  useEffect(() => {}, []);
  return (
    <form className='form'>
      <div className='tab' />
      <div className='body'>
        <div>
          <div>
            <select name='city' defaultValue={0}>
              <option disabled value={0}>
                請選擇區域
              </option>
              <option value='taipei'>台北市</option>
            </select>
          </div>
          <div>
            <select name='type' defaultValue={0}>
              <option disabled value={0}>
                請選擇型態
              </option>
              <option value='apartment'>無電梯公寓</option>
              <option value='house'>透天宅</option>
            </select>
          </div>
          <div>
            <select name='size' defaultValue={0}>
              <option disabled value={0}>
                請選擇坪數
              </option>
              <option value='apartment'>30坪以下</option>
              <option value='house'>30坪以上</option>
            </select>
          </div>
        </div>
        <div>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={57.3 * 0.8}
              height={27.4 * 0.8}
              viewBox='0 0 57.3 27.4'
            >
              <g fill='#fff' opacity='.81'>
                <path d='M6.1 15.9v6.5l.1 2.2c0 .4-.1.7-.3 1.1-.2.3-.4.6-.8.8s-.8.4-1.4.5-1.3.2-2 .2L.6 24.5c.5.1 1.1.1 1.8.1.4 0 .8 0 1.1-.2.3-.1.4-.3.4-.7v-7.2l-2.1.7-1.2.5-.6-2.2 1.3-.3 2.4-.8V8.3H.1V6.1h3.6V1.5c0-.4 0-.8-.1-1.2 1.1 0 2 0 2.5.1 0 .4-.1.7-.1 1.1v4.6h2.9v2.2H6.1v5.4l2.8-1v2.4zM27.8 25l-1 2.4c-3.3-.4-6.1-1.3-8.3-2.5-2.5 1.2-5.6 2-9.2 2.5l-1-2.3c1.4-.1 2.8-.4 4.2-.6 1.4-.3 2.6-.6 3.7-1.1-.8-.6-1.4-1.4-2-2.2q-.9-1.2-1.5-2.4H10v-2.2h7V.9c0-.3 0-.6-.1-.9.6 0 1.4 0 2.4.1 0 .3-.1.6-.1.9v15.7h4.4l.2-.2c.7.4 1.4.9 2 1.5h-.2c-.9 2.1-2.4 3.9-4.7 5.5q2.85 1.2 6.9 1.5M10.4 13.9c0-.4.1-.7.1-1V2.3l1 .4c.5-.1 1.1-.4 1.9-.7.7-.3 1.4-.6 1.9-1l1.2 1.8-.5.2c-1 .5-2.2.9-3.4 1.2v2.4h3v2.1h-3v3.1h3v2.1h-5.2m4.9 4.8c.4.7.9 1.4 1.5 2s1.2 1.1 1.9 1.6c1.9-1 3.3-2.2 4-3.6zM23.9 4h-3.5V1.9h5.7v10.9c0 .5 0 .9.1 1.1h-5.4v-2.1h3.1V8.7h-3.1v-2h3.1zM32.2 15.8c.9 0 2.3-.1 4-.2v-2.4h-4.9v-1.9h11.9v1.9h-4.7v2.2l5-.5-.3 1.9c-.8.1-2.6.3-5.3.5s-4.6.4-5.7.5c-.3 0-.7.1-1.2.2l-.3-2.1h1.5zm22.6 3.5h2.5v2.2c-.5 0-1.3-.1-2.5-.1H51v3.1c0 .7-.2 1.2-.6 1.6s-1 .6-1.9.8c-.8.2-1.9.3-3.2.3l-1.2-2.4c.9.1 1.7.2 2.5.2.4 0 .7 0 1.1-.1.3 0 .6-.2.8-.3.2-.2.2-.3.2-.6v-2.5H33.5c-1.2 0-2 0-2.5.1v-2.2h17.7v-.9c0-.3 0-.6-.1-.9h1.3c.6 0 1 .1 1.2.1 0 .2-.1.5-.1.8v.9h3.8zm-4-13.1H34.5c-1.2 0-2.1 0-2.6.1V4.5c.5 0 1.4.1 2.6.1h16.3V3H35V1.1c.4 0 1 .1 1.8.1h16.5v3.3h1c1.2 0 2.1 0 2.6-.1v1.8c-.5 0-1.4-.1-2.6-.1h-1v3.4H34.9V7.8c.4 0 1 .1 1.8.1h14.1zm-9.4 19.9c-.7-.5-1.6-1.1-2.8-1.8q-1.8-1.05-3-1.5l1.5-1.4c.8.3 1.8.7 3 1.3 1.1.6 2.1 1.1 2.9 1.7-.5.5-1 1.1-1.6 1.7m14.7-14.9V17H45.5c0-.3.1-.5.1-.8V12c0-.2 0-.5-.1-.8zm-8.2 4.1h5.8v-2.4h-5.8z' />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
});
export default Form;
