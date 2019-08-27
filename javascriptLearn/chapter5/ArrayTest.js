function test1() {
    var test = [{ a: 2 }, { a: 1 }, { a: 3 }, { a: 5 }, { a: 6 }, { a: 4 }];
    test.sort(compare);
    console.info(test);
}

function compare(val1, val2) {
    if (val1.a > val2.a) {
        return 1;
    } else if (val1.a < val2.a) {
        return -1;
    } else {
        return 0;
    }
}

test1();