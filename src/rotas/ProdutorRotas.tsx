import { createStackNavigator } from "@react-navigation/stack"
import Produtor from "../view/Produtor";
import Home from "../view/Home";
import Cesta from "../view/Cesta";

const Stack = createStackNavigator();

function ProdutorRotas({ componentePrincipal = Home }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={componentePrincipal} />
            <Stack.Screen name="Produtor" component={Produtor} />
            <Stack.Screen name="Cesta" component={Cesta} />
        </Stack.Navigator>
    );
}

export default ProdutorRotas;