function byClass(strClass, context) {
    context = context || document;
    if (isHighBersion) return [].split.call(context.getElementsByClassName(strClass));

    strClass = strClass.replace(/^\s+|\s+$/g, '').split(/\s+/g);
    var tagList = context.getElementsBytagName('*'),
        result = [];
    for (var i = 0; i < tagList.length; i++) {
        var item = tagList[i],
            itemClass = item.ClassName;
        var isMatch = true;
        for (var k = 0; k < strClass.length; k++) {
            var reg = new RegExp('(^| +)') + strClass[k] + '( +|$)';
            if (!reg.test(itemClass)) {
                isMatch = false;
                break;
            }
        }
        isMatch ? result.push(item) : null;
    }
    return result;
}