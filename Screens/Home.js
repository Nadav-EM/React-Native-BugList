import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import CheckBox from "expo-checkbox";
import React from "react";
const { width, height } = Dimensions.get("screen");

import { useSelector, useDispatch } from "react-redux";
import { addBug, removeBug, userInput, resolveBug } from "../Redux/actions";

const Home = () => {
  const inpRef = React.useRef(null);
  const arr = useSelector((state) => state.reducer);
  const inp = useSelector((state) => state.handleInput);
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(addBug(inp));
    inpRef.current.clear();
  };

  const handleRemove = (id) => {
    dispatch(removeBug(id));
  };

  const handleCheckBox = (id) => {
    dispatch(resolveBug(id));
  };

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          color="white"
          ref={inpRef}
          style={styles.input}
          onChangeText={(name) => dispatch(userInput(name))}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddButton}>
          <Text style={styles.font}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={arr}
          renderItem={({ item }) => {
            return (
              <View style={styles.CON}>
                <TouchableOpacity
                  style={styles.singleItemContainer}
                  onPress={() => handleRemove(item.key)}
                >
                  <Text style={styles.listItem}>{item.desc}</Text>
                </TouchableOpacity>
                <View>
                  <CheckBox
                    value={item.resolve}
                    color="#1E90FF"
                    onValueChange={() => handleCheckBox(item.key)}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  input: {
    width: 200,
    borderWidth: 2,
    borderColor: "#1E90FF",
    borderRadius: 5,
    margin: 10,
    paddingLeft: 5,
  },
  button: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    borderWidth: 2,
    borderColor: "#1E90FF",
    borderRadius: 5,
  },
  font: {
    fontWeight: "bold",
    color: "#1E90FF",
  },
  flatlistContainer: {
    bottom: 10,
    flex: 2,
    backgroundColor: "#1E90FF",
    shadowRadius: 10,
    elevation: 50,
    borderRadius: 5,
    width: 350,
    marginHorizontal: 30,
  },
  singleItemContainer: {
    paddingLeft: 20,
    justifyContent: "center",
    width: 250,
    height: 50,

    borderRadius: 3,
    margin: 5,
  },
  listItem: {
    fontWeight: "bold",
    color: "#1E90FF",
  },
  CON: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 25,
    backgroundColor: "white",
  },
});
