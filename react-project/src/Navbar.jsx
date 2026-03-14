

import PropTypes from "prop-types";

function Navbar(props) {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.para}</p>
        </>
    );
}

Navbar.propTypes = {
    name: PropTypes.string,
    para: PropTypes.string,
};



export default Navbar;
