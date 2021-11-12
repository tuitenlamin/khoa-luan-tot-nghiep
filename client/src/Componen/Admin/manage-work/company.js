import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
class Company extends Component {
    render() {
        const {render, onShowDetail} =  this.props;
        return (
            <MenuItem value={10} onClick={() => {console.log("test work", render);onShowDetail(render?.id)}}>{render.name}</MenuItem>
        );
    }
}

export default Company;
