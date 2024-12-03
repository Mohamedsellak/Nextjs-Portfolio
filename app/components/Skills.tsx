import React from 'react'
import './style.css'

type StyleWithVar = React.CSSProperties & { '--time': string };

export default function Skills() {
  return (
    <section className="w-screen text-center p-10 bg-black" id="skills">
      <h3 className="text-lg font-bold">My Abilities</h3>
      <h2 className="text-4xl font-bold text-purple-700">My Skills</h2>

      <div className="flex items-center justify-center mt-24">
        <div>
          <div className="scroll" style={{ '--time': '20s' } as StyleWithVar}>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>Tailwind</span>
              <span>Saas</span>
              <span>Bootstrap</span>
            </div>
            <div>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>Tailwind</span>
              <span>Saas</span>
              <span>Bootstrap</span>
            </div>
          </div>
          
          <div className="scroll" style={{ '--time': '30s' } as StyleWithVar}>
            <div>
                <span>Python</span>
                <span>Php</span>
                <span>Node js</span>
                <span>Express JS</span>
                <span>Flask </span>
                <span>Laravel</span>
            </div>
            <div>
                <span>Python</span>
                <span>Php</span>
                <span>Node js</span>
                <span>Express JS</span>
                <span>Flask </span>
                <span>Laravel</span>
            </div>
          </div>

          <div className="scroll" style={{ '--time': '20s' } as StyleWithVar}>
            <div>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Hadoop</span>
                <span>Hbase</span>
                <span>Redis</span>
                <span>Casandra</span>
            </div>
            <div>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Hadoop</span>
                <span>Hbase</span>
                <span>Redis</span>
                <span>Casandra</span>
            </div>
          </div>

          <div className="scroll" style={{ '--time': '40s' } as StyleWithVar}>
            <div>
              <span>Artificial intelligence </span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>CNN</span>
              <span>NLP</span>
            </div>
            <div>
              <span>Artificial intelligence </span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>CNN</span>
              <span>NLP</span>
            </div>
          </div>

          <div className="scroll imgBox" style={{ '--time': '30s' } as StyleWithVar}>
            <div>
                <img src="/" alt=""/>
                <img src="/images/1.png" alt=""/>
                <img src="/images/2.png" alt=""/>
                <img src="/images/3.png" alt=""/>
                <img src="/images/4.png" alt=""/>
                <img src="/images/5.png" alt=""/>
                <img src="/images/6.png" alt=""/>
                <img src="/images/7.png" alt=""/>
                <img src="/images/8.png" alt=""/>
            </div>
            <div>
                <img src="/" alt=""/>
                <img src="/images/9.png" alt=""/>
                <img src="/images/10.png" alt=""/>
                <img src="/images/11.png" alt=""/>
                <img src="/images/12.png" alt=""/>
                <img src="/images/13.png" alt=""/>
                <img src="/images/14.png" alt=""/>
                <img src="/images/15.png" alt=""/>
                <img src="/images/16.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
