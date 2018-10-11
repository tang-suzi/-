var codeBox = document.getElementById('codeBox');

function queryCode() {
    var result = '',
    areaStr = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (var i = 0; i<4;i++){
        var ran  = Math.round(Math.random()*(areaStr.length-1));
        char = areaStr[ran];
        result += char;
    }
    codeBox.innerHTML = result;
}
queryCode();
codeBox.onclick = queryCode