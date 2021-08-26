
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// 스토리를 스토리북 도구에 추가해주는 storiesOf() 함수를 임포트

import Input from '../component/Input';
// Input 컴포넌트를 임포트

storiesOf('Input', module).add('기본설정', () => <Input />);
// 스토리북 도구에 표시할 스토리의 이름과 메뉴 이름을 입력