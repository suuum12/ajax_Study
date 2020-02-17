document.getElementById('text').focus();
document.getElementById('button').addEventListener('click',(e)=> {
    e.preventDefault(); //현재 진행중이던 이벤트 다 멈춤
    const text = document.getElementById('text');
    let newdiv = document.createElement('div'); //태그 만드는 메서드
    newdiv.classList.add('newdiv1'); //클래스 이름을 만들어주는 코드
    let divs = document.getElementById('divs');
    newdiv.textContent = text.value; 
    divs.appendChild(newdiv); //만든 것들을 어디에 넣어줄지, 자식 태그 생성

    let xhr = new XMLHttpRequest();
    xhr.onload = () =>{ //페이지 로딩 후 실행
        if(xhr.status === 200){
            location.reload();
        }else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST','/content'); //content 경로로 post요청을 보냄
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({content:text.value})); //보낼 데이터를 json으로 가공하는 작업
    //이후 서버에서는 formData에서 보낸 것처럼 req.body.content로 접근이 가능해짐
    text.value = "";
    text.focus();
});
document.getElementById('delete').addEventListener('click', (e) => {
    e.preventDefault();
    let divs = document.getElementById('divs');
    document.getElementsByTagName('body')[0].removeChild(divs); 
    //[0], 중복된 값을 가져올 수 있는 경우들
    let newdiv = document.createElement('div');
    newdiv.id = "divs";
    document.getElementsByTagName('body')[0].appendChild(newdiv);

    let xhr = new XMLHttpRequest();
    xhr.onload = () =>{ //페이지 로딩 후 실행
        if(xhr.status === 200){
            location.reload();
        }else{
            console.error(xhr.responseText);
        }
    };

    xhr.open('DELETE', '/content');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    text.focus();
});