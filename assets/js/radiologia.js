    //_*_*_*_*_*_*_*___*_*_*_//
    // radiologia.pop()        //  ERAN 5 Y CON POP SE BORRA ULTIMA
    // radiologia.shift()     //   Y CON SHIFT SE BORRA LA PRIMERA 
    //_*_*_*_*_*_*_*__*_*_//
        
const radiologia = [
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
    
    ];
    let texto = `
    
    <tr>
        <th>HORA</th>
        <th>ESPECIALISTA</th>
        <th>PACIENTE</th>
        <th>RUT</th>
        <th>PREVENSION</th>
    </tr>
    
    `
    for(i=0; i< radiologia.length ;i++){
        texto+= `
        
    <tr>
        <td>${radiologia[i].HORA}</td>
        <td>${radiologia[i].ESPECIALISTA}</td>
        <td>${radiologia[i].PACIENTE}</td>
        <td>${radiologia[i].RUT}</td>
        <td>${radiologia[i].PREVISION}</td>
    </tr>
        
        `
    };
//-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+-+-+-
//SEGUNDA TABLA PARA QUE SE NOTA QUE SACAMOS EL PRIMERO Y EL ULTIMO
const radiologia2 = [
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
    ];

    let text = `
    
    <tr>
        <th>HORA</th>
        <th>ESPECIALISTA</th>
        <th>PACIENTE</th>
        <th>RUT</th>
        <th>PREVENSION</th>
    </tr>
    
    `
    radiologia2.pop()
    radiologia2.shift()
    for(e=0; e< radiologia2.length ;e++){
        text+= `
        
    <tr>
        <td>${radiologia2[e].HORA}</td>
        <td>${radiologia2[e].ESPECIALISTA}</td>
        <td>${radiologia2[e].PACIENTE}</td>
        <td>${radiologia2[e].RUT}</td>
        <td>${radiologia2[e].PREVISION}</td>
    </tr>       
        `
    };
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+
document.getElementById("tabla_radiologia").innerHTML = texto;
document.getElementById("tabla_radiologia2").innerHTML = text;
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+
document.getElementById("titulo_tabla").innerHTML = ('TABLA EDITADA CON "POP" Y "SHIFT"')
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+
document.getElementById("ultima").innerHTML = (`.- Primer Atención : ${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION}`);
document.getElementById("primera").innerHTML = (`.- Ultima Atención : ${radiologia[radiologia.length-1].PACIENTE} - ${radiologia[radiologia.length-1].PREVISION}`)
//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-+-+-+-+
document.getElementById("subtitulo").innerHTML = ("Estadísticas del centro médico ñuñoa");
document.getElementById("numero_atendidos").innerHTML = (`la cantidad de antencio de radiologia : ${radiologia.length}`);
