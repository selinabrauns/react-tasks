var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            headText: 'Chose option',
            open: false
        }
    },

    render: function(){
        var self = this;
        var list = this.props.options.map(function(item){
            return <li key={item.id} className='list-item'><a href='javascript:void(0)' onClick={self.handleOptionClick.bind(null, item.name)}>{item.name}</a></li>
        });

        var options = <ul>{list}</ul>;
        return <div className='drop-down'>
            <a className='head' href='javascript:void(0)' onClick={this.handleClick}>{this.state.headText}</a>
            {this.state.open ? options : null}
        </div>
    },

    handleClick: function(){
        this.setState({open: !this.state.open});
    },

    handleOptionClick: function(name){
        this.setState({headText: name,
                        open: false});
    }
});