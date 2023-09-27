import React, { useState } from "react";
import DomainList from "./DomainList";

function TestingTab() {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(""); // Initially, no domain selected

  const handleAddDomain = (e) => {
    e.preventDefault();
    if (selectedDomain && selectedDomain !== "default") {
      setDomains([...domains, selectedDomain]);
      setSelectedDomain(""); // Clear the input field after adding
    }
  };

  const handleRemoveDomain = (e) => {
    e.preventDefault();
    if (selectedDomain && selectedDomain !== "default") {
      const updatedDomains = domains.filter(
        (domain) => domain !== selectedDomain
      );
      setDomains(updatedDomains);
      setSelectedDomain(""); // Clear the selected domain
    }
  };

  const handleSelectDomain = (e) => {
    console.log(e);
    setSelectedDomain(e.target.value);
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
          disabled={selectedDomain === "default"}
        >
          Remove
        </button>
      </fieldset>
      <fieldset class="form-field choose-test">
        <input
          type="checkbox"
          id="woocommerce"
          name="woocommerce"
          value="Woocmerece"
        ></input>
        <label for="woocommerce"> Woocmmerce </label>
        <input
          type="checkbox"
          id="wp_forms"
          name="wp_forms"
          value="WP Forms"
        ></input>
        <label for="wp_forms"> WP Forms </label>
      </fieldset>
      <fieldset class="form-field test-browser">
        <label for="test-browser">Select domain to test</label>
        <select id="test-browser" name="test-browser">
          <option value="Chrome">Chrome</option>
          <option value="Safari">Safari</option>
          <option value="Firefox">Firefox</option>
        </select>
      </fieldset>
    </form>
  );
}

export default TestingTab;
