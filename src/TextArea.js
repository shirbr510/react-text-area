// @flow

import './textarea.less'
import React, {Component} from 'react';

type Value = string| number;

type Props={
    placeholder?:string,
    value?:Value,
    minRows?:number,
    maxRows:number,
    onChange?:(event:InputEvent,value:Value) => any,
}

class TextArea extends Component {

    static defaultProps={
        minRows:1,
        //default is noop
        onChange:()=>{}
    };

    textArea:HTMLTextAreaElement;

    props:Props;

    constructor(props:Props){
        super(props);
        this._onChange=this._onChange.bind(this);
        this._autoresize=this._autoresize.bind(this);
    }

    componentDidMount(){
        this.textArea.addEventListener('keydown', this._autoresize);
    }

    componentWillunmount(){
        this.textArea.removeEventListener('keydown', this._autoresize);
    }

    _autoresize(){
        const {textArea} = this;
        setTimeout(()=>{
            textArea.style.cssText = 'height:auto; padding:0';
            textArea.style.cssText = `height: ${textArea.scrollHeight}px`;
        },0);
    }

    _onChange(e:InputEvent){
        const {onChange} = this.props;
        onChange(e.target.value);
    }

    render() {
        const {placeholder,value,maxRows} = this.props;
        return <textarea ref={c=>this.textArea=c} className='react-text-area' placeholder={placeholder} wrap="soft" value={value} onInput={this._onChange} rows={maxRows}/>;
    }
}

export default TextArea;