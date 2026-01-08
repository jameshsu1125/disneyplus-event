import { memo, useEffect } from 'react';
import './index.less';
import useTween from 'lesca-use-tween';

type UserProps = {
  data: {
    photo: string;
    name: string;
    description: string;
  };
  inView: boolean;
  index: number;
};

const Photo = memo(
  ({ photo, inView, index }: { photo: string; inView: boolean; index: number }) => {
    const [style, setStyle] = useTween({ opacity: 0.5 });
    useEffect(() => {
      if (inView) {
        setStyle({ opacity: 1 }, { duration: 800, delay: index * 100 });
      } else {
        setStyle({ opacity: 0.5 }, 300);
      }
    }, [inView]);

    return (
      <div className='photo'>
        <div className={`${photo}`} style={style}></div>
      </div>
    );
  },
);

const Name = memo(({ name, inView, index }: { name: string; inView: boolean; index: number }) => {
  const [style, setStyle] = useTween({ opacity: 0.3 });
  useEffect(() => {
    if (inView) {
      setStyle({ opacity: 1 }, { duration: 800, delay: 100 + index * 100 });
    } else {
      setStyle({ opacity: 0.3 }, 300);
    }
  }, [inView]);

  return (
    <div className='name' style={style}>
      {name}
    </div>
  );
});

const Description = memo(
  ({ description, inView, index }: { description: string; inView: boolean; index: number }) => {
    const [style, setStyle] = useTween({ opacity: 0, y: 20 });
    useEffect(() => {
      if (inView) {
        setStyle({ opacity: 1, y: 0 }, { duration: 800, delay: 200 + index * 100 });
      } else {
        setStyle({ opacity: 0, y: 20 }, 300);
      }
    }, [inView]);

    return (
      <div className='description' style={style}>
        {description}
      </div>
    );
  },
);

const User = memo(({ data, inView, index }: UserProps) => {
  useEffect(() => {}, [inView]);

  return (
    <div className='User'>
      <Photo photo={data.photo} inView={inView} index={index} />
      <Name name={data.name} inView={inView} index={index} />
      <Description description={data.description} inView={inView} index={index} />
    </div>
  );
});
export default User;
