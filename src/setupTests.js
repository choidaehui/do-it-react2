
import { configure } from 'enzyme';
// enzyme 설정 함수 configure()를 임포트
import Adapter from 'enzyme-adapter-react-16.3';
// 리액트 16.3 생명주기 라이브러리를 임포트
configure({ adapter: new Adapter() });
// 테스트 환경에 enzyme을 새 버전 생명주기 함수와 함께 추가

afterEach(() => {
  console.error.mockClear();
  // console.error() 함수 객체에 spyOn() 함수로 추가된 가상의 감지 코드를 제거
  // beforeEach()와 afterEach()는 jest에서 제공하는 함수로, 각 테스트가 실행되기 이전과 이후에 
  // 특정 설정을 추가하고 변경된 설정을 초기화하기 위해 실행되는 함수
});
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation((e) => {
    // 감시 함수 spyOn()을 사용하여 console 객체의 error() 함수를 실제 기능 대신
    // mockImplementation에 정의된 함수가 실행되도록 함
    throw new Error(e);
    // console.error()함수를 실행할 때 전달된 인자로 오류를 발생하도록 함
  })
});


// enzyme은 테스트 과정에서 작성된 컴포넌트의 기능만을 손쉽게 검사해주는 도구
// 차량의 타이어 내구성을 검사할 때 차 전체를 검사하지 않고 바퀴만을 분리하여 검사하는 것과 원리가 같음