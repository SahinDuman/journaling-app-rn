import { Stack, useRouter } from "expo-router";
import { initializeAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import Login from "../login";

export default function Layout() {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	const { navigate } = useRouter();

	const onAuthStateChanged = (user: User | null) => {
		setUser(user);
		if (initializing) {
			setInitializing(false);
		}
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);
		return unsubscribe;
	}, []);

	if (initializing) {
		return null;
	}

	// if (!user) {
	// 	navigate("/login");
	// }

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}
