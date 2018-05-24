import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            bg: "#faa",
            etValue: "",
            clValue: ""
        }
    }

    btClick() {
        let bg = this.state.bg;
        bg = bg === '#faa' ? '#00f' : '#faa';
        this.setState({bg: bg})
    }

    etOnChange(ev) {
        this.setState({
            etValue: ev.target.value
        });
    }

    setClValue(ev, e) {
        this.setState({
            clValue: ev.target.value
        })
    }

    jump() {
        this.props.history.push('/child');
    }
    jump1() {
        this.props.history.push('/');
    }

    render() {
        let boxStyle = {
            backgroundColor: this.state.bg,
            width: "400px",
            height: "400px",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            color: "#ffffff",
            fontSize: "18px"
        }
        return (
            <div style={boxStyle}>
                <p>我是父组件</p>
                <input type="button" value={'点我换背景'} onClick={this.btClick.bind(this)}/>
                <input type={"text"} onChange={this.etOnChange.bind(this)}/>
                <input type={"button"} value={"跳转到子组件"} onClick={this.jump.bind(this)}/>
                <input type={"button"} value={"跳转到首页"} onClick={this.jump1.bind(this)}/>
                <ChildComponent etValue={this.state.etValue} setValue={this.setClValue.bind(this)} />
                <p>我是子组件传过来的值:{this.state.clValue}</p>
            </div>
        );
    }
}

export default ParentComponent;