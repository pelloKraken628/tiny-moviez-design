import React from 'react'
import PropTypes from 'prop-types'

const HomeIcon = ({ selected }) => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.9049C12.9817 23.0325 10.9957 23.0317 9 22.9024V22.8985V22.8841V22.8697V22.8551V22.8404V22.8257V22.8109V22.7959V22.7809V22.7659V22.7507V22.7355V22.7201V22.7047V22.6892V22.6737V22.658V22.6423V22.6265V22.6106V22.5947V22.5786V22.5625V22.5463V22.5301V22.5137V22.4973V22.4809V22.4643V22.4477V22.431V22.4142V22.3974V22.3805V22.3635V22.3464V22.3293V22.3121V22.2949V22.2776V22.2602V22.2428V22.2252V22.2077V22.19V22.1723V22.1546V22.1367V22.1189V22.1009V22.0829V22.0648V22.0467V22.0285V22.0103V21.992V21.9736V21.9552V21.9367V21.9182V21.8996V21.881V21.8623V21.8435V21.8247V21.8059V21.787V21.768V21.749V21.73V21.7109V21.6917V21.6725V21.6533V21.634V21.6147V21.5953V21.5759V21.5564V21.5369V21.5173V21.4977V21.4781V21.4584V21.4386V21.4189V21.399V21.3792V21.3593V21.3394V21.3194V21.2994V21.2794V21.2593V21.2392V21.219V21.1988V21.1786V21.1584V21.1381V21.1178V21.0974V21.077V21.0566V21.0362V21.0157V20.9952V20.9747V20.9541V20.9335V20.9129V20.8923V20.8716V20.8509V20.8302V20.8094V20.7887V20.7679V20.7471V20.7262V20.7054V20.6845V20.6636V20.6427V20.6218V20.6008V20.5798V20.5589V20.5379V20.5168V20.4958V20.4747V20.4537V20.4326V20.4115V20.3904V20.3693V20.3481V20.327V20.3058V20.2847V20.2635V20.2423V20.2211V20.1999V20.1787V20.1575V20.1362V20.115V20.0938V20.0725V20.0513V20.0301V20.0088V19.9876V19.9663V19.945V19.9238V19.9025V19.8813V19.86V19.8388V19.8175V19.7962V19.775V19.7538V19.7325V19.7113V19.69V19.6688V19.6476V19.6264V19.6052V19.584V19.5628V19.5416V19.5205V19.4993V19.4781V19.457V19.4359V19.4148V19.3937V19.3726V19.3515V19.3305V19.3094V19.2884V19.2674V19.2464V19.2254V19.2044V19.1835V19.1626V19.1417V19.1208V19.0999V19.0791V19.0583V19.0375V19.0167V18.996V18.9753V18.9546V18.9339V18.9132V18.8926V18.872V18.8514V18.8309V18.8104V18.7899V18.7695V18.749V18.7287V18.7083V18.688V18.6677V18.6474V18.6272V18.607V18.5868V18.5667V18.5466V18.5266V18.5065V18.4866V18.4666V18.4467V18.4268V18.407V18.3872V18.3675V18.3478V18.3281V18.3085V18.2889V18.2694V18.2499V18.2305V18.2111V18.1917V18.1724V18.1532V18.134V18.1148V18.0957V18.0766V18.0576V18.0386V18.0197V18.0009V17.9821V17.9633V17.9446V17.9259V17.9073V17.8888V17.8703V17.8519V17.8335V17.8152V17.7969V17.7787V17.7606V17.7425V17.7245V17.7065V17.6886V17.6707V17.653V17.6352V17.6176V17.6V17.5825V17.565V17.5476V17.5303V17.513V17.4958V17.4786V17.4616V17.4446V17.4277V17.4108V17.394V17.3773V17.3606V17.3441V17.3276V17.3111V17.2948V17.2785V17.2623V17.2462V17.2301V17.2141V17.1982V17.1824V17.1667V17.151V17.1354V17.1199V17.1045V17.0891V17.0738V17.0587V17.0436V17.0285V17.0136V16.9987V16.984V16.9693V16.9547V16.9402V16.9258V16.9114V16.8972V16.883V16.8689V16.855V16.8411V16.8273V16.8136V16.7999V16.7864V16.773V16.7596V16.7464V16.7333V16.7202V16.7072V16.6944V16.6816V16.6689V16.6564V16.6439V16.6315V16.6193V16.6071V16.595V16.583V16.5712V16.5594V16.5477V16.5362V16.5247V16.5134V16.5021V16.491V16.48V16.469V16.4582V16.4475V16.4369V16.4264V16.416V16.4057V16.3956V16.3855V16.3756V16.3658V16.356V16.3464V16.337V16.3276V16.3183V16.3092V16.3002V16.2912V16.2825V16.2738V16.2652V16.2568V16.2485V16.2403V16.2322V16.2242V16.2164V16.2087V16.2011V16.1937V16.1863V16.1791V16.172V16.1651V16.1582V16.1515V16.1449V16.1385V16.1321V16.1259V16.1199V16.1139C9 15.9373 9.09814 15.6775 9.33288 15.4422C9.56776 15.2069 9.826 15.1095 10 15.1095H10.0059H10.0118H10.0177H10.0236H10.0296H10.0356H10.0416H10.0476H10.0536H10.0597H10.0658H10.0719H10.0781H10.0842H10.0904H10.0966H10.1028H10.1091H10.1154H10.1216H10.128H10.1343H10.1406H10.147H10.1534H10.1598H10.1662H10.1727H10.1792H10.1857H10.1922H10.1987H10.2053H10.2119H10.2185H10.2251H10.2317H10.2384H10.245H10.2517H10.2584H10.2652H10.2719H10.2787H10.2855H10.2923H10.2991H10.306H10.3128H10.3197H10.3266H10.3335H10.3405H10.3474H10.3544H10.3614H10.3684H10.3754H10.3825H10.3895H10.3966H10.4037H10.4108H10.418H10.4251H10.4323H10.4395H10.4467H10.4539H10.4611H10.4684H10.4756H10.4829H10.4902H10.4975H10.5049H10.5122H10.5196H10.527H10.5344H10.5418H10.5492H10.5566H10.5641H10.5716H10.5791H10.5866H10.5941H10.6016H10.6092H10.6167H10.6243H10.6319H10.6395H10.6471H10.6548H10.6624H10.6701H10.6778H10.6855H10.6932H10.7009H10.7086H10.7164H10.7242H10.7319H10.7397H10.7475H10.7553H10.7632H10.771H10.7789H10.7867H10.7946H10.8025H10.8104H10.8183H10.8263H10.8342H10.8422H10.8501H10.8581H10.8661H10.8741H10.8821H10.8902H10.8982H10.9062H10.9143H10.9224H10.9305H10.9386H10.9467H10.9548H10.9629H10.9711H10.9792H10.9874H10.9955H11.0037H11.0119H11.0201H11.0283H11.0366H11.0448H11.053H11.0613H11.0695H11.0778H11.0861H11.0944H11.1027H11.111H11.1193H11.1277H11.136H11.1443H11.1527H11.1611H11.1694H11.1778H11.1862H11.1946H11.203H11.2114H11.2198H11.2283H11.2367H11.2452H11.2536H11.2621H11.2705H11.279H11.2875H11.296H11.3045H11.313H11.3215H11.33H11.3386H11.3471H11.3556H11.3642H11.3727H11.3813H11.3899H11.3984H11.407H11.4156H11.4242H11.4328H11.4414H11.45H11.4586H11.4672H11.4759H11.4845H11.4931H11.5018H11.5104H11.5191H11.5277H11.5364H11.5451H11.5537H11.5624H11.5711H11.5798H11.5885H11.5971H11.6058H11.6145H11.6232H11.632H11.6407H11.6494H11.6581H11.6668H11.6756H11.6843H11.693H11.7018H11.7105H11.7192H11.728H11.7367H11.7455H11.7542H11.763H11.7717H11.7805H11.7893H11.798H11.8068H11.8156H11.8243H11.8331H11.8419H11.8507H11.8594H11.8682H11.877H11.8858H11.8946H11.9033H11.9121H11.9209H11.9297H11.9385H11.9473H11.9561H11.9648H11.9736H11.9824H11.9912H12H12.0088H12.0176H12.0264H12.0351H12.0439H12.0527H12.0615H12.0703H12.0791H12.0879H12.0967H12.1054H12.1142H12.123H12.1318H12.1406H12.1493H12.1581H12.1669H12.1757H12.1844H12.1932H12.202H12.2107H12.2195H12.2282H12.237H12.2458H12.2545H12.2633H12.272H12.2808H12.2895H12.2982H12.307H12.3157H12.3244H12.3332H12.3419H12.3506H12.3593H12.368H12.3767H12.3854H12.3941H12.4028H12.4115H12.4202H12.4289H12.4376H12.4463H12.4549H12.4636H12.4723H12.4809H12.4896H12.4982H12.5069H12.5155H12.5241H12.5327H12.5414H12.55H12.5586H12.5672H12.5758H12.5844H12.593H12.6015H12.6101H12.6187H12.6272H12.6358H12.6443H12.6529H12.6614H12.6699H12.6785H12.687H12.6955H12.704H12.7125H12.721H12.7294H12.7379H12.7464H12.7548H12.7633H12.7717H12.7801H12.7886H12.797H12.8054H12.8138H12.8222H12.8306H12.8389H12.8473H12.8557H12.864H12.8723H12.8807H12.889H12.8973H12.9056H12.9139H12.9222H12.9304H12.9387H12.947H12.9552H12.9634H12.9717H12.9799H12.9881H12.9963H13.0044H13.0126H13.0208H13.0289H13.0371H13.0452H13.0533H13.0614H13.0695H13.0776H13.0857H13.0937H13.1018H13.1098H13.1179H13.1259H13.1339H13.1419H13.1499H13.1578H13.1658H13.1737H13.1817H13.1896H13.1975H13.2054H13.2133H13.2211H13.229H13.2368H13.2447H13.2525H13.2603H13.2681H13.2758H13.2836H13.2914H13.2991H13.3068H13.3145H13.3222H13.3299H13.3376H13.3452H13.3528H13.3605H13.3681H13.3757H13.3833H13.3908H13.3984H13.4059H13.4134H13.4209H13.4284H13.4359H13.4433H13.4508H13.4582H13.4656H13.473H13.4804H13.4878H13.4951H13.5025H13.5098H13.5171H13.5244H13.5316H13.5389H13.5461H13.5533H13.5605H13.5677H13.5749H13.582H13.5892H13.5963H13.6034H13.6105H13.6175H13.6246H13.6316H13.6386H13.6456H13.6526H13.6595H13.6665H13.6734H13.6803H13.6872H13.694H13.7009H13.7077H13.7145H13.7213H13.7281H13.7348H13.7415H13.7483H13.755H13.7616H13.7683H13.7749H13.7815H13.7881H13.7947H13.8013H13.8078H13.8143H13.8208H13.8273H13.8337H13.8402H13.8466H13.853H13.8594H13.8657H13.872H13.8783H13.8846H13.8909H13.8972H13.9034H13.9096H13.9158H13.9219H13.9281H13.9342H13.9403H13.9463H13.9524H13.9584H13.9644H13.9704H13.9764H13.9823H13.9882H13.9941H14C14.174 15.1095 14.4322 15.2069 14.6671 15.4422C14.9019 15.6775 15 15.9373 15 16.1139V20.3502V20.3713V20.3925V20.4136V20.4347V20.4558V20.4769V20.498V20.519V20.54V20.5611V20.5821V20.603V20.624V20.6449V20.6659V20.6868V21.0182V21.6561V22.7694V22.9049ZM7 22.7201V22.7305C6.66815 22.695 6.33557 22.656 6.00208 22.6135C4.54036 22.427 3.60663 22.0692 2.98443 21.5644C2.38303 21.0765 1.96249 20.361 1.71205 19.2165C0.731983 14.7378 0.979718 10.7505 1.19878 9.21903C1.22156 9.18083 1.26188 9.12096 1.3271 9.03762C1.47501 8.84861 1.70084 8.60214 2.00458 8.30278C2.60899 7.7071 3.44945 6.97258 4.4089 6.17899C6.32335 4.59548 8.64444 2.83178 10.3366 1.57188C11.3568 0.812318 12.7404 0.80911 13.7633 1.5639C15.4695 2.82291 17.8111 4.58864 19.7304 6.17389C20.6926 6.96861 21.53 7.70271 22.1245 8.29655C22.4236 8.59528 22.6406 8.8382 22.778 9.02132C22.8258 9.08503 22.8572 9.13255 22.8767 9.16498C22.9852 10.7948 23.2496 14.7791 22.3719 19.2371C22.1475 20.3774 21.7303 21.0875 21.1279 21.5714C20.5005 22.0755 19.5539 22.4301 18.0887 22.6131C17.7241 22.6586 17.3613 22.7001 17 22.7376V21.6561V21.342V21.0182V20.3502V16.1139C17 15.2884 16.5981 14.546 16.0829 14.0296C15.5678 13.5133 14.826 13.1095 14 13.1095H13.9941H13.9882H13.9823H13.9764H13.9704H13.9644H13.9584H13.9524H13.9463H13.9403H13.9342H13.9281H13.9219H13.9158H13.9096H13.9034H13.8972H13.8909H13.8846H13.8783H13.872H13.8657H13.8594H13.853H13.8466H13.8402H13.8337H13.8273H13.8208H13.8143H13.8078H13.8013H13.7947H13.7881H13.7815H13.7749H13.7683H13.7616H13.755H13.7483H13.7415H13.7348H13.7281H13.7213H13.7145H13.7077H13.7009H13.694H13.6872H13.6803H13.6734H13.6665H13.6595H13.6526H13.6456H13.6386H13.6316H13.6246H13.6175H13.6105H13.6034H13.5963H13.5892H13.582H13.5749H13.5677H13.5605H13.5533H13.5461H13.5389H13.5316H13.5244H13.5171H13.5098H13.5025H13.4951H13.4878H13.4804H13.473H13.4656H13.4582H13.4508H13.4433H13.4359H13.4284H13.4209H13.4134H13.4059H13.3984H13.3908H13.3833H13.3757H13.3681H13.3605H13.3528H13.3452H13.3376H13.3299H13.3222H13.3145H13.3068H13.2991H13.2914H13.2836H13.2758H13.2681H13.2603H13.2525H13.2447H13.2368H13.229H13.2211H13.2133H13.2054H13.1975H13.1896H13.1817H13.1737H13.1658H13.1578H13.1499H13.1419H13.1339H13.1259H13.1179H13.1098H13.1018H13.0937H13.0857H13.0776H13.0695H13.0614H13.0533H13.0452H13.0371H13.0289H13.0208H13.0126H13.0044H12.9963H12.9881H12.9799H12.9717H12.9634H12.9552H12.947H12.9387H12.9304H12.9222H12.9139H12.9056H12.8973H12.889H12.8807H12.8723H12.864H12.8557H12.8473H12.8389H12.8306H12.8222H12.8138H12.8054H12.797H12.7886H12.7801H12.7717H12.7633H12.7548H12.7464H12.7379H12.7294H12.721H12.7125H12.704H12.6955H12.687H12.6785H12.6699H12.6614H12.6529H12.6443H12.6358H12.6272H12.6187H12.6101H12.6015H12.593H12.5844H12.5758H12.5672H12.5586H12.55H12.5414H12.5327H12.5241H12.5155H12.5069H12.4982H12.4896H12.4809H12.4723H12.4636H12.4549H12.4463H12.4376H12.4289H12.4202H12.4115H12.4028H12.3941H12.3854H12.3767H12.368H12.3593H12.3506H12.3419H12.3332H12.3244H12.3157H12.307H12.2982H12.2895H12.2808H12.272H12.2633H12.2545H12.2458H12.237H12.2282H12.2195H12.2107H12.202H12.1932H12.1844H12.1757H12.1669H12.1581H12.1493H12.1406H12.1318H12.123H12.1142H12.1054H12.0967H12.0879H12.0791H12.0703H12.0615H12.0527H12.0439H12.0351H12.0264H12.0176H12.0088H12H11.9912H11.9824H11.9736H11.9648H11.9561H11.9473H11.9385H11.9297H11.9209H11.9121H11.9033H11.8946H11.8858H11.877H11.8682H11.8594H11.8507H11.8419H11.8331H11.8243H11.8156H11.8068H11.798H11.7893H11.7805H11.7717H11.763H11.7542H11.7455H11.7367H11.728H11.7192H11.7105H11.7018H11.693H11.6843H11.6756H11.6668H11.6581H11.6494H11.6407H11.632H11.6232H11.6145H11.6058H11.5971H11.5885H11.5798H11.5711H11.5624H11.5537H11.5451H11.5364H11.5277H11.5191H11.5104H11.5018H11.4931H11.4845H11.4759H11.4672H11.4586H11.45H11.4414H11.4328H11.4242H11.4156H11.407H11.3984H11.3899H11.3813H11.3727H11.3642H11.3556H11.3471H11.3386H11.33H11.3215H11.313H11.3045H11.296H11.2875H11.279H11.2705H11.2621H11.2536H11.2452H11.2367H11.2283H11.2198H11.2114H11.203H11.1946H11.1862H11.1778H11.1694H11.1611H11.1527H11.1443H11.136H11.1277H11.1193H11.111H11.1027H11.0944H11.0861H11.0778H11.0695H11.0613H11.053H11.0448H11.0366H11.0283H11.0201H11.0119H11.0037H10.9955H10.9874H10.9792H10.9711H10.9629H10.9548H10.9467H10.9386H10.9305H10.9224H10.9143H10.9062H10.8982H10.8902H10.8821H10.8741H10.8661H10.8581H10.8501H10.8422H10.8342H10.8263H10.8183H10.8104H10.8025H10.7946H10.7867H10.7789H10.771H10.7632H10.7553H10.7475H10.7397H10.7319H10.7242H10.7164H10.7086H10.7009H10.6932H10.6855H10.6778H10.6701H10.6624H10.6548H10.6471H10.6395H10.6319H10.6243H10.6167H10.6092H10.6016H10.5941H10.5866H10.5791H10.5716H10.5641H10.5566H10.5492H10.5418H10.5344H10.527H10.5196H10.5122H10.5049H10.4975H10.4902H10.4829H10.4756H10.4684H10.4611H10.4539H10.4467H10.4395H10.4323H10.4251H10.418H10.4108H10.4037H10.3966H10.3895H10.3825H10.3754H10.3684H10.3614H10.3544H10.3474H10.3405H10.3335H10.3266H10.3197H10.3128H10.306H10.2991H10.2923H10.2855H10.2787H10.2719H10.2652H10.2584H10.2517H10.245H10.2384H10.2317H10.2251H10.2185H10.2119H10.2053H10.1987H10.1922H10.1857H10.1792H10.1727H10.1662H10.1598H10.1534H10.147H10.1406H10.1343H10.128H10.1216H10.1154H10.1091H10.1028H10.0966H10.0904H10.0842H10.0781H10.0719H10.0658H10.0597H10.0536H10.0476H10.0416H10.0356H10.0296H10.0236H10.0177H10.0118H10.0059H10C9.17399 13.1095 8.43224 13.5133 7.91711 14.0296C7.40185 14.546 7 15.2884 7 16.1139V16.1199V16.1259V16.1321V16.1385V16.1449V16.1515V16.1582V16.1651V16.172V16.1791V16.1863V16.1937V16.2011V16.2087V16.2164V16.2242V16.2322V16.2403V16.2485V16.2568V16.2652V16.2738V16.2825V16.2912V16.3002V16.3092V16.3183V16.3276V16.337V16.3464V16.356V16.3658V16.3756V16.3855V16.3956V16.4057V16.416V16.4264V16.4369V16.4475V16.4582V16.469V16.48V16.491V16.5021V16.5134V16.5247V16.5362V16.5477V16.5594V16.5712V16.583V16.595V16.6071V16.6193V16.6315V16.6439V16.6564V16.6689V16.6816V16.6944V16.7072V16.7202V16.7333V16.7464V16.7596V16.773V16.7864V16.7999V16.8136V16.8273V16.8411V16.855V16.8689V16.883V16.8972V16.9114V16.9258V16.9402V16.9547V16.9693V16.984V16.9987V17.0136V17.0285V17.0436V17.0587V17.0738V17.0891V17.1045V17.1199V17.1354V17.151V17.1667V17.1824V17.1982V17.2141V17.2301V17.2462V17.2623V17.2785V17.2948V17.3111V17.3276V17.3441V17.3606V17.3773V17.394V17.4108V17.4277V17.4446V17.4616V17.4786V17.4958V17.513V17.5303V17.5476V17.565V17.5825V17.6V17.6176V17.6352V17.653V17.6707V17.6886V17.7065V17.7245V17.7425V17.7606V17.7787V17.7969V17.8152V17.8335V17.8519V17.8703V17.8888V17.9073V17.9259V17.9446V17.9633V17.9821V18.0009V18.0197V18.0386V18.0576V18.0766V18.0957V18.1148V18.134V18.1532V18.1724V18.1917V18.2111V18.2305V18.2499V18.2694V18.2889V18.3085V18.3281V18.3478V18.3675V18.3872V18.407V18.4268V18.4467V18.4666V18.4866V18.5065V18.5266V18.5466V18.5667V18.5868V18.607V18.6272V18.6474V18.6677V18.688V18.7083V18.7287V18.749V18.7695V18.7899V18.8104V18.8309V18.8514V18.872V18.8926V18.9132V18.9339V18.9546V18.9753V18.996V19.0167V19.0375V19.0583V19.0791V19.0999V19.1208V19.1417V19.1626V19.1835V19.2044V19.2254V19.2464V19.2674V19.2884V19.3094V19.3305V19.3515V19.3726V19.3937V19.4148V19.4359V19.457V19.4781V19.4993V19.5205V19.5416V19.5628V19.584V19.6052V19.6264V19.6476V19.6688V19.69V19.7113V19.7325V19.7538V19.775V19.7962V19.8175V19.8388V19.86V19.8813V19.9025V19.9238V19.945V19.9663V19.9876V20.0088V20.0301V20.0513V20.0725V20.0938V20.115V20.1362V20.1575V20.1787V20.1999V20.2211V20.2423V20.2635V20.2847V20.3058V20.327V20.3481V20.3693V20.3904V20.4115V20.4326V20.4537V20.4747V20.4958V20.5168V20.5379V20.5589V20.5798V20.6008V20.6218V20.6427V20.6636V20.6845V20.7054V20.7262V20.7471V20.7679V20.7887V20.8094V20.8302V20.8509V20.8716V20.8923V20.9129V20.9335V20.9541V20.9747V20.9952V21.0157V21.0362V21.0566V21.077V21.0974V21.1178V21.1381V21.1584V21.1786V21.1988V21.219V21.2392V21.2593V21.2794V21.2994V21.3194V21.3394V21.3593V21.3792V21.399V21.4189V21.4386V21.4584V21.4781V21.4977V21.5173V21.5369V21.5564V21.5759V21.5953V21.6147V21.634V21.6533V21.6725V21.6917V21.7109V21.73V21.749V21.768V21.787V21.8059V21.8247V21.8435V21.8623V21.881V21.8996V21.9182V21.9367V21.9552V21.9736V21.992V22.0103V22.0285V22.0467V22.0648V22.0829V22.1009V22.1189V22.1367V22.1546V22.1723V22.19V22.2077V22.2252V22.2428V22.2602V22.2776V22.2949V22.3121V22.3293V22.3464V22.3635V22.3805V22.3974V22.4142V22.431V22.4477V22.4643V22.4809V22.4973V22.5137V22.5301V22.5463V22.5625V22.5786V22.5947V22.6106V22.6265V22.6423V22.658V22.6737V22.6892V22.7047V22.7201ZM1.18016 9.25341C1.18007 9.25344 1.18083 9.25163 1.1827 9.2479C1.18118 9.25152 1.18025 9.25338 1.18016 9.25341ZM22.9016 9.2113C22.9014 9.21125 22.9003 9.20897 22.8986 9.20458C22.9008 9.20915 22.9017 9.21135 22.9016 9.2113Z" stroke={selected ? '#00B9AE' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}

export default HomeIcon

HomeIcon.propTypes = {
  selected: PropTypes.bool.isRequired
}
