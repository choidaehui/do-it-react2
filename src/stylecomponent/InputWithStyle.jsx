
import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

// input 컴포넌트 만들기
class Input extends PureComponent {
  // 클래스형 컴포넌트의 PureComponent 형태로 작성
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if(onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if(this.props.autoFocus) {
      // autoFocus값이 true일 경우 출력 후 input박스에 자동으로 커서를 배치
      this.refs.focus();
    }
  }
  componentDidUpdate() {
    if(this.props.autoFocus) {
      this.refs.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, value, name, type } = this.props;
    return (
      // 머티리얼 css의 입력 항목 스타일 input-field를 추가
      <div className="input-field">
        <input
          id={`input_${name}`}
          className="validate"
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label htmlFor={`input_${name}`}>
          {label}  
        </label>
        {errorMessage && <span className="helper-text">{errorMessage}</span>}  
      </div>
      // Label의 마우스 클릭시 마우스 커서가 입력항목으로 이동하도록 htmlFor를 추가
      // 머티리얼 css의 입력 설명 항목 스타일 helper-text를 추가
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  // 문자열형의 값 'text', 'number', 'price' 중 하나의 값만 가질 수 있음
  name: PropTypes.string.isrequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
  // type의 기본값은 'text'
};

export default Input;
