"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a title"
          className="border-2 border-gray-300 rounded-sm p-2 "
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((error: string) => (
              <p key={error} className="text-red-500 text-sm">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
