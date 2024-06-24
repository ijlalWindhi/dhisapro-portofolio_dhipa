import React from "react";

type Props = {
  title: string;
  description: string;
};

function Heading({ title, description }: Props) {
  return (
    <div className="flex flex-col space-y-1.5">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export default Heading;
