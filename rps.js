let usercount = 0;
let comcount = 0;
const choices = document.querySelectorAll(".choice");
const accessmsg=document.querySelector("#playgame");
const accessusercount=document.querySelector("#user-count");
const accesscompcount=document.querySelector("#comp-count");
const showWinner = (userWin,userid,compid) => {
    if (userWin) {
        accessmsg.innerText=`you won! ${userid} beats ${compid}`;
        accessmsg.style.backgroundColor="green";
        usercount++;
        accessusercount.innerText=usercount;
    } else {
        accessmsg.innerText=` you lose ${compid} beats ${userid}`;
        accessmsg.style.backgroundColor = "brown";
        comcount++;
        accesscompcount.innerText=comcount;
    }
};

const computerid = () => {
    const options = ["rock", "paper", "scissor"];
    const randchoice = Math.floor(Math.random() * 3);
    return options[randchoice];
};

const gamedraw = () => {
    accessmsg.innerText="Game Was Draw";
    accessmsg.style.backgroundColor = "red";
};

const playgame = (userid) => {
    console.log(`user choice is ${userid}`);
    const compid = computerid();
    console.log(`computer id is ${compid}`);
    if (userid === compid) {
        gamedraw();
    } else {
        let userWin = false;

        if (
            (userid === "rock" && compid === "scissor") ||
            (userid === "paper" && compid === "rock") ||
            (userid === "scissor" && compid === "paper")
        ) {
            userWin = true;
        }

        showWinner(userWin,userid,compid);
    }
};

choices.forEach((iterator) => {
    iterator.addEventListener("click", () => {
        const userid = iterator.getAttribute("id");
        playgame(userid);
    });
});
