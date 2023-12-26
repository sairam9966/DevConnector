import React,{Fragment} from 'react'

const Notfound = () => {
  return (
    <div className="container">
       <Fragment>
    <h1 className="x-large text-primary">
      <i className="fas fa-exclamation-triangle">Page Not Found</i>
    </h1>
    <p class="large">Sorry, this page does not exist</p>
   </Fragment>
    </div>
  
  )
}

export default Notfound

