var codeBox = document.getElementById('codeBox');
        function queryCode() {
            var result = '',
                areaStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRISUVWXYZ';
            for (var i = 0; i < 4; i++) {
                var ran = Math.round(Math.random() * 61),
                    char = areaStr[ran];
                // 验证一下新获取的char字符是否已经在result中存在了 若果存在了我们不存储 重新再获取一遍 反之才累加到result中
                if(result.indexOf(char)>-1){
                    i--;
                    continue;
                }
                result += char;
            }
            codeBox.innerHTML = result;
        }
        queryCode();
        codeBox.onclick = queryCode;