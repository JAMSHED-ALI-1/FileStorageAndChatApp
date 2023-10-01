import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import DocumentPicker from "react-native-document-picker";
import AudioRecord from "react-native-audio-record";
const { width, height } = Dimensions.get("window");

const ChatWith_us = () => {
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false); // State to track recording status

  const handleSend = (newMessages) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  const handleToggleRecording = async () => {
    if (!isRecording) {
      try {
        const audioPath = AudioRecord.start();
        console.log("Started recording at:", audioPath);
        setIsRecording(true);
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    } else {
      try {
        const audioPath = await AudioRecord.stop();
        console.log("Stopped recording, audio path:", audioPath);
        setIsRecording(false);

        // Send the recorded audio as a message
        const audioMessage = {
          _id: new Date().getTime(),
          createdAt: new Date(),
          user: {
            _id: 1,
          },
          audio: audioPath, // Store the audio path
        };
        setMessages((prevMessages) =>
          GiftedChat.append(prevMessages, [audioMessage])
        );
      } catch (error) {
        console.error("Error stopping recording:", error);
      }
    }
  };
  const handleCameraCapture = () => {
    Alert.alert("Camera Capture", "Open camera...");
  };

  const handleAttachDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log(result.uri, result.type, result.name, result.size);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User cancelled the picker
      } else {
        console.error("Error selecting document:", error);
      }
    }
  };

  const renderCustomInputToolbar = () => {
    return (
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.emojiButton}
          onPress={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <Image source={require("../../assets/images/emoji.png")} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={textMessage}
          onChangeText={(text) => setTextMessage(text)}
        />
        <View style={{ flexDirection: 'row', columnGap: 10 }}>


          <TouchableOpacity onPress={handleToggleRecording}>
            <Image
              source={require("../../assets/images/Group.png")}
              style={{ tintColor: isRecording ? "red" : "black" }}
            />
          </TouchableOpacity>

          {/* Button for camera capture */}
          <TouchableOpacity onPress={handleCameraCapture}>
            <Image source={require("../../assets/images/camera2.png")} />
          </TouchableOpacity>

          {/* Button for attaching documents */}
          <TouchableOpacity onPress={handleAttachDocument}>
            <Image source={require("../../assets/images/attachment.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSendTextMessage}>
            <Image source={require("../../assets/images/sending.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleSendTextMessage = () => {
    if (textMessage.trim() === "") return; // Don't send empty messages
    const newMessage = {
      _id: new Date().getTime(),
      text: textMessage,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, [newMessage])
    );
    setTextMessage(""); // Clear the input field after sending
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Chat window */}
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
        }}
        // Customize how audio messages are rendered
        renderMessageAudio={(props) => {
          // You'll need to implement rendering audio messages here
          return <YourAudioComponent {...props} />;
        }}
        renderInputToolbar={renderCustomInputToolbar}
      />

      {/* Render the emoji picker */}
      {showEmojiPicker ? (
        <EmojiSelector
          category={Categories.all}
          onEmojiSelected={(emoji) => {
            const newMessage = {
              _id: new Date().getTime(),
              text: emoji,
              createdAt: new Date(),
              user: {
                _id: 1,
              },
            };
            setMessages((prevMessages) =>
              GiftedChat.append(prevMessages, [newMessage])
            );
            setShowEmojiPicker(false);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ChatWith_us;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: "#00000014",
    backgroundColor: "#FFFFFFEB",
  },
  emojiButton: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    marginLeft: 8,
    backgroundColor: "white",
    // paddingLeft: 20,
    paddingHorizontal: 10
  },
});
