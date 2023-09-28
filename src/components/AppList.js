import React from "react";

const AppList = ({ selectedApps, onAppSelect }) => {
  const applist = ["Woocommerce", "WP Forms"];

  const handleAppSelect = (e) => {
    const appName = e.target.value;
    onAppSelect(appName);
  };

  return (
    <fieldset className="form-field choose-test">
      {applist.map((name, index) => (
        <div key={`presstest-applist-${index}`}  className="presstest-applist-app-wrapper">
          <label htmlFor={name}> {name} </label>
          <input
            type="checkbox"
            id={`presstest-applist-app-${index}`}
            name={name}
            value={name}
            checked={selectedApps.includes(name)}
            onChange={handleAppSelect}
          />
        </div>
      ))}
    </fieldset>
  );
};

export default AppList;
