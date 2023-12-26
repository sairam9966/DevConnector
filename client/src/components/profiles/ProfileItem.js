// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import "./ProfileItem.css";
// const ProfileItem = ({
//   profile: {
//     user: { _id, name, avatar },
//     status,
//     company,
//     location,
//     skills,
//   },
// }) => {
//   return (
//     <div className='profile bg-light'>
//       <img src={avatar} alt='' className='round-img' />
//       <div>
//         <h2>{name}</h2>
//         <p>
//           {status}
//           {company && <span> at {company}</span>}
//         </p>
//         <p className='my-1'>{location && <span>{location}</span>}</p>
//         <Link to={`/profile/${_id}`} className='btn btn-primary'>
//           View Profile
//         </Link>
//       </div>
//       <ul>
//         {skills.slice(0, 4).map((skill, index) => (
//           <li key={index} className='text-primary'>
//             <i className='fa fa-check'></i>
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ProfileItem.propTypes = {
//   profile: PropTypes.object.isRequired,
// };

// export default ProfileItem;
// Import the CSS file
// Import the new CSS file
import "./ProfileItem.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile'>
      <div>
        <img src={avatar} alt='' className='round-img' />
      </div>
      <div className='profile-details'>
        <h2>{name}</h2>
        <hr />
        <p>
          {status}
          {company && <span> at {company}</span>}
        </p>
        <hr />
        <p className='my-1'>{location && <span>{location}</span>}</p>

        <Link to={`/profile/${_id}`} className='btnprimary'>
          View Profile
        </Link>
      </div>
      <ul className='skills'>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='skill'>
            <i className='fa fa-check'></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
