const express = require('express');
const path = require('path');
const app = express();

app.set("port", process.env.PORT || 5000);


app.use(express.static(path.join(__dirname, "../build")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기중..");
  });


  /**
   * 
   * 자동배포는 제가 직접해드리면 공부도안되고 너무 기니까
   * 간단하게 방향성만 제시해드릴게요
   * 
   * 아마 자동배포 치시면
   * aws, travis나 jenkins, github actions, circle 머시기 막 이런거위주로 나올텐데
   * 
   * travis나 jenkins는 설치형인데[
   * ec2에 설치하면, 배포할때 ec2가 뻗어버리더라구요.
   * 해결방법은
   * 1. ec2에서 돈주고 성능업글하거나
   * 2. jenkins용 서버를 별도로 두고, ssh로 접근하도록 하는건데
   * 1번은 돈들고 2번은 너무 번거롭죠
   * 
   * 그래서 저는 보통 github actions를 사용합니다
   * 
   * 물론 이 모든건 취향이고
   * 다른방법ㅇ ㅣ있을수도있지만
   * 제가 찾아봤을땐 그랬어요
   * 한번 찾아보시고 편한방법으로 직접 해보시면 될거에요
   * 
   * 어떤식으로 하면되냐
   * 
   * git에 push 했을때
   * 그걸 감지해서, ssh를 이용하여, 또는 ec2서버에 설치해둔 서비스를 이용하여
   * ec2에 접속해서
   * 
   * tetris프로젝트를
   * git clone으로 받아와서, npm install -> 그곳에서 build를 하고
   * 생성된 build 폴더를 가지고
   * 아까 말씀하신대로
   * 지금 이미 배포되어있는 build폴더를 덮어씌우시면됩니다.


   * package.json파일ㅇ리 중복만 안되면 되겠네요?아하
   * 그래서 이 react-tetris 폴더 안에서만 안하면됩ㄴ디ㅏ.
   * 이 폴더밖에서 다른폴더를 만든다음에, 거기안에서 clone받고 install하고 build하고 나온 build폴더를
   * react-tetris 폴더 안에 있는 build폴더에 덮어씌우면 문제가있나영?아 그럼 
   * 클론할때마다 다른폴더를 만드는건가여??
   * 그래도되고
   * 그게
   * 사용하실 툴에ㄸ ㅏ라 달라요
   * github-actions는 설치형이라
   * 청므에 github-actions를 설치하신 위치에서 계속작동할거구요
   * 젠킨스의 경우에는.. 설치형이지만 설치를 못하니까
   * 중간에 별도서버를 두고 매번 ssh를 연결한다하면
   * 
   * 말씀하신대로 매번 다른폴더를 만드는 명령어를 쳐야겠죠아하
   * 
   * 이해안됐거나 추가질문 음 5432ㅈ1.ㅓ5ㅓ저 ㅓ서버는 제가 ec2 터미널 에서 종료하지않는이상 계속 켜져있는?
   * 
   * 옙
   * 1.ec2가 아예 꺼지거나
   * 터미널에서 ps -ef | grep nodemon이
   * 현재 실행중인 프로세스 중에서 nodemon을 골라서 보여주는 명령어인데
   * 지금 보시면 서버가 떠있죵?네 저친구 를 2. 명령어로 직접끄는게 아닌이상
   * 안꺼질겁니다 음 그럼 수정한거를 다시 뿌릴때 껐다가 해야되나여? 어 아뇨
   * 
   * nodemon은 변경된 파일을 자동으로 감지해서 앚애ㅔ사ㅣㅇ가아아 한번 보시져 여기 밑에 터미널
   * 
   * 타임
   * 
   * 숙제
   * 1. build폴더 내 파일이 변경되면 nodemon이 재시작할 수 있도록
   * 2. auto deploy를 설정하여 git push 시 별도 작업 없이 build 결과물이 반영될 수 있도록
   * 
   */