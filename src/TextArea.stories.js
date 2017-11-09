import React from 'react';
import TextArea from './TextArea'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const maxRows=5;

const onChangeActionLogger=action('input changed!');

storiesOf('TextArea', module)
    .add('uncontrolled empty example',()=>{
        return <TextArea maxRows={maxRows} onChange={onChangeActionLogger}/>;
    })
    .add('first example', () =>{
        const value ='1 - this component has a min and max number of rows.';
        return <TextArea maxRows={maxRows} onChange={onChangeActionLogger} value={value}/>;
    })
    .add('second example', () =>{
        const value ='2 - if the user has not yet reached the max number of rows an empty line will always be provided at the bottom';
        return <TextArea maxRows={maxRows} onChange={onChangeActionLogger} value={value}/>;
    })
    .add('third example', () =>{
        const value ='3 - Line breaks should work when hitting “Enter”, and word breaks to new line';
        return <TextArea maxRows={maxRows} onChange={onChangeActionLogger} value={value}/>;
    });




