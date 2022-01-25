const rockBtn = document.querySelector(".r_btn");
const scissorsBtn = document.querySelector(".s_btn");
const papperBtn = document.querySelector(".p_btn");
const resetBtn = document.querySelector(".reset_btn");
const rpsBtn = document.querySelectorAll(".rps");

const gameMe = document.querySelector(".game_me");
const gameCom = document.querySelector(".game_com");

const scoreMe = document.querySelector(".score_my");
const scoreCom = document.querySelector(".score_com");

const rps = [
  {
    name: "rock",
    tag: rockBtn,
    img: "./img/rock.jpg",
  },
  {
    name: "scissors",
    tag: scissorsBtn,
    img: "./img/scissors.jpg",
  },
  {
    name: "papper",
    tag: papperBtn,
    img: "./img/p.jpg",
  },
];

let gameState = false; // 게임 상태 true 게임 중, false 쉬는 중

// 게임 중 버튼 클릭 비활성화
const toggleDisableBtn = (state) => {
  if (state === false) {
    rpsBtn.forEach((item) => {
      item.setAttribute("disabled", true);
    });
    gameState = true;
  } else {
    rpsBtn.forEach((item) => {
      item.removeAttribute("disabled");
    });
    gameState = false;
  }
};

// 이긴 사람에게 +1점
const winPlayer = (who) => {
  who
    ? (scoreMe.innerText = parseInt(scoreMe.innerText) + 1)
    : (scoreCom.innerText = parseInt(scoreCom.innerText) + 1);
};

// 이긴 사람 비교
const comparePlayer = () => {
  const meName = document.querySelector(".game_me > img").name;
  const comName = document.querySelector(".game_com > img").name;
  if (
    (meName === "rock" && comName === "scissors") ||
    (meName === "scissors" && comName === "papper") ||
    (meName === "papper" && comName === "rock")
  ) {
    winPlayer(true);
  }

  if (
    (meName === "papper" && comName === "scissors") ||
    (meName === "rock" && comName === "papper") ||
    (meName === "scissors" && comName === "rock")
  )
    winPlayer(false);
};

// 랜덤으로 컴퓨터 화면에 출력
const displayCom = () => {
  let randNum = (Math.floor(Math.random() * 100) + 1) % 3;
  if (gameCom.children.length === 2) {
    gameCom.removeChild(gameCom.children[1]);
  }
  const img = document.createElement("img");
  img.setAttribute("src", rps[randNum].img);
  img.setAttribute("name", rps[randNum].name);
  gameCom.appendChild(img);
};

// rps 버튼 클릭
const btnClick = () => {
  //객체에 rps에 관련한 데이터를 저장 선택자, 이름, 이미지 경로
  rps.forEach((item, index) => {
    // 배열 내 객체에 각각 접근해서 클릭 이벤트 발생하면 아래 함수 실행
    item.tag.addEventListener("click", () => {
      if (gameMe.children.length === 2) {
        // 자식노드가 2개가 되면 게임이 진행 중임
        gameMe.removeChild(gameMe.children[1]);
      }
      const img = document.createElement("img");
      img.setAttribute("src", item.img);
      img.setAttribute("name", item.name);
      gameMe.appendChild(img);
      toggleDisableBtn(gameState);

      setTimeout(() => {
        // .5초 후에 실행할 함수들
        displayCom();
        comparePlayer();
        toggleDisableBtn(gameState);
      }, 500);
    });
  });
};

// 게임 초기화
const resetGame = () => {
  resetBtn.addEventListener("click", () => {
    if (gameMe.children.length === 2 && gameCom.children.length === 2) {
      scoreCom.innerText = 0;
      scoreMe.innerText = 0;
      gameMe.removeChild(gameMe.children[1]);
      gameCom.removeChild(gameCom.children[1]);
    }
    gameState = false;
  });
};

const gameStart = () => {
  btnClick();
  resetGame();
};

gameStart();
