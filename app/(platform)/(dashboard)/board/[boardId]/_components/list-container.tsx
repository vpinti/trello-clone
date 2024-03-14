"use client";

import { ListWithCards } from "@/types";

import { ListForm } from "./list-form";

interface ListContainerProps {
    data: ListWithCards[];
    boardId: string;
}

export const ListContainer: React.FC<ListContainerProps> = ({
    data,
    boardId
}) => {
  return (
    <ol>
        <ListForm />
        <div className="flex-shrink-0 w-1" />
    </ol>
  )
}
