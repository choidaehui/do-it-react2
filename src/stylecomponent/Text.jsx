
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';
// css() 함수를 임포트하여 엘리먼트에 스타일을 적용

class Text extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      // 자식 프로퍼티로 전달받은 노드를 span 엘리먼트 안에 출력
      // css() 함수로 엘리먼트에 default키에 정의된 스타일을 적용
      // css() 함수는 엘리먼트 속성 값을 객체형으로 반환하므로 전개연산자를 사용해 span 엘리먼트에 스타일을 적용
      <span {...css(styles.default)}>
        {children}
      </span>
    );
  }
}

Text.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(({ color, size }) => ({
  // 스타일 생성 함수를 호출하여 테마파일에 등록된 값 { color, size }를 withStyles()함수에 전달
  default: {
    color: color.default,
    fontSize: size.md,
    // 스타일 속성을 낙타표기법(fontSize)으로 사용
  }
  ,
}))(Text);
// Text 컴포넌트에 withStyles() 함수를 적용