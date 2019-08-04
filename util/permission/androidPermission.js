import { PermissionsAndroid } from 'react-native';

export const RequestGPSPermission= async ()=> {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'We need gps access',
        'message': 'please let us access your gps' +
                   'so we can suggest you new partner'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}