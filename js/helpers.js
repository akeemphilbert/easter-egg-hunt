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

        /*
        let earthRadius = 6371000,
            decimals = 2,
            dLat = (parseFloat(latitude1) - parseFloat(latitude2)).toRad(),
            dLng = (parseFloat(longitude1) - parseFloat(longitude2)).toRad(),
            toLat = parseFloat(latitude2),
            toLng = parseFloat(longitude2),
            fromLat = parseFloat(latitude1),

            a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(toLat) *
                Math.cos(fromLat),
            b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
            c = earthRadius * b,
            d = (Math.round(c * Math.pow (10, decimals)) /
                Math.pow(10, decimals)) * 1000;
            return d;
         */
    }
};