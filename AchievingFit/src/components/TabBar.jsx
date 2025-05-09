import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";

export default function TabsSegmentedControls() {
  return (
    <Tabs
      aria-label="tabs"
      defaultValue={0}
      sx={{ bgcolor: "transparent", maxWidth: 300, mx: "auto", top: -35 }}
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
            bgcolor: "background.surface",
          },
        }}
      >
        <Tab disableIndicator>Home</Tab>
        <Tab disableIndicator>Statistics</Tab>
        <Tab disableIndicator>Macros</Tab>
        <Tab disableIndicator>Profile</Tab>
      </TabList>
    </Tabs>
  );
}
