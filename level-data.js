
const level1 = new Level({
    //Instance of background
    background : new Sprite({
        position: {
            x: 0,
            y: -720
        },
        width: 480,
        height: 1440,
        imgSrc: './img/Background/bigBGforHoppo.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false })
    //Instances of platforms with colliders in mid
    ,platforms : [new Sprite({
        position: {
            x: 300,
            y: 400
        },
        width: 100,
        height: 42,
        imgSrc: './img/Background/platform1.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 0,
            y: 280
        },
        width: 205,
        height: 53,
        imgSrc: './img/Background/sideplatform.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 200,
            y: 100
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 190,
            y: 600
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 00,
            y: 700
        },
        width: 480,
        height: 47,
        imgSrc: './img/Background/scene1ground.png',
        borderY: 1,
        borderWidth: 1
    }),new Sprite({
        position: {
            x: 165,
            y: 530 - 720
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 185,
            y: 100 - 720
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 290,
            y: 330 - 720
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 0,
            y: 220 - 720
        },
        width: 100,
        height: 42,
        imgSrc: './img/Background/platform1.png',
        borderY: 1,
        borderWidth: 1
    }),new Sprite({
        position: {
            x: 280,
            y: -30 - 720
        },
        width: 30,
        height: 171,
        imgSrc: './img/Background/highwallnormal.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true })]
})

const level2 = new Level({
    background : new Sprite({
        position: {
            x: 0,
            y: 0
        },
        width: 480,
        height: 720,
        imgSrc: './img/Background/bgreal-scene2new.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false
    }),
    platforms: [ new Sprite({
        position: {
            x: 165,
            y: 530
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 185,
            y: 100
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 290,
            y: 330
        },
        width: 105,
        height: 53,
        imgSrc: './img/Background/groundsmall.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 0,
            y: 220
        },
        width: 100,
        height: 42,
        imgSrc: './img/Background/platform1.png',
        borderY: 1,
        borderWidth: 1
    }),new Sprite({
        position: {
            x: 280,
            y: -30
        },
        width: 30,
        height: 171,
        imgSrc: './img/Background/highwallnormal.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true
    })]
})

const level3 = new Level({
    background : new Sprite({
        position: {
            x: 0,
            y: 0
        },
        width: 480,
        height: 720,
        imgSrc: './img/Background/bgreal-scene3.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false
    }),
     platforms : [new Sprite({
        position: {
            x: 110,
            y: 400
        },
        width: 48,
        height: 55,
        imgSrc: './img/Background/platform2redt.png',
        borderY : 1,
        borderWidth : 1
    }),new Sprite({
        position: {
            x: 385,
            y: 630
        },
        width: 48,
        height: 55,
        imgSrc: './img/Background/platform2redt.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 30,
            y: 90
        },
        width: 48,
        height: 55,
        imgSrc: './img/Background/platform2redt.png',
        borderY: 1,
        borderWidth: 1
    }),new Sprite({
        position: {
            x: 250,
            y: 150
        },
        width: 74,
        height: 37,
        imgSrc: './img/Background/newcloud.png',
        borderY : 160,
        borderWidth: 1
    }),new Sprite({
        position: {
            x: 305,
            y: 270
        },
        width: 30,
        height: 171,
        imgSrc: './img/Background/highwall.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true
    }),new Sprite({
        position: {
            x: 280,
            y: 638
        },
        width: 30,
        height: 171,
        imgSrc: './img/Background/highwall.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true
    })]
})



const beach = new Level({
    //Instance of background
    background : new Sprite({
        position: {
            x: 0,
            y: -840
        },
        width: 480,
        height: 1560,
        imgSrc: './img/Level-Assets/Background/level-beach-bg.png',
        borderY: 1,
        borderWidth: 1,
        isWall: false,
        isActive: false })
    //Instances of platforms with colliders in mid
    ,platforms : [new Sprite({
        position: {
            x: 0,
            y: 680
        },
        width: 480,
        height: 47,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-ground.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 300,
            y: 400
        },
        width: 112,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-wideblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }), new Sprite({
        position: {
            x: 90,
            y: 600
        },
        width: 48,
        height: 5,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-platform.png',
        borderY: 1,
        borderWidth: 1
    }), new Sprite({
        position: {
            x: 0,
            y: 210
        },
        width: 192,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-sideblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }),  new Sprite({
        position: {
            x: 0,
            y: 530 - 720
        },
        width: 192,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-sideblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }),new Sprite({
        position: {
            x: 200,
            y: 60
        },
        width: 48,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-smallblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }),new Sprite({
        position: {
            x: 360,
            y: 10
        },
        width: 16,
        height: 16,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-tinyblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }), new Sprite({
        position: {
            x: 165,
            y: -600
        },
        width: 48,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-smallblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }), new Sprite({
        position: {
            x: 290,
            y: 320 - 720
        },
        width: 48,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-smallblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }), new Sprite({
        position: {
            x: -30,
            y: -500
        },
        width: 112,
        height: 48,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-wideblock.png',
        borderY: 1,
        borderWidth: 1,
        isWall: true 
    }),new Sprite({
        position: {
            x: 280,
            y: -600
        },
        width: 16,
        height: 112,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-wall.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true 
    }),new Sprite({
        position: {
            x: 280,
            y: -815
        },
        width: 16,
        height: 112,
        imgSrc: './img/Level-Assets/Platforms/Beach/beach-wall.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true 
    }),new Sprite({
        position: {
            x: 20,
            y: -562
        },
        width: 90,
        height: 69,
        imgSrc: './img/Level-Assets/Props/beach/planktower.png',
        borderY : 1,
        borderWidth: 1,
        isWall: true 
    }),,new Sprite({
        position: {
            x: 58,
            y: -562 -92
        },
        width: 36,
        height: 92,
        imgSrc: './img/Level-Assets/Props/beach/flag1.png',
        borderY : 1,
        borderWidth: 1,
        isActive: false })]
})

/*
const backgroundScene4 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    width: 480,
    height: 720,
    imgSrc: './img/Background/bgreal-scene4.png'
})

const platformsScene4 = [new Sprite({
    position: {
        x: 30,
        y: 610
    },
    width: 74,
    height: 37,
    imgSrc: './img/Background/newcloud.png',
    borderY : 625,
    borderWidth : 1
}), new Sprite({
    position: {
        x: 220,
        y: 550
    },
    width: 45,
    height: 32,
    imgSrc: './img/Background/cloudsmall.png',
    borderY : 560,
    borderWidth: 1
}), new Sprite({
    position: {
        x: 100,
        y: 300
    },
    width: 45,
    height: 32,
    imgSrc: './img/Background/cloudsmall.png',
    borderY : 310,
    borderWidth: 1
}), new Sprite({
    position: {
        x: 230,
        y: 100
    },
    width: 74,
    height: 37,
    imgSrc: './img/Background/newcloud.png',
    borderY : 110,
    borderWidth: 1
}),new Sprite({
    position: {
        x: 345,
        y: -10
    },
    width: 30,
    height: 294,
    imgSrc: './img/Background/highwallscene52.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
}),new Sprite({
    position: {
        x: 345,
        y: 480
    },
    width: 30,
    height: 294,
    imgSrc: './img/Background/highwallscene52.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
})]

const backgroundScene5 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    width: 480,
    height: 720,
    imgSrc: './img/Background/bgreal-scene5.png'
})

const platformsScene5 = [new Sprite({
    position: {
        x: 250,
        y: 600
    },
    width: 48,
    height: 48,
    imgSrc: './img/Background/platformscene52.png',
    borderY : 1,
    borderWidth : 1
}), new Sprite({
    position: {
        x: 350,
        y: 400
    },
    width: 38,
    height: 45,
    imgSrc: './img/Background/platformscene523.png',
    borderY : 1,
    borderWidth: 1
}), new Sprite({
    position: {
        x: 350,
        y: 300
    },
    width: 38,
    height: 45,
    imgSrc: './img/Background/platformscene523.png',
    borderY : 1,
    borderWidth: 1
}), new Sprite({
    position: {
        x: 80,
        y: 210
    },
    width: 38,
    height: 45,
    imgSrc: './img/Background/platformscene523.png',
    borderY : 1,
    borderWidth: 1
}), new Sprite({
    position: {
        x: 230,
        y: 80
    },
    width: 258,
    height: 55,
    imgSrc: './img/Background/platformscene5groundwall.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
}),new Sprite({
    position: {
        x: 230,
        y: 250
    },
    width: 30,
    height: 224,
    imgSrc: './img/Background/highwallscene5.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
}),new Sprite({
    position: {
        x: 345,
        y: 700
    },
    width: 30,
    height: 294,
    imgSrc: './img/Background/highwallscene52.png',
    borderY : 1,
    borderWidth: 1,
    isWall: true
})]

const backgroundScene6 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    width: 480,
    height: 720,
    imgSrc: './img/Background/bgreal-scene6.png'
})

const platformsScene6 = [new Sprite({
    position: {
        x: 60,
        y: 550
    },
    width: 48,
    height: 48,
    imgSrc: './img/Background/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
}), new Sprite({
    position: {
        x: 350,
        y: 400
    },
    width: 48,
    height: 48,
    imgSrc: './img/Background/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
}), new Sprite({
    position: {
        x: 100,
        y: 300
    },
    width: 48,
    height: 48,
    imgSrc: './img/Background/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
}), new Sprite({
    position: {
        x: 230,
        y: 100
    },
    width: 48,
    height: 48,
    imgSrc: './img/Background/scene6rock1png.png',
    borderY : 1,
    borderWidth : 1
})]
*/