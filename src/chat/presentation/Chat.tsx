/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, SafeAreaView, Image} from 'react-native';

import {Bubble, GiftedChat, IMessage, Send} from 'react-native-gifted-chat';
import styles from './style';

import {useChat} from './useChat';
import {icons} from '../../shared/assets';
import {Colors} from '../../shared/theme';

const Chat = () => {
  const {messages, initialize, onSend} = useChat();

  useEffect(() => {
    initialize();
  }, []);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.primary,
          },
        }}
      />
    );
  };

  const renderSendButton = (props: any) => {
    return (
      <Send {...props} containerStyle={styles.sendButtonContainer}>
        <Image source={icons.send} style={styles.sendButton} />
      </Send>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chat}>
        <GiftedChat
          placeholder="Masukkan pesan...."
          messages={messages}
          onSend={(message: IMessage[]) => onSend(message)}
          user={{
            _id: 1,
            avatar: icons.user,
            name: 'User',
          }}
          renderBubble={renderBubble}
          renderSend={renderSendButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
