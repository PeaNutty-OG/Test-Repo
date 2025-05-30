import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

export default function TabsSegmentedControls() {
  return (
    <Tabs
      aria-label="tabs"
      defaultValue={0}
      sx={{ bgcolor: "transparent", mx: "auto" }}
    >
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: "xl",
          bgcolor: "background.level1",
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "sm",
            bgcolor: "focusVisible",
            color: "white",
          },
        }}
      >
        <Tab disableIndicator>Home</Tab>
        <Tab disableIndicator>Routines</Tab>
        <Tab disableIndicator>Statistics</Tab>
        <Tab disableIndicator>Macros</Tab>
        <Tab disableIndicator>Profile</Tab>
      </TabList>
    </Tabs>
  );
}
