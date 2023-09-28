import React from "react";

function DomainList({ domains, onSelect }) {
  console.log(onSelect);
  return (
    <select onChange={onSelect}>
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
