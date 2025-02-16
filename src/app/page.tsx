
import React from "react";
import Hero from "./components/Hero";
import CompanyLogo from "./components/companyLogo";
import Categories from "./components/Categories";
import HotProduct from "./components/hotProducts";
import OurProduct from "./components/OurProducts";



export default async function Home() {
  

  return (
    <div>
      <Hero />
      <CompanyLogo />
      <Categories />
      <HotProduct />
    <OurProduct/>
     
   
 
    </div>
  );
}

