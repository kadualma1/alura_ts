import { formataData, formataMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time")

if (elementoDataAcesso) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formataData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo () : void {
    if (elementoSaldo) {
        elementoSaldo.textContent = formataMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar () {
        renderizarSaldo();
    }
}

export default SaldoComponent;