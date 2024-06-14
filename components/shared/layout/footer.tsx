import React from "react";

function footer() {
  // initial variables
  const year = () => new Date().getFullYear();

  return (
    <footer className="px-6 py-4 inline-flex items-center justify-center bg-white text-center font-sans text-xs text-slate-400 dark:bg-gray-900">
      &copy;{year()}. Dhisa Production. All Righs Reserved.
    </footer>
  );
}

export default footer;
