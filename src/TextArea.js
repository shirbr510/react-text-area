// @flow

import './textarea.less'
import React, {Component} from 'react';

type Value = string | number;

type Props = {
    placeholder?: string,
    value?: Value,
    minRows?: number,
    maxRows: number,
    onChange?: (event: InputEvent, value: Value) => any,
}

class TextArea extends Component {

    static defaultProps = {
        minRows: 1,
        //default is noop
        onChange: () => {
        }
    };

    textArea: HTMLTextAreaElement;

    props: Props;

    constructor(props: Props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this._autoResize = this._autoResize.bind(this);
    }

    _autoResize(e: KeyboardEvent) {
        const {textArea} = this;
        setTimeout(() => {
            textArea.style.cssText = 'height:auto; padding:0';
            textArea.style.cssText = `height: ${textArea.scrollHeight}px`;
        }, 0);
    }

    _onChange(e: InputEvent) {
        const {onChange} = this.props;
        onChange(e.target.value);
    }

    render() {
        const {placeholder, value, maxRows} = this.props;
        return (
            <textarea
            ref={c => this.textArea = c}
            className='react-text-area'
            placeholder={placeholder}
            value={value}
            wrap="soft"
            rows={maxRows}
            onKeyDown={this._autoResize}
            onInput={this._onChange}/>
        );
    }
}

export default TextArea;