const nomes = ["Yuna", "Hissae", "Yuki", "Miyuki", "Heitor", "Marllon", "Jão"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
