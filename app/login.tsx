import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const defaultValues = {
	email: "",
	password: "",
};

type RegsiterFormSchema = typeof defaultValues;

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const { replace } = useRouter();

	const { handleSubmit, formState, control } = useForm<RegsiterFormSchema>({
		defaultValues,
	});

	const onSubmit = async (data: RegsiterFormSchema) => {
		// setIsLoading(true);
		// try {
		// 	const user = await registerWithEmailAndPassword(data);
		// 	if (user) {
		// 		replace("/");
		// 	}
		// } catch (error) {
		// 	console.error(error);
		// } finally {
		// 	setIsLoading(false);
		// }
	};

	const emailError = formState.errors.email?.message;
	const passwordError = formState.errors.password?.message;

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
			headerImage={
				<Ionicons size={310} name="person" style={styles.headerImage} />
			}
		>
			<Controller
				control={control}
				rules={{
					required: "Email is required",
				}}
				name="email"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Email"
						inputMode="email"
						autoComplete="email"
						keyboardType="email-address"
						onChangeText={onChange}
						onBlur={onBlur}
						value={value}
					/>
				)}
			/>
			{emailError && <Text>{emailError}</Text>}

			<Controller
				control={control}
				rules={{
					required: "Password is required",
				}}
				name="password"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Password"
						secureTextEntry
						autoComplete="password"
						onChangeText={onChange}
						onBlur={onBlur}
						value={value}
					/>
				)}
			/>
			{passwordError && <Text>{passwordError}</Text>}
			<Button
				title={isLoading ? "Loading..." : "Register"}
				disabled={isLoading}
				onPress={handleSubmit(onSubmit)}
			/>
			<Link href="/login">Already have an account? Login</Link>
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
