export const formatCPF = async (cpf: string) => {

    const cleanedCPF = cpf.replace(/\D/g, '');
    const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    const formattedCPF = cleanedCPF.replace(cpfRegex, '$1.$2.$3-$4');

    return formattedCPF;
}
