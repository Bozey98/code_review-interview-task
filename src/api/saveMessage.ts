import { formatISO } from "date-fns";
import { v4 as uuidv4 } from "uuid";

interface Message {
  userName: string;
  text: string;
}

export const saveMessage = (message: Message) => {
  const responseMessage = {
    ...message,
    id: uuidv4(),
    date: formatISO(new Date())
  };

  return new Promise<Message & { id: string; date: string }>((resolve) => {
    setTimeout(() => resolve(responseMessage), 100);
  });
};
