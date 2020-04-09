import currentEggHunt from "../currentEggHunt";
import {addHuntEggs, updateEgg, resetEggs} from "../../actions";

describe("Current Egg Hunt Reducer", () => {
    const expectedInitialState = {
        eggs:{},
        loading: null,
        error: null
    }

    it ("should return initial state",() => {
        expect(currentEggHunt(undefined,{})).toEqual(expectedInitialState)
    })

    it ("should add 2 eggs to the hunt",() => {
        let egg = {
            id: "some id",
            title: "example egg",
            image: "some image"
        };

        let mockHunt = {

        }

        let state = currentEggHunt(undefined,addHuntEggs(egg,2));

        let uidRegex = /^([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})$/i
        expect(state.eggs).toBeDefined();
        expect(Object.keys(state.eggs).length).toEqual(2);

        //check the egg properties are what we expect
        const firstEggId = Object.keys(state.eggs)[0]
        expect(uidRegex.test(firstEggId)).toBe(true);

        for (let key in state.eggs) {
            for (let property in egg) {
                //the egg id becomes "eggId" when associated with the hunt
                if (property !== "id") {
                    expect(state.eggs[key][property]).toEqual(egg[property])
                } else {
                    expect(state.eggs[key]["eggId"]).toEqual(egg[property])
                }
            }

            //check that the egg has an empty position. This is what is used on the placing screen
            expect(state.eggs[key].position).not.toBeDefined()
            expect(state.eggs[key].hidden).toBe(true)
        }
    })

    it ("should update egg details",() => {
        let mockEgg = {
            id: "21680d48-04d9-4c5c-a678-d5a0346dcfbc",
            eggId: "some id",
            position:{
                x:0,
                y:1,
                z:-1,
            },
            location:{"accuracy": 34.30400085449219, "altitude": 96.0599365234375, "heading": 0, "latitude": 10.6844899, "longitude": -61.41598248, "speed": 0}
        };

        let mockHunt = {
            eggs:{
                "21680d48-04d9-4c5c-a678-d5a0346dcfbc":{
                    id: "21680d48-04d9-4c5c-a678-d5a0346dcfbc",
                    eggId: "some id",
                    title: "example egg",
                    image: "some image"
                }
            },
            loading: null,
            error: null
        };

        let state = currentEggHunt(mockHunt,updateEgg(mockEgg));

        expect(state.eggs["21680d48-04d9-4c5c-a678-d5a0346dcfbc"].position).toBeDefined();
        expect(state.eggs["21680d48-04d9-4c5c-a678-d5a0346dcfbc"].position).toEqual(mockEgg.position)
    })

    it("should reset eggs on the hunt",()=>{
        let mockEgg = {
            id: "21680d48-04d9-4c5c-a678-d5a0346dcfbc",
            eggId: "some id",
            position:{
                x:0,
                y:1,
                z:-1,
            },
            location:{"accuracy": 34.30400085449219, "altitude": 96.0599365234375, "heading": 0, "latitude": 10.6844899, "longitude": -61.41598248, "speed": 0},
            hidden: true
        };

        let mockHunt = {
            eggs:{
                "21680d48-04d9-4c5c-a678-d5a0346dcfbc":mockEgg
            },
            loading: null,
            error: null
        };

        let state = currentEggHunt(mockHunt,resetEggs());
        expect(state.eggs["21680d48-04d9-4c5c-a678-d5a0346dcfbc"].hidden).toBe(true);
    })
})