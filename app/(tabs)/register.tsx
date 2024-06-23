import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, StyleSheet, Text, TextInput } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

import { Controller, useForm } from "react-hook-form";
import { registerWithEmailAndPassword } from "@/firebase";

const defaultValues = {
	name: "",
	email: "",
	password: "",
};

type RegsiterFormSchema = typeof defaultValues;

export default function RegisterScreen() {
	const { register, handleSubmit, formState, control } =
		useForm<RegsiterFormSchema>({
			defaultValues,
		});

	const onSubmit = (data: RegsiterFormSchema) => {
		console.log("form", data);
		registerWithEmailAndPassword(data);
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
			<Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
