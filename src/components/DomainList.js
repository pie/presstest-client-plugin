import React from "react";

function DomainList({ domains, onSelect }) {
  return (
    <select onChange={onSelect} value={domains[0] || "default"}>
      <option value="default">Select a Domain</option>
      {domains.map((domain, index) => (
        <option key={index} value={domain}>
          {domain}
        </option>
      ))}
    </select>
  );
}

export default DomainList;
