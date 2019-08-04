import { AsyncStorage } from "react-native"

export const _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true
    } catch (error) {
      return false
    }
}

export const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
        return "some error occured"
    }
}


export const _deleteData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true
    } catch (error) {
      return false
    }
}
