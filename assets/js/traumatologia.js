
const traumatologia= [
    {
        HORA: '8:00 A.M',
        ESPECIALISTA: 'MARIA PAZ ALTUZARRA ',
        PACIENTE: 'PAULA SANCHEZ',
        RUT: '15554774-5',
        PREVISION:'FONASA',
    },
    {
        HORA: '9:00 A.M',
        ESPECIALISTA: 'RENE POBLETE',
        PACIENTE: 'ANA GELLONA',
        RUT: '13123329-7',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '9:30 A.M',
        ESPECIALISTA: 'MARIA SOLAR',
        PACIENTE: 'RAMIRO ANDRADE',
        RUT: '12221451-K',
        PREVISION:'FONASA',
    },
    {
        HORA: '10:00 A.M',
        ESPECIALISTA: 'RAUL LOYOLA',
        PACIENTE: 'CARMEN ISLA',
        RUT: '10112348-3',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '10:00 A.M',
        ESPECIALISTA: 'RAUL ARAYA',
        PACIENTE: 'ANGÉLICA NAVAS',
        RUT: '15444147-9',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '10:30 A.M',
        ESPECIALISTA: 'ANTONIO LARENAS',
        PACIENTE: 'PABLO LOAYZA',
        RUT: '13453234-1',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '10:30 A.M',
        ESPECIALISTA: 'MARIA ARRIAGADA',
        PACIENTE: 'ANA KLAPP',
        RUT: '17879423-9',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '11:00 A.M',
        ESPECIALISTA: 'ALEJANDRO BADILLA',
        PACIENTE: 'FELIPE MARDONES',
        RUT: '1547423-6',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '11:30 A.M',
        ESPECIALISTA: 'CECILIA BUDNIK',
        PACIENTE: 'DIEGO MARRE',
        RUT: '16554741-K',
        PREVISION:'FONASA',
    },
    {
        HORA: '12:00 P.M',
        ESPECIALISTA: 'MATIAS ARAVENA',
        PACIENTE: 'SUSANA POBLETE',
        RUT: '14345656-6',
        PREVISION:'FONASA',
    },
    {
        HORA: '12:00 P.M',
        ESPECIALISTA: 'ARTURO CAVAGNARO',
        PACIENTE: 'ECILIA MENDEZ',
        RUT: '9747535-8',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '12:30 A.M',
        ESPECIALISTA: 'ANDRES KANACRI',
        PACIENTE: 'MARCIAL SUAZO',
        RUT: '11254785-5',
        PREVISION:'ISAPRE',
    },
    ];
// no se me ocurrio como agregar los datos con metodos enotonces lo agregre directo nomas
//-+-+-+-+---+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
    let texto = `
    
    <tr>
        <th>HORA</th>
        <th>ESPECIALISTA</th>
        <th>PACIENTE</th>
        <th>RUT</th>
        <th>PREVENSION</th>
    </tr>
    
    `
    for(i=0; i< traumatologia.length ;i++){
        texto+= `
        
    <tr>
        <td>${traumatologia[i].HORA}</td>
        <td>${traumatologia[i].ESPECIALISTA}</td>
        <td>${traumatologia[i].PACIENTE}</td>
        <td>${traumatologia[i].RUT}</td>
        <td>${traumatologia[i].PREVISION}</td>
    </tr>
        
       `
    };
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+

const paciente_fonasa = traumatologia.filter(function(traumatologia){
    return traumatologia.PREVISION ==='FONASA';
    });
    // console.log(paciente_fonasa.length)
//-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+
const paciente_isapre = traumatologia.filter(function(traumatologia){
    return traumatologia.PREVISION ==='ISAPRE';
    });
    // console.log(paciente_isapre.length)
//-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+
document.getElementById("tabla_traumatologia").innerHTML = texto;
//-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+
document.getElementById("isapre").innerHTML = (`.- El numeron de paciente que tiene isapre son : ${paciente_isapre.length}`)
document.getElementById("fonasa").innerHTML = (`.- El numeros de paciente que tiene fonasa son : ${paciente_fonasa.length}`)
//-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+
document.getElementById("ultima").innerHTML = (`.- Primer Atención : ${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION}`);
document.getElementById("primera").innerHTML = (`.- Ultima Atención : ${traumatologia[6].PACIENTE} - ${traumatologia[6].PREVISION}`)
//-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+
document.getElementById("subtitulo").innerHTML = ("Estadísticas del centro médico ñuñoa");
document.getElementById("numero_atendidos").innerHTML = (`la cantidad de antencio de traumatologia : ${traumatologia.length}`);
