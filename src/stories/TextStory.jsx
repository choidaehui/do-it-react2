import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../stylecomponent/Text';

storiesOf('Text', module)
.addWithJSX('기본설정', () => <text>안녕하세요</text>);
