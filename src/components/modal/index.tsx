import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext } from 'react';

const Modal = memo(() => {
  const [context, setContext] = useContext(Context);
  const { title, body } = context[ActionType.Modal]!;

  return (
    <div className='fixed top-0 z-10 h-full w-full'>
      <div className='bg-backgroundColor animate-fadeIn02s absolute h-full w-full opacity-70' />;
      <div className='animate-fadeIn absolute top-0 flex h-full w-full items-center justify-center'>
        <div className='bg-textColor text-backgroundColor relative min-h-44 min-w-125 rounded-xl p-4'>
          <h1 className='mb-2 indent-2 text-xl leading-loose font-bold'>{title}</h1>
          <hr className='mb-4 opacity-40' />
          <p className='text-quaternary indent-2 text-sm leading-relaxed'>{body}</p>
          <hr className='my-4 opacity-40' />
          <div className='flex justify-end'>
            <button
              onClick={() => {
                setContext({ type: ActionType.Modal, state: { enabled: false } });
              }}
              className='bg-quaternary text-textColor hover:bg-primary hover:text-quaternary cursor-pointer rounded-lg px-4 py-2'
            >
              Close
            </button>
          </div>
          <div
            onClick={() => {
              setContext({ type: ActionType.Modal, state: { enabled: false } });
            }}
            className='bg-quaternary hover:bg-primary absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg font-mono text-2xl font-black text-white select-none'
          >
            ×
          </div>
        </div>
      </div>
    </div>
  );
});
export default Modal;
