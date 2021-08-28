
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';
// css() 함수를 임포트하여 엘리먼트에 스타일을 적용

class Text extends PureComponent {
  render() {
    const { 
      children,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
     } = this.props;
    return (
      // 자식 프로퍼티로 전달받은 노드를 span 엘리먼트 안에 출력
      // css() 함수로 엘리먼트에 default키에 정의된 스타일을 적용
      // css() 함수는 엘리먼트 속성 값을 객체형으로 반환하므로 전개연산자를 사용해 span 엘리먼트에 스타일을 적용
      <span {...css(
        styles.default,
        xsmall && styles.xsmall,
        // 프로퍼티 xsmall true일 경우 xsmall의 스타일을 추가. xsmall은 폰트 크기를 테마의 xs사이즈(10px)로 변경
        small && styles.small,
        large && styles.large,
        xlarge && styles.xlarge,
        secondary && styles.secondary,
        primary && styles.primary,
        // 프로퍼티 primary가 true일 경우 primary의 스타일을 추가, primary는 폰트 색상을 테마의 primary로 정의된
        // 색상(#03a9f4)으로 변경
        )}>
        {children}
      </span>
    );
  }
}

Text.PropTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

export default withStyles(({ color, size }) => ({
  // 스타일 생성 함수를 호출하여 테마파일에 등록된 값 { color, size }를 withStyles()함수에 전달
  default: {
    color: color.default,
    fontSize: size.md,
    // 스타일 속성을 낙타표기법(fontSize)으로 사용
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
// Text 컴포넌트에 withStyles() 함수를 적용