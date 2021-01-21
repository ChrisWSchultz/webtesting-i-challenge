module.exports = {
    success,
    fail,
    repair,
    get,
};

function success(item) {
    return { ...item,
        enhancement: item.enhancement >= 20 ? item.enhancement : item.enhancement + 1
    };
}

function fail(item) {
    let failedItem = item;

    if(item.enhancement < 15) {
        failedItem = { ...failedItem, durability: failedItem.durability - 5 }
    } else if(item.enhancement >= 15) {
        failedItem = { ...failedItem, durability: failedItem.durability - 10}

        if(item.enhancement > 16) {
            failedItem = { ...failedItem, enhancement: failedItem.enhancement - 1 }
        }
    }
    return failedItem;
}

function repair(item) {
    return { ...item, durability: 100 };
}

function get(item) {
    if(item.enhancement > 0) {
        return { ...item, name: `[+${item.enhancement}] ${item.name}` }
    } else {
        return { ...item };
    }
}
