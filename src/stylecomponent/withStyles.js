
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
// react-with-styles의 테마 관리자를 임포트
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
// 서버출력을 도와주는 아프로디테 라이브러리의 react-with-styles 버전을 임포트
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
// react-with-styles에서 사용하는 함수를 임포트
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme);
// 테마 파일을 등록
ThemedStyleSheet.registerInterface(aphroditeInterface);
// 아프로디테를 react-with-styles의 테마 관리자에 적용

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;