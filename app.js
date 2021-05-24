function submitPrefix (prefix, text, newtextbox){
    var split = text.split("\n")
    for(i = 0; i < split.length; i++){
        const item = split[i]
        split[i] = prefix + item
    }
    newtextbox.value = split.join("\n")
}

function submitSuffix (suffix, text, newtextbox){
    var split = text.split("\n")
    for(i = 0; i < split.length; i++){
        const item = split[i]
        split[i] = item + suffix
    }
    newtextbox.value = split.join("\n")
}

function submitPrefixSuffix (prefix, suffix, text, newtextbox){
    var split = text.split("\n")
    for(i = 0; i < split.length; i++){
        const item = split[i]
        split[i] = prefix + item + suffix
    }
    newtextbox.value = split.join("\n")
}

function submitBreak (thebreak, text, newtextbox){
    var res;
    if(!thebreak){
        res = "Specify a word break!"
    } else{
    var split = text.split(thebreak)
    res = split.join("\n")
    }
    newtextbox.value = res;
}

function copyNewText (newtextbox){
    newtextbox.select();
    newtextbox.setSelectionRange(0, 99999);
    document.execCommand("copy");
}