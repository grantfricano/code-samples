import EventEmitter from 'node:events'

let eventEmitter = new EventEmitter();



eventEmitter.on('event1', myEventListener);




function myEventListener(data){
    console.log('this is the event data' + data);
}

eventEmitter.emit('event1', 'this is event1');

eventEmitter.removeListener('event1', myEventListener);

eventEmitter.emit('event1', 'this is event1');

eventEmitter.emit('event1', 'this is event1');
eventEmitter.removeAllListeners('event1');