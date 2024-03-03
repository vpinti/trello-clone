import { deleteBoard } from "@/actions/delete-board";
import FormDelete from "./form-delete";

interface BoardProps {
    title: string;
    id: string;
}

const Board: React.FC<BoardProps> = ({ title, id }) => {
    const deleteBoardWithId = deleteBoard.bind(null, id);
    
    return (
        <form action={deleteBoardWithId} className="flex items-center gap-x-2">
            <p>Board titile: {title}</p>
            <FormDelete />
        </form>
    );
};

export default Board;
