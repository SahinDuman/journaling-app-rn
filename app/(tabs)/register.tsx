import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, StyleSheet, Text, TextInput } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

import { Controller, useForm } from "react-hook-form";
import { registerWithEmailAndPassword } from "@/firebase";
import { useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";

const defaultValues = {
	name: "",
	email: "",
	password: "",
};

type RegsiterFormSchema = typeof defaultValues;

export default function RegisterScreen() {
	const [isLoading, setIsLoading] = useState(false);
	const { replace } = useRouter();

	const { handleSubmit, formState, control } = useForm<RegsiterFormSchema>({
		defaultValues,
	});

	const onSubmit = async (data: RegsiterFormSchema) => {
		setIsLoading(true);
		try {
			const user = await registerWithEmailAndPassword(data);
			if (user) {
				replace("/");
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const nameError = formState.errors.name?.message;
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
					required: "Name is required",
				}}
				name="name"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						placeholder="Name"
						autoComplete="name"
						onChangeText={onChange}
						onBlur={onBlur}
						value={value}
					/>
				)}
			/>
			{nameError && <Text>{nameError}</Text>}

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
