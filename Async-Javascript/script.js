let stocks = {
    Fruits: ["mango", "stawberry", "grapes"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}
let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop closed"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]}`);
        await time(0)
        console.log("Start the production");
        await time(3000)
        console.log("cut the fruit");
        await time(2000)
        console.log('water and ice was added');
        await time(1000)
        console.log('machine started');
        await time(2000)
        console.log('toppings are being added');
        await time(1000)
        console.log('serving the ice-cream');
        await time(1000)
    }
    catch (error) {
        console.log("Customer left", error);
    }
    finally {
        console.log("Task Complete");
    }
}
kitchen()