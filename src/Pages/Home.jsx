import React, { lazy } from "react";
 

const TabsPhoto = lazy(() => import("../components/Tabs/Tab"));
const Details = lazy(() => import("../components/DetailsProfile/Details"));
const Introducation = lazy(() => import("../components/Introductions/Introduction"));
const SideBar = lazy(() => import("../components/SideBar/SideBar"));

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="all__contnt">
      <Introducation />
      <Details />
      <TabsPhoto /> 
      </div>
        </div>
  );
}

export default Home;
