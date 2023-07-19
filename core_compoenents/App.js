import { Text, View, Image } from 'react-native';
import Icon from './assets/adaptive-icon.png';

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
			<Text>
				<Text style={{ color: 'white' }}>Hello</Text> world
			</Text>
		</View>
	);
}
