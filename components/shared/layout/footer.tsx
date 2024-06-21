import React from "react";

function footer() {
  // initial variables
  const year = () => new Date().getFullYear();

  return (
    <footer className="px-6 py-4 inline-flex items-center justify-center bg-secondary text-center font-sans text-xs text-slate-300 dark:bg-primary-foreground">
      &copy;{year()}. Dhisa Production. All Righs Reserved.
    </footer>
  );
}

export default footer;
