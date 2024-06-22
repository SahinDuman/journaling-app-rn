import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function RegisterScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
			headerImage={
				<Ionicons size={310} name="code-slash" style={styles.headerImage} />
			}
		>
			<Text>Reee</Text>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		color: "#808080",
		bottom: -90,
		left: -35,
		position: "absolute",
	},
});
