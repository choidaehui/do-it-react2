
import { configure } from 'enzyme';
// enzyme 설정 함수 configure()를 임포트
import Adapter from 'enzyme-adapter-react-16.3';
// 리액트 16.3 생명주기 라이브러리를 임포트
configure({ adapter: new Adapter() });
// 테스트 환경에 enzyme을 새 버전 생명주기 함수와 함께 추가


// enzyme은 테스트 과정에서 작성된 컴포넌트의 기능만을 손쉽게 검사해주는 도구
// 차량의 타이어 내구성을 검사할 때 차 전체를 검사하지 않고 바퀴만을 분리하여 검사하는 것과 원리가 같음