import { memo, useEffect } from 'react';
import './index.less';
import Section from '@/components/section';
import Button from '@/components/button';
import { URLList } from '@/settings/config';

const GroupButton = memo(
  ({
    label,
    description,
    onClick,
  }: {
    label: string;
    description: string;
    onClick: () => void;
  }) => {
    return (
      <div className='flex w-1/2 flex-col items-center justify-center space-y-2 md:w-2/5'>
        <Button onClick={onClick} className='btn'>
          {label}
        </Button>
        <div className='text-secondary text-sm'>{description}</div>
      </div>
    );
  },
);

const Footer = memo(() => {
  useEffect(() => {}, []);
  return (
    <Section>
      <footer className='Footer'>
        <div className='logo' />
        <div className='description'>
          凶宅專賣店 1月16日 只在Disney+
          <br />
          立即訂閱 準備看房
        </div>
        <div className='flex w-full flex-row items-center justify-center gap-10'>
          <GroupButton
            label='訂閱 DISNEY+ 年費方案'
            description='訂閱 DISNEY+ 年費方案，現省18%*'
            onClick={() => {
              window.open(URLList.annual, '_blank');
            }}
          />
          <GroupButton
            label='訂閱 DISNEY+ 月費方案'
            description='可隨時升級或取消^'
            onClick={() => {
              window.open(URLList.plans, '_blank');
            }}
          />
        </div>
        <div className='flex flex-col items-center justify-center space-y-7'>
          <a
            className='link'
            href='https://www.disneyplus.com/zh-tw#apac-plan-comp'
            target='_blank'
          >
            參閱方案細節
          </a>
          <div className='text-secondary text-sm'>
            *與 12 個月月費方案相比所省下的費用。 ^自當期計費期間結束時始生效。
          </div>
        </div>
      </footer>
    </Section>
  );
});
export default Footer;
