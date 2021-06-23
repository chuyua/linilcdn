function $(a) {
    return document.querySelector(a)
}
function create(a) {
    return document.createElement(a)
}
var maindiv = create("div");
async function cdninfo() {
    fetch("https://cdn.linil.ml/cdn-cgi/trace").then(a=>200 === a.status ? {
        status: "success",
        content: a
    } : {
        status: "failure",
        content: a
    }).then(a=>{
        if ("success" === a.status)
            return a.content.text();
        throw "Can't get trace file"
    }
    ).then(a=>{
        let e = create("pre");
        e.id = "debug-info";
        let n = "Antananarivo, Madagascar - (TNR);Cape Town, South Africa - (CPT);Casablanca, Morocco - (CMN);Dar Es Salaam, Tanzania - (DAR);Djibouti City, Djibouti - (JIB);Durban, South Africa - (DUR);Johannesburg, South Africa - (JNB);Kigali, Rwanda - (KGL);Lagos, Nigeria - (LOS);Luanda, Angola - (LAD);Maputo, MZ - (MPM);Mombasa, Kenya - (MBA);Port Louis, Mauritius - (MRU);Réunion, France - (RUN);Bangalore, India - (BLR);Bangkok, Thailand - (BKK);Bandar Seri Begawan, Brunei - (BWN);Cebu, Philippines - (CEB);Chengdu, China - (CTU);Chennai, India - (MAA);Chittagong, Bangladesh - (CGP);Chongqing, China - (CKG);Colombo, Sri Lanka - (CMB);Dhaka, Bangladesh - (DAC);Dongguan, China - (SZX);Foshan, China - (FUO);Fuzhou, China - (FOC);Guangzhou, China - (CAN);Hangzhou, China - (HGH);Hanoi, Vietnam - (HAN);Hengyang, China - (HNY);Ho Chi Minh City, Vietnam - (SGN);Hong Kong - (HKG);Hyderabad, India - (HYD);Islamabad, Pakistan - (ISB);Jakarta, Indonesia - (CGK);Jinan, China - (TNA);Karachi, Pakistan - (KHI);Kathmandu, Nepal - (KTM);Kolkata, India - (CCU);Kuala Lumpur, Malaysia - (KUL);Lahore, Pakistan - (LHE);Langfang, China - (NAY);Luoyang, China - (LYA);Macau - (MFM);Malé, Maldives - (MLE);Manila, Philippines - (MNL);Mumbai, India - (BOM);Nagpur, India - (NAG);Nanning, China - (NNG);New Delhi, India - (DEL);Osaka, Japan - (KIX);Phnom Penh, Cambodia - (PNH);Qingdao, China - (TAO);Seoul, South Korea - (ICN);Shanghai, China - (SHA);Shenyang, China - (SHE);Shijiazhuang, China - (SJW);Singapore, Singapore - (SIN);Suzhou, China - (SZV);Taipei - (TPE);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuhan, China - (WUH);Wuxi, China - (WUX);Xi'an, China - (XIY);Yerevan, Armenia - (EVN);Zhengzhou, China - (CGO);Zuzhou, China - (CSX);Amsterdam, Netherlands - (AMS);Athens, Greece - (ATH);Barcelona, Spain - (BCN);Belgrade, Serbia - (BEG);Berlin, Germany - (TXL);Brussels, Belgium - (BRU);Bucharest, Romania - (OTP);Budapest, Hungary - (BUD);Chișinău, Moldova - (KIV);Copenhagen, Denmark - (CPH);Cork, Ireland -  (ORK);Dublin, Ireland - (DUB);Düsseldorf, Germany - (DUS);Edinburgh, United Kingdom - (EDI);Frankfurt, Germany - (FRA);Geneva, Switzerland - (GVA);Gothenburg, Sweden - (GOT);Hamburg, Germany - (HAM);Helsinki, Finland - (HEL);Istanbul, Turkey - (IST);Kyiv, Ukraine - (KBP);Lisbon, Portugal - (LIS);London, United Kingdom - (LHR);Luxembourg City, Luxembourg - (LUX);Madrid, Spain - (MAD);Manchester, United Kingdom - (MAN);Marseille, France - (MRS);Milan, Italy - (MXP);Moscow, Russia - (DME);Munich, Germany - (MUC);Nicosia, Cyprus - (LCA);Oslo, Norway - (OSL);Paris, France - (CDG);Prague, Czech Republic - (PRG);Reykjavík, Iceland - (KEF);Riga, Latvia - (RIX);Rome, Italy - (FCO);Saint Petersburg, Russia - (LED);Sofia, Bulgaria - (SOF);Stockholm, Sweden - (ARN);Tallinn, Estonia - (TLL);Thessaloniki, Greece - (SKG);Vienna, Austria - (VIE);Vilnius, Lithuania - (VNO);Warsaw, Poland - (WAW);Zagreb, Croatia - (ZAG);Zürich, Switzerland - (ZRH);Arica, Chile - (ARI);Asunción, Paraguay - (ASU);Bogotá, Colombia - (BOG);Buenos Aires, Argentina - (EZE);Curitiba, Brazil - (CWB);Fortaleza, Brazil - (FOR);Guatemala City, Guatemala - (GUA);Lima, Peru - (LIM);Medellín, Colombia - (MDE);Panama City, Panama - (PTY);Porto Alegre, Brazil - (POA);Quito, Ecuador - (UIO);Rio de Janeiro, Brazil - (GIG);São Paulo, Brazil - (GRU);Santiago, Chile - (SCL);Willemstad, Curaçao - (CUR);St. George's, Grenada - (GND);Amman, Jordan - (AMM);Baghdad, Iraq - (BGW);Baku, Azerbaijan - (GYD);Beirut, Lebanon - (BEY);Doha, Qatar - (DOH);Dubai, United Arab Emirates - (DXB);Kuwait City, Kuwait - (KWI);Manama, Bahrain - (BAH);Muscat, Oman - (MCT);Ramallah - (ZDM);Riyadh, Saudi Arabia - (RUH);Tel Aviv, Israel - (TLV);Ashburn, VA, United States - (IAD);Atlanta, GA, United States - (ATL);Boston, MA, United States - (BOS);Buffalo, NY, United States - (BUF);Calgary, AB, Canada - (YYC);Charlotte, NC, United States - (CLT);Chicago, IL, United States - (ORD);Columbus, OH, United States - (CMH);Dallas, TX, United States - (DFW);Denver, CO, United States - (DEN);Detroit, MI, United States - (DTW);Honolulu, HI, United States - (HNL);Houston, TX, United States - (IAH);Indianapolis, IN, United States - (IND);Jacksonville, FL, United States - (JAX);Kansas City, MO, United States - (MCI);Las Vegas, NV, United States - (LAS);Los Angeles, CA, United States - (LAX);McAllen, TX, United States - (MFE);Memphis, TN, United States - (MEM);Mexico City, Mexico - (MEX);Miami, FL, United States - (MIA);Minneapolis, MN, United States - (MSP);Montgomery, AL, United States - (MGM);Montréal, QC, Canada - (YUL);Nashville, TN, United States - (BNA);Newark, NJ, United States - (EWR);Norfolk, VA, United States - (ORF);Omaha, NE, United States - (OMA);Philadelphia, United States - (PHL);Phoenix, AZ, United States - (PHX);Pittsburgh, PA, United States - (PIT);Port-Au-Prince, Haiti - (PAP);Portland, OR, United States - (PDX);Queretaro, MX, Mexico - (QRO);Richmond, Virginia - (RIC);Sacramento, CA, United States - (SMF);Salt Lake City, UT, United States - (SLC);San Diego, CA, United States - (SAN);San Jose, CA, United States - (SJC);Saskatoon, SK, Canada - (YXE);Seattle, WA, United States - (SEA);St. Louis, MO, United States - (STL);Tampa, FL, United States - (TPA);Toronto, ON, Canada - (YYZ);Vancouver, BC, Canada - (YVR);Tallahassee, FL, United States - (TLH);Winnipeg, MB, Canada - (YWG);Adelaide, SA, Australia - (ADL);Auckland, New Zealand - (AKL);Brisbane, QLD, Australia - (BNE);Melbourne, VIC, Australia - (MEL);Noumea, New caledonia - (NOU);Perth, WA, Australia - (PER);Sydney, NSW, Australia - (SYD)".split(";")
          , t = a.split("colo=")[1].split("\n")[0];
        for (let i in n)
            if (-1 != n[i].indexOf(t)) {
                e.innerHTML += "cdn节点地区: " + n[i] + "<br>",
                e.innerHTML += "IP地址: " + a.split("ip=")[1].split("\n")[0] + "<br>",
                e.innerHTML += "访问协议: " + a.split("visit_scheme=")[1].split("\n")[0] + "<br>",
                e.innerHTML += "User Agent: " + a.split("uag=")[1].split("\n")[0] + "<br>",
                e.innerHTML += "http标准: " + a.split("http=")[1].split("\n")[0] + "<br>",
                e.innerHTML += "访问位置: " + a.split("loc=")[1].split("\n")[0] + "<br>",
                e.innerHTML += "tls标准: " + a.split("tls=")[1].split("\n")[0] + "<br>",
                e.innerHTML += "是否启用warp: " + a.split("warp=")[1].split("\n")[0] + "<br>";
                break
            }
        return e
    }
    ).then(a=>{
        maindiv.append(a),
        $("body").append(maindiv)
    }
    ).catch(a=>{}
    )
}
function networktest() {
    let a = (Math.round(100 * performance.now()) / 100 / 1e3).toFixed(2)
      , e = null
      , n = null;
    fetch("https://cdn.linil.ml/").then(a=>{
        if (200 === a.status)
            return a;
        throw "Can't get response"
    }
    ).then(a=>(e = (Math.round(100 * performance.now()) / 100 / 1e3).toFixed(2),
    a)).then(t=>(n = (e - a).toFixed(2),
    {
        time: (e - a).toFixed(2),
        cache_status: t.headers.get("cf-cache-status")
    })).then(a=>{
        let e = create("div");
        e.append(create("h2").innerText = "速度测试: ");
        let n = create("p");
        n.innerHTML = "加载耗时: " + a.time + "s",
        n.innerHTML += "<br>cloudflare缓存情况: " + a.cache_status.replace("HIT", "命中").replace("DYNAMIC", "动态").replace("BYPASS", "略过").replace("EXPIRED", "过期").replace("MISS", "未命中"),
        e.append(n),
        maindiv.append(e)
    }
    ).catch(a=>{}
    )
}
async function getdns() {
    let a = create("div");
    a.append(create("h3").innerHTML = "IPV4解析情况"),
    await fetch("https://dns.alidns.com/resolve?name=aa.652040231.xyz&type=1").then(a=>{
        if (200 === a.status)
            return a;
        throw "Can't fetch DNS resolve"
    }
    ).then(a=>a.json()).then(a=>{
        let e = create("ul");
        for (let n in a.Answer)
            b = create("li"),
            5 === a.Answer[n].type ? b.innerHTML = "请求被分配到 " + a.Answer[n].data : b.innerHTML = "DNS解析结果: " + a.Answer[n].data,
            e.append(b);
        return b = create("li"),
        b.innerHTML = "以上资源来自阿里云DOH 数据可能不准确",
        e.append(b),
        e
    }
    ).then(e=>{
        a.append(e)
    }
    ).catch(a=>{}
    ),
    a.append(create("h3").innerHTML = "IPV6解析情况"),
    await fetch("https://dns.alidns.com/resolve?name=aa.652040231.xyz&type=28").then(a=>{
        if (200 === a.status)
            return a;
        throw "Can't fetch DNS resolve"
    }
    ).then(a=>a.json()).then(a=>{
        let e = create("ul");
        for (let n in a.Answer)
            b = create("li"),
            5 === a.Answer[n].type ? b.innerHTML = "请求被分配到 " + a.Answer[n].data : b.innerHTML = "DNS解析结果: " + a.Answer[n].data,
            e.append(b);
        return b = create("li"),
        b.innerHTML = "以上资源来自阿里云DOH 数据可能不准确",
        e.append(b),
        e
    }
    ).then(e=>{
        a.append(e)
    }
    ).catch(a=>{}
    ),
    maindiv.append(a)
}
async function buildpage() {
    let a = create("h2");
    maindiv.append(a),
    $("title").innerHTML = "啥东西都没有的东西",
    await networktest(),
    await getdns(),
    cdninfo()
}
maindiv.id = "maindiv";
