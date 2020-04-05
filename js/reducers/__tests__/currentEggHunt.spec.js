import currentEggHunt from "../currentEggHunt";
import {addHuntEggs} from "../../actions";

describe("Current Egg Hunt Reducer", () => {
    const expectedInitialState = {
        hunt:{eggs:{}},
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

        let state = currentEggHunt(undefined,addHuntEggs(mockHunt,egg,2));

        let uidRegex = /^([0-9a-fA-F]{8})-(([0-9a-fA-F]{4}\-){3})([0-9a-fA-F]{12})$/i
        expect(state.hunt.eggs).toBeDefined();
        expect(Object.keys(state.hunt.eggs).length).toEqual(2);

        //check the egg properties are what we expect
        const firstEggId = Object.keys(state.hunt.eggs)[0]
        expect(uidRegex.test(firstEggId)).toBe(true);

        for (let key in state.hunt.eggs) {
            for (let property in egg) {
                //the egg id becomes "eggId" when associated with the hunt
                if (property !== "id") {
                    expect(state.hunt.eggs[key][property]).toEqual(egg[property])
                } else {
                    expect(state.hunt.eggs[key]["eggId"]).toEqual(egg[property])
                }
            }

            //check that the egg has an empty position. This is what is used on the placing screen
            expect(state.hunt.eggs[key].position).not.toBeDefined()
        }
    })
})