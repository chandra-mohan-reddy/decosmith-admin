import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";
import { RiBloggerFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaGlobe } from "react-icons/fa";




const Sidebars = () => {
  return (
    <Sidebar>
      <Menu>
        {/* <MenuItem component={<Link to="/home" />}>Dashboard </MenuItem> */}
          <MenuItem component={<Link to="/dashboard" />} className='active'><AiFillHome /> Dashboard</MenuItem>
          {/* <MenuItem component={<Link to="/bannerprojects" />}><BsFillBuildingsFill /> Banners Projects</MenuItem> */}
          {/* <MenuItem component={<Link to="/homebanner" />}><GrGallery /> Home Page Banner</MenuItem> */}
          {/* <MenuItem component={<Link to="/aboutus" />}><VscGraph /> About Us</MenuItem> */}
          {/* <MenuItem component={<Link to="/partners" />}><HiUsers /> Partners</MenuItem> */}
          
          {/* <MenuItem component={<Link to="/ourOffices" />}><PiBuildingOfficeFill /> Our Offices</MenuItem> */}
          {/* <MenuItem component={<Link to="/blog" />}><GoCodeReview /> What They Say About Us</MenuItem> */}
          {/* <MenuItem component={<Link to="/blog" />}><RiBloggerFill /> Blogs</MenuItem> */}
          {/* <MenuItem component={<Link to="/team" />}><RiBloggerFill /> Add Team</MenuItem>
          <MenuItem component={<Link to="/products" />}><CgNotes />Add Products</MenuItem> */}
          {/* <MenuItem component={<Link to="/partnerWithUs" />}><ImUsers /> Partner with Us</MenuItem> */}
          {/* <MenuItem component={<Link to="/buddyServ" />}><FaUserFriends /> Buddy Services</MenuItem> */}
          {/* <MenuItem component={<Link to="/responses" />}><CgNotes />Career Responses</MenuItem> */}
          <MenuItem component={<Link to="/contactRes" />}><CgNotes />Contact Responses</MenuItem>
          <MenuItem component={<Link to="/contactRes" />}><CgNotes />Refer A Friend Responses</MenuItem>
          <MenuItem component={<Link to="/contactRes" />}><CgNotes />Partner With Us Responses</MenuItem>
          <MenuItem component={<Link to="/contactRes" />}><CgNotes />Get In Touch Responses</MenuItem>
          {/* <MenuItem component={<Link to="/careerRes" />}><CgNotes />Career Responses</MenuItem> */}
          {/* <MenuItem component={<Link to="/testimonials" />}><CgNotes />Testimonials</MenuItem> */}
         
          {/* <MenuItem component={<Link to="/masters" />}><FaGlobe /> Masters</MenuItem> */}
          {/* <MenuItem component={<Link to="/postJob" />}><VscGraph /> Post A Job</MenuItem> */}
          {/* <MenuItem component={<Link to="/franchise" />}><FaGlobe /> Franchise</MenuItem> */}
          <MenuItem component={<Link to="/" />}> Logout</MenuItem>

        {/* <SubMenu label="Expo">
        </SubMenu> */}

      
      </Menu>
    </Sidebar>
  );
};

export default Sidebars;
