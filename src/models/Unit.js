class Unit {
    currentHitPoints
    downed
    id
    magicAttack
    magicDefence
    maxHitPoints
    name
    physicalAttack
    physicalDefence
    speed
    status
    types
    // constructor(props) {
    //     this = {
    //         ...this,
    //         ...props
    //     };

    // }
    constructor({ currentHitPoints,
            downed,
            id,
            magicAttack,
            magicDefence,
            maxHitPoints,
            name,
            physicalAttack,
            physicalDefence,
            speed,
            status,
            types
        }) {
        this.currentHitPoints = currentHitPoints;
        this.downed = downed;
        this.id = id;
        this.magicAttack = magicAttack;
        this.magicDefence = magicDefence;
        this.maxHitPoints = maxHitPoints;
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalDefence = physicalDefence;
        this.speed = speed;
        this.status = status;
        this.types = types;
        
    }

    adjustHitpoints = (adjustValue) => {
        this.currentHitPoints = Math.min(adjustValue + this.currentHitPoints, this.maxHitPoints);

        if (this.currentHitPoints <= 0){
            this.down();
        }
    }
    down = () => {
        this.downed = true;
    }

}

export { Unit as default };