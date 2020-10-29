import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { RootTabParamList } from "../../../App";
import { Button, PlanListView } from "../../components";
import { getPlans, addPlan } from "../../store/actions/PlanActions";
import { Plan } from "../../store/types/Plan";
import RootState from "../../store/types/Root";

type PlansScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Plans"
>;

interface Props {
  navigation: PlansScreenNavigationProp;
}

const toAdd = {
  id: "123456",
  title: "Navy coat",
  description: "Melton wool, using that Vogue pattern you have",
};
const PlansScreen = ({ navigation }: Props) => {
  const plans = useSelector((state: RootState) => state.plans.plans);
  const planLoading = useSelector((state: RootState) => state.plans.loading);
  const planError = useSelector((state: RootState) => state.plans.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!plans.length && !planError && !planLoading) {
      dispatch(getPlans());
    }
  });

  const addAPlan = () => dispatch(addPlan(toAdd));
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
        <Button type="accent" size="sm" text="Add a Plan" onPress={addAPlan} />
        <FlatList
          data={plans}
          renderItem={({ item }) => <PlanListView plan={item} />}
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
