import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  charging: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chargingText: {
    color: "gray",
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
});
