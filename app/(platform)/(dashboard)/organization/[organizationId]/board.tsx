import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <Button type="submit" variant={"destructive"} size={"sm"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 relative"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 1a9 9 0 100 18 9 9 0 000-18zM5 10a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </form>
  );
};

export default Board;
