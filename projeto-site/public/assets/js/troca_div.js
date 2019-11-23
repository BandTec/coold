  //Caminhão 1
  
  function caminhao1() {
      
      //Temperatura em Tempo Real
        document.getElementById("temperatura_real").innerHTML = `<div class="grid">
                  <div class="grid-body d-flex flex-column h-100">
                    <div class="wrapper">
                      <div class="d-flex justify-content-between">
                        <div class="split-header">
                          <p class="card-title">Temperatura</p>
                        </div>
                      </div>
                    </div>
                    <div class="grafico" id="div_grafico"> COLOCAR TERMOMETRO AQUI</div>
                  </div>
                </div>`;
  
      //Umidade em Tempo Real
      document.getElementById("umidade_real").innerHTML = `<div class="grid">
                  <div class="grid-body">
                    <p class="card-title">Umidade</p>
                    <div id="radial-chart2">COLOCAR GOTAA AQUI</div>
                  </div>
                </div>`;
  
      //Grafico Temperatura
      document.getElementById("graf_temp").innerHTML = `
      <canvas id="canvas_temp"></canvas>
   `;
  
      //Grafico Humildade
      document.getElementById("graf_umid").innerHTML = `<canvas id="canvas_grafico"></canvas>`;
  }



//Caminhão 2
  function caminhao2() {
    
    //Temperatura em Tempo Real
      document.getElementById("temperatura_real").innerHTML = `<div class="grid">
                <div class="grid-body d-flex flex-column h-100">
                  <div class="wrapper">
                    <div class="d-flex justify-content-between">
                      <div class="split-header">
                        <p class="card-title">Temperatura</p>
                      </div>
                    </div>
                  </div>
                  <div class="grafico" id="div_grafico"> COLOCAR TERMOMETROOO AQUI</div>
                </div>
              </div>`;

    //Umidade em Tempo Real
    document.getElementById("umidade_real").innerHTML = `<div class="grid">
                <div class="grid-body">
                  <p class="card-title">Umidade</p>
                  <div id="radial-chart2">COLOCAR GOTAAA AQUI</div>
                </div>
              </div>`;

    //Grafico Temperatura
    document.getElementById("graf_temp").innerHTML = `<canvas id="canvas_temp"></canvas>`;

    //Grafico Humildade
    document.getElementById("graf_umid").innerHTML = `<canvas id="canvas_grafico"></canvas>`;
}


// Caminhão 3
    function caminhao3() {
      
      //Temperatura em Tempo Real
        document.getElementById("temperatura_real").innerHTML = `<div class="grid">
                  <div class="grid-body d-flex flex-column h-100">
                    <div class="wrapper">
                      <div class="d-flex justify-content-between">
                        <div class="split-header">
                          <p class="card-title">Temperatura</p>
                        </div>
                      </div>
                    </div>
                    <div class="grafico" id="div_grafico"> COLOCAR TERMOMETROOO AQUI</div>
                  </div>
                </div>`;
  
      //Umidade em Tempo Real
      document.getElementById("umidade_real").innerHTML = `<div class="grid">
                  <div class="grid-body">
                    <p class="card-title">Umidade</p>
                    <div id="radial-chart2">COLOCAR GOTAAA AQUI</div>
                  </div>
                </div>`;
  
      //Grafico Temperatura
      document.getElementById("graf_temp").innerHTML = `<canvas id="canvas_temp"></canvas>`;
  
      //Grafico Humildade
      document.getElementById("graf_umid").innerHTML = `<canvas id="canvas_grafico"></canvas>`;
  }