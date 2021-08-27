
import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';
// 리액트 서버와 동일하게 스토리북 도구 서버에도 머티리얼 css 스타일을 적용

// 스토리가 자동으로 스토리북에 추가되도록 config.js 설정하기
function loadStories() {
  // stories 폴더에 있는 파일 이름을 검사하여 '~Story.jsx'라고 끝나는 이름의 파일들을 
  // config.js에 자동으로 추가
  const context = require.context('../src/stories', true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);