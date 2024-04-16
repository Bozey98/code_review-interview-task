import React, { useEffect, useState } from "react";
import MessageList from "./MessageList/MessageList";
import { getMessages } from "../api/getMessages";
import { saveMessage } from "../api/saveMessage";
import * as Styled from "./styled";
import Button from "./Button/Button";

interface Message {
  id: string;
  userName: string;
  text: string;
  date: string;
}

const App = () => {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    getMessages().then((data: Message[]) => setMessages(data));
  }, []);

  const onClickNew = async () => {
    if (!messages) return;
    const message = await saveMessage({ userName: name, text: text });
    setMessages([...messages, message]);
  };

  return (
    <Styled.Wrapper>
      {messages && <MessageList items={messages} />}
      <Styled.NewMessage>
        <Styled.NameInput
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Styled.TextInput
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" onClick={onClickNew}>
          добавить
        </Button>
      </Styled.NewMessage>
    </Styled.Wrapper>
  );
};

export default App;
