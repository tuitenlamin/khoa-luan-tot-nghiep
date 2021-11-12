import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';

 class RenderItem extends Component {
    render() {
        const { typeWork } = this.props;
        return (
            <MenuItem value={typeWork.id}>{typeWork.titleWork}</MenuItem>
        )
    }
}
export default(RenderItem)
