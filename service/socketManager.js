const io = require('../bin/www').io;

module.exports = function(socket){
    console.log(socket.id);

    socket.on('disconnect', ()=>{
        console.log('user ', socket.id , 'disconnected')
    })
}