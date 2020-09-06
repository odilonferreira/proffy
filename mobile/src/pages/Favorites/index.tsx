import React from "react";

import styles from "./styles";
import { View, Text } from "react-native";
import PageHeader from "../../componentes/PageHeader";

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default Favorites;
