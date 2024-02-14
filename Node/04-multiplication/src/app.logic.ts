
import fs from 'fs'

export const multiplicationTable = (base: number, limit: number, showTable: boolean) => {
    let outputMessage = '';
    const header = `
=================================
        Tabla del ${base}
=================================\n
`;

    for (let i = 1; i <= limit; i++) {
        outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    outputMessage = header + outputMessage;

    if (showTable) {
        console.log(outputMessage);
    }

    const outputPath = 'outputs';
    fs.mkdirSync(outputPath, { recursive:true })
    fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
    console.log('File created!');
}

