'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


var App = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
                <input />
            </div>
        );
    }
});
var data = "a"
var List = React.createClass({
    propTypes: {
            title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页{this.props.title}{data}</a></div>
                <div>
                    这是列表页
                    {this.props.title}
                </div>
            </div>
        );
    },
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    }
});

var Detail = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function() {
        this.refs.myTextInput.value=this.refs.s.innerText;
    },
    handleClick2: function() {
        this.setState({liked:!this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                <p onClick={this.handleClick2}>
                  You {text} this. Click to toggle.
                </p>
                <h5 className="title" ref="s">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
                <div>这是详情页</div>
            </div>
        );
    }
});

var HelloMessage = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return <h1>Hello {this.props.title}</h1>;
  }
});

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
    </Router>
    // <HelloMessage title="a" />
), document.getElementById('app'));
