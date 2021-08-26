
import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/InputStory');
  // 스토리 파일을 이곳에 추가
  // InputStory를 스토리북에 연결

}

configure(loadStories, module);