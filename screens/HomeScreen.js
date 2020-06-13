import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";


// temporary data until we pull from Firebase
posts = [
    {
        id: "1",
        name: "Tố Quyên",
        text:
            "Thiên nhiên là phép màu mà tạo hóa ban ơn cho cuộc sống, hàng cây xanh tốt cùng chim chóc nhảy múa trên cành khiến ta yêu đời hơn cho phép.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar1.jpg"),
        image: require("../assets/tempImage1.jpg")
    },
    {
        id: "2",
        name: "Minh Tuấn",
        text:
            "Hoa hướng dương dạy tôi một điều: chỉ cần quay mặt về phía ánh mặt trời, cố gắng hướng về phía trước, mỗi ngày sẽ trở nên đơn giản lại tốt đẹp.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar2.jpg"),
        image: require("../assets/tempImage2.jpg")
    },
    {
        id: "3",
        name: "Quốc Cường",
        text:
            "Thời gian là miễn phí nhưng nó vô giá. Bạn không thể sở hữu nó, nhưng bạn có thể sử dụng nó. Bạn có thể dùng nó, nhưng bạn không thể giữ nó. Một khi bạn làm mất nó, bạn sẽ không thể nào có lại được nó.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar3.jpg"),
        image: require("../assets/tempImage3.jpg")
    },
    {
        id: "4",
        name: "Quang Huy",
        text:
            "Trong rượu, ta tìm thấy trí tuệ. Trong bia, ta thấy được sức mạnh. Trong nước lọc, ta phát hiện vi khuẩn, và cuối cùng trong ăn uống, ta tìm thấy niềm vui.",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar4.jpg"),
        image: require("../assets/tempImage4.jpg")
    },
	{
        id: "5",
        name: "Minh Duy",
        text:
            "hello",
        timestamp: 1569109273726,
        avatar: require("../assets/tempAvatar5.jpg"),
        image: require("../assets/tempImage5.jpg")
    }
];

export default class HomeScreen extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});
