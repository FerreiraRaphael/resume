import React, { Component } from "react";
import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import WebFont from "webfontloader";

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
        <h1>Raphael Ferreira</h1>
        <blockquote>
          <p>
            Software Engineering Student<br />
            Full Stack Javascript Developer<br />
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/raphael-ferreira-28ab36138/">
              https://www.linkedin.com/in/raphael-ferreira-28ab36138/
            </a>
            <br />
            Github:{" "}
            <a href="https://github.com/ferreiraraphael">
              https://github.com/ferreiraraphael
            </a>
            <br />
            E-mail:{" "}
            <a href="mailto:raphaelbsferreira@gmail.com">
              raphaelbsferreira@gmail.com
            </a>
            <br />
            Phone: <a href="tel:+5562981010841">+55 (62) 98101-0841</a>
            <br />
          </p>
        </blockquote>
        <section>
          <h3>About Me</h3>
          <p>
            Software engineering student, that worked with a lot of languages
            like, Java, C#, Ruby and even Visual Base, but tries to specialize
            himself in Javascript. <br />
            Currently working on the developing of Webapp and PWA's using
            Angular@core and AngularJS and Services and REST API’s using Java
            Spring and NodeJS.<br />
            Always love to use React on my personal projects and I'm currently
            studying Graphql and Serverless applications, checkout my github
            page:{" "}
            <a href="https://github.com/ferreiraraphael">
              https://github.com/ferreiraraphael
            </a>
          </p>
        </section>
        <section>
          <h3>Academic Education</h3>
          <ul>
            <li>Software Engineering - Federal University of Goiás (UFG)</li>
            <li>Conclusion in: 2018/2</li>
          </ul>
        </section>
        <section>
          <h3>Knowledge</h3>
          <ul>
            <li>
              Javascript (React, Redux, Apollo, @angular/core, Vue, TypeScript,
              Jquery)
            </li>
            <li>NodeJS (Express, GraphQl)</li>
            <li>Java (Spring)</li>
            <li>Ruby (Ruby on Rails)</li>
            <li>C# (.Net 4)</li>
            <li>PHP (Laravel)</li>
            <li>HTML 5, CSS 3 (Sass, Less, Stylus)</li>
            <li>
              DevOps (Heroku, TravisCI, CircleCI, Shippable, Codacy, Coveralls)
            </li>
            <li>Testes (Mocha, Jest, Rspec, Jasmine, Protractor)</li>
            <li>AWS (EC2, Lambda, S3, SNS)</li>
          </ul>
        </section>
        <section>
          <h3>Professional Experience</h3>
          <blockquote>
            <p>
              <strong>Oobj</strong> (<a href="https://www.oobj.com.br/">
                https://www.oobj.com.br/
              </a>) <br />
              Full Stack Developer - Feb 2018 - Present<br />
              Goiânia, Brazil<br />
              <br />
              Developer, responsible for making new features and maintaining old
              ones.<br />
              Development of features for a webapp, using Angular@core and
              Angular JS.<br />
              Development of front-end tests using Protractor, Jasmine and Karma
              as a test runner. <br />
              Usage of grunt and webpack for task running. <br />
              Responsible for the migration of a webapp made on AngularJS for
              the newest version of Angular@core.<br />
              Development of features at a REST API, using Java Spring, Mongo
              DB, MySQL and ActiveMQ. Development of unit and integration tests
              using the Spring Framework. <br />
              Development of services using Nodejs, Redis and PostgreSQL.
            </p>
          </blockquote>
          <blockquote>
            <p>
              <strong>Workshow Produções Artísticas</strong> (<a href="http://www.workshow.com.br/">
                http://www.workshow.com.br/
              </a>) <br />
              Full Stack Developer - Mar 2017 - Sep 2017 - 7 months.<br />
              Goiânia, Brazil<br />
              Development of the WebApp{" "}
              <a href="https://skuta.com.br/">https://skuta.com.br/</a>. <br />
              Working mostly on the front-end, but I also developing some
              end-points in the Restfull API using technologies C#( .Net ) and
              Javascript( Jquery ), CSS ( Bootstrap ) for the front-end.
            </p>
          </blockquote>
          <blockquote>
            <p>
              <strong>Ideas To Bits</strong>
              <br />
              Full Stack Developer Freelancer (Remote) - Dez 2016 - Feb 2017 - 3
              months.<br />
              Goiânia, Brazil<br />
              Developer responsible for making a REST API in Ruby on Rails, and
              front-end on React, making unit and integration tests with Rspec
              and Protractor, and maintaining the continuous integration and
              deployment of the service, using Heroku and Circle CI.
            </p>
          </blockquote>
          <blockquote>
            <p>
              <strong>Way Data Solution S/A</strong> (<a href="https://waydatasolution.com.br">
                https://waydatasolution.com.br
              </a>) <br />
              Javascript Developer Internship - Nov 2015 - Novembro de 2016 - 1
              ano 1 mês<br />
              Goiânia, Brazil<br />
              Development of new features and maintenance of a webapp.<br />
              A WebApp specialized in managing the distribution and collection
              of products, with tools such as routing and online monitoring of
              deliveries, vehicle tracking and temperature control of the trunk
              of the truck. <br />
              Tools used in development ExtJS, Sass, Google Maps JS SDK.
            </p>
          </blockquote>
          <blockquote>
            <p>
              <strong>Supera Tecnologia</strong> (<a href="https://www.supera.com.br/">
                https://www.supera.com.br/
              </a>) <br />
              Developer Internship - Nov 2014 – Nov 2015 - 1 year<br />
              Goiânia, Brazil<br />
              Development and maintenance of internal company intranet web
              applications and in client systems, using IBM's Lotus Notes tool,
              which uses languages such as Javascript, Java and Visual Base.
            </p>
          </blockquote>
        </section>
        <section>
          <p className="printOnly">
            That resume can be found on:{" "}
            <a href="https://ferreirararaphael.github.io/resume">
              "https://ferreirararaphael.github.io/resume"
            </a>
          </p>
          <p>
            This resume can be found on github:{" "}
            <a href="https://github.com/FerreiraRaphael/resume">
              "https://github.com/FerreiraRaphael/resume"
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
