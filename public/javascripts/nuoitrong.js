const res = require("express/lib/response")

function WQI_DO(DO,T){
    DO_BAOHOA=14.652-0.41022*T+0.007991*T*T-0.000077774*T*T*T
    Percent_BAOHOA=DO/DO_BAOHOA*100
    if (20<=Percent_BAOHOA && Percent_BAOHOA<50){
        BPI1=50
        BPI=25
        qi1=50
        qi=25
    }
    
    if (50<=Percent_BAOHOA && Percent_BAOHOA <75)
    {BPI1=75
    BPI=50
    qi1=75
    qi=50}
    if (75<=Percent_BAOHOA && Percent_BAOHOA<88)
    {BPI1=88
    BPI=75
    qi1=100
    qi=75}
    if (112<Percent_BAOHOA && Percent_BAOHOA<=125)
    {BPI1=125
    BPI=112
    qi1=75
    qi=100}
    if (125<Percent_BAOHOA && Percent_BAOHOA<=150){
    BPI1=150
    BPI=125
    qi1=50
    qi=75}
    if (150<Percent_BAOHOA && Percent_BAOHOA<=200)
    {BPI1=200
    BPI=150
    qi1=25
    qi=50}
    if (Percent_BAOHOA>200 || Percent_BAOHOA<20)
        WQI=10
    else if (20<=Percent_BAOHOA && Percent_BAOHOA<88)
        WQI=(qi1-qi)*(Percent_BAOHOA-BPI)/(BPI1-BPI)+qi
    else if (88<=Percent_BAOHOA && Percent_BAOHOA<100)
        {WQI=100
        }
    else {
    WQI=(qi-qi1)*(BPI1-Percent_BAOHOA)/(BPI1-BPI)+qi1
    }
    return WQI
}


function WQI_pH(pH){
  if (pH < 5.5 || pH > 9)
    WQI = 10
  if (5.5<=pH &&pH<6){
    BPI1=6
    BPI=5.5
    qi1=100
    qi=50
    WQI=(qi1-qi)*(pH-BPI)/(BPI1-BPI)+qi}
  if (6<=pH &&pH<=8.5)
    WQI=100
  if (8.5<pH &&pH<=9){
    BPI1=9
    BPI=8.5
    qi1=50
    qi=100
    WQI=(qi-qi1)*(BPI1-pH)/(BPI1-BPI)+qi1}
  return WQI
}
function WQI_BOD(BOD){
  if (BOD<4)
    WQI=100
  if (BOD>=50)
    WQI=10
  if (4<=BOD && BOD<6){
    BPI1=6
    BPI=4
    qi1=75
    qi=100
    WQI=(qi-qi1)*(BPI1-BOD)/(BPI1-BPI)+qi1}
  if (6<=BOD && BOD<15){
    BPI1=15
    BPI=6
    qi1=50
    qi=75
    WQI=(qi-qi1)*(BPI1-BOD)/(BPI1-BPI)+qi1}
  if (15<=BOD && BOD<25){
    BPI1=25
    BPI=15
    qi1=25
    qi=50
    WQI=(qi-qi1)*(BPI1-BOD)/(BPI1-BPI)+qi1}
  if (25<=BOD && BOD<50){
    BPI1=50
    BPI=25
    qi1=10
    qi=25
    WQI=(qi-qi1)*(BPI1-BOD)/(BPI1-BPI)+qi1}
  return WQI
}

function WQI_COD(COD){
  if (COD<10)
    WQI=100
  if (COD>=150)
    WQI=10
  if (10<=COD && COD<15){
    BPI1=15
    BPI=10
    qi1=75
    qi=100
    WQI=(qi-qi1)*(BPI1-COD)/(BPI1-BPI)+qi1}
  if (15<=COD && COD<30){
    BPI1=30
    BPI=15
    qi1=50
    qi=75
    WQI=(qi-qi1)*(BPI1-COD)/(BPI1-BPI)+qi1}
  if (30<=COD && COD<50){
    BPI1=50
    BPI=30
    qi1=25
    qi=50
    WQI=(qi-qi1)*(BPI1-COD)/(BPI1-BPI)+qi1}
  if (50<=COD && COD<150){
    BPI1=150
    BPI=50
    qi1=25
    qi=50
    WQI=(qi-qi1)*(BPI1-COD)/(BPI1-BPI)+qi1}
  return WQI
}

function WQI_NH4(NH4){
  if (NH4<0.3)
    WQI=100
  if (NH4>=5)
    WQI=10
  if (0.3<=NH4 && NH4<0.6){
    BPI1=0.6
    BPI=0.3
    qi1=50
    qi=75
    WQI=(qi-qi1)*(BPI1-NH4)/(BPI1-BPI)+qi1}
  if (0.6<=NH4 && NH4<0.9){
    BPI1=0.9
    BPI=0.6
    qi1=25
    qi=50
    WQI=(qi-qi1)*(BPI1-NH4)/(BPI1-BPI)+qi1}
  if (0.9<=NH4 && NH4<5){
    BPI1=5
    BPI=0.9
    qi1=10
    qi=25
    WQI=(qi-qi1)*(BPI1-NH4)/(BPI1-BPI)+qi1}
  return WQI
}

function WQI_PO4(PO4){
if (PO4<0.1)
  WQI=100
if (PO4>=4)
  WQI=10
if(0.1<=PO4 && PO4<=0.2){
  BPI1=0.2
  BPI=0.1
  qi1=75
  qi=100
  WQI=(qi-qi1)*(BPI1-PO4)/(BPI1-BPI)+qi1}
if (0.2<PO4 && PO4<0.3){
  BPI1=0.3
  BPI=0.2
  qi1=50
  qi=75
  WQI=(qi-qi1)*(BPI1-PO4)/(BPI1-BPI)+qi1}
if (0.3<=PO4 && PO4<0.5){
  BPI1=0.5
  BPI=0.3
  qi1=25
  qi=50
  WQI=(qi-qi1)*(BPI1-PO4)/(BPI1-BPI)+qi1}
if (0.5<=PO4 && PO4<4){
  BPI1=4
  BPI=0.5
  qi1=25
  qi=10
  WQI=(qi-qi1)*(BPI1-PO4)/(BPI1-BPI)+qi1}

return WQI
}

function WQI_NO2(NO2){
  if (NO2<=0.05)
    WQI=100
  if (NO2>0.05)
    WQI=10
  return WQI
}

function WQI_Coliform (Coliform ){
  if (Coliform <=2500)
    WQI=100
  if (Coliform >10000)
    WQI=10
  if (2500<=Coliform && Coliform<=5000){
    BPI1=5000
    BPI=2500
    qi1=75
    qi=100
    WQI=(qi-qi1)*(BPI1-Coliform)/(BPI1-BPI)+qi1}
  if (5000<Coliform && Coliform<7500){
    BPI1=7500
    BPI=5000
    qi1=50
    qi=75
    WQI=(qi-qi1)*(BPI1-Coliform)/(BPI1-BPI)+qi1}
  if (7500<=Coliform && Coliform<=10000){
    BPI1=10000
    BPI=7500
    qi1=25
    qi=50
    WQI=(qi-qi1)*(BPI1-Coliform)/(BPI1-BPI)+qi1}

  return WQI
}

function tinh_WQI(T,pH,DO,NO2,NH4,PO4,COD,Coliform){
  pH=WQI_pH(pH)
  DO=WQI_DO(DO,T)
  COD=WQI_COD(COD)
  NH4=WQI_NH4(NH4)
  NO2=WQI_NO2(NO2)
  PO4=WQI_PO4(PO4)
  Coliform=WQI_Coliform(Coliform)
  WQI=(pH/100)*Math.pow((Math.pow((DO+COD+NH4+NO2+PO4)/5,2)*Coliform),1/3)
  return WQI
}

function Chatluongnuoc(WQI1){
  msg = ""
  if (91<=WQI1 && WQI1<=100)
  msg = 'WQI = '+WQI1+' Chất lượng nước rất tốt'
  else if (76<=WQI1 && WQI1<=90)
  msg = 'WQI = '+WQI1+' Chất lượng nước tốt'
  else if (51<=WQI1 && WQI1<=75)
  msg = 'WQI = '+WQI1+' Chất lượng nước trung bình'
  else if (26<=WQI1 && WQI1<=50)
  msg = 'WQI = '+WQI1+' Chất lượng nước kém'
  else if (10<=WQI1 && WQI1<=25)
  msg = 'WQI = '+WQI1+' Nước bị ô nhiễm nặng'
  else if (10>WQI1 ){
  msg = 'WQI = '+WQI1+' Nước bị ô nhiễm rất nặng'}
  return msg
}

function DanhGiaChatLuong(T,pH,DO,DoMan,DoKiem,DoTrong,PO4,COD,TSS, NO2, NH4){
  count=0
  msg = []
  if (18<=T && T<=33)
    count+=1
  else
    msg.push("Nhiệt độ không thích hợp để nuôi ngao")
  if  (7<=pH && pH<=9)
    count+=1
  else
    msg.push("Độ pH không phù hợp để nuôi ngao")
  if (5<=DO && DO<=9)
    count+=1
  else
    msg.push("Lượng oxi hòa tan không phù hợp")
  if (5<=DoMan && DoMan<=35)
    count+=1
  else
    msg.push("Độ mặn không phù hợp")
  if (60<=DoKiem && DoKiem<=180)
    count+=1
  else
    msg.push("Độ kiềm không phù hợp")
  if (25<=DoTrong && DoTrong<=50)
    count+=1
  else
    msg.push("Độ trong không phù hợp")
  if (PO4<=0.1)
    count+=1
  else
    msg.push("Cần thay đổi nồng độ PO4")
  if (TSS<100)
    count+=1
  else
    msg.push("Cần giảm nồng độ TSS")
  if (2.64<=COD && COD <=35.21)
    count+=1
  else
    msg.push("Cần thay đổi nồng độ COD")
  if (NO2<=0.05)
    count+=1
  else
    msg.push("Cần thay đổi nồng độ NO2")
  if (NH4<=0.3)
    count+=1
  else
    msg.push("Cần thay đổi nồng độ NH4")
  console.log(msg)
  return msg
}


function kiemtra(){
  var nhietdo = document.getElementById('nhietdo').value
  var doman = document.getElementById('doman').value
  var dotrong = document.getElementById('dotrong').value
  var ph = document.getElementById('ph').value
  var dokiem = document.getElementById('dokiem').value
  var nh4 = document.getElementById('nh4').value
  var coliform = document.getElementById('coliform').value

  var oxi = document.getElementById('oxi').value
  var po4 = document.getElementById('po4').value
  var tss = document.getElementById('tss').value
  var cod = document.getElementById('cod').value
  var no2 = document.getElementById('no2').value

  console.log(DanhGiaChatLuong(nhietdo, ph, oxi, doman. dokiem, dotrong, po4, cod, tss, no2, nh4))
  WQI1=tinh_WQI(nhietdo,ph,oxi,no2,nh4,po4,cod,coliform);

  chattluongnuoc = Chatluongnuoc(WQI1)
  danhgiachatluong = DanhGiaChatLuong(nhietdo, ph, oxi, doman, dokiem, dotrong, po4, cod, tss, no2, nh4)
  console.log(WQI1)
  console.log(Chatluongnuoc(WQI1))

  str = ""
  result = document.getElementById('result')
  str+= `<div class="msgs">
                        <span class="msg">${chattluongnuoc}</span>
                      </div>`
  for (i = 0; i<danhgiachatluong.length; i++){
    str+= `<div class="msgs">
                          <span class="msg">${danhgiachatluong[i]}</span>
                        </div>`
  result.innerHTML = str
  }

}


// function kiemtra(){
//     //nhietdo
//     var nhietdo = document.getElementById('nhietdo').value
//     console.log(nhietdo)
//     var nhietdothap = document.getElementById("nhietdothap")
//     nhietdothap.classList.remove("active")
//     var nhietdocao = document.getElementById("nhietdocao")
//     nhietdocao.classList.remove("active")
//     var nhietdothichhop = document.getElementById("nhietdothichhop")
//     nhietdothichhop.classList.remove("active")
//     if (nhietdo < 18){
//         var ele = document.getElementById("nhietdothap")
//         ele.classList.add("active")
//     }else if (nhietdo > 33){
//         var ele = document.getElementById("nhietdocao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("nhietdothichhop")
//         ele.classList.add("active")
//     }

//     //Do man
//     var doman = document.getElementById('doman').value
//     console.log(doman)
//     var domanthap = document.getElementById("domanthap")
//     domanthap.classList.remove("active")
//     var domancao = document.getElementById("domancao")
//     domancao.classList.remove("active")
//     var domanthichhop = document.getElementById("domanthichhop")
//     domanthichhop.classList.remove("active")
//     if (doman < 5){
//         var ele = document.getElementById("domanthap")
//         ele.classList.add("active")
//     }else if (doman > 35){
//         var ele = document.getElementById("domancao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("domanthichhop")
//         ele.classList.add("active")
//     }
//     //Do trong
//     var dotrong = document.getElementById('dotrong').value
//     console.log(dotrong)
//     var dotrongthap = document.getElementById("dotrongthap")
//     dotrongthap.classList.remove("active")
//     var dotrongcao = document.getElementById("dotrongcao")
//     dotrongcao.classList.remove("active")
//     var dotrongthichhop = document.getElementById("dotrongthichhop")
//     dotrongthichhop.classList.remove("active")
//     if (dotrong < 25){
//         var ele = document.getElementById("dotrongthap")
//         ele.classList.add("active")
//     }else if (dotrong > 50){
//         var ele = document.getElementById("dotrongcao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("dotrongthichhop")
//         ele.classList.add("active")
//     }

//     //ph
//     var ph = document.getElementById('ph').value
//     console.log(ph)
//     var phthap = document.getElementById("phthap")
//     phthap.classList.remove("active")
//     var phcao = document.getElementById("phcao")
//     phcao.classList.remove("active")
//     var phthichhop = document.getElementById("phthichhop")
//     phthichhop.classList.remove("active")
//     if (ph < 7){
//         var ele = document.getElementById("phthap")
//         ele.classList.add("active")
//     }else if (ph > 9){
//         var ele = document.getElementById("phcao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("phthichhop")
//         ele.classList.add("active")
//     }
//     //Độ kiềm
//     var dokiem = document.getElementById('dokiem').value
//     console.log(dokiem)
//     var dokiemthap = document.getElementById("dokiemthap")
//     dokiemthap.classList.remove("active")
//     var dokiemcao = document.getElementById("dokiemcao")
//     dokiemcao.classList.remove("active")
//     var dokiemthichhop = document.getElementById("dokiemthichhop")
//     dokiemthichhop.classList.remove("active")
//     if (dokiem < 60){
//         var ele = document.getElementById("dokiemthap")
//         ele.classList.add("active")
//     }else if (dokiem > 180){
//         var ele = document.getElementById("dokiemcao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("dokiemthichhop")
//         ele.classList.add("active")
//     }
//     //oxi
//     var oxi = document.getElementById('oxi').value
//     console.log(oxi)
//     var oxithap = document.getElementById("oxithap")
//     oxithap.classList.remove("active")
//     var oxithichhop = document.getElementById("oxithichhop")
//     oxithichhop.classList.remove("active")
//     if (oxi < 5){
//         var ele = document.getElementById("oxithap")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("oxithichhop")
//         ele.classList.add("active")
//     }
//     //h2s
//     var h2s = document.getElementById('h2s').value
//     console.log(h2s)
//     var h2sthap = document.getElementById("h2scao")
//     h2sthap.classList.remove("active")
//     var h2sthichhop = document.getElementById("h2sthichhop")
//     h2sthichhop.classList.remove("active")
//     if (h2s > 0.03){
//         var ele = document.getElementById("h2scao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("h2sthichhop")
//         ele.classList.add("active")
//     }

//     //nh3
//     var nh3 = document.getElementById('nh3').value
//     console.log(nh3)
//     var nh3thap = document.getElementById("nh3cao")
//     nh3thap.classList.remove("active")
//     var nh3thichhop = document.getElementById("nh3thichhop")
//     nh3thichhop.classList.remove("active")
//     if (nh3 > 0.1){
//         var ele = document.getElementById("nh3cao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("nh3thichhop")
//         ele.classList.add("active")
//     }

//     //nitrit
//     var nitrit = document.getElementById('nitrit').value
//     console.log(nitrit)
//     var nitritthap = document.getElementById("nitritcao")
//     nitritthap.classList.remove("active")
//     var nitritthichhop = document.getElementById("nitritthichhop")
//     nitritthichhop.classList.remove("active")
//     if (nitrit > 0.2){
//         var ele = document.getElementById("nitritcao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("nitritthichhop")
//         ele.classList.add("active")
//     }

//     //chatran
//     var chatran = document.getElementById('chatran').value
//     console.log(chatran)
//     var chatranthap = document.getElementById("chatrancao")
//     chatranthap.classList.remove("active")
//     var chatranthichhop = document.getElementById("chatranthichhop")
//     chatranthichhop.classList.remove("active")
//     if (chatran > 100){
//         var ele = document.getElementById("chatrancao")
//         ele.classList.add("active")
//     }else{
//         var ele = document.getElementById("chatranthichhop")
//         ele.classList.add("active")
//     }
// }
