import React,{useState,useEffect} from "react"
import { PagingBtn } from "./PagingBtn";


function ProjectList(){
    // eslint-disable-next-line
    const [items, setitems] = useState([
        {
            title: '쌤공',
            url: 'http://ssamgong.siia.kr/',
            img: './assets/sub/project/port-img-ssamgong.png',
            explain01: 'http://ssamgong.siia.kr/',
            explain02: '반응형 자료공유사이트(영카트)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 전체 퍼블리싱 작업'
        },
        {
            title: '에코인슈텍',
            url: 'http://eco-insutech.siia.kr/index.php',
            img: './assets/sub/project/port-img-insutech.png',
            explain01: 'http://eco-insutech.siia.kr',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2-3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '하이엔드모터스',
            url: 'http://highend.siia.kr/',
            img: './assets/sub/project/port-img-highend.png',
            explain01: 'http://highend.siia.kr/',
            explain02: 'IR 반응형 사이트(프론트만 진행)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '에이치엔아이컴퍼니',
            url: 'http://hnic.siia.kr/',
            img: './assets/sub/project/port-img-hnic.png',
            explain01: 'http://hnic.siia.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2-3일',
            explain04: '작업 내용: 메인 퍼블리싱 작업'
        },
        {
            title: '카페바바',
            url: 'http://cafevava.siia.kr/',
            img: './assets/sub/project/port-img-cafevava.png',
            explain01: 'http://cafevava.siia.kr/',
            explain02: '반응형 원페이지',
            explain03: '작업 기간: 1일',
            explain04: '작업 내용: 메인 퍼블리싱 작업'
        },
        {
            title: '시선',
            url: 'http://sisun.siia.kr/',
            img: './assets/sub/project/port-img-sisun.png',
            explain01: 'http://sisun.siia.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: 'GDK',
            url: 'http://gdk.kr/',
            img: './assets/sub/project/port-img-gdk.png',
            explain01: 'http://gdk.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2-3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '경남정보연구원',
            url: 'http://bmi.siia.kr/',
            img: './assets/sub/project/port-img-bmi.png',
            explain01: 'http://bmi.siia.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2-3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '리맥스',
            url: 'http://remax.siia.kr/',
            img: './assets/sub/project/port-img-remax.png',
            explain01: 'http://remax.siia.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2-3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '아이비즈트래블',
            url: 'http://ibztravel.siia.kr/',
            img: './assets/sub/project/port-img-ibztravel.png',
            explain01: 'http://ibztravel.siia.kr/',
            explain02: 'IR 반응형 사이트(영카트)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '나루로지스틱스',
            url: 'http://naru.siia.kr/',
            img: './assets/sub/project/port-img-naru.png',
            explain01: 'http://naru.siia.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 2-3일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '영진메카텍',
            url: 'http://yjmecatec.siia.kr/',
            img: './assets/sub/project/port-img-yjmecatec.png',
            explain01: 'http://yjmecatec.siia.kr/',
            explain02: 'IR 반응형 사이트',
            explain03: '작업 기간: 1일',
            explain04: '작업 내용: 메인 퍼블리싱 작업'
        },
        {
            title: '에코마린',
            url: 'http://ecomarine.siia.kr/',
            img: './assets/sub/project/port-img-ecomarine.png',
            explain01: 'http://ecomarine.siia.kr/',
            explain02: 'IR 반응형 사이트(작업중)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '펭귄상회',
            url: 'http://penguin.siia.kr/',
            img: './assets/sub/project/port-img-wtburger.png',
            explain01: 'http://penguin.siia.kr/',
            explain02: '랜딩페이지(현재 운영중)',
            explain03: '작업 기간: 5일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '화명요리학원',
            url: 'http://academyhm.siia.kr/',
            img: './assets/sub/project/port-img-academyhm.png',
            explain01: 'http://academyhm.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '왓더버거',
            url: 'http://wtburger.siia.kr/',
            img: './assets/sub/project/port-img-wtburger.png',
            explain01: 'http://wtburger.siia.kr/',
            explain02: '랜딩페이지(현재 운영중)',
            explain03: '작업 기간: 5일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '뉴브라이트',
            url: 'http://nubright.siia.kr/',
            img: './assets/sub/project/port-img-nubright.png',
            explain01: 'http://nubright.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 1일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '바른고기',
            url: 'http://barunmeat.siia.kr/',
            img: './assets/sub/project/port-img-barunmeat.png',
            explain01: 'http://barunmeat.siia.kr/',
            explain02: '랜딩페이지(현재 운영중)',
            explain03: '작업 기간: 3일반',
            explain04: '작업 내용: 메인 퍼블리싱 작업'
        },
        {
            title: '한음미디어',
            url: 'http://humedia.siia.kr/',
            img: './assets/sub/project/port-img-humedia.png',
            explain01: 'http://humedia.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '펜스프로덕션',
            url: 'http://fence.siia.kr/',
            img: './assets/sub/project/port-img-fence.png',
            explain01: 'http://fence.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 1일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '엑스페라',
            url: 'http://xpera.siia.kr/',
            img: './assets/sub/project/port-img-xpera.png',
            explain01: 'http://xpera.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '제로원',
            url: 'http://zero1ne.com/',
            img: './assets/sub/project/port-img-zero1ne.png',
            explain01: 'http://zero1ne.com/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: 'KME',
            url: 'http://kme.siia.kr/',
            img: './assets/sub/project/port-img-kme.png',
            explain01: 'http://kme.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '제이디스컨벤션',
            url: 'http://jdds.kr/',
            img: './assets/sub/project/port-img-jdsc.png',
            explain01: 'http://jdds.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 1-2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '이루미치과',
            url: 'http://erumi.siia.kr/',
            img: './assets/sub/project/port-img-erumi.png',
            explain01: 'http://erumi.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: -',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        },
        {
            title: '에이유리더스',
            url: 'http://auleaders.siia.kr/',
            img: './assets/sub/project/port-img-auleaders.png',
            explain01: 'http://auleaders.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 4-5일',
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
            title: '강다짐',
            url: 'http://kangdajim2022.siia.kr/',
            img: './assets/sub/project/port-img-kangdajim.png',
            explain01: 'http://kangdajim2022.siia.kr/',
            explain02: '랜딩페이지(현재 운영중)',
            explain03: '작업 기간: 2일반',
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
            title: '예조종합건설',
            url: 'http://yejo.siia.kr/',
            img: './assets/sub/project/port-img-yejo.png',
            explain01: 'http://yejo.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
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
            title: 'KMCP',
            url: 'http://kmcp.siia.kr/',
            img: './assets/sub/project/port-img-kmcp.png',
            explain01: 'http://kmcp.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영안함)',
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
            title: '아토인테리어디자인',
            url: 'https://attodesign.kr/',
            img: './assets/sub/project/port-img-ato.png',
            explain01: 'https://attodesign.kr/',
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
            title: '라온파이낸스',
            url: 'http://raonfinance.siia.kr/',
            img: './assets/sub/project/port-img-raon.png',
            explain01: 'http://raonfinance.siia.kr/',
            explain02: 'IR 반응형 사이트(현재 운영중)',
            explain03: '작업 기간: 2일',
            explain04: '작업 내용: 메인~서브 퍼블리싱 작업'
        }
    ]);

    const [count, setCount] = useState(0); //아이템 총 개수
    const [currentpage, setCurrentpage] = useState(1); //현재페이지
    const [postPerPage] = useState(6); //페이지당 아이템 개수

    const [indexOfLastPost, setIndexOfLastPost] = useState(0);
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
    const [currentPosts, setCurrentPosts] = useState(0);


    useEffect(() => {
        setCount(items.length);
        setIndexOfLastPost(currentpage * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
        setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
    }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);
    
    const setPage = (e) => {
        setCurrentpage(e);
    };

    return(
        <>
            <ul className="projects">   
                {currentPosts && items.length > 0 ? (
                    currentPosts.map((item,index)=>(
                        <li className="project-list" key={index}>
                            <div className="subject border-bottom-white">
                                <strong>{item.title}</strong>
                            </div>
                            <img src={process.env.PUBLIC_URL + item.img} alt="포트폴리오 이미지" />
                            <ul className="explain mt-30">
                                <li>
                                    <a href={item.url}>{item.explain01}</a>
                                    {/* <div className="click"><span>click!</span></div> */}
                                </li>
                                <li>{item.explain02}</li>
                                <li>{item.explain03}</li>
                                <li>{item.explain04}</li>
                            </ul>
                        </li>
                    ))
                )
                    :  <li className="no-project">게시물이 없습니다.</li>
                }
            </ul>
            <PagingBtn page={currentpage} count={count} setPage={setPage} />
        </>
    );
}



export default ProjectList;