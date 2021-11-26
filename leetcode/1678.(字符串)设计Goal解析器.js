var interpret = function(command) {
    let ans = "";
    for(let i=0;i<command.length;){
        if(command[i] == "G"){
            ans+="G";
            i++;
        }
        else{
            if(command[i+1] == ")"){
                ans+="o"
                i+=2;
            }
            else{
                ans+="al";
                i+=4;
            }
        }
    }
    return ans;
};

//改用正则替换可以加快速度
//command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');

command = "G()(al)";
console.log(interpret(command));
