import {useCallback, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {CONFIG} from '../../../env';
import {Bot, DEFAULT_CHAT} from '../../shared/constant';

export function useChat() {
  const [messages, setMessages] = useState<IMessage[]>(DEFAULT_CHAT);

  const onSend = useCallback(
    (message: IMessage[]) => {
      setMessages(prevMessage => GiftedChat.append(prevMessage, message));

      let msg = message[0].text;

      Dialogflow_V2.requestQuery(
        msg,
        (result: any) => {
          let text = result?.queryResult?.fulfillmentText;
          let newMsg = {
            _id: messages.length + 1,
            text,
            createdAt: new Date(),
            user: Bot,
          };
          setMessages(prevMessage => GiftedChat.append(prevMessage, [newMsg]));
        },
        error => {
          console.log(error);
        },
      );
    },
    [messages],
  );

  const initialize = () => {
    Dialogflow_V2.setConfiguration(
      CONFIG.client_email,
      CONFIG.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      CONFIG.project_id,
    );
  };

  return {
    messages,
    initialize,
    onSend,
  };
}
