import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';
// css()함수와 withStyles()함수를 임포트하여 엘리먼트에 스타일을 적용

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;
    return (
      <button
        {...css(
          styles.default,
          // default스타일을 기본으로 적용
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
        onClick={onPress}
        // 버튼 엘리먼트를 클릭할 경우 onPress()함수를 호출
        >
          {children}
        </button>
        // 프로퍼티로 전달받은 children노드를 출력
    );
  }
}

Button.PropTypes = {
  children: PropTypes.node.isrequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarage: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
};
 // onPress 프로퍼티는 함수 타입으로, 기본값으로 빈 실행 함수를 전달하여 프로퍼티가 선언되지 않아도
 // 엘리먼트의 이벤트에서 콜백함수를 실행할 때 undefined 오류가 발생하는 것을 방지
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

export default withStyles(({ color, size, unit, responsive }) => ({
  //  Text 컴포넌트와 동일한 방법으로 크기와 색상을 변경하는 프로퍼티를 추가
  default: {
    // 버튼의 기본 모양을 구성
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      width: '100%',
    },
    // 미디어 스타일 값 responsive.small을 키로 사용하여 추가 스타일 항목을 하위 객체로 할당
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
}))(Button);
