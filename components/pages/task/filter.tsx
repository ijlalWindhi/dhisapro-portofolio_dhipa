import { RotateCcw } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TableColumnOption from "@/components/pages/task/tableViewOption";

import { priorities, status } from "@/constants/task";
import FacetedFilter from "@/components/pages/task/facetedFilter";

interface IFilterProps<TData> {
  readonly table: Table<TData>;
}

function Filter<TData>({ table }: IFilterProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <div className="flex gap-x-2">
          {table.getColumn("status") && (
            <FacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={status}
            />
          )}
          {table.getColumn("priority") && (
            <FacetedFilter
              column={table.getColumn("priority")}
              title="Priority"
              options={priorities}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <RotateCcw className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <TableColumnOption table={table} />
    </div>
  );
}

export default Filter;
