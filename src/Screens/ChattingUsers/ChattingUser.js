
import React from 'react'
import { View, Text, Image } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import { SOCKET_STRINGS } from '../../constants/socketConstants';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { showError } from '../../utils/helperFunctions';
import socketServices from '../../utils/socketService';
import styles from './styles';


class ChattingUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    const { commonConversationId, userInfo } = this.props.route.params.data;
    const { userData } = this.props;
    socketServices.initializeSocket(userData.accessToken)
    actions.getUserChats(commonConversationId).
      then((res) => {
        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId._id,
              name: data.senderId.firstName,
              avatar: userInfo.profileImg[0].original,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({ messages });
      }
      )
      .catch((error) => showError(error.message))
    socketServices.on(SOCKET_STRINGS.RECEIVED_MESSAGE, this.onReceiveMessage);
  }

  onSend = (messages = []) => {
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const { userData } = this.props
    const { _id, commonConversationId, } = this.props.route.params.data
    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: _id,
      commonConversationId,
      messageType: 'Text',
      text: messages[0].text,
    });

    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  onReceiveMessage = data => {
    const {
      commonConversationId,
      firstName,
      userInfo
    } = this.props.route.params.data;

    const message = {
      _id: data._id,
      text: data.text,
      createdAt: data.createdAt,
      user: {
        _id: data.senderId,
        name: firstName,
        avatar: userInfo.profileImg[0].original,
      },
    };
 

    if (data.commonConversationId === commonConversationId) {
      socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
        senderId: data.senderId,
        isRead: true,
        recieverId: data.recieverId,
      });

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    }
  };

  render() {
    const { userInfo } = this.props.route.params.data;
    const { userData, navigation } = this.props
    const { messages } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header bgColor={colors.lightGrey}>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={imagePath.back_arrow} style={styles.backIcon} />
            </TouchableOpacity>
            <Image source={{ uri: userInfo.profileImg[0].original }} style={styles.userProfileIcon} />
            <Text style={styles.userNameTxt}>{userInfo.fullName}</Text>
          </View>
        </Header>
        <GiftedChat
          messages={messages}
          onSend={this.onSend}
          user={{
            _id: userData._id,
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.auth.userData,
  }
}

export default connect(mapStateToProps)(ChattingUser)