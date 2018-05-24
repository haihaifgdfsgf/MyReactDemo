import React from 'react';
import PropTypes from 'react';
class ChildComponent extends React.Component {
    constructor() {
        super();
    }
    etOnChange(ev) {
        this.props.setValue(ev, "woshi");
    }

    jump() {
        this.props.history.push('/parent');
    }

    render() {
        let boxStyle = {
            backgroundColor: "#fff",
            width: "200px",
            height: "200px",
            color: "#000",
            fontSize: "14px"
        }
        return (
            <div style={boxStyle}>
                <p>props:{this.props.title}</p>
                <p>我是子元素</p>
                <input type={"text"} onChange={this.etOnChange.bind(this)}/>
                <input type={"button"} onClick={this.jump.bind(this)} value={'跳转到父组件'}/>
                <p>我是父元素传过来的值：{this.props.etValue}</p>
            </div>
        );
    }
}
ChildComponent.defaultProps = {
    title: "我是默认的 props"
}
export default ChildComponent;