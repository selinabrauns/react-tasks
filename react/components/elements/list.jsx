var React = require('react');

var InputField = React.createClass({

    render: function(){
        return <div className={'user-input ' + this.props.className}>
            <input ref='userInput' type='text' />
            <button onClick={this.handleClick}>{this.props.btnLable}</button>
        </div>
    },

    handleClick: function(){
        this.props.handleClick(this.refs.userInput.value);
    }
});

module.exports = React.createClass({

    getInitialState: function(){
       return {
           list: this.props.list
       }
    },

    shouldComponentUpdate: function(nextProps, nextState){
        if(nextProps.list !== this.state.list){
            this.setState({list: nextProps.list});
        }

        return true;
    },

    render: function(){
        var list = this.state.list.map(function(listItem){
            return <li key={listItem.id} className='list list-item'>{listItem.name}</li>
        });
        return <div>
            <InputField className='filter-list' btnLable='Filter' handleClick={this.filterList}/>
            <InputField className='add-item' btnLable='Add item' handleClick={this.props.addItem}/>
            <ul>{list}</ul>
            <button className='reset-button' onClick={this.props.reset}>Reset</button>
        </div>;
    },

    filterList: function(item){
        var options = [];
        this.state.list.forEach(function(listItem){
            if(listItem.name.toLowerCase().indexOf(item) !== -1){
                options.push(listItem);
            }
        });

        this.setState({list: options});
    }
});