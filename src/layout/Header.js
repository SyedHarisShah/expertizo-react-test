import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <div
                className="progressBarHeader"
                style={{ width: props.headerProgress + "%" }}
            />
        </div>
    );
}

export default Header;
