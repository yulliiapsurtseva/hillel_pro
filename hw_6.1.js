const checkProbabilityTheory = (count) => {
    let oddNumAmount = 0;

    for (let i = count; i > 0; i--){
        const randomNum = Math.floor(Math.random() * (1000 - 100) + 100);
        const isOdd = randomNum % 2;
        if(isOdd) {oddNumAmount++};
    }

    const oddPercent =  ((oddNumAmount/ count) * 100).toFixed(2);
    const evenNumAmount =  count - oddNumAmount;
    const evenNumPercentage =  (100 - oddPercent).toFixed(2);


    console.log(`General amount of generated numbers: ${count}; Amount of odd numbers: ${oddNumAmount}; Amount of even numbers: ${evenNumAmount}; Percentage odd to even: ${oddPercent}%${evenNumPercentage}`);
};

checkProbabilityTheory(7);