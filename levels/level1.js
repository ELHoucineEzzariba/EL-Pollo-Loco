const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Endboss(),
    ],
    [
        new Cloud(),
        new Cloud(),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -999),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -999),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -999),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -999),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 999),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 999),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 999),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 999),

        new BackgroundObject('img/5_background/layers/air.png', 999*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 999*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 999*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 999*2),
        new BackgroundObject('img/5_background/layers/air.png', 999*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 999*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 999*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 999*3),
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
    ],
);