// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
// import { about } from '../../portfolio'
// import './About.css'
// import profilePic from '../../images/pic.jpg';

// const About = () => {
//   const { name, role, description, resume, social } = about

//   return (
//     <div className='about center'>
//       <img src={profilePic} alt="Profile" className="about__image" />
//       {name && (
//         <h1>
//           Hi, I am <span className='about__name'>{name}.</span>
//         </h1>
//       )}


//       {role && <h2 className='about__role'>A {role}.</h2>}
//       <p className='about__desc'>{description && description}</p>

//       <div className='about__contact center'>
//         {resume && (
//           <a href={resume}>
//             <span type='button' className='btn btn--outline'>
//               Resume
//             </span>
//           </a>
//         )}

//         {social && (
//           <>
//             {social.github && (
//               <a
//                 href={social.github}
//                 aria-label='github'
//                 className='link link--icon'
//               >
//                 <GitHubIcon />
//               </a>
//             )}

//             {social.linkedin && (
//               <a
//                 href={social.linkedin}
//                 aria-label='linkedin'
//                 className='link link--icon'
//               >
//                 <LinkedInIcon />
//               </a>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default About

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';
import profilePic from '../../images/pic.jpg'; // Make sure this path is correct

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      <img src={profilePic} alt="Profile" className="about__image" />

      {/* New container for text elements */}
      <div className="about__text-container">
        {name && (
          <h1>
            Kehan Li
          </h1>
        )}

{description && (
  <div>
    <p className='about__desc'>{description[0]}</p>
    <ul className='about__labs-list'>
      {description.slice(1, -1).map((lab, index) => (
        <li key={lab} className='about__desc'>{lab}</li>
      ))}
    </ul>
    <p className='about__desc'>{description[description.length - 1]}</p>
  </div>
)}


        <div className='about__contact center'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume 
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon style={{ fontSize: 50 }}/>
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon style={{ fontSize: 60 }}/>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
