import { connect } from 'react-redux';
import Home from "../screens/Home";
import {reset, resetLocation} from "../actions";


const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(reset());
            dispatch(resetLocation());
        }
    }
}


export default connect (
    null,
    mapDispatchToProps
)(Home)