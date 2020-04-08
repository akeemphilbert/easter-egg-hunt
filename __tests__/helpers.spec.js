import {getDistance} from "../js/helpers";

describe("helpers test", () => {
    it("should get distance between 2 points", () => {
        let mocks = [
            {
                position1: {
                    latitude: "10.6460231",
                    longitude: "-61.3791245",
                }, position2: {
                    latitude: "10.646343",
                    longitude: "-61.379607",
                }, distance: 64.64
            },
            {
                position1: {
                    latitude: "10.645613",
                    longitude: "-61.372130",
                }, position2: {
                    latitude: "10.64527",
                    longitude: "-61.373302",
                }, distance: 132
            }
        ];

        for (let i in mocks) {
            let d = getDistance(mocks[i].position1.latitude, mocks[i].position1.longitude, mocks[i].position2.latitude, mocks[i].position2.longitude);
            //the distance I calculated on google map between these points was 64.64 meters. This test is to make sure we're in a margin of error of 4 meters of that
            expect(d).toBeLessThan(mocks[i].distance+ 4);
            expect(d).toBeGreaterThan(mocks[i].distance - 4);
        }

    })
});