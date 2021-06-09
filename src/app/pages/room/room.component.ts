import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeerService } from 'src/app/peer.service';
import { WebSocketService } from 'src/app/web-socket.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
roomName: string;
  currentStream: any;
listUser: Array<any> = []; 

constructor(private route: ActivatedRoute, private webSocketService: WebSocketService,
  private peerService: PeerService) {
this.roomName = (route.snapshot.paramMap.get('room')||'{}');
  }

  

ngOnInit(): void {
this.checkMediaDevices();
this.initPeer();
this.initSocket();
}

initPeer = () => {
const {peer} = this.peerService;
peer.on('open', (room:any) => {
const body = {
idPeer: room,
roomName: this.roomName
};

this.webSocketService.joinRoom(body);
});


peer.on('call', (callEnter:any) => {
callEnter.answer(this.currentStream);
callEnter.on('stream', (streamRemote:any) => {
this.addVideoUser(streamRemote);
});
}, (err:any) => {
console.log('*** ERROR *** Peer call ', err);
});
}

initSocket = () => {
this.webSocketService.cbEvent.subscribe(res => {
if (res.name === 'new-user') {
const {idPeer} = res.data;
this.sendCall(idPeer, this.currentStream);
}
})
}

checkMediaDevices = () => {
if (navigator && navigator.mediaDevices) {
navigator.mediaDevices.getUserMedia({
audio: false,
video: true
}).then(stream => {
this.currentStream = stream;
this.addVideoUser(stream);


}).catch(() => {
console.log('*** ERROR *** Not permissions');
});
} else {
console.log('*** ERROR *** Not media devices');
}
}

addVideoUser = (stream: any) => {
this.listUser.push(stream);
const unique = new Set(this.listUser);
this.listUser = [...unique];
}
//evento de llamada para que dos peer se puedan unir
sendCall = (idPeer:any, stream:any) => {
const newUserCall = this.peerService.peer.call(idPeer, stream);
if (!!newUserCall) {
newUserCall.on('stream', (userStream:any) => {
this.addVideoUser(userStream);
})
}
}

}