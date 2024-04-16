import React from "react";
import * as Styled from "./styled";
import { format } from "date-fns";
import { ru as ruLocale } from "date-fns/locale";

interface Message {
  id: string;
  userName: string;
  text: string;
  date: string;
}

interface Props {
  items: Message[];
}

const MessageList: React.FC<Props> = (props) => {
  const { items = [] } = props;

  const sortedItems = items.sort(
    (a, b) => +new Date(a.date) - +new Date(b.date)
  );

  return (
    <Styled.Wrapper>
      {sortedItems.length &&
        items.map((item) => (
          <Styled.Message>
            <Styled.Name>{item.userName}</Styled.Name>
            <Styled.Text>{item.text}</Styled.Text>
            <Styled.Date>
              {format(new Date(item.date), "dd.MM.yyyy", { locale: ruLocale })}
            </Styled.Date>
          </Styled.Message>
        ))}
    </Styled.Wrapper>
  );
};

export default MessageList;
