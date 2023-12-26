import React from 'react'
import { Route,Navigate ,Outlet} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const PrivateRoute = ({auth:{isAuthenticated,loading}}) =>{
  return !isAuthenticated && !loading ?<Navigate to='/login' />:<Outlet />
}

// PrivateRoute.propTypes = {
// auth: PropTypes.object.isRequired,
// }
const mapStateToProps=state=>({
  auth:state.auth
})
export default connect(mapStateToProps,null)(PrivateRoute);






































//
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';

// const PrivateRoute = ({
//   component: Component,
//   auth: { isAuthenticated, loading }
// }) => {
//   if (loading) return <Spinner />;
//   if (isAuthenticated) return <Component />;

//   return <Navigate to="/login" />;
// };

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);