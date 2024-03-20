import {StyleSheet} from 'react-native';
import {Colors} from '../../shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chat: {
    flex: 1,
    backgroundColor: 'white',
  },
  sendButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 15,
  },
  sendButton: {
    width: 24,
    height: 24,
    tintColor: Colors.primary,
  },
});

export default styles;
