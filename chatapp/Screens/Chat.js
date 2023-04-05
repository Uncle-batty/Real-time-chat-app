import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  } from 'react';
  import { TouchableOpacity, Text } from 'react-native';
  import { GiftedChat } from 'react-native-gifted-chat';
  import {
    collection,
    firestore,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
//import firestore from '@react-native-firebase/firestore';
  import { signOut } from 'firebase/auth';
  import { auth, database } from '../Config/firebase';
  import { useNavigation } from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';
  import colors from '../colors';


  export default function Chat() {

    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

  const onSignOut = () => {
      signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10
              }}
              onPress={onSignOut}
            >
              <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
            </TouchableOpacity>
          )
        });
      }, [navigation]);

    useLayoutEffect(() => {
  //const collectionRef = collection("Chats");
  const collectionPath = 'Chats';
if (collectionPath.trim() !== '') {
  const collectionRef = collection(collectionPath);
  // rest of your code
    const q = query( collectionRef, orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(q, querySnapshot => {
    setMessages(
      querySnapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user
      }))
    );
  });

  return unsubscribe;
} else {
  console.error('Invalid collection path');
}

}, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );
        // setMessages([...messages, ...messages]);
        const collectionPath = collection("Chats");
        if (collectionPath.trim() !== '') {
  const collectionRef = collection(collectionPath);
  // rest of your code
} else {
  console.error('Invalid collection path');
}

        const { _id, createdAt, text, user } = messages[0];    
        addDoc(collectionRef, {
          _id,
          createdAt,
          text,
          user
        });
      }, []);

      return (
        // <>
        //   {messages.map(message => (
        //     <Text key={message._id}>{message.text}</Text>
        //   ))}
        // </>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={false}
          showUserAvatar={false}
          onSend={messages => onSend(messages)}
          messagesContainerStyle={{
            backgroundColor: '#fff'
          }}
          textInputStyle={{
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          user={{
            _id: auth?.currentUser?.email,
            avatar: 'https://i.pravatar.cc/300'
          }}
        />
      );
}

