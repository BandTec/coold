       var exibiu_graficoTemp = false;
        var exibiu_grafico = false;
    
       // verificar_autenticacao();
    
    
        // só mexer se quiser alterar o tempo de atualização
        // ou se souber o que está fazendo!
        function atualizarGrafico() {
            obterDadosGrafico();
            setTimeout(atualizarGrafico, 10000);
        }
    
        function configurarGrafico() {
        var configuracoes = {
            responsive: true,
            animation: exibiu_grafico ? false : {duration: 1500},
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Monitoramento de temperatura no caminhão'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 40,
                        max: 100
                    },
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-umidade',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        };

        exibiu_grafico = true;

        return configuracoes;
    }

        // altere aqui as configurações do gráfico
        // (tamanhos, cores, textos, etc)
        function configurarGraficoTemp() {
    var configuracoes = {
        responsive: true,
        animation: exibiu_graficoTemp ? false : { duration: 1500 },
        hoverMode: 'index',
        stacked: false,
        title: {
            display: true,
            text: 'Histórico recente de temperatura'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: -10,
                    max: 30
                },
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: 'left',
                id: 'y-temperatura',
            }
            ],
        }
    };

    exibiu_graficoTemp = true;

    return configuracoes;
}
        // altere aqui como os dados serão exibidos
        // e como são recuperados do BackEnd
        function obterDadosGrafico() {
    
            // neste JSON tem que ser 'labels', 'datasets' etc, 
            // porque é o padrão do Chart.js
            var dados = {
                labels: [],
                datasets: [
                    
                    {
                        yAxisID: 'y-umidade',
                        label: 'Umidade',
                        borderColor:["#394eff"],
                        backgroundColor: ["#394eff"],
                        fill: false,
                        data: []
                    }
                ]
            };


    var dadostemp = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: '#C44848',
                backgroundColor: '#C44848',
                fill: false,
                data: []
            }
        ]
    };
    
            fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {

    
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
    
                        resposta.reverse();

                        for (i = 0; i < resposta.length; i++) {
                            var registro = resposta[i];
                        
                            // aqui, após 'registro.' use os nomes 
                            // dos atributos que vem no JSON 
                            // que gerou na consulta ao banco de dados
                            console.log(registro);
                            
                            dados.labels.push(registro.momento_grafico);
                            dados.datasets[0].data.push(registro.umidade);
                            var umid_atual = registro.umidade;
                            if(umid_atual > 10){

                            }
                            

                            dadostemp.labels.push(registro.momento_grafico);
                            dadostemp.datasets[0].data.push(registro.temperatura);
                            var temp_atual = registro.temperatura;
                            if(temp_atual > 10){
                                imgs.innerHTML = `<img src="imgs/green.png" alt="Estado: Bom">`;
                            } else if (temp_atual < 10) {
                                imgs.innerHTML = `<img src="imgs/red.png" alt="Estado: Critico">`;
                            }
                         
                        }
                        console.log(JSON.stringify(dados));
    
                        //div_aguarde.style.display = 'none';
    
                        plotarGrafico(dados,dadostemp);
                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
                .catch(function (error) {
                    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
                });
    
        }
    
        // só altere aqui se souber o que está fazendo!
        function plotarGrafico(dados, dadostemp) {
            console.log('iniciando plotagem do gráfico...');
    
            var ctx = canvas_grafico.getContext('2d');
            window.grafico_linha = Chart.Line(ctx, {
                data: dados,
                options: configurarGrafico()
            });

            var ctx1 = canvas_temp.getContext('2d');
            window.grafico_linha = Chart.Line(ctx1, {
                data: dadostemp,
                options: configurarGraficoTemp()
    });
        }