import React from 'react';
import { shallow } from 'enzyme';

import Input from '../component/Input';
// shallow() 함수는 컴포넌트의 자식 컴포넌트를 생성하거나 출력하는 과정을 건너뛰고 현재 컴포넌트의 생명주기만을 테스트 함
// expect()는 특정 변수를 비교하거나 함수를 실행하여 발생한 결과값을 검증
describe ('<Input>', () => {
  
  it('has one element', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.length).toEqual(1);
    // expect() 함수가 반환한 toEqual() 함수를 사용하여 반환된 객체의 수를 비교
    expect(wrapper).toHaveLength(1);
    // expect() 함수가 반환한 toHaveLength() 함수를 사용하여 .length값을 비교
  });
});