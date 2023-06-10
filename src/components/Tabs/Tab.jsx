import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import ImgesPosts from "../ImgesPost/ImgesPost";

export default function TabsPhoto() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab_secations">
      <TabContext value={value}>
        <TabList className="tab_list" onChange={handleChange}>
          <Tab label="Photo" value="1" />
          <Tab label="Likes" value="2" />
        </TabList>
        <TabPanel value="1">
          <ImgesPosts />
        </TabPanel>
        <TabPanel value="2">
          <ImgesPosts />
        </TabPanel>
      </TabContext>
    </div>
  );
}
