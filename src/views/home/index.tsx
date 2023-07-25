import React, { useRef, useState, useEffect, forwardRef } from 'react';
import Swiper, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import './index.less';
Swiper.use([ Autoplay, EffectFade ]);
let swiperTarget: any;

type HomePropsType = {};
type ChildPropsType = {
    animation: boolean
};
type screenPropsType = {
    clientHeight: number,
    clientWidth: number,
    screenBottom: number,
};
const openUrl = (url: string):void => {
    if(url)
        window.open(url, '_blank');
}

const openUrlSelf = (url:any):void => {
    if(url)
        window.open(url, '_self');
}

interface menuText {
    [key: string]: any,
    text: string,
    url: string,
    subText: string,
    ac: boolean
}
const menuLst: menuText[] = [
    {
        text: 'Marketplace',
        subText: 'COMING SOON',
        ac: false,
        url: '',
    },
    {
        text: 'WonderBird',
        subText: '',
        ac: false,
        url: '/wonderbird',
    },
    {
        text: 'Docs',
        subText: '',
        ac: false,
        url: 'https://docs.rentfun.io/',
    },
    {
        text: 'Blog',
        subText: '',
        ac: false,
        url: 'https://mirror.xyz/rentfun.eth',
    },
    {
        text: 'Join Discord',
        subText: '',
        ac: true,
        url: 'http://discord.gg/rentfun',
    }
];
const THead:React.FC<HomePropsType> = () => {
    const [ menuFlag, setMenuFlag ] = useState<boolean>(false);
    const className = (menu: any):string => {
        let className = 't-menu';
        if(menu.ac)
            className += ' ac';
        return className;
    }
    const menuClick = (flag: boolean):void => {
        setMenuFlag(flag);
    }
    return(
        <div className="t-head">
            <img className="t-head-logo" src={require('./images/head/logo.png')} alt=""/>
            <img onClick={menuClick.bind(this, true)} className="t-head-menu-button" src={require('./images/head/menu.png')} alt=""/>
            <div className={['t-mask', menuFlag ? 'show' : 'hide'].join(' ')}>
                <div onClick={menuClick.bind(this, false)} className="t-mask-cancel"></div>
                <div className={['t-menu-list'].join(' ')}>
                    {
                        menuLst.map((item: menuText) => {
                            return <div key={'menu'+ item.text} className={className(item)}>
                            <span onClick={openUrlSelf.bind(this, item.url)}>
                                {item.text}
                                <span className="t-sub-text">{item.subText}</span>
                            </span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


const TSectionScreen = (forwardRef((props:screenPropsType, ref:any) => {
    const { clientHeight, clientWidth, screenBottom } = props;
    return(
        <div ref={ref} style={{ height: `${clientHeight + screenBottom}px` }} className="t-section t-screen">
            <THead />
            <img className="t-point" src={require("./images/screen/point.svg").default} alt=""/>
            <img className="t-line" src={require("./images/screen/line.svg").default} alt=""/>
            <div className="t-sun">
                <img className="t-logo-center" src={require("./images/screen/logo.png")} alt=""/>
                <div style={{ width: `${clientWidth}px` }} className="t-title">Liquidity for <br/> NFT Utility</div>
                <div style={{ width: `${clientWidth}px` }} className="t-title-sub">Rent Original NFTs Through Access Delegation on Arbitrum</div>
                <div className="t-icon">
                    <img onClick={openUrl.bind(this, 'https://twitter.com/rentfun_io')} src={require("./images/screen/3.png")} alt=""/>
                    <img onClick={openUrl.bind(this, 'https://github.com/RentFun')}  src={require("./images/screen/2.png")} alt=""/>
                    <img onClick={openUrl.bind(this, 'http://discord.gg/rentfun')}  src={require("./images/screen/1.png")} alt=""/>
                </div>
            </div>
        </div>
    )
}));

const TSection2 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return (
        <div ref={ref} className={`t-section section2 ${animation ? 'anOpacity' : ''}`}>
            <div className="t-section-title">
                Make NFT rentals easy <br/> and secure through <br/> Access Delegation
            </div>
            <div className="t-bird-box">
                <div className="t-bird"><img src={require("./images/s2/bird.svg").default} alt=""/></div>
                <div className="t-2-title">Learn Access Delegation</div>
                <div className="t-2-title-sub">
                    RentFun proposes a brand new Access
                    Delegation Protocol to ensure that the NFT
                    owners only need to delegate the access
                    rights of the NFTs to the renters.
                </div>
                <div className="t-operation center">
                    <span onClick={openUrl.bind(this,'http://poc.rentfun.io/')} className="t-button bg">
                        POC Demo
                        <img src={require("./images/s2/arrow.png")} alt=""/>
                    </span>
                    <span onClick={openUrl.bind(this,'https://docs.rentfun.io/access-delegation-protocol')} className="t-button">Docs</span>
                </div>
            </div>
            <div className="t-2-title center">SDK: Front-end  Plug & Play</div>
            <div className="t-2-title-sub center">
                RentFun offers a SDK for NFT issuers to
                seamlessly integrate into their front-end
                codes within 2~3 hours.
            </div>
            <div className="t-operation">
                    <span onClick={openUrl.bind(this,'https://docs.rentfun.io/integrations/rentfun-javascript-sdk')} className="t-button">
                        Integration
                         <img src={require("./images/s2/arrow.png")} alt=""/>
                    </span>
            </div>
        </div>
    )
}));


interface section3Item {
    [key: string]: any,
    title: string,
    description: string,
    icon: string,
}
const section3Data: section3Item[] = [
    {
        icon: require('./images/s3/1.png'),
        title: 'No Collaterals',
        description: 'No collaterals  required for renters.',
    },
    {
        icon: require('./images/s3/2.png'),
        title: 'Original NFTs',
        description: 'No wrapped NFTs issued to make sure the renters have the 100% same experiences as the NFT owners.',
    },
    {
        icon: require('./images/s3/3.png'),
        title: 'Rentable Address',
        description: 'Renter could rent an address containing multiple NFTs to fully experience games that require multiple NFTs to play.',
    }
];

const TSection3 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    const classReturn = (idx:number):string => {
        if(idx === 0)
            return 'i43';
        else if(idx === 2)
            return 'i36';
        else return '';
    }
    return (
        <div ref={ref} className={`t-section section3 ${animation ? 'anOpacity' : ''}`}>
            <div className="t-section-title">
                Same Fun, Low Cost
            </div>
            <div className={`t-bird-3 overflow ${animation ? 'animation' : '' }`}>
                <img className={`t-bird ${animation ? 'an' : ''}`} src={require("./images/s3/bird.svg").default} alt=""/>
                <span className={`t-3-icon-1 ${animation ? 'an' : ''}`}></span>
                <span className={`t-3-icon-2 ${animation ? 'an' : ''}`}></span>
            </div>
            {
                section3Data.map((item: section3Item, idx: number) => {
                    return  <div key={`section3${idx}`} className="t-public-list">
                        <img className={`t-list-icon ${classReturn(idx)}`} src={item.icon} alt=""/>
                        <div className="t-list-title">{item.title}</div>
                        <div className="t-list-title-sub">{item.description}</div>
                    </div>
                })
            }
        </div>
    )
}));



interface section4Item {
    [key: string]: any,
    title: string,
    description: string,
    icon: string,
}
const section4Data: section4Item[] = [
    {
        icon: require('./images/s4/1.png'),
        title: 'Your Keys, Your NFTs',
        description: 'NFT owners maintain the exclusive ownership of the vault contract address the vault contract address that holds their NFTs.',
    },
    {
        icon: require('./images/s4/2.png'),
        title: 'Efficient Lending',
        description: 'Higher capital efficiency for NFT owners by enabling to list multiple NFTs with a single click and attracting ample renters through targeted campaigns.',
    },
    {
        icon: require('./images/s4/3.png'),
        title: 'Renters Whitelist',
        description: 'In addition to the public model, NFT owners can also opt for the private model to lend  NFTs to the whitelist addresses.',
    }
];

const TSection4 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    const classReturn = (idx:number):string => {
        if(idx === 0)
            return 'i41';
        else if(idx === 1)
            return 'i52';
        else if(idx === 2)
            return 'i45';
        else return '';
    }
    return (
        <div ref={ref} className={`t-section section4 ${animation ? 'anOpacity' : ''}`}>
            <div className="t-section-title">
                Passive Earnings, <br/>
                100% Ownership
            </div>
            <div className="t-bird-box t-flex">
                <img className="t-bird" src={require("./images/s4/bird.svg").default} alt=""/>
            </div>
            {
                section4Data.map((item: section4Item, idx: number) => {
                    return <div key={`section4${idx}`} className="t-public-list">
                        <img className={`t-list-icon ${classReturn(idx)}`} src={item.icon} alt=""/>
                        <div className="t-list-title">{item.title}</div>
                        <div className="t-list-title-sub">{item.description}</div>
                    </div>
                })
            }
        </div>
    )
}));


interface swiperItem {
    text: string,
}
const swiperData: swiperItem[] = [
    {
        text: 'Co-contribute',
    },
    {
        text: 'Co-govern',
    },
    {
        text: 'Co-share',
    },
];

const TSectionSwiper:React.FC<HomePropsType> = () => {
    return (
        <div   className={`t-section t-swiper`}>
            <div className="t-swiper-title">Our Ever Growing Community: </div>
            <div className="t-swiper-section swiper-container">
                <div className="swiper-wrapper">
                    {
                        swiperData.map((item:swiperItem, idx: number) => {
                            return  <div className="t-slider swiper-slide" key={`swiper${idx}`}>{ item.text }</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


interface section5Item {
    icon: string,
    url: string
}
const section5Data: section5Item[] = [
    {
        icon: require('./images/s5/1.png'),
        url: 'https://twitter.com/Larvandweb3',
    },
    {
        icon: require('./images/s5/2.png'),
        url: 'https://twitter.com/Zedekprince',
    },
    {
        icon: require('./images/s5/3.png'),
        url: 'https://twitter.com/Blanklee3',
    },
    {
        icon: require('./images/s5/4.png'),
        url: 'https://twitter.com/berlinrobbery',
    },
    {
        icon: require('./images/s5/5.png'),
        url: 'https://twitter.com/memerberries',
    },
    {
        icon: require('./images/s5/6.png'),
        url: 'https://twitter.com/TheShred_',
    },
    {
        icon: require('./images/s5/7.png'),
        url: 'https://twitter.com/GangstaGeekXXX',
    },
    {
        icon: require('./images/s5/8.png'),
        url: 'https://twitter.com/0x_Astro',
    },
    {
        icon: require('./images/s5/9.png'),
        url: 'https://twitter.com/Kevin176732291',
    },
    {
        icon: require('./images/s5/10.png'),
        url: 'https://twitter.com/dash123d',
    },
    {
        icon: require('./images/s5/11.png'),
        url: 'https://twitter.com/Linkys_Sire_',
    },
];
const TSection5 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref}  className={`t-section section5 ${animation ? 'anOpacity' : ''}`} >
            <img className="t-line" src={require("./images/s5/line.svg").default} alt=""/>
            <TSectionSwiper />
            <div className="t-box">
                <div  className="t-pos">
                    {
                        section5Data.map((item: section5Item, idx: number) => {
                            return  <img  onClick={openUrl.bind(this,item.url)} className={`t-icon-${idx + 1}`} key={`t-icon-${idx}`} src={item.icon} alt=""/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}));


const TSection6 = (forwardRef((props:ChildPropsType, ref:any) => {
    const { animation } = props;
    return(
        <div ref={ref} className={`t-section section6 ${animation ? 'anOpacity' : ''}`} >
            <div  onClick={openUrl.bind(this, 'https://docs.rentfun.io/early-bird-program')} className="t-block">
                <span className="t-6-title">Early Birds Get <br/> The Worm ($RENT)</span>
                <img className="t-img" src={require("./images/s6/1.png")} alt=""/>
                <span className="t-6-title-sub">Learn More</span>
                <span className="t-arrow"><img src={require("./images/s2/arrow.png")} alt=""/></span>
            </div>
        </div>
    )
}));


interface section7Item {
    icon: string,
    url: string
}
const section7Data: section7Item[] = [
    {
        icon: require('./images/s7/1.png'),
        url: 'http://discord.gg/rentfun'
    },
    {
        icon: require('./images/s7/2.png'),
        url: 'https://mirror.xyz/rentfun.eth'
    },
    {
        icon: require('./images/s7/3.png'),
        url: 'https://twitter.com/rentfun_io'
    },
    {
        icon: require('./images/s7/4.png'),
        url: 'https://github.com/RentFun'
    },
    {
        icon: require('./images/s7/5.png'),
        url: 'https://forum.rentfun.io/'
    }
];
const TSection7: React.FC<ChildPropsType> = (props) => {
    const { animation } = props;
    return(
        <div className={`t-section section7 ${animation ? 'anOpacity' : ''}`} >
            <img className="t-point" src={require("./images/s7/point.svg").default} alt=""/>
            <div className="t-7-title">Join us</div>
            <div className="t-7-icon">
                {
                    section7Data.map((item: section7Item, idx: number) => {
                        return <img  onClick={openUrl.bind(this,item.url)}  className='t-7-img' key={`class7${idx}`} src={item.icon} alt=""/>
                    })
                }
            </div>
            <div className="t-text emil">
                <img src={require("./images/s7/email.png")} alt=""/>
                Blank@rentfun.io
            </div>
            <div className="t-f-icon flex">
                <img src={require("./images/s7/logo.png")} alt=""/>
            </div>
            <div className="t-text"> &copy; 2023 RentFun, All Rights Reserved.</div>
        </div>
    )
}

const Home:React.FC<HomePropsType> = (props, context) => {
    const windowClientHeight: number = document.body.clientHeight || document.documentElement.clientHeight;
    const windowClientWidth: number = document.body.clientWidth || document.documentElement.clientWidth;
    const screenBottom = 201 / (767 / 375);
    const [ animation2, setAnimation2 ] = useState<boolean>(false);
    const [ animation3, setAnimation3 ] = useState<boolean>(false);
    const [ animation4, setAnimation4 ] = useState<boolean>(false);
    const [ animation5, setAnimation5 ] = useState<boolean>(false);
    const [ animation6, setAnimation6 ] = useState<boolean>(false);
    const [ animation7, setAnimation7 ] = useState<boolean>(false);
    const screenRef:any = useRef();
    const section2Ref:any = useRef();
    const section3Ref:any = useRef();
    const section4Ref:any = useRef();
    const section5Ref:any = useRef();
    const section6Ref:any = useRef();
    useEffect(() => {
        swiperTarget = new Swiper ('.swiper-container', {
            direction: 'vertical',
            speed: 3000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            loop: true,
            observer: true,
        });
        return () => {}
    }, []);

    const scrollCapture:any = (event: any) => {
        const [
            scrollTop,
            s2TH,
            s3TH,
            s4TH,
            s5TH,
            s6TH,
        ] = [
            event.target.scrollTop,
            section2Ref.current.clientHeight + 160,
            (section2Ref.current.clientHeight + section3Ref.current.clientHeight),
            (section2Ref.current.clientHeight + section3Ref.current.clientHeight + section4Ref.current.clientHeight),
            (section2Ref.current.clientHeight + section3Ref.current.clientHeight + section4Ref.current.clientHeight + section5Ref.current.clientHeight),
            (section2Ref.current.clientHeight + section3Ref.current.clientHeight + section4Ref.current.clientHeight + section5Ref.current.clientHeight + section6Ref.current.clientHeight)
        ];
        if(scrollTop > 0){
            setAnimation2(true);
        } else {
            setAnimation2(false);
        }
        if(scrollTop > s2TH){
            setAnimation3(true);
        } else {
            setAnimation3(false);
        }
        if(scrollTop > s3TH){
            setAnimation4(true);
        } else {
            setAnimation4(false);
        }
        if(scrollTop > s4TH){
            swiperTarget.slideToLoop(0);
            swiperTarget.updateProgress();
            swiperTarget.update();
            setAnimation5(true);
        } else {
            setAnimation5(false);
        }
        if(scrollTop > s5TH){
            setAnimation6(true);
        } else {
            setAnimation6(false);
        }
        if(scrollTop > s6TH){
            setAnimation7(true);
        } else {
            setAnimation7(false);
        }
    }
    return (
        <div onScrollCapture={scrollCapture} className="t-home-section">
            <TSectionScreen ref={screenRef} clientHeight={windowClientHeight} clientWidth={windowClientWidth} screenBottom={screenBottom}/>
            <TSection2 ref={section2Ref} animation={animation2}/>
            <TSection3 ref={section3Ref} animation={animation3}/>
            <TSection4 ref={section4Ref} animation={animation4}/>
            <TSection5 ref={section5Ref} animation={animation5}/>
            <TSection6 ref={section6Ref} animation={animation6}/>
            <TSection7 animation={animation7}/>
        </div>
    );
}


export default Home;

