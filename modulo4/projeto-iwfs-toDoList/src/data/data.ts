import { connection } from "..";

export const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email
      })
      .into("TodoListUser");
};

export const getUserById = async (id:string): Promise<any> => {
    const result = await connection("TodoListUser")
    .select("id", "nickname")
    .where("id", id);
    return result[0]
}