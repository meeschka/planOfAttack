import React, { useState, useEffect } from "react";
import {
  useWindowDimensions,
  Pressable,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Plan } from "../../store/types/Plan";
import Button from "../Button/Button";
import { deletePlanSaga } from "../../store/actions/PlanActions";
interface Props {
  plan: Plan;
}

const PlanListView = ({ plan }: Props) => {
  const theme = useThemeContext();
  const windowWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const isMobile = windowWidth <= 768;
    setIsMobile(isMobile);
  }, [windowWidth]);

  const trimDescription = (description: string): string => {
    if (description.length > 150)
      return description.substring(0, 150).concat("...");
    return description;
  };

  return (
    <Pressable
      onPress={() => console.log("goes to plan detail page")}
      onLongPress={() => setShowDetails(!showDetails)}
      style={[
        isMobile ? mobileStyles.card : webStyles.card,
        constantStyles.card,
        { borderColor: theme.lightMidtone },
      ]}
    >
      <View style={constantStyles.textView}>
        <Text
          style={[
            isMobile ? mobileStyles.title : webStyles.title,
            { color: theme.accent },
          ]}
        >
          {plan.title}
        </Text>
        <Text
          style={[
            isMobile ? mobileStyles.text : webStyles.text,
            { color: theme.fontColor },
          ]}
        >
          {showDetails ? plan.description : trimDescription(plan.description)}
        </Text>
        {showDetails && plan.notes && (
          <Text
            style={[
              isMobile ? mobileStyles.text : webStyles.text,
              { color: theme.accent },
            ]}
          >
            {plan.notes}
          </Text>
        )}
      </View>
      <View style={constantStyles.buttonView}>
        <Button
          type="warning"
          size={isMobile ? "sm" : "lg"}
          text="Delete"
          onPress={() => dispatch(deletePlanSaga(plan))}
        />
      </View>
    </Pressable>
  );
};

export default PlanListView;

const mobileStyles = StyleSheet.create({
  card: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  text: {
    fontSize: 14,
  },
});

const webStyles = StyleSheet.create({
  card: {
    padding: 15,
  },
  title: {
    fontSize: 24,
  },
  text: {
    fontSize: 12,
  },
});

const constantStyles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#202",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textView: {
    width: "80%",
  },
  buttonView: {
    width: "20%",
    alignContent: "center",
    paddingLeft: 20,
  },
});
