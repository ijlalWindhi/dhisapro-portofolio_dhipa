// import type { Metadata } from "next";
// import { METADATA } from "@/constants/metadata";
import { z } from "zod";
import Heading from "@/components/shared/layout/heading";
import Table from "@/components/pages/task/table";
import { columns } from "@/components/pages/task/columns";
import tasks from "@/mocks/task.json";

// export const metadata: Metadata = {
//   title: `Task ${METADATA.exTitle}`,
//   description: `Task ${METADATA.creator}`,
//   alternates: {
//     canonical: `${process.env.DOMAIN}/task`,
//   },
// };

function page() {
  return (
    <section className="flex flex-col gap-4">
      <Heading
        title="Welcome back!"
        description="Here's a list of your tasks for this month!"
      />
      <Table data={tasks} columns={columns} />
    </section>
  );
}

export default page;
