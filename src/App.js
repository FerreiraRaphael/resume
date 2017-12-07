import React, { Component } from "react";
import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import WebFont from "webfontloader";

import logo from "./logo.svg";
import "./App.css";

WebFont.load({
  google: {
    families: ["Source Sans Pro", "sans-serif"]
  }
});

moragaTheme.baseFontSize = "18px";
moragaTheme.baseLineHeight = 1.56;
moragaTheme.baseScaleRatio = 2;
moragaTheme.headerWeight = 200;
moragaTheme.headerGrayValue = "15%";
moragaTheme.bodyWeight = 400;
moragaTheme.bodyBoldWeight = 700;
moragaTheme.bodyGray = "30%";

const typography = new Typography(moragaTheme);

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="printOnly">
          Este curriculo pode ser encontrado em:{" "}
          <a href="https://ferreirararaphael.github.io/resume">
            "https://ferreirararaphael.github.io/resume"
          </a>
        </p>
        <h1>
          <a id="Raphael_Ferreira_0" />Raphael Ferreira
        </h1>
        <blockquote>
          <p>
            Estudante de Engenharia de Software<br />
            Desenvolvedor Full-stack<br />
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/raphael-ferreira-28ab36138/">
              https://www.linkedin.com/in/raphael-ferreira-28ab36138/
            </a>
            <br />
            Github:{" "}
            <a href="https://github.com/ferreiraraphael">
              https://github.com/ferreiraraphael
            </a>
          </p>
        </blockquote>
        <h3>
          <a id="Formao_Academina_6" />Formação Academina
        </h3>
        <ul>
          <li>
            Cursando Engenharia de Software - Universidade Federal de Goiás
            (UFG)
          </li>
          <li>Conclusão em: 2018/2</li>
        </ul>
        <h3>
          <a id="Idiomas_10" />Idiomas
        </h3>
        <ul>
          <li>Inglês</li>
          <li>Espanhol</li>
        </ul>
        <h3>
          <a id="Conhecimentos_14" />Conhecimentos
        </h3>
        <ul>
          <li>Javascript (React, @angular/core, Vue, TypeScript, Jquery)</li>
          <li>NodeJS (Express)</li>
          <li>Ruby (Ruby on Rails)</li>
          <li>C# (.Net 4)</li>
          <li>PHP (Laravel)</li>
          <li>HTML 5, CSS 3 (Sass, Less, Stylus)</li>
          <li>
            DevOps (Heroku, TravisCI, CircleCI, Shippable, Codacy, Coveralls)
          </li>
          <li>Testes (Mocha, Jest, Rspec)</li>
        </ul>
        <h3>
          <a id="Experncia_Profissional_24" />Experência Profissional
        </h3>
        <blockquote>
          <p>
            Desenvolvedor FullStack<br />
            <strong>Workshow Produções Artísticas</strong> - Duração Março 2017
            a Setembro 2017 - 7 meses.<br />
            Goiânia e Região, Brasil<br />
            Desenvolvimento e manutenção do site e Api Restfull do sistema{" "}
            <a href="http://ouva.com.br/">http://ouva.com.br/</a>.<br />
            Tecnologias utilizadas, C#( .Net ), Javascript( Jquery ), CSS (
            Bootstrap ).
          </p>
        </blockquote>
        <blockquote>
          <p>
            Desenvolvedor FullStack<br />
            <strong>Ideas To Bits</strong> - Duração Dezembro 2016 a Fevereiro
            2017 - 3 meses.<br />
            Goiânia e Região, Brasil<br />
            Desenvolvimento e manutenção de sistemas web e API Restful em Ruby
            on Rails, testes utilizando Rspec.<br />
            Manutenção e desenvolvimento de front-end web utilizando Javascript(
            ES6, React e Redux ).<br />
            Integração continua e Deploy continuo utilizando Circle CI e Heroku.
          </p>
        </blockquote>
        <blockquote>
          <p>
            Desenvolvedor Frontend<br />
            <strong>Way Data Solution S/A</strong> - Duração Novembro de 2015 a
            Novembro de 2016 - 1 ano 1 mês<br />
            Goiânia e Região, Brasil<br />
            Desenvolvimento de novas funcionalidades e manutenção do serviço
            web, sistema especializado na gestão da distribuição e coleta de
            produtos, com ferramentas como roteirização e monitoramento on-line
            das entregas, rastreamento de veículo e controle de temperatura do
            baú.<br />
            Ferramentas utilizadas no desenvolvimento Javascript( ExtJS ), Sass,
            Google Maps JS Api.
          </p>
        </blockquote>
        <blockquote>
          <p>
            Estágio em Desenvolvimento<br />
            <strong>Supera Tecnologia</strong> - Duração Novembro de 2014 –
            Novembro de 2015 - 1 ano<br />
            Goiânia e Região, Brasil<br />
            Desenvolvimento e manutenção nos sistemas internos da empresa e em
            sistemas de clientes, utilizando a ferramenta Lotus Notes da IBM,
            que utiliza linguagens como Javascript, Java e Visual Base.
          </p>
        </blockquote>
        <blockquote>
          <p>
            Estágio em Redes<br />
            <strong>CERCOMP - UFG</strong> – Duração Julho de 2014 a Novembro de
            2014 - 5 meses<br />
            Goiânia e Região, Brasil<br />
            Trabalhei como técnico de redes, atendendo chamados feitos ao
            CERCOMP ( Centro de Recursos Computacionais ) da UFG, os chamados
            envolviam problemas de rede e internet, manutenção e montagem de
            estrutura de redes (gabinetes de switch’s) e configuração dos
            mesmos.
          </p>
        </blockquote>
      </div>
    );
  }
}

export default App;
