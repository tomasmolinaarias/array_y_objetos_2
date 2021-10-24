const pacientes = [
    {
        HORA: '11:00 A.M',
        ESPECIALISTA: 'IGNACIO SCHULZ',
        PACIENTE: 'FRANCISCA ROJAS',
        RUT: '9878782-1',
        PREVISION:'FONASA',
    },
    {
        HORA: '11:30 A.M',
        ESPECIALISTA: 'FEDERICO SUBERCASEAUX',
        PACIENTE: 'PAMELA ESTRADA',
        RUT: '15345241-3',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '15:00 P.M',
        ESPECIALISTA: 'FERNANDO WURTHZ',
        PACIENTE: 'ARMANDO LUNA',
        RUT: '16445345-9',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '15:30 P.M',
        ESPECIALISTA: 'ANA MARIA GODOY',
        PACIENTE: 'MANUEL GODOY',
        RUT: '17666419-0',
        PREVISION:'FONASA',
    },
    {
        HORA: '16:00 P.M',
        ESPECIALISTA: 'PATRICIA SUAZO',
        PACIENTE: 'RAMON ULLOA',
        RUT: '14989389-K',
        PREVISION:'FONASA',
    },
    {
        HORA: '8:00 A.M',
        ESPECIALISTA: 'MARIA PAZ ALTUZARRA ',
        PACIENTE: 'PAULA SANCHEZ',
        RUT: '15554774-5',
        PREVISION:'FONASA',
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
    {
        HORA: '8:30 A.M',
        ESPECIALISTA: 'ANDREA ZUÑIGA',
        PACIENTE: 'MARCELA RETAMAL',
        RUT: '11123425-6',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '11:00 A.M',
        ESPECIALISTA: 'MARIA PIA ZAÑARTU',
        PACIENTE: 'ANGEL MUÑOZ',
        RUT: '9878789-2',
        PREVISION:'ISAPRE',
    },
    {
        HORA: '11:30 A.M',
        ESPECIALISTA: 'SCARLETT WITTING',
        PACIENTE: 'MARIO KAST',
        RUT: '7998789-5',
        PREVISION:'FONASA',
    },
    {
        HORA: '13:00 P.M',
        ESPECIALISTA: 'FRANCISCO VON TEUBER',
        PACIENTE: 'KARIN FERNANDEZ',
        RUT: '18887662-K',
        PREVISION:'FONASA',
    },
    {
        HORA: '13:30 P.M',
        ESPECIALISTA: 'EDUARDO VIÑUELA',
        PACIENTE: 'HUGO SANCHEZ',
        RUT: '17665461-4',
        PREVISION:'FONASA',
    },
    {
        HORA: '14:00 P.M',
        ESPECIALISTA: 'RAQUEL VILLASECA',
        PACIENTE: 'ANA SEPULVEDA',
        RUT: '14441281-0',
        PREVISION:'ISAPRE',
    },  
    ];

    let texto = `

    <tr>
        <th>PACIENTES</th>
    </tr>
    
    `
    for(i=0; i< pacientes.length ;i++){
        texto+= `
        
    <tr>
        <td>${pacientes[i].PACIENTE}</td>
    </tr>
        
        `
    };
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+
    document.getElementById("tabla_paciente").innerHTML = texto;
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+
    