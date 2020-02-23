import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Input extends Component {
    render() {
        return (
            <div data-test="component-input">
                <button />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {};
};

export default connect(mapStateToProps)(Input);
