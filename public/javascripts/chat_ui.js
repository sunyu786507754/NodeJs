//处理特殊字符
function divEscapedContentElement(message){
    return $('<div></div>').text(message);
}
function divSystemContentElement(message) {
    return $('<div></div>').html('<i>'+message+'</i>');
}

function processUserInput(chatApp,socket){
    var message=$("#send-messages").val();
    var systemMessage;

    if(message.charAt(0)=='/'){
        systemMessage=chatApp.processCommand(message);
        if(systemMessage){
            $('#messages').append(divSystemContentElement(systemMessage));
        }
    }else{
        chatApp.sendMessage($('#room').text(),message);
        $('#messages').append(divEscapedContentElement(message));
        $('#messages').scrollTop($('#messages').prop('scrollHeight'));
    }
    $('#send-messages').val('');
}