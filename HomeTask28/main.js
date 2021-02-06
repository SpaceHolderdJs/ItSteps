// Case 1
function Case1() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('first'));
        }, 1000);
    }).then(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('second'));
            }, 1000);
        }).then(() => {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(console.log('third'))
                }, 1000)
            })
        })
    })

}

Case1();

//Case 2 


function Case2() {
    const promises = [
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('first'))
            }, 1000)
        }),

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('second'))
            }, 1000)
        }),

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('third'))
            }, 1000)
        })
    ];

    Promise.race(promises);
}

Case2();