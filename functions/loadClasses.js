import AsyncStorage from "@react-native-community/async-storage";

const loadClasses = async () => {
  let refined = null;
  await AsyncStorage.getItem("classes", (err, result) => {
    if (err) {
      alert(err.message);
      return null;
    } else {
      const info = JSON.parse(result);
      refined = info.map((obj) => {
        return {
          endTime: new Date(obj.endTime),
          startTime: new Date(obj.startTime),
          title: obj.title,
          todos: obj.todos,
        };
      });
    }
  });
  return refined;
};

export default loadClasses;
