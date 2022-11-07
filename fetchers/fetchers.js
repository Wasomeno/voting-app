import React from "react";

export const fetchCandidates = async () => {
  const candidates = await fetch("/api/candidates");
  const data = await candidates.json();
  return data;
};

export const addCandidates = async (name, address, candidate, district) => {
  const add = await fetch("/api/candidates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      address: address,
      candidate: candidate,
      district: district,
    }),
  });
  return add;
};

export const findCandidatesByDistrict = async (district) => {
  const find = await fetch("/api/findcandidates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      district: parseInt(district),
    }),
  });
  const data = await find.json();
  return data;
};
