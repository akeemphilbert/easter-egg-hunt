import location from "../location";
import {resetLocation, updateLocation} from "../../actions";

describe("Location Reducer", () => {
    it("should update the location",()=> {
        let mockPosition = {"accuracy": 18.224000930786133, "altitude": 31.692138671875, "heading": 0, "latitude": 10.68428038, "longitude": -61.41593053, "speed": 0};
        let state = location(undefined,updateLocation(mockPosition));
        expect(state.latitude).toEqual(mockPosition.latitude);
    });

    it("should reset the location",()=> {
        let mockPosition = {"accuracy": 18.224000930786133, "altitude": 31.692138671875, "heading": 0, "latitude": 10.68428038, "longitude": -61.41593053, "speed": 0};
        let state = location(mockPosition,resetLocation());
        expect(state).toEqual({});
    });
});