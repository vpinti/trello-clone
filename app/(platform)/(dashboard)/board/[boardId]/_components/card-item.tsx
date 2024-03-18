"use client";

import { Card } from "@prisma/client";

interface CardItemProps {
    data: Card;
    index: number;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index }) => {
    return (
        <div
            role="button"
            className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
            {data.title}
        </div>
    );
};
