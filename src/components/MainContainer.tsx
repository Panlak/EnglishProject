import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import PersonalCabinet from './screens/PersonalCabinet';
import SettingsTabs from './screens/SettingsTabs';
import PersonalCabinetTabs from './screens/PersonalCabinetTabs';
import HomeTabs from './screens/HomeTabs';

//Screen names


const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const personalCabinet = "Cabinet"
const Tab = createBottomTabNavigator();

const MainContainer = () =>{
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (rn == personalCabinet){
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 0, fontSize: 15 },
          style: { padding: 20, height: 30}
        }}>
        <Tab.Screen name={homeName} component={HomeTabs} options={{headerShown: false}}/>
        <Tab.Screen name={personalCabinet} component={PersonalCabinetTabs}  options={{headerShown: false}}/>
        <Tab.Screen name={settingsName} component={SettingsTabs}  options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}
export default MainContainer;