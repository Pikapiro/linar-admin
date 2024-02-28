"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

export type ColorColumn = {
  id: string
  name: string;
  hex: string;
  number: string;
  createdAt: string;
}

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "number",
    header: "ral",
  },
  {
    accessorKey: "hex",
    header: "hex",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.hex}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.hex }} />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
