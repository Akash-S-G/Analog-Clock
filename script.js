setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotate=htime*30 + mtime/2;
    mrotate=mtime*6;
    srotate=stime*6;
    hour.style.transform=`rotate(${hrotate}deg)`
    minute.style.transform=`rotate(${mrotate}deg)`
    second.style.transform=`rotate(${srotate}deg)`

}, 1000);
