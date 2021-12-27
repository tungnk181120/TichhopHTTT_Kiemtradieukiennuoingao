function kiemtra(){
    //nhietdo
    var nhietdo = document.getElementById('nhietdo').value
    console.log(nhietdo)
    var nhietdothap = document.getElementById("nhietdothap")
    nhietdothap.classList.remove("active")
    var nhietdocao = document.getElementById("nhietdocao")
    nhietdocao.classList.remove("active")
    var nhietdothichhop = document.getElementById("nhietdothichhop")
    nhietdothichhop.classList.remove("active")
    if (nhietdo < 20){
        var ele = document.getElementById("nhietdothap")
        ele.classList.add("active")
    }else if (nhietdo > 30){
        var ele = document.getElementById("nhietdocao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("nhietdothichhop")
        ele.classList.add("active")
    }

    //Do man
    var doman = document.getElementById('doman').value
    console.log(doman)
    var domanthap = document.getElementById("domanthap")
    domanthap.classList.remove("active")
    var domancao = document.getElementById("domancao")
    domancao.classList.remove("active")
    var domanthichhop = document.getElementById("domanthichhop")
    domanthichhop.classList.remove("active")
    if (doman < 10){
        var ele = document.getElementById("domanthap")
        ele.classList.add("active")
    }else if (doman > 25){
        var ele = document.getElementById("domancao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("domanthichhop")
        ele.classList.add("active")
    }
    //Do trong
    var dotrong = document.getElementById('dotrong').value
    console.log(dotrong)
    var dotrongthap = document.getElementById("dotrongthap")
    dotrongthap.classList.remove("active")
    var dotrongcao = document.getElementById("dotrongcao")
    dotrongcao.classList.remove("active")
    var dotrongthichhop = document.getElementById("dotrongthichhop")
    dotrongthichhop.classList.remove("active")
    if (dotrong < 30){
        var ele = document.getElementById("dotrongthap")
        ele.classList.add("active")
    }else if (dotrong > 35){
        var ele = document.getElementById("dotrongcao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("dotrongthichhop")
        ele.classList.add("active")
    }

    //ph
    var ph = document.getElementById('ph').value
    console.log(ph)
    var phthap = document.getElementById("phthap")
    phthap.classList.remove("active")
    var phcao = document.getElementById("phcao")
    phcao.classList.remove("active")
    var phthichhop = document.getElementById("phthichhop")
    phthichhop.classList.remove("active")
    if (ph < 7.5){
        var ele = document.getElementById("phthap")
        ele.classList.add("active")
    }else if (ph > 8.5){
        var ele = document.getElementById("phcao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("phthichhop")
        ele.classList.add("active")
    }
    //Độ kiềm
    var dokiem = document.getElementById('dokiem').value
    console.log(dokiem)
    var dokiemthap = document.getElementById("dokiemthap")
    dokiemthap.classList.remove("active")
    var dokiemcao = document.getElementById("dokiemcao")
    dokiemcao.classList.remove("active")
    var dokiemthichhop = document.getElementById("dokiemthichhop")
    dokiemthichhop.classList.remove("active")
    if (dokiem < 100){
        var ele = document.getElementById("dokiemthap")
        ele.classList.add("active")
    }else if (dokiem > 150){
        var ele = document.getElementById("dokiemcao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("dokiemthichhop")
        ele.classList.add("active")
    }
    //oxi
    var oxi = document.getElementById('oxi').value
    console.log(oxi)
    var oxithap = document.getElementById("oxithap")
    oxithap.classList.remove("active")
    var oxithichhop = document.getElementById("oxithichhop")
    oxithichhop.classList.remove("active")
    if (oxi < 5){
        var ele = document.getElementById("oxithap")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("oxithichhop")
        ele.classList.add("active")
    }
    //h2s
    var h2s = document.getElementById('h2s').value
    console.log(h2s)
    var h2sthap = document.getElementById("h2scao")
    h2sthap.classList.remove("active")
    var h2sthichhop = document.getElementById("h2sthichhop")
    h2sthichhop.classList.remove("active")
    if (h2s > 0.03){
        var ele = document.getElementById("h2scao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("h2sthichhop")
        ele.classList.add("active")
    }

    //nh3
    var nh3 = document.getElementById('nh3').value
    console.log(nh3)
    var nh3thap = document.getElementById("nh3cao")
    nh3thap.classList.remove("active")
    var nh3thichhop = document.getElementById("nh3thichhop")
    nh3thichhop.classList.remove("active")
    if (nh3 > 0.1){
        var ele = document.getElementById("nh3cao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("nh3thichhop")
        ele.classList.add("active")
    }

    //nitrit
    var nitrit = document.getElementById('nitrit').value
    console.log(nitrit)
    var nitritthap = document.getElementById("nitritcao")
    nitritthap.classList.remove("active")
    var nitritthichhop = document.getElementById("nitritthichhop")
    nitritthichhop.classList.remove("active")
    if (nitrit > 0.2){
        var ele = document.getElementById("nitritcao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("nitritthichhop")
        ele.classList.add("active")
    }

    //chatran
    var chatran = document.getElementById('chatran').value
    console.log(chatran)
    var chatranthap = document.getElementById("chatrancao")
    chatranthap.classList.remove("active")
    var chatranthichhop = document.getElementById("chatranthichhop")
    chatranthichhop.classList.remove("active")
    if (chatran > 100){
        var ele = document.getElementById("chatrancao")
        ele.classList.add("active")
    }else{
        var ele = document.getElementById("chatranthichhop")
        ele.classList.add("active")
    }
}
