# CustomVideo

참조 :

https://medium.com/@daspinola/video-stream-with-node-js-and-html5-320b3191a6b6 - Streaming 


https://www.w3schools.com/tags/ref_av_dom.asp - Video elements


https://css-tricks.com/custom-controls-in-html5-video-full-screen/ - Full screen mode 

--------------

## 스트리밍 구현

Node.js의 기본 모듈인 **fileSystem**을 이용

`fs.createReadStream(path, {start, end})` 를 이용하여 파일 전체를 불러오는 형식이 아닌 chunk단위로 끊어서 스트리밍해오는 방식을 이용하고자 했다.  

`file.pipe(res)`를 이용하여 cutsom event를 구축한 것이 아닌, read & write를 연결하여 간단하게 해결하고자 함. 

fs의 streaming은 모든 행동이 eventEmitter로 발생된다고 하니, custom event로 어플리케이션의 목적에 맞게 여러 행동을 할 수 있도록 연습이 필요할 것이다.

##206 Header 데이터 전송
**참조** : https://developer.mozilla.org/ko/docs/Web/HTTP/Status/206

여러 chunk로 나뉘어진 데이터를 쪼개서 받기 위해 사용되었다. 

    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

header값으로 전송할때 chunk단위로 나뉘어진 range를 전송하게 되고, front에서는 전달된 range값에 따라 데이터를 받아오게 된다. 

