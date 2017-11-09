import React from 'react';
import TextArea from './TextArea'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('TextArea', module)
    .add('1 - this component has a min and max number of rows.', () => <TextArea/>);
