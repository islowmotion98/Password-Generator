const $symbol = document.getElementById('simbol');
const $lowercase = document.getElementById('lowercase');
const $uppercase = document.getElementById('uppercase');
const $numberss = document.getElementById('numberss');
const $othersSymbol = document.getElementById('others');
const $duplicate = document.getElementById('duplicate');
const $bodi = document.getElementById('bodi');

let totalCaracteres = [];
let senhaGerada = '';
let letrasMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numberss = ['1','2','3','4','5','6','7','8','9',];
let letrasMaiusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let simbolos = ['!','@','#','%','&'];
let ohersSimbolos = ['ç','"','~','^',';','?','/','*','+','-']
let linhasDaSenha = 0;

document.getElementById('gerarSenha').addEventListener('click', function(e){
    debugger
    e.defaultPrevented;
    totalCaracteres = [];
    linhasDaSenha = document.getElementById('linhas').value;
    console.log(linhasDaSenha);
    var LMa = $uppercase.checked;
    var Lmi = $lowercase.checked;
    var Nu = $numberss.checked;
    var Sim = $symbol.checked;
    var Oth = $othersSymbol.checked;
    var Dupl = $duplicate.checked; 

    let boxChekeds = [LMa,Lmi,Nu,Sim,Oth,Dupl];
    if (LMa == true){
        totalCaracteres = totalCaracteres.concat(letrasMaiusculas);
    }
    if (Lmi == true){
        totalCaracteres = totalCaracteres.concat(letrasMinusculas);
    }
    if (Nu == true){
        totalCaracteres = totalCaracteres.concat(numberss);
    }
    if (Sim == true){
        totalCaracteres =  totalCaracteres.concat(simbolos);
    }
    if (Oth == true){
        totalCaracteres = totalCaracteres.concat(ohersSimbolos);
    }
    if (Dupl == true){
        if ( LMa,Lmi,Nu,Sim,Oth == false){
            gerarSenhaNaoRepetida(linhasDaSenha)
            return;
        }
    }
    gerarSenha(linhasDaSenha);
})

function gerarSenha(linhas){
    senhaGerada = ''
    document.getElementById('faltaletra').classList.remove('show');
    for (let i = 0; i < linhasDaSenha; i++){
        let numeroRandom = Math.floor(Math.random() * totalCaracteres.length);
        senhaGerada = senhaGerada + totalCaracteres[numeroRandom];
    }
    if (senhaGerada.length < 7){
        $bodi.style.backgroundColor = "rgb(229, 31, 0)";
    } else if (senhaGerada < 11){
        $bodi.style.backgroundColor = "rgb(252, 218, 0)";
    } else if (senhaGerada >= 12){
        $bodi.style.backgroundColor = "rgb(75, 248, 0)";
    }
    document.getElementById('closed').classList.add('close');
    document.getElementById('changeName').innerHTML = senhaGerada;
}

function gerarSenhaNaoRepetida(linhas){
    senhaGerada = ''
    document.getElementById('faltaletra').classList.remove('show');
    if (linhas > totalCaracteres.length){
        var teste = totalCaracteres.length
        for (let x = 0 ; x < teste ; x++){
            let numeroRandom = Math.floor(Math.random() * totalCaracteres.length);
            senhaGerada = senhaGerada + totalCaracteres[numeroRandom];
            let excluir = totalCaracteres[numeroRandom];
            totalCaracteres = _.without(totalCaracteres, excluir);
            console.log(totalCaracteres)
            document.getElementById('faltaletra').classList.add('show');
            document.getElementById('closed').classList.add('close');
            document.getElementById('faltaletra').innerHTML = "Your password only have " + senhaGerada.length + " characters";
            document.getElementById('changeName').innerHTML = senhaGerada;
        }
        if (senhaGerada.length < 7){
            $bodi.style.backgroundColor = "rgb(229, 31, 0)";
        } else if (senhaGerada < 11){
            $bodi.style.backgroundColor = "rgb(252, 218, 0)";
        } else if (senhaGerada >= 12){
            $bodi.style.backgroundColor = "rgb(75, 248, 0)";
        }
    return;
    }

    for (let i = 0; i < linhasDaSenha; i++){
        let numeroRandom = Math.floor(Math.random() * totalCaracteres.length);
        senhaGerada = senhaGerada + totalCaracteres[numeroRandom];
    }
    if (senhaGerada.length < 7){
        $bodi.style.backgroundColor = "rgb(229, 31, 0)";
    } else if (senhaGerada < 11){
        $bodi.style.backgroundColor = "rgb(252, 218, 0)";
    } else if (senhaGerada >= 12){
        $bodi.style.backgroundColor = "rgb(75, 248, 0)";
    }
    document.getElementById('closed').classList.add('close');
    document.getElementById('changeName').innerHTML = senhaGerada;
}