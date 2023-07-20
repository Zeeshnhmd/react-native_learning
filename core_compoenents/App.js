import { Text, View, Image, ImageBackground } from 'react-native';
import Icon from './assets/adaptive-icon.png';

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
			{/* <Text>
				<Text style={{ color: 'white' }}>Hello</Text> world
			</Text> */}
			{/* <Image style={{ width: 300, height: 300 }} source={Icon} />
			<Image
				style={{ width: 300, height: 300 }}
				source={{ uri: 'https://picsum.photos/200/300' }}
			/> */}

			<ImageBackground
				source={Icon}
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			>
				<Text style={{ fontSize: 20, color: 'black', fontWeight: 600 }}>
					Hello World
				</Text>
			</ImageBackground>
		</View>
	);
}
