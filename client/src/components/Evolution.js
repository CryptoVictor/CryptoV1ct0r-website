import React, { useState } from 'react';

// Import all images manually
import img1 from './imgs/evolution/520288612_18071714218990875_1664719773880121642_n.webp';
import img2 from './imgs/evolution/520255165_18071636257990875_923747202042339925_n.webp';
import img3 from './imgs/evolution/519684565_18071548720990875_8655367732587265461_n.webp';
import img4 from './imgs/evolution/519061089_18071442946990875_7874358697965501556_n.webp';
import img5 from './imgs/evolution/520256679_18071351152990875_7927718020327227985_n.webp';
import img6 from './imgs/evolution/518259582_18071249932990875_5387799206929063742_n.webp';
import img7 from './imgs/evolution/517591840_18071122090990875_750856656755874753_n.webp';
import img8 from './imgs/evolution/518232982_18071050999990875_3757503294728619484_n.webp';
import img9 from './imgs/evolution/518180914_18070976143990875_8839532260584333979_n.webp';
import img10 from './imgs/evolution/504366678_18070887733990875_8661004734458392968_n.webp';
import img11 from './imgs/evolution/516827470_18070789321990875_1959234053567522479_n.webp';
import img12 from './imgs/evolution/516395027_18070707997990875_2792508956789885336_n.webp';
import img13 from './imgs/evolution/515763977_18070598929990875_663361287130423866_n.webp';
import img14 from './imgs/evolution/516109138_18070511743990875_7462346527607483_n.webp';
import img15 from './imgs/evolution/516127604_18070426063990875_8960191029742347265_n.webp';
import img16 from './imgs/evolution/504646864_18070340986990875_7521698779583194838_n.webp';
import img17 from './imgs/evolution/504335059_18070254694990875_6770506525556234039_n.webp';
import img18 from './imgs/evolution/514072016_18070167685990875_8189886663279194017_n.webp';
import img19 from './imgs/evolution/503553016_18070081195990875_2675023575700535763_n.webp';
import img20 from './imgs/evolution/513836851_18069995476990875_3916754063782927832_n.webp';
import img21 from './imgs/evolution/511557396_18069902155990875_3210000960981058609_n.webp';
import img22 from './imgs/evolution/510976284_18069814639990875_6785114678723429832_n.webp';
import img23 from './imgs/evolution/503610324_18069689869990875_7593406111850927437_n.webp';
import img24 from './imgs/evolution/502524285_18069599305990875_4733570863601076364_n.webp';
import img25 from './imgs/evolution/509731219_18069515596990875_6537480354360779571_n.webp';
import img26 from './imgs/evolution/510435435_18069440983990875_5755591238265510712_n.webp';
import img27 from './imgs/evolution/502448087_18069362410990875_3699341997256828374_n.webp';
import img28 from './imgs/evolution/503539262_18069279502990875_1423234066053804115_n.webp';
import img29 from './imgs/evolution/503532923_18069190453990875_495677259030227670_n.webp';
import img30 from './imgs/evolution/502497713_18069101365990875_4704154118265599702_n.webp';
import img31 from './imgs/evolution/509193385_18068990539990875_3072716836027430942_n.webp';
import img32 from './imgs/evolution/508603648_18068930653990875_8797375376743647108_n.webp';
import img33 from './imgs/evolution/508222069_18068833663990875_2254119085178451860_n.webp';
import img34 from './imgs/evolution/506067419_18068739487990875_8673120712860436595_n.webp';
import img35 from './imgs/evolution/505754915_18068652694990875_2709304249951453672_n.webp';
import img36 from './imgs/evolution/506011719_18068545879990875_2714482168608112736_n.webp';
import img37 from './imgs/evolution/505128704_18068441011990875_8412252901991869733_n.webp';
import img38 from './imgs/evolution/504408834_18068349340990875_6219705868842838138_n.webp';
import img39 from './imgs/evolution/504154662_18068261956990875_5609231505571585642_n.webp';
import img40 from './imgs/evolution/505435205_18068191546990875_2517149940775991689_n.webp';
import img41 from './imgs/evolution/504237286_18068097880990875_7789538885973321423_n.webp';
import img42 from './imgs/evolution/503954379_18067983838990875_7884005382281100693_n.webp';
import img43 from './imgs/evolution/503888755_18067899322990875_6182750891169010227_n.webp';
import img44 from './imgs/evolution/504096995_18067797667990875_4680789612242126013_n.webp';
import img45 from './imgs/evolution/503732989_18067684381990875_6471310514110895503_n.webp';
import img47 from './imgs/evolution/503040257_18067529059990875_586159091681252520_n.webp';
import img48 from './imgs/evolution/503040190_18067434610990875_4291084547987534439_n.webp';
import img49 from './imgs/evolution/503039391_18067318831990875_1385700779079269634_n.webp';
import img50 from './imgs/evolution/502608961_18067217512990875_8704120934817448837_n.webp';
import video50 from './imgs/evolution/AQPicMMPYsHPo2lqMZFaOsbJuy57neMdmRO5fSiquJy1px-vjumd_SZbINu1Q1fSzYdnL81_J--6QTaaj49qgRkGAQSlRowYl9660c4.mp4';
import img51 from './imgs/evolution/501812182_18067114930990875_8672886787455323221_n.webp';
import img52 from './imgs/evolution/501378331_18067040146990875_223521243389656062_n.webp';
import img53 from './imgs/evolution/501196426_18066959476990875_8248724725479783169_n.webp';
import img54 from './imgs/evolution/500662591_18066872263990875_8901767819914477977_n.webp';
import img55 from './imgs/evolution/500125567_18066767458990875_4589114009721130981_n.webp';
import img56 from './imgs/evolution/500799217_18066666994990875_3527082474787301652_n.webp';
import img57 from './imgs/evolution/500412222_18066560251990875_7010285330456436045_n.webp';
import img58 from './imgs/evolution/500122660_18066470326990875_8438732712850201776_n.webp';
import img59 from './imgs/evolution/499713211_18066371101990875_6906109254079199566_n.webp';
import img60 from './imgs/evolution/499597901_18066285904990875_6641511115359564412_n.webp';
import img61 from './imgs/evolution/499541342_18066188965990875_1312121607830965904_n.webp';
import img62 from './imgs/evolution/498287927_18066109135990875_8729760851837097104_n.webp';
import img63 from './imgs/evolution/497833627_18066021487990875_1629472843240327939_n.webp';
import img64 from './imgs/evolution/498191476_18065910844990875_5248995683288155076_n.webp';
import img65 from './imgs/evolution/497677374_18065813965990875_5767501408328307394_n.webp';
import img66 from './imgs/evolution/497511557_18065727490990875_3489899134264147204_n.webp';
import img67 from './imgs/evolution/497080097_18065649769990875_6502483449359700673_n.webp';
import img68 from './imgs/evolution/497153102_18065568103990875_5487060972389203311_n.webp';
import img69 from './imgs/evolution/496825240_18065455630990875_7927093500359291333_n.webp';
import img70 from './imgs/evolution/496517648_18065350888990875_3251688570163889190_n.webp';
import img71 from './imgs/evolution/496481037_18065261575990875_8835629039030728674_n.webp';
import img72 from './imgs/evolution/496110255_18065172757990875_6472835460380176722_n.webp';
import img73 from './imgs/evolution/495679914_18065086036990875_8952585997984220963_n.webp';
import img74 from './imgs/evolution/495873073_18065003599990875_3498547262398552125_n.webp';
import img75 from './imgs/evolution/495738501_18064909462990875_7979826350736478610_n.webp';
import img76 from './imgs/evolution/494889564_18064835719990875_2712297958370486995_n.webp';
import img77 from './imgs/evolution/491427251_18064747378990875_1648163912614000008_n.webp';
import img78 from './imgs/evolution/495357646_18064639924990875_4083547640202899495_n.webp';
import img79 from './imgs/evolution/494684234_18064540558990875_8954829175481955697_n.webp';
import img80 from './imgs/evolution/494949194_18064458391990875_333164929289833139_n.webp';
import img81 from './imgs/evolution/491442890_18064384609990875_2243685315160385158_n.webp';
import img82 from './imgs/evolution/494174127_18064286230990875_4134267267742095084_n.webp';
import img83 from './imgs/evolution/491444477_18064198273990875_9133112186666854583_n.webp';
import img84 from './imgs/evolution/491511087_18064109464990875_8225458876230412706_n.webp';
import img85 from './imgs/evolution/491444022_18064031512990875_1318385423752078659_n.webp';
import img86 from './imgs/evolution/491504287_18063940891990875_6265112485708587782_n.webp';
import img87 from './imgs/evolution/491464874_18063859501990875_1062244181128983261_n.webp';
import img88 from './imgs/evolution/492143787_18063781354990875_2574570872328776251_n.webp';
import img89 from './imgs/evolution/491438295_18063690904990875_8484837613379779890_n.webp';
import img90 from './imgs/evolution/490215767_18063600793990875_6660259732476862627_n.webp';
import img91 from './imgs/evolution/491447398_18063519943990875_5154578205097482131_n.webp';
import img92 from './imgs/evolution/489912071_18063411979990875_3529714378650539363_n.webp';
import img93 from './imgs/evolution/491440289_18063327424990875_6037578536758222566_n.webp';
import img94 from './imgs/evolution/491442160_18063250348990875_2669763415946605012_n.webp';
import img95 from './imgs/evolution/491439743_18063167512990875_7527554535060121133_n.webp';
import img96 from './imgs/evolution/noventaseis.webp';
import img97 from './imgs/evolution/noventasete.webp';
import img98 from './imgs/evolution/noventaoito.webp';
import img99 from './imgs/evolution/noventanove.webp';
import video100 from './imgs/evolution/cem.mp4';
import img101 from './imgs/evolution/centoum.webp';
import img102 from './imgs/evolution/centodois.webp';
import img103 from './imgs/evolution/centotres.webp';
import img104 from './imgs/evolution/centoquatro.webp';
import img105 from './imgs/evolution/centocinco.webp';
import img106 from './imgs/evolution/centoseis.webp';
import img107 from './imgs/evolution/centosete.webp';
import img108 from './imgs/evolution/centooito.webp'; 
import img109 from './imgs/evolution/centonove.webp';
import img110 from './imgs/evolution/centodez.webp';
import img111 from './imgs/evolution/centoonze.webp';
import img112 from './imgs/evolution/centodoze.webp';
import img113 from './imgs/evolution/centotreze.webp';
import img114 from './imgs/evolution/centocatorze.webp';
import img115 from './imgs/evolution/centoquinze.webp';
import img116 from './imgs/evolution/centodezesseis.webp';
import img117 from './imgs/evolution/centodezessete.webp';
import img118 from './imgs/evolution/centodezoito.webp';
import img119 from './imgs/evolution/centodezenove.webp';
import img120 from './imgs/evolution/530241708_18074052427990875_7234709214182045586_n.webp';
import img121 from './imgs/evolution/532214713_18074134417990875_1934310730736028914_n.webp';
import img122 from './imgs/evolution/532569748_18074165425990875_8950033607045400733_n.webp';
import img123 from './imgs/evolution/532188587_18074298235990875_4438570923791982338_n.webp';
import img124 from './imgs/evolution/532571195_18074427019990875_8737831795465338918_n.webp';
import img125 from './imgs/evolution/534618005_18074495290990875_1533069001869827799_n.webp';
import img126 from './imgs/evolution/534923070_18074593618990875_5117343468443571530_n.webp';
import img127 from './imgs/evolution/534314953_18074648023990875_3511514392098542043_n.webp';
import img128 from './imgs/evolution/534813790_18074733388990875_9218752448751206682_n.webp';
import img129 from './imgs/evolution/536255750_18074871901990875_7028948487189871939_n.webp';
import img130 from './imgs/evolution/536455965_18074911102990875_26416038592030971_n.webp';
import img131 from './imgs/evolution/537004523_18075057355990875_5893915432542529148_n.webp';
import img132 from './imgs/evolution/539171239_18075181777990875_2722072943213422016_n.webp';
import img133 from './imgs/evolution/539341053_18075208816990875_9010181578538243103_n.webp';
import img134 from './imgs/evolution/536192598_18075260431990875_7940723117489534057_n.webp';
import img135 from './imgs/evolution/539846057_18075350128990875_6723005114560664861_n.webp';
import img136 from './imgs/evolution/540328055_18075445756990875_8578326739311613058_n.webp';
import img137 from './imgs/evolution/541159283_18075589636990875_7707271148749783365_n.webp';
import img138 from './imgs/evolution/540279159_18075729790990875_7863086214777120377_n.webp';
import img139 from './imgs/evolution/542286827_18075814792990875_6808377724169299531_n.webp';
import img140 from './imgs/evolution/541180769_18075904636990875_7630950028268340856_n.webp';
import img141 from './imgs/evolution/541616626_18075934156990875_3464626237422169314_n.webp';
import img142 from './imgs/evolution/542458230_18076154911990875_3155079082364847226_n.webp';
import img143 from './imgs/evolution/542759438_18076363465990875_2922883872325179986_n.webp';
import img144 from './imgs/evolution/542945761_18076472875990875_9156971293760877670_n.webp';
import img145 from './imgs/evolution/543422736_18076522897990875_304713626281819664_n.webp';
import img146 from './imgs/evolution/542855696_18076584079990875_3932326913655451733_n.webp';
import img147 from './imgs/evolution/543657539_18076693033990875_7865228829603075719_n.webp';
import img148 from './imgs/evolution/545364243_18076805011990875_3903020512933042815_n.webp';
import img149 from './imgs/evolution/549225517_18077094256990875_440390745870020384_n.webp';
import img150 from './imgs/evolution/550225120_18077219641990875_1368893629688467559_n.webp';
import img151 from './imgs/evolution/548865630_18077301883990875_6927639111876234443_n.webp';
import img152 from './imgs/evolution/551081282_18077382280990875_1390309276406174615_n.webp';
import img153 from './imgs/evolution/551387715_18077609674990875_4428478812053160395_n.webp';
import img154 from './imgs/evolution/550888609_18077691676990875_2187352877739213441_n.webp';
import img155 from './imgs/evolution/553249828_18077869306990875_7451408479897432783_n.webp';
import img156 from './imgs/evolution/553325571_18077970493990875_1370867758966739766_n.webp';
import img157 from './imgs/evolution/553617758_18078138454990875_4921676647276607187_n.webp';
import img158 from './imgs/evolution/554743332_18078325414990875_6253592937180399275_n.webp';
import img159 from './imgs/evolution/556929114_18078435682990875_3768078998052439358_n.webp';
import img160 from './imgs/evolution/557889364_18078541534990875_290202297860194217_n.webp';
import img161 from './imgs/evolution/557719804_18078695071990875_7484141028123931896_n.webp';
import img162 from './imgs/evolution/559606750_18078836563990875_7256520820199897770_n.webp';
import img163 from './imgs/evolution/559226641_18079055845990875_8356466908867738498_n.webp';
import img164 from './imgs/evolution/559813722_18079123021990875_9097618146463419686_n.webp';
import img165 from './imgs/evolution/560924222_18079212559990875_8898940612173394674_n.webp';
import img166 from './imgs/evolution/562534572_18079288285990875_3721596152726191851_n.webp';
import img167 from './imgs/evolution/167.webp';
import img168 from './imgs/evolution/dia168.png';
import img169 from './imgs/evolution/dia169.png';
import img170 from './imgs/evolution/dia170.png';
import img171 from './imgs/evolution/dia171.png';
import img172 from './imgs/evolution/dia172.png';
import img173 from './imgs/evolution/dia173.png';

const evolutionImages = [
  img173, img172, img171, img170, img169, img168, img167, img166,img165, img164, img163, img162, img161, img160, img159, 
  img158, img157, img156, img155, img154, img153, img152, img151, img150, img149, img148, img147, img146, img145, 
  img144, img143, img142, img141, img140, img139, img138, img137, img136, img135, img134, img133,
  img132, img131, img130, img129, img128, img127, img126, img125, img124, img123, img122,
  img121, img120, img119, img118, img117, img116, img115, img114, img113, img112, img111,
  img110, img109, img108, img107, img106, img105, img104, img103, img102, img101, video100,
  img99, img98, img97, img96, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, video50, img47, img48, img49, img50,
  img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
  img61, img62, img63, img64, img65, img66, img67, img68, img69, img70,
  img71, img72, img73, img74, img75, img76, img77, img78, img79, img80,
  img81, img82, img83, img84, img85, img86, img87, img88, img89, img90,
  img91, img92, img93, img94, img95
];

const IMAGES_PER_PAGE = 4;

const Evolution = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(evolutionImages.length / IMAGES_PER_PAGE);
  const startIdx = (page - 1) * IMAGES_PER_PAGE;
  const endIdx = startIdx + IMAGES_PER_PAGE;
  const imagesToShow = evolutionImages.slice(startIdx, endIdx);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderMedia = (src, idx) => {
    if (src === video50 || src === video100) {
      return (
        <video 
          key={idx} 
          src={src} 
          controls
          style={{ width: '100%', maxWidth: 180, borderRadius: 10, background: '#fff', boxShadow: '0 2px 8px rgba(53,69,244,0.08)' }}
        />
      );
    } else {
      return (
        <img 
          key={idx} 
          src={src} 
          alt="evolution" 
          style={{ width: '100%', maxWidth: 180, borderRadius: 10, background: '#fff', boxShadow: '0 2px 8px rgba(53,69,244,0.08)' }} 
        />
      );
    }
  };

  return (
    <div className="evolution-wrapper">
      <h2 style={{ textAlign: 'center', marginBottom: 32, fontWeight: 600, fontSize: '2rem' }}>Still rising. Still evolving.</h2>
      <div className="evolution-grid">
        {imagesToShow.map((src, idx) => renderMedia(src, idx))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 32 }}>
        <button 
          onClick={handleBack} 
          disabled={page === 1}
          style={{ 
            padding: '10px 28px', 
            fontSize: 18, 
            borderRadius: 8, 
            border: 'none', 
            background: page === 1 ? '#ccc' : '#ff4d4d', 
            color: '#fff', 
            fontWeight: 400, 
            cursor: page === 1 ? 'not-allowed' : 'pointer', 
            boxShadow: '0 2px 8px rgba(255,0,0,0.08)',
            opacity: page === 1 ? 0.6 : 1
          }}
        >
          Back
        </button>
        <span style={{ display: 'flex', alignItems: 'center', fontSize: 16, fontWeight: 500 }}>
          {page} / {totalPages}
        </span>
        <button 
          onClick={handleNext} 
          disabled={page === totalPages}
          style={{ 
            padding: '10px 28px', 
            fontSize: 18, 
            borderRadius: 8, 
            border: 'none', 
            background: page === totalPages ? '#ccc' : '#009e2a', 
            color: '#fff', 
            fontWeight: 400, 
            cursor: page === totalPages ? 'not-allowed' : 'pointer', 
            boxShadow: '0 2px 8px rgba(0,158,42,0.08)',
            opacity: page === totalPages ? 0.6 : 1
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Evolution; 