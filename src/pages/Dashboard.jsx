import React from 'react';
// import { SiCountingworkspro } from 'react-icons/si';
// import { AiOutlineSchedule } from 'react-icons/ai';
// import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
// import { GoPeople } from 'react-icons/go';
// import { LuMapPin } from 'react-icons/lu';
// import { LiaSearchLocationSolid } from 'react-icons/lia';
// import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const ExpoDashboard = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active"> DashBoard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
             
             <div className="ad-v2-hom-info">
               <div className="ad-v2-hom-info-inn">
                 <ul className="Homesb1">
                   <div className="row justify-content-center">
                     <li className="col-md-4 mb-4">
                       <div className="ad-hom-box ad-hom-box-1">
                         <span className="ad-hom-col-com ad-hom-col-1">
                           {/* <SiCountingworkspro className="reactIcon" /> */}
                           <i className="fa fa-toggle-on" aria-hidden="true"></i>
                         </span>
                         <div className="ad-hom-view-com">
                           <Link to="/">
                             <p>Website Responses</p>
                           </Link>
                           <h3>20</h3>
                         </div>
                       </div>
                     </li>
                     <li className="col-md-4 mb-4">
                       <div className="ad-hom-box ad-hom-box-1">
                         <span className="ad-hom-col-com ad-hom-col-1">
                           {/* <SiCountingworkspro className="reactIcon" /> */}
                           <i className="fa fa-toggle-on" aria-hidden="true"></i>
                         </span>
                         <div className="ad-hom-view-com">
                         <Link to="/">
                             <p>Buddy Responses</p>
                           </Link>
                           <h3>20</h3>
                         </div>
                       </div>
                     </li>
                     <li className="col-md-4 mb-4">
                       <div className="ad-hom-box ad-hom-box-1">
                         <span className="ad-hom-col-com ad-hom-col-1">
                           {/* <SiCountingworkspro className="reactIcon" /> */}
                           <i className="fa fa-toggle-on" aria-hidden="true"></i>
                         </span>
                         <div className="ad-hom-view-com">
                         <Link to="/">
                             <p>franchise Enquiries</p>
                           </Link>
                           <h3>20</h3>
                         </div>
                       </div>
                     </li>
                     <li className="col-md-4">
                       <div className="ad-hom-box ad-hom-box-1">
                         <span className="ad-hom-col-com ad-hom-col-1">
                           {/* <SiCountingworkspro className="reactIcon" /> */}
                           <i className="fa fa-toggle-on" aria-hidden="true"></i>
                         </span>
                         <div className="ad-hom-view-com">
                         <Link to="/">
                             <p>Our Offices</p>
                           </Link>
                           <h3>20</h3>
                         </div>
                       </div>
                     </li>
                     <li className="col-md-4">
                       <div className="ad-hom-box ad-hom-box-1">
                         <span className="ad-hom-col-com ad-hom-col-1">
                           {/* <SiCountingworkspro className="reactIcon" /> */}
                           <i className="fa fa-toggle-on" aria-hidden="true"></i>
                         </span>
                         <div className="ad-hom-view-com">
                           <Link to="OnGoing">
                             <p>franchises</p>
                           </Link>
                           <h3>68</h3>
                         </div>
                       </div>
                     </li>
                    
                   </div>
                 </ul>
               </div>
             </div>

          
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExpoDashboard;
