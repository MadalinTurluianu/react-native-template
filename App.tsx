import { TestComponent } from '@components/TestComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Main" component={TestComponent} />
      </Navigator>
    </NavigationContainer>
  );
}
