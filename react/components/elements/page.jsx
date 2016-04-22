var React = require('react');
var DropDown = require('./drop-down');


module.exports = React.createClass({
    render: function(){
        return <div className='main'>
            <div className='header'><img src='img/lev_logo_rgb_web.png'/></div>
            <div className='page-content'>
                <div className='col'>
                    <DropDown />
                </div>
                <div className='col'></div>
            </div>
            <div className='footer'><p>Good luck!</p></div>
        </div>
    }
});