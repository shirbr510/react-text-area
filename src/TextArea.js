// @flow

import React, {Component} from 'react';

type Value = string| number;

type Props={
    placeholder?:string,
    value?:Value,
    minRows?:number,
    maxRows:number,
    onChange?:(event:InputEvent,value:Value) => any
}

class TextArea extends Component {

    static defaultProps={
        minRows:1,
        //default is noop
        onChange:()=>{}
    };

    props:Props;

    constructor(props:Props){
        super(props);
        this._onChange=this._onChange.bind(this);
    }

    _onChange=(e:InputEvent)=>{
        const {onChange} = this.props;
        onChange(e.target.value);
    };

    render() {
        const {placeholder,value,maxRows} = this.props;
        return <textarea placeholder={placeholder} wrap="soft" value={value} onInput={this._onChange} rows={maxRows}/>;
    }
}

export default TextArea;