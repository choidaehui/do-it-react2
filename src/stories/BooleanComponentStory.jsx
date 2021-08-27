
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../component/BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored />);