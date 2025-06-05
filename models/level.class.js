class Level{
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    // Extend the level length to accommodate enemies spawning
    // at positions up to around 3800px.
    level_end_x = 4000;

    constructor(enemies, clouds, backgroundObjects, coins, bottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}