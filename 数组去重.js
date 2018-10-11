var ary = [1, 1, 3, 2, 3, 2, 4, 2, 3, 1];
/*//1.双重for循环
 *for (var i = 0; i < ary.length - 1; i++) {
 *    //length-1: 最后一项的后面没有内容了 我们不需要再比较
 *    var cur = ary[i]; //当前遍历的这一项
 *    //把拿出的这一项和后面的每一项进行比较
 *    for (var j = i + 1; j < ary.length; j++) {
 *        //i+1: 把当前项和后面项比较,当前项索引是i 后一项索引是i+1
 *        //ary[j]: 作比较的那一项
 *        //解决数组塌陷 cur === ary[j] ? ary.splice(j,1) : j++;
 *        if (cur === ary[j]) {
 *            //本次做比较这一项和当前项相同 我们需要在原有数组中把做比较这一项删除掉(做比较这一项的索引是j)
 *            ary.splice(j, 1);
 *            //j--;解决数组塌陷
 *        }
 *
 *    }
 *}//数组塌陷问题: 我们使用splice删除数组中的某一项后 删除这一项后面的每一项索引都要向前进一位(在原有索引上减一) 此时如果我们i++ 循环操作的值累加了 我们通过最新i获取的元素不是紧挨删除这一项的元素 而是跳过这一项获取的元素
 *console.log(ary)
 */

/*2.indexof
* for(var i=0;i<ary.length;i++){
*     var cur = ary[i];//当前项
*     var curNextAry = ary.slice(i+1);//当前项后面的那些值以一个新数组返回, 我们需要比较的就是后面的这些项对应的新数组
*     if(curNextAry.indexOf(cur)>-1){
*         //后面项组成的数组中包含当前这一项(当前这一项是重复的) 我们把当前这一项删除掉即可
*         ary.splice(i,1)
*         i--;
*     }
* }
* console.log(ary)
*/

// 3.对象键值对处理
var obj = {};
for (var i = 0; i < ary.length; i++){
    var cur = ary[i];
    if(typeof obj[cur] !== 'undefined'){
        //对象中已经存在该属性 证明当前项是数组中的重复项
        //ary.splice(i,1); //使用splice会导致后面的索引向前进一位 如果后面又很多项 消耗性能很大
        //我们把最后一项拿过来 替换当前要删除的这一项 然后把最后一项删除
        ary[i] = ary[ary.length - 1];
        ary.length--
        i--;
        continue;
    }
    obj[cur] = cur;//=>obj[1]=1 {1:1}存储
}
console.log(ary)

//4. myUnique