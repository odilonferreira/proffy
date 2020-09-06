import React from "react";

import PageHeader from "../../componentes/PageHeader";
import { View, Text } from "react-native";

import styles from "./styles";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;
