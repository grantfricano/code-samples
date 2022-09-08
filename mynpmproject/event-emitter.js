import EventEmitter from 'node:events'

let eventEmitter = new EventEmitter();

eventEmitter.on('event1', myEventListener);
eventEmitter.on('event1', myEventListener);
eventEmitter.on('event1', myEventListener);

function myEventListener(data){
    console.log('this is the event data' + data);
}

//console.log(eventEmitter.listenerCount('event1'));
//let listeners = eventEmitter.listenerCount('event1');
for (let i = 0; i < eventEmitter.listenerCount('event1'); i++) {
    eventEmitter.off('event1', myEventListener);
    console.log('count = ' + eventEmitter.listenerCount('event1'));
}

eventEmitter.emit('event1', 'this is event1');
