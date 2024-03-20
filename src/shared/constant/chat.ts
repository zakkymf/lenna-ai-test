import {UserType} from '../../chat/domain/entities/chat';
import {icons} from '../assets';

export const Bot: UserType = {
  _id: 3,
  name: 'Lenna Bot',
  avatar: icons.bot,
};

export const DEFAULT_CHAT = [
  {
    _id: 2,
    text: 'How can I help You ?',
    createdAt: new Date(),
    user: Bot,
  },
  {
    _id: 1,
    text: 'Hi!',
    createdAt: new Date(),
    user: Bot,
  },
];
