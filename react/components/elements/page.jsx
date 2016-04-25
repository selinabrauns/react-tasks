var React = require('react'),
    DropDown = require('./drop-down'),
    List = require('./list');


module.exports = React.createClass({

    getInitialState: function(){
        return {
            options: [{id: 1, name: 'File'}, {id: 2, name: 'Document'}, {id: 3, name: 'Folder'}]
        }
    },

    render: function(){
        return <div className='main'>
            <div className='header'><img src='img/lev_logo_rgb_web.png'/></div>
            <div className='page-content'>
                <div className='col'>
                    <DropDown options={this.state.options}/>
                </div>
                <div className='col'>
                    <List list={this.state.options} addItem={this.addItem} reset={this.resetList}/>
                </div>
            </div>
            <div className='footer'><p>Good luck!</p></div>
        </div>
    },

    addItem: function(item){
        var addItem = {id: id = this.state.options.length + 1, name: item};
        var options = this.state.options.slice();
        options.push(addItem);
        this.setState({options: options});
    },

    resetList: function(){
        this.setState({options: this.state.options});
    }
});