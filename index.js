function partidasRanqueadas (vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function nivel (vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias > 10 && vitorias < 21) {
       return "Bronze";
    } else if (vitorias > 20 && vitorias < 51) {
        return "Prata";
    }else if (vitorias > 50 && vitorias < 81) {
        return "Ouro";
    }else if (vitorias > 80 && vitorias < 91) {
        return "Diamante";
    }else if (vitorias > 90 && vitorias < 101) {
        return "Lendário";
    }else if (vitorias >= 101) {
        return "Imortal";
    }else {
        return "Digite os dados corretamente!";
    }
}

let saldo = partidasRanqueadas (200, 80);
let nivelRank = nivel(200);
console.log(partidasRanqueadas (200, 80));
console.log(nivel(200));
console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivelRank}`);
