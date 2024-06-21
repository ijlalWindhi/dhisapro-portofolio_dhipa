import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <h1 className="text-2xl md:text-9xl font-semibold">404</h1>
      <p className="text-lg md:text-2xl font-light">
        Sorry, the page you are looking for could not be found :(
      </p>
      <Link href="/">
        <Button>Go back home</Button>
      </Link>
    </section>
  );
}

export default NotFound;
