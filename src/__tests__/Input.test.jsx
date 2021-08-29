
import React from 'react';
import { shallow } from 'enzyme';
import Input from '../component/Input';

// 수행 기능을 작성하기 전에 테스트 코드부터 작성하는 개발방법을 '테스트 위주 개발'이라고 함
// 팀원과 협업 작업 시 내가 작성한 코드를 다른 사람이 수정했을 때 '원래 기능이 고장 나지 않게' 보호
// 기존에 작성한 코드가 변경된 기능에도 정상적으로 작동하는지 검증
// jest 라이브러리는 여러 테스트 코드를 동시에 실행하기 때문에 아주 잛은 시간에 여러 테스트 코드의 결과를 처리

describe('<Input>', () => {
  it('renders without crashing', () => {
   expect(() => {
     shallow(<Input name="test_name" />);
     // shallow() 함수 안에 Input컴포넌트를 직접 입력
   }).not.toThrow();
   // jest의 toThrow() 함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 겁사하고, 오류가
   // 발생하지 않으면 테스트를 통과함
   // toThrow() 함수는 컴포넌트의 출력 오류를 검사
   // 프로퍼티로 전달받은 콜백 함수를 실행하도록 컴포넌트를 구성했을 때, 콜백 함수를 프로퍼티로 전달하는 과정이
   // 생략되는 경우에는 에러가 발생
   // not.toThrow() 함수는 이러한 에러가 나타나는지 검증하는 함수
  });
  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    // expect() 함수가 반환한 toEqual() 함수를 사용하여 반환된 객체의 수를 비교
    expect(wrapper).toHaveLength(1);
    // expect() 함수가 반환한 toHaveLength() 함수를 사용하여 .length값을 비교
  });
});

// 테스트 코드를 실행하면 Input 컴포넌트가 출력되는 동안 오류나 경고 메시지가 출력되는지 볼 수 있음
// 코드를 변경할 때마다 테스트 코드를 실행하여 오류나 경고 메시지를 볼 수 있음

