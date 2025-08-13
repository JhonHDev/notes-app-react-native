import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatNotificationDate } from "../../utils/formatNotificationDate";

interface Props {
  title: string;
  body: string;
  date: string;
  visited: boolean;
  onPress: () => void;
}

const NotificationCard = ({ title, body, date, visited, onPress }: Props) => {
  const formatDate = formatNotificationDate(date);

  return (
    <TouchableOpacity
      style={[styles.card, visited ? styles.cardVisited : styles.cardUnread]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.row}>
        <Ionicons
          name="notifications"
          size={24}
          color={visited ? "#888" : "#1976d2"}
          style={styles.icon}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
      <Text style={styles.date}>{formatDate}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 7,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
    flexDirection: "column",
  },
  cardUnread: {
    backgroundColor: "#e0e7ef", // más vivo
  },
  cardVisited: {
    backgroundColor: "#f5f5f5", // más opaco
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
  },
});

export default NotificationCard;
