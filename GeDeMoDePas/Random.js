const Random = {
    /**
     * Retourne un nombre aleatoire entre min et max
     * @param {number} min nombre minimum (inclus)
     * @param {number} max nombre maximum (inclus)
     */
    nombre: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    },

    /**
     * Retourne une chaine de charactere de la longueur spécifiée tout en incluant des charactères spéciaux
     * @param {number} length nombre de charactere
     * @param {} param1 specifie quel types de charactère à inclure
     */
    string: (
    length,
    { lower = true, upper = false, symbol = false, number = false } = {
        lower: true,
        upper: false,
        symbol: false,
        number: false
    }
    ) => {
    const _chars = "abcdfghijklmnopqrstuvwxyz";
    const _upper = "ABCDFGHIJKLMNOPQRSTUVWXYZ";
    const _symbols = "!#$%&@[]";
    const _numbers = "0123456789";

    let chars = (
        (lower ? _chars : "") +
        (upper ? _upper : "") +
        (symbol ? _symbols : "") +
        (number ? _numbers : "")
    ).split("");
    let str = "";

    for (let i = 0; i < length; i++) {
        str += Random.element(chars);
    }

    return str;
    },

    /**
     * retourne un element aléatoire appartenant à la liste
     * @param {ArrayLike<any>} list
     * @returns {any|undefined} undefined si la liste n'est pas defini ou est vide
     */
    element: (list) => {
    return list?.[Random.nombre(0, list.length - 1)];
    }
};