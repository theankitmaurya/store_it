"use server";

import { createAdminClient } from "../appwrite";

const getUserByEmail = async(email: string) => {
    const {databases} = await createAdminClient();
}

const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);
};
