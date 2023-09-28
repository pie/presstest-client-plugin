import React, { useState } from "react";
import DomainList from "./DomainList";
import AppList from "./AppList";
import BrowserList from "./BrowserList";

function TestingTab() {
  const [domains, setDomains] = useState([]); //Store Domain list
  const [selectedDomain, setSelectedDomain] = useState(""); // Initially, no domain selected
  const [domainToRemove, setDomainToRemove] = useState("");
  const [selectedApps, setSelectedApps] = useState([]); // Store selected apps

  const handleAddDomain = (e) => {
    e.preventDefault();
    if (selectedDomain && selectedDomain !== "default") {
      setDomains([...domains, selectedDomain]);
      setSelectedDomain(""); // Clear the input field after adding
    }
  };

  const handleRemoveDomain = (e) => {
    e.preventDefault();
    if (domainToRemove && domainToRemove !== "default") {
      const updatedDomains = domains.filter(
        (domain) => domain !== domainToRemove
      );
      setDomains(updatedDomains);
      setDomainToRemove(""); // Clear the selected domain
    }
  };

  const handleSelectDomain = (e) => {
    setDomainToRemove(e.target.value);
  };

  const handleSelectApp = (appName) => {
    setSelectedApps((prevApps) =>
      prevApps.includes(appName)
        ? prevApps.filter((app) => app !== appName)
        : [...prevApps, appName]
    );
  };

  return (
    <form>
      <fieldset className="form-field add-domain">
        <label htmlFor="new-domain">Add Domain</label>
        <input
          id="new-domain"
          type="url"
          name="new-domain"
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
        ></input>
        <button id="add-domain" onClick={handleAddDomain}>
          Add
        </button>
      </fieldset>
      <fieldset className="form-field test-domain">
        <label htmlFor="test-domain">Select domain to test</label>
        <DomainList domains={domains} onSelect={handleSelectDomain} />
        <button
          id="remove-domain"
          onClick={handleRemoveDomain}
          disabled={!domainToRemove || domainToRemove === "default"}
        >
          Remove
        </button>
      </fieldset>
      <AppList selectedApps={selectedApps} onAppSelect={handleSelectApp} />
      <BrowserList />
    </form>
  );
}

export default TestingTab;
