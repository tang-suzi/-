var ary = [1, 3, 4, 7, 6, 2];
// ary.sort(function(a,b){
//     return a-b;
// })
/*bubble: 冒泡排序
 *  @parameter
 *      ary:[array] 需要实现排序的数组
 *  @return
 *      [array]排序后的数组(升序)
 *  by team on 2018/7/12
 */
// function bubble(ary) {
//     //外层循环控制的是比较的轮数
//     for (var i = 0; i < ary.length - 1; i++) {
//         //里层循环控制每一轮比较的次数
//         for (var j = 0; j < ary.length - 1 - i; j++) {
//             //ary[j]: 当前本次拿出来这一项
//             //ary[j+1]: 当前项的后一项
//             if (ary[j] > ary[j + 1]) {
//                 //  当前这一项比后一项大我们让两者交换位置
//                 var temp = ary[j];
//                 ary[j] = ary[j + 1];
//                 ary[j + 1] = temp;
//             }
//         }
//     }
//     return ary
// }
// console.log(bubble(ary))


// 快速排序(二分法)(递归)
// 在原有数组中找出中间一项
// 把剩余项中的每一个值和中间项进行比较 比他小的放在左边(新数组) 比他大的放在右边(新数组)
// function quick(ary) {
//     // 如果传递进来的数组只有一项或者是空的 我们则不再继续取中间项拆分
//     if(ary.length<=1){
//         return ary;
//     }
//     //获取中间项的索引 把中间项的值获取到 在原有数组中删除中间项
//     var centerIndex = Math.floor(ary.length / 2),
//         centerValue = ary.splice(centerIndex, 1)[0]; // splice返回的是个数组 数组中包含了删除的那个内容
//     // 用剩余数组中的每一项和中间项进行比较 比中间项大的放在右边 比他小的放在左边
//     var aryLeft = [],
//         aryRight = [];
//     for (var i = 0; i < ary.length; i++) {
//         var cur = ary[i];
//         cur < centerValue ? aryLeft.push(cur) : aryRight.push(cur);
//     }
//     return quick(aryLeft).concat(centerValue, quick(aryRight))
// }
// console.log(quick(ary))

// 插入排序
function insert(ary) {
    //先取数组中的一项(一般取第一项)
    var handAry = []; //存储的是数组中取的那一项
    handAry.push(ary[0]);
    //依次循环取数组后面的项
    for (var i = 1; i < ary.length; i++) {
        var item = ary[i]; //新取数组中的项

        //用新取的项和现有项进行比较
        for (var j = handAry.length - 1; j >= 0; j--) {
            //handAry[j] 当前比较取得的项
            // 新取的项比当前比较的这一项大 就把新取的这一项放在它的后面
            if (item > handAry[j]) {
                handAry.splice(j + 1, 0, item);
                break;
            }
            if (j === 0) {
                // 新取的项是最小的 我们把新取的项放在最开始的位置
                handAry.unshift(item);
            }
        }
    }
    return handAry;
}
console.log(insert(ary))