import currentEggHunt from "../currentEggHunt";
import {addHuntEggs, updateEgg} from "../../actions";

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
        }
    })

    it ("should update egg details",() => {
        let mockEgg = {
            position:{
                x:0,
                y:1,
                z:-1,
                lat: 10.646137,
                long: -61.378997
            }
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
})