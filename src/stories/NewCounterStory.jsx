
import React from 'react';
import { storiesOf } from '@storybook/react';
import NewCounter from '../component/NewCounter';

// 스토리 추가하기

storiesOf('newCounter', module).add('기본 설정', () => <NewCounter count={0} />);
