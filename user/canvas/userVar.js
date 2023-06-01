!function (){
    eggvm.memory.globalVar.canvas_2d = "data:image/png;base64,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5CG68HwJnyklESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCws4AAfWejQ7kiaYguPD+Up8WkBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgsQkCAvgjFSmMkC9GF55WeA8MSIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIHAwAgL0g3G+51mShOjC83vusA8SIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILAsAgL0ZenENnUseYguPE/wDCmRAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGdBQToOxstxRVLGqILz5fi6VAEAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKLEBCgL0LxgMZYshBdeH5AfTcNAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIHIyBAPxjnhc2yJCG68HxhHTUQAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLLIiBAX5ZO7KGOQw7Rhed76JVLCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDIIyBAz9OrmUoPKUQXnid9XpRNgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMDOAgL0nY2W9ooDDtGF50v7JCiMAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFFCAjQF6F4iGMcUIguPD/EHpuaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGDERCgH4xz1Vkqh+jC86rdMzgBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAssiIEBflk7ss45KIbrwfJ998XECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPIICNDz9GrHShccogvPdxR3AQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECR0lAgH6UuhkRCwrRhedH7LlwOwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQI7CwgQN/ZKN0V+wzRhefpOq5gAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQWISBAX4TiEo5xjyG68HwJe6kkAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQORkCAfjDOhzLLHkN04fmhdMmkBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgsi4AAfVk6UamOXYbowvNK/oYlQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCCPgAA9T6/uudIdQnTh+T3L+iABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAkdJQIB+lLq5zb1sEaILz49J/90mAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQI7CwjQdzY6MlcMQnTh+ZHprBshQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQGARAgL0RSgmGmMjRI8mmmcSla1UAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUFBOjViU1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhkEBOgZuqRGAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKguIECvTmwCAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMggIEDP0CU1EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEB1AQF6dWITECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAGAQF6hi6pkQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqCwjQqxObgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyCAjQM3RJjQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQXUCAXp3YBAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQQUCAnqFLaiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB6gIC9OrEJiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBDAIC9AxdUiMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUFBOjViU1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhkEBOgZuqRGAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKguIECvTmwCAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMggIEDP0CU1EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEB1AQF6dWITECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAGAQF6hi6pkQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqCwjQqxObgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyCAjQM3RJjQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQXUCAXp3YBAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQQUCAnqFLaiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB6gIC9OrEJiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBDAIC9AxdUiMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUFBOjViU1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhkEBOgZuqRGAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKguIECvTmwCAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMggIEDP0CU1EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEB1AQF6dWITECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAGAQF6hi6pkQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqCwjQqxObgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyCAjQM3RJjQQIECBAgAABAgQIECBwxP1DAAAIrUlEQVRAgAABAgQIECBAgAABAgQIECBQXUCAXp3YBAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQQUCAnqFLaiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB6gIC9OrEJiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBDAIC9AxdUiMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUFBOjViU1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhkEBOgZuqRGAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKguIECvTmwCAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMggIEDP0CU1EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEB1AQF6dWITECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAGAQF6hi6pkQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqCwjQqxObgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyCAjQM3RJjQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQXUCAXp3YBAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQQUCAnqFLaiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB6gIC9OrEJiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBDAIC9AxdUiMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUFBOjViU1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhkEBOgZuqRGAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKguIECvTmwCAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMggIEDP0CU1EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEB1AQF6dWITECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAGAQF6hi6pkQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqCwjQqxObgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyCAjQM3RJjQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQXUCAXp3YBAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQQUCAnqFLaiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB6gIC9OrEJiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBDAIC9AxdUiMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUFBOjViU1AgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAhkEBOgZuqRGAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEKguIECvTmwCAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMggIEDP0CU1EiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEB1AQF6dWITECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAGAQF6hi6pkQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgSqCwjQqxObgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyCAjQM3RJjQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQXUCAXp3YBAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQQUCAnqFLaiRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB6gIC9OrEJiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBDAIC9AxdUiMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIVBcQoFcnNgEBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBAQoGfokhoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoLqAAL06sQkIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIIOAAD1Dl9RIgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAtUF/h+lpCZBQ0pSbQAAAABJRU5ErkJggg==";
    eggvm.memory.globalVar.canvas_webgl = "data:image/png;base64,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";
}();