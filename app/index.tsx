import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
	const [counterNumber, setCounterNumber] = useState(0);

	const incrementCount = () => {
		setCounterNumber((prev: number) => prev + 1);
	};

	const decrementCount = () => {
		setCounterNumber((prev: number) => prev - 1);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text>Hello World</Text>
			<View style={styles.buttonWrap}>
				<TouchableOpacity style={styles.plusButton} onPress={incrementCount}>
					<Text style={styles.plusText}>increment</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.minusButton} onPress={decrementCount}>
					<Text style={styles.plusText}>decrement</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.numberStyle}>{counterNumber}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonWrap: {
		display: "flex",
		justifyContent: "center",
		gap: 8,
	},
	plusButton: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	minusButton: {
		backgroundColor: "#FF3B30",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	plusText: {
		color: "#fff",
	},
	numberStyle: {
		fontSize: 40,
	},
});
