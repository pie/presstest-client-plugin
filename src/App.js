import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TestingTab from "./components/TestingTab";
import ResultsTab from "./components/ResultsTab";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Testing</Tab>
        <Tab>Result</Tab>
      </TabList>

      <TabPanel>
        <TestingTab />
      </TabPanel>
      <TabPanel>
        <ResultsTab />
      </TabPanel>
    </Tabs>
  );
}

export default App;
