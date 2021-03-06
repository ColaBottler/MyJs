var number = Math.floor(Math.random() * 6) + 1;
var guess, diff, str, judge, bingo = 0;

function Guess() {
    guess = prompt("猜猜骰子是几点？");
    if (guess == null) {
        bingo = 2;
        return;
    }
    diff = Math.abs(number - guess);
    judge = (guess < 7 && guess > 0 && Number.isInteger(guess * 1));

    if (!judge) {
        alert("WRONG NUMBER!");
        Guess();
        return;
    }

    console.info(number);
    console.info(guess);
    console.info(diff);
    console.info(judge);

    if (guess < number) {
        if (diff == 1)
            str = "猜小了点";
        else
            str = "猜的太小了点";
    }
    else if (guess > number) {
        if (diff == 1)
            str = "猜大了点";
        else
            str = "猜得太大了点";
    }
    else {
        str = "恭喜你猜对了!";
        bingo = 1;
        document.write("<img src='../img/骰子/点数" + number + ".jpg'>");
    }
    document.getElementById("message").innerHTML = str;
}

function Main() {
    for (var i = 0; i < 2 && bingo == 0; i++) {
        Guess();
    }
    if (bingo == 2)
        document.writeln("您已退出游戏");
}
Main();
bingo = 0;