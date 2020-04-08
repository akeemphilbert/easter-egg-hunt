import {PermissionsAndroid} from "react-native";

export const requestLocatePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Easter egg hunt location permission",
                message:
                    "The easter egg hunt app needs location data to allow for placing eggs in multiple locations",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can now place eggs");
        } else {
            console.log("Location permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};
export const  calculateDistance = (p1, p2) => {
    let a = p2[0] - p1[0];
    let b = p2[1] - p1[1];
    let c = p2[2] - p1[2];

    return Math.hypot(a, b, c);
}
/**
 * Get the distance between two points returned in meters
 *
 * @param latitude1
 * @param longitude1
 * @param latitude2
 * @param longitude2
 * @returns {number}
 */
export const getDistance = (latitude1, longitude1, latitude2, longitude2) => {
    if ((latitude1 === latitude2) && (longitude1 === longitude2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * latitude1/180;
        let radlat2 = Math.PI * latitude2/180;
        let theta = longitude1-longitude2;
        let radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;

        return dist * 1.609344*1000;
    }
};