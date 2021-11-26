var countConsistentStrings = function (allowed, words) {
    let dic = allowed.split('');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let str = words[i].split('');
        let flag = 1;
        for (let j = 0; j < str.length; j++) {
            if (!dic.includes(str[j])) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            count++;
        }
    }
    return count;
};
//三重循环，时间空间效率较低



// const allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"];
// const allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];
const allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"];


console.log(countConsistentStrings(allowed,words));