import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "../../../assets/heart-icon.png",
    likedImage: "../../../assets/like.png",
  },
  {
    name: "Comment",
    imageUrl: "../../../assets/comment-icon.png",
  },
  {
    name: "Share",
    imageUrl: "../../../assets/share-icon.png",
  },
  {
    name: "Save",
    imageUrl: "../../../assets/save-icon.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30, color: "white" }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
      color: "white",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{
          color: "white",
          marginLeft: 5,
          fontWeight: "700",
        }}
      >
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "bold", fontSize: 23 }}>
      ...
    </Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => {
  <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0]} />;
};

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});

export default Post;
