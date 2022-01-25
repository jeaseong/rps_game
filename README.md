# 가위바위보 게임 만들기

## 흐름

사용자가 버튼을 클릭하면 게임이 시작한다.

사용자가 클릭한 버튼의 이미지가 중앙 화면이 디스플레이된다.

0.5초 후에 컴퓨터 화면에 랜덤한 rps가 디스플레이 된다.

승자를 가려낸다.

승자에게 스코어 1점을 부여한다.

reset 버튼을 누를 경우 게임 시작 상태로 되돌린다.

## 할 일

- 게임 상태를 진행중과 rest 상태로 나눈다.

- 버튼을 클릭할 경우 addEventListener를 실행해 게임을 시작한다.

  - 3개의 버튼에 전부 addEventListener를 주는 방법은 불필요한 반복이 너무 많다. 줄일 수 있는 방법 생각

- 사용자 화면에 자신이 클릭한 이미지가 나온다.

  - DOM요소를 조작하여 이미지를 삽입하고, 다른 버튼을 클릭할 때 기존에 있던 이미지를 삭제하고 새로운 이미지를 삽입한다.

- 0.5초 후에 컴퓨터에 디스플레이한다.

  - setTimeout을 이용해서 랜덤한 rps를 디스플레이. 어떻게 랜덤을 결정하는가? 자바스크립트 랜덤 난수는 얼마나 질이 좋은가?

- 승자 비교
  - 내가 낸걸 아는 방법과 컴퓨터가 랜덤으로 생성한 것이 무엇인지 분별이 가능한가?
  * r: 0, p: 1, s: 2; 를 활용
  - 조건문을 이용한 승자 판독
- 스코어 부여
  - DOM요소, innerText를 사용해서 score를 업데이트 한다.
- reset
  - score를 0 : 0으로, 디스플레이된 사진을 제거한다.

## 에러

- 가위바위보 게임이 끝나기 전에 버튼을 클릭할 수 없게 만든다.