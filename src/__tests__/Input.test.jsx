
import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../component/Input';

// 수행 기능을 작성하기 전에 테스트 코드부터 작성하는 개발방법을 '테스트 위주 개발'이라고 함
// 팀원과 협업 작업 시 내가 작성한 코드를 다른 사람이 수정했을 때 '원래 기능이 고장 나지 않게' 보호
// 기존에 작성한 코드가 변경된 기능에도 정상적으로 작동하는지 검증
// jest 라이브러리는 여러 테스트 코드를 동시에 실행하기 때문에 아주 잛은 시간에 여러 테스트 코드의 결과를 처리

describe('<Input>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="name" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="text_name" />)).toBeTruthy();
  });
});

// 테스트 코드를 실행하면 Input 컴포넌트가 출력되는 동안 오류나 경고 메시지가 출력되는지 볼 수 있음
// 코드를 변경할 때마다 테스트 코드를 실행하여 오류나 경고 메시지를 볼 수 있음

