
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
// 스토리를 스토리북 도구에 추가해주는 storiesOf() 함수를 임포트

import Input from '../component/Input';
// Input 컴포넌트를 임포트

// 스토리에 다른 형태의 컴포넌트 추가하기

storiesOf('Input', module)
  .addWithJSX('기본설정', () => <Input name="name" />)
  // 스토리북 도구에 표시할 스토리의 이름과 메뉴 이름을 입력
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  // Input 컴포넌트가 포함된 실제 리액트 앱 화면을 직접 수정하여 확인하는 과정은 스토리북에서 함
  // 컴포넌트에 다양한 기능이나 디자인을 추가할 때 스토리북을 사용
  .addWithJSX('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);