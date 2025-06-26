import React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/Loader';




const LazyLoad = () => {

  const Login = lazy(() => import(`../pages/Login`));
  const Dashboard = lazy(() => import(`../pages/Dashboard`));
  const Profile = lazy(() => import(`../pages/Profile`));
  const AboutUs =lazy(() => import(`../pages/AboutUs`));
  const Partners =lazy(() => import(`../pages/Partners`));
  const PostJob =lazy(() => import(`../pages/PostJob`));
  const OurOffices =lazy(() => import(`../pages/OurOffices`));
  const Blogs =lazy(() => import(`../pages/Blogs`));
  const PartnerWithUs =lazy(() => import(`../pages/PartnerWithUs`));
  const BuddyRes =lazy(() => import(`../pages/BuddyRes`));
  const Responses =lazy(() => import(`../pages/Responses`));
  const Testimonials =lazy(() => import(`../pages/Testimonials`));
  const Masters =lazy(() => import(`../pages/Masters`));
  const Franchise =lazy(() => import(`../pages/Franchise`));
  const Team = lazy(() => import(`../pages/Team`));
  const ContactRes = lazy(() => import(`../pages/CantactResponce`));
  const Products = lazy(() => import(`../pages/Products`));
  const CareerResponce = lazy(() => import(`../pages/careerResponce`));
  

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* //////////////////////////////// Masters    /////////////////////////////// */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        {/* //////////////////////////////// expo dashbaord ////////////////////////  */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/postJob" element={<PostJob/>}/>
        <Route path="/ourOffices" element={<OurOffices/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/partnerWithUs" element={<PartnerWithUs/>}/>
        <Route path="/buddyServ" element={<BuddyRes/>}/>
        <Route path="/responses" element={<Responses/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/masters" element={<Masters/>}/>
        <Route path="/franchise" element={<Franchise/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contactRes" element={<ContactRes/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/careerRes" element={<CareerResponce/>}/>
      </Routes>
    </Suspense>
  );
};

export default LazyLoad;
