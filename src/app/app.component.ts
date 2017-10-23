import { Component } from '@angular/core';

import { icon, latLng, marker, point, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });
  googleHybrid = tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });

  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });
  paradise = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  route = polyline([[ 46.78465227596462,-121.74141269177198 ], [ 46.784655125811696, -121.74141042865813 ], [ 46.784653281793, -121.74141059629619 ], [ 46.785032730549574, -121.74158443696797 ], [ 46.785417879000306, -121.74137857742608 ], [ 46.785674365237355, -121.74095219001174 ], [ 46.78640996105969, -121.74046059139073 ], [ 46.78661523386836, -121.74025506712496 ], [ 46.78674515336752, -121.73997418954968 ], [ 46.787187634035945, -121.73964327201247 ], [ 46.78754847496748, -121.73980697058141 ], [ 46.7879446875304, -121.73974519595504 ], [ 46.78863879293203, -121.73994367942214 ], [ 46.78922485560179, -121.7398021928966 ], [ 46.78977034986019, -121.73989816568792 ], [ 46.79014787077904, -121.73982499167323 ], [ 46.790437046438456, -121.7395262606442 ], [ 46.79130013100803, -121.73890633508563 ], [ 46.79200982674956, -121.73796446062624 ], [ 46.79218609817326, -121.7378752771765 ], [ 46.79228684864938, -121.73771132715046 ], [ 46.79270996712148, -121.73750488087535 ], [ 46.793443970382214, -121.73695092089474 ], [ 46.793961971998215, -121.7364642675966 ], [ 46.79482916370034, -121.73621356487274 ], [ 46.79589718580246, -121.73608163371682 ], [ 46.796407559886575, -121.73589429818094 ], [ 46.79727936163545, -121.73589136451483 ], [ 46.79770616814494, -121.73562188632786 ], [ 46.79844654165208, -121.73482744954526 ], [ 46.798709062859416, -121.73498234711587 ], [ 46.798969488590956, -121.73490582033992 ], [ 46.79905096068978, -121.73498402349651 ], [ 46.79925422184169, -121.73492962494493 ], [ 46.79930476471782, -121.73499693162739 ], [ 46.7993020825088, -121.73499374650419 ], [ 46.799318343400955, -121.7349966801703 ], [ 46.799292862415314, -121.73496625386178 ], [ 46.79932245053351, -121.73498603515327 ], [ 46.79932069033384, -121.73490799963474 ], [ 46.79979954846203, -121.73491428606212 ], [ 46.80047278292477, -121.73470708541572 ], [ 46.80131818167865, -121.7348687723279 ], [ 46.80144768208265, -121.73473223112524 ], [ 46.80148757994175, -121.73470088280737 ], [ 46.802068781107664, -121.73433107323945 ], [ 46.80242576636374, -121.73426661640406 ], [ 46.80290563032031, -121.73456098884344 ], [ 46.80321131832898, -121.73447934910655 ], [ 46.80374499410391, -121.73377493396401 ], [ 46.80404028855264, -121.73355516046286 ], [ 46.804899433627725, -121.73308426514268 ], [ 46.804757779464126, -121.73296742141247 ], [ 46.80422586388886, -121.73275804147124 ], [ 46.80350284092128, -121.73231455497444 ], [ 46.80350577458739, -121.73225931823254 ], [ 46.80366142652929, -121.73214121721685 ], [ 46.80388203822076, -121.73215529881418 ], [ 46.80406543426216, -121.73208086751401 ], [ 46.80434362962842, -121.73174349591136 ], [ 46.8047727830708, -121.73155113123357 ], [ 46.80452442727983, -121.73135658726096 ], [ 46.804514871910214, -121.73127125948668 ], [ 46.80460665374994, -121.7310540843755 ], [ 46.804840257391334, -121.73085819929838 ], [ 46.80509028956294, -121.73047514632344 ], [ 46.80546076968312, -121.72948214225471 ], [ 46.805444257333875, -121.72923797741532 ], [ 46.80563083849847, -121.7289664875716 ], [ 46.80604456923902, -121.72866524197161 ], [ 46.806397028267384, -121.72821102663875 ], [ 46.80668083950877, -121.72804338857532 ], [ 46.80701586417854, -121.72805638052523 ], [ 46.80754124186933, -121.72789486125112 ], [ 46.80775783024728, -121.72752379439771 ], [ 46.80832779966295, -121.72690898180008 ], [ 46.80882476270199, -121.72658217139542 ], [ 46.80888678878546, -121.72660455107689 ], [ 46.80908082984388, -121.72645409591496 ], [ 46.809193985536695, -121.72648787498474 ], [ 46.80956907570362, -121.72613549977541 ], [ 46.8101332616061, -121.72589267604053 ], [ 46.810754695907235, -121.72556008212268 ], [ 46.811003889888525, -121.72566259279847 ], [ 46.811178317293525, -121.72565756365657 ], [ 46.811340590938926, -121.72554071992636 ], [ 46.81180561892688, -121.72540409490466 ], [ 46.811941573396325, -121.72542027197778 ], [ 46.812630062922835, -121.72514526173472 ], [ 46.812823098152876, -121.7250981554389 ], [ 46.813334226608276, -121.72519362531602 ], [ 46.81370822712779, -121.72515464946628 ], [ 46.814496545121074, -121.72528917901218 ], [ 46.81491865776479, -121.72533184289932 ], [ 46.81520003825426, -121.72524265944958 ], [ 46.81523909792304, -121.72528968192637 ], [ 46.81525904685259, -121.72530158422887 ], [ 46.81525259278715, -121.7252982314676 ], [ 46.815258879214525, -121.72529496252537 ], [ 46.81526583619416, -121.72532538883388 ], [ 46.81525435298681, -121.72533519566059 ], [ 46.8152963463217, -121.72525389119983 ], [ 46.815471360459924, -121.72521826811135 ], [ 46.81572558358312, -121.72536352649331 ], [ 46.81692528538406, -121.72561766579747 ], [ 46.81704808026552, -121.72569804824889 ], [ 46.81772517040372, -121.72575496137142 ], [ 46.81812892667949, -121.72588504850864 ], [ 46.81912042200565, -121.72607112675905 ], [ 46.820190120488405, -121.72625217586756 ], [ 46.82177019305527, -121.7267837561667 ], [ 46.82313325814903, -121.72719748690724 ], [ 46.82404948398471, -121.72739529982209 ], [ 46.824682569131255, -121.72767072916031 ], [ 46.825626036152244, -121.72796635888517 ], [ 46.82612174190581, -121.72809988260269 ], [ 46.82621645741165, -121.72804028727114 ], [ 46.826189048588276, -121.72804766334593 ], [ 46.826189551502466, -121.72806216403842 ], [ 46.827075853943825, -121.72860614955425 ], [ 46.828014040365815, -121.72851855866611 ], [ 46.828346718102694, -121.7284260224551 ], [ 46.82889187708497, -121.72842878848314 ], [ 46.82913796976209, -121.7284846957773 ], [ 46.829919246956706, -121.72909825108945 ], [ 46.832751743495464, -121.73102667555213 ], [ 46.83444648049772, -121.7320916801691 ], [ 46.83509096503258, -121.73231958411634 ], [ 46.83524795807898, -121.73244246281683 ], [ 46.835531098768115, -121.7324442230165 ], [ 46.83588012121618, -121.7320488486439 ], [ 46.83601263910532, -121.732138954103 ], [ 46.83602194301784, -121.73213861882687 ], [ 46.836031917482615, -121.73213669098914 ], [ 46.83603258803487, -121.73213493078947 ], [ 46.83603644371033, -121.73205538652837 ], [ 46.836039796471596, -121.73205588944256 ], [ 46.83606494218111, -121.73212017863989 ], [ 46.83603962883353, -121.73201699741185 ], [ 46.83605806902051, -121.73205974511802 ], [ 46.83603812009096, -121.7320850584656 ], [ 46.836034432053566, -121.73210048116744 ], [ 46.836017081514, -121.73223903402686 ], [ 46.83607089333236, -121.73210743814707 ], [ 46.83609922416508, -121.73214498907328 ], [ 46.83606058359146, -121.7322111222893 ], [ 46.8360257986933, -121.73224263824522 ], [ 46.836026553064585, -121.73225621692836 ], [ 46.8360239546746, -121.7323131300509 ], [ 46.83662426657975, -121.73265469260514 ], [ 46.837129946798086, -121.7331559304148 ], [ 46.8377803824842, -121.73338618129492 ], [ 46.83826829306781, -121.73346186988056 ], [ 46.83849829249084, -121.73346656374633 ], [ 46.838671043515205, -121.73341585323215 ], [ 46.838793251663446, -121.73333806917071 ], [ 46.83922885917127, -121.73295811749995 ], [ 46.83957377448678, -121.7329067364335 ], [ 46.840582536533475, -121.73223048448563 ], [ 46.84111579321325, -121.7317272350192 ], [ 46.84114705771208, -121.73180283978581 ], [ 46.84112509712577, -121.73172027803957 ], [ 46.841504629701376, -121.73108962364495 ], [ 46.84163714759052, -121.73050398007035 ], [ 46.84170135296881, -121.72969244420528 ], [ 46.84166614897549, -121.72907528467476 ], [ 46.841719122603536, -121.72905114479363 ], [ 46.84192665852606, -121.72915407456458 ], [ 46.84197242371738, -121.72910059802234 ], [ 46.84198072180152, -121.72915315255523 ], [ 46.842196974903345, -121.72923613339663 ], [ 46.84228573925793, -121.72922649420798 ], [ 46.84231138788164, -121.72914468683302 ], [ 46.84247609227896, -121.72918408177793 ], [ 46.84253199957311, -121.72900814563036 ], [ 46.84291262179613, -121.72974172979593 ], [ 46.8429659307003, -121.73009066842496 ], [ 46.84316013939679, -121.73052501864731 ], [ 46.843540258705616, -121.73100186511874 ], [ 46.84362483210862, -121.73119213432074 ], [ 46.84365467168391, -121.73131266608834 ], [ 46.84372432529926, -121.73153394833207 ], [ 46.843889616429806, -121.73211523331702 ], [ 46.84411056339741, -121.73293204978108 ], [ 46.844306448474526, -121.73327445052564 ], [ 46.84468371793628, -121.73488813452423 ], [ 46.844903994351625, -121.73564158380032 ], [ 46.84493727050722, -121.73572934232652 ], [ 46.84527933597565, -121.7366125434637 ], [ 46.84540783055127, -121.73704572021961 ], [ 46.84584352187812, -121.73775566741824 ], [ 46.845853328704834, -121.73802522942424 ], [ 46.84650057926774, -121.73801525495946 ], [ 46.84615365229547, -121.73787276260555 ], [ 46.84652547352016, -121.73797485418618 ], [ 46.847659880295396, -121.73742349259555 ], [ 46.848053243011236, -121.73708964139223 ], [ 46.84832062572241, -121.73657122068107 ], [ 46.848755395039916, -121.73643367365003 ], [ 46.84887642972171, -121.73630375415087 ], [ 46.848914567381144, -121.73668814823031 ], [ 46.84883929789066, -121.73683122731745 ], [ 46.84892403893173, -121.73712216317654 ], [ 46.84869496151805, -121.737707471475 ], [ 46.84870099648833, -121.73777796328068 ], [ 46.84892009943724, -121.73785373568535 ], [ 46.84900383464992, -121.7381411511451 ], [ 46.849019257351756, -121.73820594325662 ], [ 46.849027974531054, -121.73822497017682 ], [ 46.84894013218582, -121.73877574503422 ], [ 46.84897743165493, -121.73896257765591 ], [ 46.84887634590268, -121.73920422792435 ], [ 46.84890174306929, -121.73937186598778 ], [ 46.84892705641687, -121.73949616961181 ], [ 46.84896318241954, -121.74005415290594 ], [ 46.84884265065193, -121.74036587588489 ], [ 46.84905865229666, -121.74049378372729 ], [ 46.848952788859606, -121.74090022221208 ], [ 46.84895245358348, -121.74129333347082 ], [ 46.84918764978647, -121.74140179529786 ], [ 46.849312875419855, -121.74177059903741 ], [ 46.849458971992135, -121.74184301868081 ], [ 46.84946886263788, -121.74182935617864 ], [ 46.849457547068596, -121.74184117466211 ], [ 46.84943868778646, -121.74187906086445 ], [ 46.84947045519948, -121.74184544943273 ], [ 46.84944849461317, -121.7418334633112 ], [ 46.849465845152736, -121.74183966591954 ], [ 46.84946173802018, -121.74184083938599 ], [ 46.849403819069266, -121.7420763708651 ], [ 46.8495540227741, -121.74278288148344 ], [ 46.84951839968562, -121.7427571490407 ], [ 46.84979408048093, -121.74325201660395 ], [ 46.849671537056565, -121.74322804436088 ], [ 46.849690144881606, -121.74328059889376 ], [ 46.84987739659846, -121.7433079238981 ], [ 46.8499340582639, -121.74338947981596 ], [ 46.84991695918143, -121.74334606155753 ], [ 46.850044280290604, -121.74342677928507 ], [ 46.85009482316673, -121.74347765743732 ], [ 46.85009884648025, -121.74348033964634 ], [ 46.850195825099945, -121.74352291971445 ], [ 46.850402019917965, -121.74359198659658 ], [ 46.85097215697169, -121.74361822195351 ], [ 46.85135596431792, -121.74362006597221 ], [ 46.851428635418415, -121.74363188445568 ], [ 46.85144003480673, -121.74363532103598 ], [ 46.85168587602675, -121.743682930246 ], [ 46.852127434685826, -121.74363976344466 ], [ 46.85303125530481, -121.7432510945946 ], [ 46.85315237380564, -121.7433784995228 ], [ 46.8530975561589, -121.74327255226672 ], [ 46.8530716560781, -121.7432973627001 ], [ 46.853114822879434, -121.74332493916154 ], [ 46.85313854366541, -121.74338109791279 ], [ 46.853057239204645, -121.74332686699927 ], [ 46.85307157225907, -121.74333482980728 ], [ 46.853258069604635, -121.7434960976243 ], [ 46.85327684506774, -121.74348126165569 ], [ 46.85329511761665, -121.74351152032614 ], [ 46.853222865611315, -121.74378544092178 ], [ 46.85341648757458, -121.74383724108338 ], [ 46.853671884164214, -121.74367153085768 ], [ 46.853747656568885, -121.74357899464667 ], [ 46.853867853060365, -121.74368368461728 ], [ 46.85375184752047, -121.74427745863795 ], [ 46.853867936879396, -121.74450184218585 ], [ 46.85375478118658, -121.74462924711406 ], [ 46.85375092551112, -121.74471172504127 ], [ 46.85357448644936, -121.74531161785126 ], [ 46.8535449821502, -121.74527063034475 ], [ 46.85342134907842, -121.74555041827261 ], [ 46.85350273735821, -121.74578553065658 ], [ 46.85380473732948, -121.74633982591331 ], [ 46.85365352779627, -121.74662849865854 ], [ 46.853531654924154, -121.74674056470394 ], [ 46.85370113700628, -121.74749778583646 ], [ 46.85354984365404, -121.74766827374697 ], [ 46.85343408957124, -121.74773566424847 ], [ 46.85343283228576, -121.7477391846478 ], [ 46.85342193581164, -121.74775175750256 ], [ 46.853116331622005, -121.74804093316197 ], [ 46.85317458584905, -121.74819096922874 ], [ 46.853193528950214, -121.74823296256363 ], [ 46.85322881676257, -121.74843915738165 ], [ 46.85315773822367, -121.74850453622639 ], [ 46.8531527929008, -121.74851727671921 ], [ 46.85314994305372, -121.74851995892823 ], [ 46.85297383926809, -121.74873755313456 ], [ 46.85296252369881, -121.74880745820701 ], [ 46.85300895944238, -121.74870209768414 ], [ 46.85299688950181, -121.74869765527546 ], [ 46.852980544790626, -121.7487059533596 ], [ 46.85297979041934, -121.74870586954057 ], [ 46.852989848703146, -121.74871886149049 ], [ 46.852997392416, -121.74870746210217 ], [ 46.852867892012, -121.74891047179699 ], [ 46.85273411683738, -121.74892673268914 ], [ 46.85266764834523, -121.74896403215826 ], [ 46.85266035608947, -121.74895606935024 ], [ 46.852587182074785, -121.74902245402336 ], [ 46.852592546492815, -121.74901708960533 ], [ 46.85259506106377, -121.74900703132153 ], [ 46.85250629670918, -121.74905807711184 ], [ 46.85249011963606, -121.74903477542102 ], [ 46.85250638052821, -121.74908347427845 ], [ 46.85264317318797, -121.7492762580514 ], [ 46.8526847474277, -121.74938069656491 ], [ 46.852704025805, -121.74941137433052 ], [ 46.85272213071585, -121.74957733601332 ], [ 46.85251912102103, -121.74982937984169 ], [ 46.8525240663439, -121.74983038567007 ], [ 46.85240177437663, -121.75002937205136 ], [ 46.85240043327212, -121.75002635456622 ], [ 46.85222617350519, -121.75024042837322 ], [ 46.85222106054425, -121.75024746917188 ], [ 46.85213154181838, -121.75040647387505 ], [ 46.85209097340703, -121.75045073032379 ], [ 46.852042861282825, -121.75048937089741 ], [ 46.85204294510186, -121.75048953853548 ], [ 46.851990055292845, -121.75057679414749 ], [ 46.85195568948984, -121.75065105780959 ], [ 46.8519061524421, -121.75073454156518 ], [ 46.85190573334694, -121.75072959624231 ], [ 46.85178654268384, -121.75092414021492 ], [ 46.85169702395797, -121.75100502558053 ], [ 46.851662239059806, -121.75102991983294 ], [ 46.851658299565315, -121.75103302113712 ], [ 46.85158906504512, -121.751101417467 ], [ 46.85149585828185, -121.75118766725063 ], [ 46.85141019523144, -121.75146552734077 ], [ 46.851411033421755, -121.75146854482591 ], [ 46.85136937536299, -121.7515657749027 ], [ 46.85134339146316, -121.75154574215412 ], [ 46.85129075311124, -121.7516950238496 ], [ 46.85128999873996, -121.75170382484794 ], [ 46.85127692297101, -121.75173793919384 ], [ 46.851273737847805, -121.75174313597381 ], [ 46.85120592825115, -121.75192116759717 ], [ 46.85119645670056, -121.75195938907564 ], [ 46.85119913890958, -121.7519719619304 ], [ 46.85116703622043, -121.75207145512104 ], [ 46.85112051665783, -121.75219005905092 ], [ 46.851080199703574, -121.75223741680384 ], [ 46.85099923051894, -121.75235375761986 ], [ 46.85093108564615, -121.75243824720383 ], [ 46.85085908509791, -121.75248979590833 ], [ 46.85084751807153, -121.75249113701284 ], [ 46.85083477757871, -121.7524796538055 ], [ 46.8508664611727, -121.75249147228897 ], [ 46.85082966461778, -121.75252634100616 ], [ 46.85072413645685, -121.75263027660549 ], [ 46.85071508400142, -121.75263882614672 ], [ 46.85067501850426, -121.75265852361917 ], [ 46.850652722641826, -121.7526831664145 ], [ 46.85064308345318, -121.75269087776542 ], [ 46.850649286061525, -121.75269272178411 ], [ 46.85063277371228, -121.75276597961783 ], [ 46.850558845326304, -121.75281375646591 ], [ 46.85072564519942, -121.7529820650816 ], [ 46.850776355713606, -121.75303193740547 ], [ 46.85077887028456, -121.75303847528994 ], [ 46.85085489414632, -121.75311064347625 ], [ 46.850851541385055, -121.75311466678977 ], [ 46.85090325772762, -121.7531564924866 ], [ 46.85095136985183, -121.75320846028626 ], [ 46.850876938551664, -121.75313998013735 ], [ 46.8508939538151, -121.75314635038376 ], [ 46.851018676534295, -121.75327342003584 ], [ 46.85104633681476, -121.75331113860011 ], [ 46.851056730374694, -121.75332924351096 ], [ 46.851087072864175, -121.753387497738 ], [ 46.85109579004347, -121.75342873670161 ], [ 46.85110132209957, -121.75344918854535 ], [ 46.85109604150057, -121.75344566814601 ], [ 46.85109755024314, -121.75351372919977 ], [ 46.85110442340374, -121.75356812775135 ], [ 46.85110576450825, -121.75356946885586 ], [ 46.85110785998404, -121.75357449799776 ], [ 46.85111607424915, -121.75362302921712 ], [ 46.85110677033663, -121.7537173256278 ], [ 46.85110333375633, -121.75372009165585 ], [ 46.85110014863312, -121.75373517908156 ], [ 46.85112185776234, -121.7537661921233 ], [ 46.85110785998404, -121.75378823652864 ], [ 46.85109461657703, -121.7538486700505 ], [ 46.85109277255833, -121.75385462120175 ], [ 46.85108455829322, -121.75390055403113 ], [ 46.85108455829322, -121.75401228480041 ], [ 46.85107617639005, -121.75407615490258 ], [ 46.851040720939636, -121.75421479158103 ], [ 46.85103829018772, -121.7542376741767 ], [ 46.85101557523012, -121.75431755371392 ], [ 46.851002080366015, -121.75433993339539 ], [ 46.85099679976702, -121.75439894199371 ], [ 46.85099445283413, -121.75441335886717 ], [ 46.85099453665316, -121.75441796891391 ], [ 46.85099973343313, -121.75441629253328 ], [ 46.85097358189523, -121.7545323818922 ], [ 46.85097542591393, -121.75454285927117 ], [ 46.85095648281276, -121.75459172576666 ], [ 46.85094357468188, -121.75465995445848 ], [ 46.850941898301244, -121.75472223199904 ], [ 46.850943490862846, -121.75471954979002 ], [ 46.85092748142779, -121.75485617481172 ], [ 46.8509235419333, -121.75486631691456 ], [ 46.850911136716604, -121.7548053804785 ], [ 46.85090024024248, -121.75486464053392 ], [ 46.85090887360275, -121.75498894415796 ], [ 46.85092278756201, -121.75506471656263 ], [ 46.85092563740909, -121.7551061231643 ], [ 46.85092966072261, -121.75511257722974 ], [ 46.85092119500041, -121.7551127448678 ], [ 46.85091968625784, -121.75511308014393 ], [ 46.85090443119407, -121.7551700770855 ], [ 46.8509026709944, -121.75534668378532 ], [ 46.850897558033466, -121.75534836016595 ], [ 46.85088783502579, -121.75542673096061 ], [ 46.85088196769357, -121.75545732490718 ], [ 46.85088909231126, -121.755541395396 ], [ 46.85090552084148, -121.7556983884424 ], [ 46.85111959464848, -121.75580844283104 ], [ 46.85111959464848, -121.75582068040967 ], [ 46.85111649334431, -121.75581908784807 ], [ 46.851044073700905, -121.75573132932186 ], [ 46.851055389270186, -121.75572764128447 ], [ 46.85102881863713, -121.75569369457662 ], [ 46.851097382605076, -121.75551272928715 ], [ 46.851157899945974, -121.75573845393956 ], [ 46.85111305676401, -121.75585077144206 ], [ 46.85109553858638, -121.75581967458129 ], [ 46.85109863989055, -121.7558170761913 ], [ 46.851096376776695, -121.7558170761913 ], [ 46.85108472593129, -121.75595118664205 ], [ 46.85110869817436, -121.75610046833754 ], [ 46.85110928490758, -121.7562333215028 ], [ 46.851145243272185, -121.75630892626941 ], [ 46.85118463821709, -121.75642342306674 ], [ 46.85136241838336, -121.75719849765301 ], [ 46.85138965956867, -121.75724669359624 ], [ 46.85140013694763, -121.75727385096252 ], [ 46.851416397839785, -121.757304193452 ], [ 46.85142268426716, -121.75751717761159 ], [ 46.851529721170664, -121.75768028944731 ], [ 46.851543886587024, -121.75775203853846 ], [ 46.85164078138769, -121.75798463635147 ], [ 46.85163307003677, -121.75794406794012 ], [ 46.85159292072058, -121.75788681954145 ], [ 46.85166232287884, -121.75813467241824 ], [ 46.851739436388016, -121.7582783382386 ], [ 46.85174153186381, -121.75828219391406 ], [ 46.85179634951055, -121.75827666185796 ], [ 46.851771622896194, -121.75833575427532 ], [ 46.85188092291355, -121.75858427770436 ], [ 46.85185829177499, -121.75859534181654 ], [ 46.85195501893759, -121.75873188301921 ], [ 46.85205887071788, -121.75891578197479 ], [ 46.85218879021704, -121.75911527127028 ], [ 46.85219323262572, -121.75910269841552 ], [ 46.85219733975828, -121.75910429097712 ], [ 46.85224796645343, -121.7592868488282 ], [ 46.85226389206946, -121.75933714024723 ], [ 46.852294486016035, -121.75934359431267 ], [ 46.85236447490752, -121.75947016105056 ], [ 46.852373192086816, -121.75947016105056 ], [ 46.852364894002676, -121.75950997509062 ], [ 46.85236472636461, -121.75951156765223 ], [ 46.85242767445743, -121.75959957763553 ], [ 46.852422561496496, -121.75963503308594 ], [ 46.85241577215493, -121.75972052849829 ], [ 46.85242314822972, -121.75973838195205 ], [ 46.8525277543813, -121.75995212048292 ], [ 46.85252289287746, -121.75995597615838 ], [ 46.8525240663439, -121.75995916128159 ], [ 46.85260855592787, -121.76014414988458 ], [ 46.852612160146236, -121.7601227760315 ], [ 46.85267644934356, -121.76013023592532 ], [ 46.85270109213889, -121.76015697419643 ], [ 46.85270528309047, -121.76016225479543 ], [ 46.85278373770416, -121.76025965251029 ], [ 46.85284534469247, -121.76028714515269 ], [ 46.85283746570349, -121.76032226532698 ], [ 46.85277175158262, -121.7603833694011 ], [ 46.85277493670583, -121.7603904940188 ], [ 46.852771332487464, -121.76040206104517 ], [ 46.852795388549566, -121.7604349181056 ], [ 46.85280678793788, -121.76044656895101 ], [ 46.85282698832452, -121.76046442240477 ], [ 46.85287174768746, -121.76048646681011 ], [ 46.85290209017694, -121.76049283705652 ], [ 46.85290292836726, -121.76049157977104 ], [ 46.85289613902569, -121.76049375906587 ], [ 46.85289639048278, -121.76049459725618 ], [ 46.85289521701634, -121.76049635745585 ], [ 46.8528937920928, -121.76045428030193 ], [ 46.85285749845207, -121.76041019149125 ], [ 46.85281324200332, -121.76037289202213 ], [ 46.85284869745374, -121.76039577461779 ], [ 46.85280444100499, -121.76043449901044 ], [ 46.8528160918504, -121.76042997278273 ]]);

  layersControl = {
    baseLayers: {
      'Google Maps': this.googleMaps,
      'Google Hybrid': this.googleHybrid
    },
    overlays: {
      'Mt. Rainier Summit': this.summit,
      'Mt. Rainier Paradise Start': this.paradise,
      'Mt. Rainier Climb Route': this.route
    }
  };
  layers = [ this.googleMaps, this.route, this.summit, this.paradise ];
  options = { zoom: 7, center: latLng([ 46.879966, -121.726909 ]) };

  fitBounds = this.route.getBounds();
  fitBoundsOptions = {
    padding: point(24, 24),
    maxZoom: 12,
    animate: true
  };


}
