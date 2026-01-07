import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import './index.less';

const Layer = memo(({ children }: IReactProps) => <div className='Layer'>{children}</div>);
export default Layer;
