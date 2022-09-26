import React from "react"

function ProjectList(){
    const projects = [
        {
            title: '라온파이낸스',
            url: 'http://raonfinance.siia.kr/',
            img: './assets/sub/project/port-img-raon.png',
            explain01: 'http://raonfinance.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '커리어다움',
            url: 'http://careerdaum.com/',
            img: './assets/sub/project/port-img-career.png',
            explain01: 'http://careerdaum.com/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '아토인테리어디자인',
            url: 'https://attodesign.kr/',
            img: './assets/sub/project/port-img-ato.png',
            explain01: 'https://attodesign.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '프라임쉴드',
            url: 'http://primeshield.siia.kr/',
            img: './assets/sub/project/port-img-primesheld.png',
            explain01: 'http://primeshield.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: 'KMCP',
            url: 'http://kmcp.siia.kr/',
            img: './assets/sub/project/port-img-kmcp.png',
            explain01: 'http://kmcp.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영안함)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: 'bspace',
            url: 'http://bspace.siia.kr/',
            img: './assets/sub/project/port-img-bspace.png',
            explain01: 'http://bspace.siia.kr/',
            explain02: '키오스크(현재 운영중)',
            explain03: '작업 기간: 2일반',
            explain04: '작업 내용: 메인 작업'
        },
        {
            title: '예조종합건설',
            url: 'http://yejo.siia.kr/',
            img: './assets/sub/project/port-img-yejo.png',
            explain01: 'http://yejo.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '시아인테리어',
            url: 'http://interior.siia.kr/',
            img: './assets/sub/project/port-img-interior.png',
            explain01: 'http://interior.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 1일반',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '강다짐',
            url: 'http://kangdajim2022.siia.kr/',
            img: './assets/sub/project/port-img-kangdajim.png',
            explain01: 'http://kangdajim2022.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일반',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '부산미남병원',
            url: 'http://bsminam.siia.kr/',
            img: './assets/sub/project/port-img-minam.png',
            explain01: 'http://bsminam.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '이루미치과',
            url: 'http://erumi.siia.kr/',
            img: './assets/sub/project/port-img-erumi.png',
            explain01: 'http://erumi.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 작업중)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },    
    ];

    return(
        <ul className="projects">                        
            {projects.map((project,index)=>(
                <li className="project-list" key={index}>
                    <div className="subject">
                        <strong>{project.title}</strong>
                    </div>
                    <img src={process.env.PUBLIC_URL + project.img} alt="포트폴리오 이미지" />
                    <ul className="explain mt-30">
                        <li>
                            <a href={project.url}>{project.explain01}</a>
                        </li>
                        <li>{project.explain02}</li>
                        <li>{project.explain03}</li>
                        <li>{project.explain04}</li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}



export default ProjectList;