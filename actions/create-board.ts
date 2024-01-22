"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(255, { message: "Title must be at most 255 characters" }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing required fields",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (err) {
    return {
      message: "Failed to create board",
    };
  }

  revalidatePath("/organization/org_2bu9SLSVS6Xyki1i68OphUfTQq3");
  redirect("/organization/org_2bu9SLSVS6Xyki1i68OphUfTQq3");
}
