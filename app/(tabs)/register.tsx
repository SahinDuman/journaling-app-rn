import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TextInput } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useMutation } from "@tanstack/react-query";
import { registerWithEmailAndPassword } from "@/firebase";

export default function RegisterScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
			headerImage={
				<Ionicons size={310} name="code-slash" style={styles.headerImage} />
			}
		>
			<TextInput placeholder="Username" />
			<TextInput placeholder="Password" />
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
