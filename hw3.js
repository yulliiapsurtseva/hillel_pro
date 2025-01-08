const pow = (x,y) => {
    if (y >= 1) {
        let n = 1;
        do {
        n *= x;
        y--;
       }
        while (y > 0);
        return n;
    } else {
        return 'Please input "y" more than 1';
    }

}

console.log(pow(2, 8));