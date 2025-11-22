import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity } from "react-native";
import bell from "../assets/bell.png";
import newspaper from "../assets/newspaper.png";
import { Home } from "./screens/Home";
import { History } from "./screens/History";
import { CoffeeDetails } from "./screens/CoffeeDetails";
import { Bag } from "./screens/Bag";
import { NotFound } from "./screens/NotFound";
import { Ionicons } from "@expo/vector-icons";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      },
    },
    Bag: {
      screen: Bag,
      options:  {
        title: "Bag",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bag-outline" size={size} color={color} />
        ),
        headerShown: false 
      },
    },
    History: {
      screen: History,
      options: {
        title: "history",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="time-outline" size={size} color={color} />
        ),
        headerShown: false
      },
    },
  },
  screenOptions: {
    tabBarActiveTintColor: "#523308",
    tabBarInactiveTintColor: "#909090",
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    Profile: {
      screen: History,
    },
    CoffeeDetails: {
      screen: CoffeeDetails,
      options: ({ navigation }) => ({
        headerTitleAlign: 'center',
        headerLeft: () => 
            <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ marginLeft: 15 }} 
            >
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
