import React from "react";

const BrowserList = () => {
  const browsers = ["Chrome", "Safari", "Firefox"];
  return (
    <fieldset class="form-field test-browser">
      <label for="test-browser">Select domain to test</label>
      <select id="test-browser" name="test-browser">
        {browsers.map((name, index) => (
          <option value={name}>{name}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default BrowserList;
