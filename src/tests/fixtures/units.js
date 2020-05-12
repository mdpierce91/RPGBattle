import Unit from '../../models/Unit';

const units = [
    new Unit({
        currentHitPoints: 12,
        downed: false,
        id: "1234567890",
        magicAttack: 7,
        magicDefence: 10,
        maxHitPoints: 12,
        name: "first",
        physicalAttack: 5,
        physicalDefence: 8,
        speed: 2,
        status: [],
        types: [ "1"]
    }),
    new Unit({
        currentHitPoints: 25,
        downed: false,
        id: "21283959",
        magicAttack: 3,
        magicDefence: 4,
        maxHitPoints: 25,
        name: "second",
        physicalAttack: 17,
        physicalDefence: 10,
        speed: 7,
        status: [],
        types: [ "2"]
    }),
    new Unit({
        currentHitPoints: 10,
        downed: true,
        id: "5729598234",
        magicAttack: 10,
        magicDefence: 18,
        maxHitPoints: 10,
        name: "third",
        physicalAttack: 12,
        physicalDefence: 22,
        speed: 3,
        status: [ "badStatus"],
        types: [ "3" ]
    })

]

export { units as default };