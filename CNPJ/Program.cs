var CNPJ = "23419261000308";
var FormatarCNPJ = CNPJ.Insert(2, ".").Insert(6, ".").Insert(10, "/").Insert(15, "-");
var ultimosDigitosCNPJ = CNPJ.Substring(12, 2);
int[] multiplicadores = { 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 };
int[] multiplicadores2 = { 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 };

bool todosIguais = true;
char digitoUmCNPJ = CNPJ[0];
for (int i = 1; i < CNPJ.Length; i++)
{
    if (CNPJ[i] != digitoUmCNPJ)
    {
        todosIguais = false;
        break;
    }
}

//Verificação filial-matriz//
var VerificarFilial = CNPJ.Substring(8, 4);
bool matriz = VerificarFilial == "0001";


//Validar passo 1//
string[] ColetarNumBaseCNPJ = new string[13];
string[] NumerosBasesSeparados = new string[13];

for (int i = 1; i < 13; i++)
{
    ColetarNumBaseCNPJ[i - 1] = CNPJ.Substring(0, i);
    NumerosBasesSeparados[i - 1] = ColetarNumBaseCNPJ[i - 1].Remove(0, i - 1);
}

//digito verificador//
int SomaResultadoVerificador1 = 0;
for (int i = 0; i < 12; i++)
{
    int NumeroBase = int.Parse(NumerosBasesSeparados[i]);

    SomaResultadoVerificador1 += NumeroBase * multiplicadores[i];
}

int DivisaoResultado1 = SomaResultadoVerificador1 / 11;
int Resto = SomaResultadoVerificador1 - (11 * DivisaoResultado1);
string primeiroDigito = (Resto == 0 || Resto == 1) ? "0" : (11 - Resto).ToString();
NumerosBasesSeparados[12] = primeiroDigito;


//Segunda verificao//
int SomaResultadoVerificador2 = 0;
for (int i = 0; i < 13; i++)
{
    int NumeroBase = int.Parse(NumerosBasesSeparados[i]);
    SomaResultadoVerificador2 += NumeroBase * multiplicadores2[i];
}

int Resto2 = SomaResultadoVerificador2 % 11;
string segundoDigito = (Resto2 == 0 || Resto2 == 1) ? "0" : (11 - Resto2).ToString();

string digitoVerificador = primeiroDigito + segundoDigito;


if ((digitoVerificador != ultimosDigitosCNPJ) || todosIguais == true)
{
    Console.WriteLine("O CNPJ informado é inválido.");
}
else if ((digitoVerificador == ultimosDigitosCNPJ) && (matriz == true))
{
    Console.WriteLine("O CNPJ informado é válido e é uma Matriz");
}
else if ((digitoVerificador == ultimosDigitosCNPJ) && (matriz == false))
{
    Console.WriteLine("O CNPJ informado é válido e é uma Filial");
}

Console.ReadKey();