import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

import { RootTabParamList } from "../../../App";
import { Button, PlanListView } from "../../components";

type PlansScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Plans"
>;

interface Props {
  navigation: PlansScreenNavigationProp;
}

interface Plan {
  id: string;
  title: string;
  description: string;
  notes?: string;
  project?: string;
  materials?: [string];
}

const dummyPlans: Plan[] = [
  {
    id: "123",
    title: "Brown wool skirt",
    description: "Circle skirt using that wool from SFF",
  },
  {
    id: "456",
    title: "Green sweater",
    description:
      "Using the merino from my birthday. Thinking either a cabled cardigan (like the Mulberry Wine pattern by Thea of BabyCocktails) or maybe more of a plan turtleneck with simple detailing, like the September Morn (also a BabyCocktails design) or the Big Y by Hinterm Stein",
  },
];

const PlansScreen = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>A place for your plans!</Text>
        <StatusBar style="auto" />
        <Button
          type="primary"
          size="sm"
          text="Go to Projects"
          onPress={() => navigation.navigate("Projects")}
        />
        <Button
          type="accent"
          size="sm"
          text="Add a Plan"
          onPress={() => console.log("hi")}
        />
        <FlatList
          data={dummyPlans}
          renderItem={({ item }) => <PlanListView plan={item}  />}
          keyExtractor={(item: Plan) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
