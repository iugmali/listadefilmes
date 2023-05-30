import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tela1 from "./src/Tela1";
import Tela2 from "./src/Tela2";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Filmes'} component={Tela1} />
        <Stack.Screen name={'Filme'} component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
