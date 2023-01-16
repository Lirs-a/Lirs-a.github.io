// 共四种选择，因此建立四个数据用来存放不同的操作下的图片
var arr0 = [
    { picSrc: '../img/img2/all/10001.jpg' },
    { picSrc: '../img/img2/all/10002.jpg' },
    { picSrc: '../img/img2/all/10003.jpg' },
    { picSrc: '../img/img2/all/10004.jpg' },
    { picSrc: '../img/img2/all/10005.jpg' },
    { picSrc: '../img/img2/all/10006.jpg' },
    { picSrc: '../img/img2/all/10007.jpg' },
    { picSrc: '../img/img2/all/10008.jpg' },
    { picSrc: '../img/img2/all/10009.jpg' },
    { picSrc: '../img/img2/all/10010.jpg' },
    { picSrc: '../img/img2/all/10011.jpg' },
    { picSrc: '../img/img2/all/10012.jpg' },
    { picSrc: '../img/img2/all/10013.jpg' },
    { picSrc: '../img/img2/all/10014.jpg' },
    { picSrc: '../img/img2/all/10015.jpg' },
    { picSrc: '../img/img2/all/10016.jpg' },
    { picSrc: '../img/img2/all/10017.jpg' },
    { picSrc: '../img/img2/all/10018.jpg' },
    { picSrc: '../img/img2/all/10019.jpg' },
    { picSrc: '../img/img2/all/10020.jpg' },
    { picSrc: '../img/img2/all/10021.jpg' },
    { picSrc: '../img/img2/all/10022.jpg' },
    { picSrc: '../img/img2/all/10023.jpg' },
    { picSrc: '../img/img2/all/10024.jpg' },
    { picSrc: '../img/img2/all/10025.jpg' },
    { picSrc: '../img/img2/all/10026.jpg' },
    { picSrc: '../img/img2/all/10027.jpg' },
    { picSrc: '../img/img2/all/10028.jpg' },
    { picSrc: '../img/img2/all/10029.jpg' },
    { picSrc: '../img/img2/all/10030.jpg' },
    { picSrc: '../img/img2/all/10031.jpg' },
    { picSrc: '../img/img2/all/10032.jpg' },
    { picSrc: '../img/img2/all/10033.jpg' },
    { picSrc: '../img/img2/all/10034.jpg' },
    { picSrc: '../img/img2/all/10035.jpg' },
    { picSrc: '../img/img2/all/10036.jpg' },
    { picSrc: '../img/img2/all/10037.jpg' },
    { picSrc: '../img/img2/all/10038.jpg' },
    { picSrc: '../img/img2/all/10039.jpg' },
    { picSrc: '../img/img2/all/10040.jpg' },
    { picSrc: '../img/img2/all/10041.jpg' },
    { picSrc: '../img/img2/all/10042.jpg' },
    { picSrc: '../img/img2/all/10043.jpg' },
    { picSrc: '../img/img2/all/10044.jpg' },
    { picSrc: '../img/img2/all/10045.jpg' },
    { picSrc: '../img/img2/all/10046.jpg' },
    { picSrc: '../img/img2/all/10047.jpg' },
    { picSrc: '../img/img2/all/10048.jpg' },
    { picSrc: '../img/img2/all/10049.jpg' },
    { picSrc: '../img/img2/all/10050.jpg' },
    { picSrc: '../img/img2/all/10051.jpg' },
    { picSrc: '../img/img2/all/10052.jpg' },
    { picSrc: '../img/img2/all/10053.jpg' },
    { picSrc: '../img/img2/all/10054.jpg' },
    { picSrc: '../img/img2/all/10055.jpg' },
    { picSrc: '../img/img2/all/10056.jpg' },
    { picSrc: '../img/img2/all/10057.jpg' },
    { picSrc: '../img/img2/all/10058.jpg' },
    { picSrc: '../img/img2/all/10059.jpg' },
    { picSrc: '../img/img2/all/10060.jpg' },
    { picSrc: '../img/img2/all/10061.jpg' },
    { picSrc: '../img/img2/all/10062.jpg' },
    { picSrc: '../img/img2/all/10063.jpg' },
    { picSrc: '../img/img2/all/10064.jpg' },
    { picSrc: '../img/img2/all/10065.jpg' },
    { picSrc: '../img/img2/all/10066.jpg' },
    { picSrc: '../img/img2/all/10067.jpg' },
    { picSrc: '../img/img2/all/10068.jpg' },
    { picSrc: '../img/img2/all/10069.jpg' },
    { picSrc: '../img/img2/all/10070.jpg' },
    { picSrc: '../img/img2/all/10071.jpg' },
    { picSrc: '../img/img2/all/10072.jpg' },
    { picSrc: '../img/img2/all/10073.jpg' },
    { picSrc: '../img/img2/all/10074.jpg' },
    { picSrc: '../img/img2/all/10075.jpg' },
    { picSrc: '../img/img2/all/10076.jpg' },
    { picSrc: '../img/img2/all/10077.jpg' },
    { picSrc: '../img/img2/all/10078.jpg' },
    { picSrc: '../img/img2/all/10079.jpg' },
    { picSrc: '../img/img2/all/10080.jpg' },
    { picSrc: '../img/img2/all/10081.jpg' },
    { picSrc: '../img/img2/all/10082.jpg' },
    { picSrc: '../img/img2/all/10083.jpg' },
    { picSrc: '../img/img2/all/10084.jpg' },
    { picSrc: '../img/img2/all/10085.jpg' },
    { picSrc: '../img/img2/all/10086.jpg' },
    { picSrc: '../img/img2/all/10087.jpg' },
    { picSrc: '../img/img2/all/10088.jpg' },
    { picSrc: '../img/img2/all/10089.jpg' },
    { picSrc: '../img/img2/all/10090.jpg' },
    { picSrc: '../img/img2/all/10091.jpg' },
    { picSrc: '../img/img2/all/10092.jpg' },
    { picSrc: '../img/img2/all/10093.jpg' },
    { picSrc: '../img/img2/all/10094.jpg' },
    { picSrc: '../img/img2/all/10095.jpg' },
    { picSrc: '../img/img2/all/10096.jpg' },
    { picSrc: '../img/img2/all/10097.jpg' },
    { picSrc: '../img/img2/all/10098.jpg' },
    { picSrc: '../img/img2/all/10099.jpg' },
    { picSrc: '../img/img2/all/10100.jpg' },
    { picSrc: '../img/img2/all/10101.jpg' },
    { picSrc: '../img/img2/all/10102.jpg' },
    { picSrc: '../img/img2/all/10103.jpg' },
    { picSrc: '../img/img2/all/10104.jpg' },
    { picSrc: '../img/img2/all/10105.jpg' },
    { picSrc: '../img/img2/all/10106.jpg' },
    { picSrc: '../img/img2/all/10107.jpg' },
    { picSrc: '../img/img2/all/10108.jpg' },
    { picSrc: '../img/img2/all/10109.jpg' },
    { picSrc: '../img/img2/all/10110.jpg' },
    { picSrc: '../img/img2/all/10111.jpg' },
    { picSrc: '../img/img2/all/10112.jpg' },
    { picSrc: '../img/img2/all/10113.jpg' },
    { picSrc: '../img/img2/all/10114.jpg' },
    { picSrc: '../img/img2/all/10115.jpg' },
    { picSrc: '../img/img2/all/10116.jpg' },
    { picSrc: '../img/img2/all/10117.jpg' },
    { picSrc: '../img/img2/all/10118.jpg' },
    { picSrc: '../img/img2/all/10119.jpg' },
    { picSrc: '../img/img2/all/10120.jpg' },
    { picSrc: '../img/img2/all/10121.jpg' },
    { picSrc: '../img/img2/all/10122.jpg' },
    { picSrc: '../img/img2/all/10123.jpg' },
    { picSrc: '../img/img2/all/10124.jpg' },
    { picSrc: '../img/img2/all/10125.jpg' },
    { picSrc: '../img/img2/all/10126.jpg' },
    { picSrc: '../img/img2/all/10127.jpg' },
    { picSrc: '../img/img2/all/10128.jpg' },
    { picSrc: '../img/img2/all/10129.jpg' },
    { picSrc: '../img/img2/all/10130.jpg' },
    { picSrc: '../img/img2/all/10131.jpg' },
    { picSrc: '../img/img2/all/10132.jpg' },
    { picSrc: '../img/img2/all/10133.jpg' },
    { picSrc: '../img/img2/all/10134.jpg' },
    { picSrc: '../img/img2/all/10135.jpg' },
    { picSrc: '../img/img2/all/10136.jpg' },
    { picSrc: '../img/img2/all/10137.jpg' },
    { picSrc: '../img/img2/all/10138.jpg' },
    { picSrc: '../img/img2/all/10139.jpg' },
    { picSrc: '../img/img2/all/10140.jpg' },
    { picSrc: '../img/img2/all/10141.jpg' },
    { picSrc: '../img/img2/all/10142.jpg' },
    { picSrc: '../img/img2/all/10143.jpg' },
    { picSrc: '../img/img2/all/10144.jpg' },
    { picSrc: '../img/img2/all/10145.jpg' },
    { picSrc: '../img/img2/all/10146.jpg' },
    { picSrc: '../img/img2/all/10147.jpg' },
    { picSrc: '../img/img2/all/10148.jpg' },
    { picSrc: '../img/img2/all/10149.jpg' },
    { picSrc: '../img/img2/all/10150.jpg' },
    { picSrc: '../img/img2/all/10151.jpg' },
    { picSrc: '../img/img2/all/10152.jpg' },
    { picSrc: '../img/img2/all/10153.jpg' },
    { picSrc: '../img/img2/all/10154.jpg' },
    { picSrc: '../img/img2/all/10155.jpg' },
    { picSrc: '../img/img2/all/10156.jpg' },
    { picSrc: '../img/img2/all/10157.jpg' },
    { picSrc: '../img/img2/all/10158.jpg' },
    { picSrc: '../img/img2/all/10159.jpg' },
    { picSrc: '../img/img2/all/10160.jpg' },
    { picSrc: '../img/img2/all/10161.jpg' },
    { picSrc: '../img/img2/all/10162.jpg' },
    { picSrc: '../img/img2/all/10163.jpg' },
    { picSrc: '../img/img2/all/10164.jpg' },
    { picSrc: '../img/img2/all/10165.jpg' },
    { picSrc: '../img/img2/all/10166.jpg' },
    { picSrc: '../img/img2/all/10167.jpg' },
    { picSrc: '../img/img2/all/10168.jpg' },
    { picSrc: '../img/img2/all/10169.jpg' },
    { picSrc: '../img/img2/all/10170.jpg' },
    { picSrc: '../img/img2/all/10171.jpg' },
    { picSrc: '../img/img2/all/10172.jpg' },
    { picSrc: '../img/img2/all/10173.jpg' },
    { picSrc: '../img/img2/all/10174.jpg' },
    { picSrc: '../img/img2/all/10175.jpg' },
    { picSrc: '../img/img2/all/10176.jpg' },
    { picSrc: '../img/img2/all/10177.jpg' },
    { picSrc: '../img/img2/all/10178.jpg' },
    { picSrc: '../img/img2/all/10179.jpg' },
    { picSrc: '../img/img2/all/10180.jpg' },
    { picSrc: '../img/img2/all/10181.jpg' },
    { picSrc: '../img/img2/all/10182.jpg' },
    { picSrc: '../img/img2/all/10183.jpg' },
    { picSrc: '../img/img2/all/10184.jpg' },
    { picSrc: '../img/img2/all/10185.jpg' },
    { picSrc: '../img/img2/all/10186.jpg' },
    { picSrc: '../img/img2/all/10187.jpg' },
    { picSrc: '../img/img2/all/10188.jpg' },
    { picSrc: '../img/img2/all/10189.jpg' },
    { picSrc: '../img/img2/all/10190.jpg' },
    { picSrc: '../img/img2/all/10191.jpg' },
    { picSrc: '../img/img2/all/10192.jpg' },
    { picSrc: '../img/img2/all/10193.jpg' },
    { picSrc: '../img/img2/all/10194.jpg' },
    { picSrc: '../img/img2/all/10195.jpg' },
    { picSrc: '../img/img2/all/10196.jpg' },
    { picSrc: '../img/img2/all/10197.jpg' },
    { picSrc: '../img/img2/all/10198.jpg' },
    { picSrc: '../img/img2/all/10199.jpg' },
    { picSrc: '../img/img2/all/10200.jpg' },
    { picSrc: '../img/img2/all/10201.jpg' },
    { picSrc: '../img/img2/all/10202.jpg' },
    { picSrc: '../img/img2/all/10203.jpg' },
    { picSrc: '../img/img2/all/10204.jpg' },
    { picSrc: '../img/img2/all/10205.jpg' },
    { picSrc: '../img/img2/all/10206.jpg' },
    { picSrc: '../img/img2/all/10207.jpg' },
    { picSrc: '../img/img2/all/10208.jpg' },
    { picSrc: '../img/img2/all/10209.jpg' },
    { picSrc: '../img/img2/all/10210.jpg' },
    { picSrc: '../img/img2/all/10211.jpg' },
    { picSrc: '../img/img2/all/10212.jpg' },
    { picSrc: '../img/img2/all/10213.jpg' },
    { picSrc: '../img/img2/all/10214.jpg' },
    { picSrc: '../img/img2/all/10215.jpg' },
    { picSrc: '../img/img2/all/10216.jpg' },
    { picSrc: '../img/img2/all/10217.jpg' },
    { picSrc: '../img/img2/all/10218.jpg' },
    { picSrc: '../img/img2/all/10219.jpg' },
    { picSrc: '../img/img2/all/10220.jpg' },
    { picSrc: '../img/img2/all/10221.jpg' },
    { picSrc: '../img/img2/all/10222.jpg' },
    { picSrc: '../img/img2/all/10223.jpg' },
    { picSrc: '../img/img2/all/10224.jpg' },
    { picSrc: '../img/img2/all/10225.jpg' },
    { picSrc: '../img/img2/all/10226.jpg' },
    { picSrc: '../img/img2/all/10227.jpg' },
    { picSrc: '../img/img2/all/10228.jpg' },
    { picSrc: '../img/img2/all/10229.jpg' },
    { picSrc: '../img/img2/all/10230.jpg' },
    { picSrc: '../img/img2/all/10231.jpg' },
    { picSrc: '../img/img2/all/10232.jpg' },
    { picSrc: '../img/img2/all/10233.jpg' },
    { picSrc: '../img/img2/all/10234.jpg' },
    { picSrc: '../img/img2/all/10235.jpg' },
    { picSrc: '../img/img2/all/10236.jpg' },
    { picSrc: '../img/img2/all/10237.jpg' },
    { picSrc: '../img/img2/all/10238.jpg' },
    { picSrc: '../img/img2/all/10239.jpg' },
    { picSrc: '../img/img2/all/10240.jpg' },
    { picSrc: '../img/img2/all/10241.jpg' },
    { picSrc: '../img/img2/all/10242.jpg' },
    { picSrc: '../img/img2/all/10243.jpg' },
    { picSrc: '../img/img2/all/10244.jpg' },
    { picSrc: '../img/img2/all/10245.jpg' },
    { picSrc: '../img/img2/all/10246.jpg' },
    { picSrc: '../img/img2/all/10247.jpg' },
    { picSrc: '../img/img2/all/10248.jpg' },
    { picSrc: '../img/img2/all/10249.jpg' },
    { picSrc: '../img/img2/all/10250.jpg' },
    { picSrc: '../img/img2/all/10251.jpg' },
    { picSrc: '../img/img2/all/10252.jpg' },
    { picSrc: '../img/img2/all/10253.jpg' },
    { picSrc: '../img/img2/all/10254.jpg' },
    { picSrc: '../img/img2/all/10255.jpg' },
    { picSrc: '../img/img2/all/10256.jpg' },
    { picSrc: '../img/img2/all/10257.jpg' },
    { picSrc: '../img/img2/all/10258.jpg' },
    { picSrc: '../img/img2/all/10259.jpg' },
    { picSrc: '../img/img2/all/10260.jpg' },
    { picSrc: '../img/img2/all/10261.jpg' },
    { picSrc: '../img/img2/all/10262.jpg' },
    { picSrc: '../img/img2/all/10263.jpg' },
    { picSrc: '../img/img2/all/10264.jpg' },
    { picSrc: '../img/img2/all/10265.jpg' },
    { picSrc: '../img/img2/all/10266.jpg' },
    { picSrc: '../img/img2/all/10267.jpg' },
    { picSrc: '../img/img2/all/10268.jpg' },
    { picSrc: '../img/img2/all/10269.jpg' },
    { picSrc: '../img/img2/all/10270.jpg' },
    { picSrc: '../img/img2/all/10271.jpg' },
    { picSrc: '../img/img2/all/10272.jpg' },
    { picSrc: '../img/img2/all/10273.jpg' },
    { picSrc: '../img/img2/all/10274.jpg' },
    { picSrc: '../img/img2/all/10275.jpg' },
    { picSrc: '../img/img2/all/10276.jpg' },
    { picSrc: '../img/img2/all/10277.jpg' },
    { picSrc: '../img/img2/all/10278.jpg' },
    { picSrc: '../img/img2/all/10279.jpg' },
    { picSrc: '../img/img2/all/10280.jpg' },
    { picSrc: '../img/img2/all/10281.jpg' },
    { picSrc: '../img/img2/all/10282.jpg' },
    { picSrc: '../img/img2/all/10283.jpg' },
    { picSrc: '../img/img2/all/10284.jpg' },
    { picSrc: '../img/img2/all/10285.jpg' },
    { picSrc: '../img/img2/all/10286.jpg' },
    { picSrc: '../img/img2/all/10287.jpg' },
    { picSrc: '../img/img2/all/10288.jpg' },
    { picSrc: '../img/img2/all/10289.jpg' },
    { picSrc: '../img/img2/all/10290.jpg' },
    { picSrc: '../img/img2/all/10291.jpg' },
    { picSrc: '../img/img2/all/10292.jpg' },
    { picSrc: '../img/img2/all/10293.jpg' },
    { picSrc: '../img/img2/all/10294.jpg' },
    { picSrc: '../img/img2/all/10295.jpg' },
    { picSrc: '../img/img2/all/10296.jpg' },
    { picSrc: '../img/img2/all/10297.jpg' },
    { picSrc: '../img/img2/all/10298.jpg' },
    { picSrc: '../img/img2/all/10299.jpg' },
    { picSrc: '../img/img2/all/10300.jpg' },
    { picSrc: '../img/img2/all/10301.jpg' },
    { picSrc: '../img/img2/all/10302.jpg' },
    { picSrc: '../img/img2/all/10303.jpg' },
    { picSrc: '../img/img2/all/10304.jpg' },
    { picSrc: '../img/img2/all/10305.jpg' },
    { picSrc: '../img/img2/all/10306.jpg' },
    { picSrc: '../img/img2/all/10307.jpg' },
    { picSrc: '../img/img2/all/10308.jpg' },
    { picSrc: '../img/img2/all/10309.jpg' }
];
var arr1 = [
    { picSrc: '../img/img2/things/10012.jpg' },
    { picSrc: '../img/img2/things/10013.jpg' },
    { picSrc: '../img/img2/things/10015.jpg' },
    { picSrc: '../img/img2/things/10016.jpg' },
    { picSrc: '../img/img2/things/10017.jpg' },
    { picSrc: '../img/img2/things/10018.jpg' },
    { picSrc: '../img/img2/things/10021.jpg' },
    { picSrc: '../img/img2/things/10022.jpg' },
    { picSrc: '../img/img2/things/10024.jpg' },
    { picSrc: '../img/img2/things/10025.jpg' },
    { picSrc: '../img/img2/things/10027.jpg' },
    { picSrc: '../img/img2/things/10028.jpg' },
    { picSrc: '../img/img2/things/10029.jpg' },
    { picSrc: '../img/img2/things/10030.jpg' },
    { picSrc: '../img/img2/things/10031.jpg' },
    { picSrc: '../img/img2/things/10032.jpg' },
    { picSrc: '../img/img2/things/10033.jpg' },
    { picSrc: '../img/img2/things/10035.jpg' },
    { picSrc: '../img/img2/things/10036.jpg' },
    { picSrc: '../img/img2/things/10037.jpg' },
    { picSrc: '../img/img2/things/10038.jpg' },
    { picSrc: '../img/img2/things/10044.jpg' },
    { picSrc: '../img/img2/things/10045.jpg' },
    { picSrc: '../img/img2/things/10053.jpg' },
    { picSrc: '../img/img2/things/10054.jpg' },
    { picSrc: '../img/img2/things/10055.jpg' },
    { picSrc: '../img/img2/things/10056.jpg' },
    { picSrc: '../img/img2/things/10057.jpg' },
    { picSrc: '../img/img2/things/10058.jpg' },
    { picSrc: '../img/img2/things/10067.jpg' },
    { picSrc: '../img/img2/things/10068.jpg' },
    { picSrc: '../img/img2/things/10069.jpg' },
    { picSrc: '../img/img2/things/10070.jpg' },
    { picSrc: '../img/img2/things/10071.jpg' },
    { picSrc: '../img/img2/things/10076.jpg' },
    { picSrc: '../img/img2/things/10077.jpg' },
    { picSrc: '../img/img2/things/10078.jpg' },
    { picSrc: '../img/img2/things/10079.jpg' },
    { picSrc: '../img/img2/things/10080.jpg' },
    { picSrc: '../img/img2/things/10082.jpg' },
    { picSrc: '../img/img2/things/10090.jpg' },
    { picSrc: '../img/img2/things/10091.jpg' },
    { picSrc: '../img/img2/things/10092.jpg' },
    { picSrc: '../img/img2/things/10093.jpg' },
    { picSrc: '../img/img2/things/10094.jpg' },
    { picSrc: '../img/img2/things/10100.jpg' },
    { picSrc: '../img/img2/things/10101.jpg' },
    { picSrc: '../img/img2/things/10102.jpg' },
    { picSrc: '../img/img2/things/10103.jpg' },
    { picSrc: '../img/img2/things/10111.jpg' },
    { picSrc: '../img/img2/things/10112.jpg' },
    { picSrc: '../img/img2/things/10113.jpg' },
    { picSrc: '../img/img2/things/10114.jpg' },
    { picSrc: '../img/img2/things/10115.jpg' },
    { picSrc: '../img/img2/things/10116.jpg' },
    { picSrc: '../img/img2/things/10117.jpg' },
    { picSrc: '../img/img2/things/10118.jpg' },
    { picSrc: '../img/img2/things/10119.jpg' },
    { picSrc: '../img/img2/things/10120.jpg' },
    { picSrc: '../img/img2/things/10121.jpg' },
    { picSrc: '../img/img2/things/10127.jpg' },
    { picSrc: '../img/img2/things/10129.jpg' },
    { picSrc: '../img/img2/things/10130.jpg' },
    { picSrc: '../img/img2/things/10131.jpg' },
    { picSrc: '../img/img2/things/10132.jpg' },
    { picSrc: '../img/img2/things/10133.jpg' },
    { picSrc: '../img/img2/things/10134.jpg' },
    { picSrc: '../img/img2/things/10135.jpg' },
    { picSrc: '../img/img2/things/10138.jpg' },
    { picSrc: '../img/img2/things/10141.jpg' },
    { picSrc: '../img/img2/things/10142.jpg' },
    { picSrc: '../img/img2/things/10143.jpg' },
    { picSrc: '../img/img2/things/10144.jpg' },
    { picSrc: '../img/img2/things/10145.jpg' },
    { picSrc: '../img/img2/things/10146.jpg' },
    { picSrc: '../img/img2/things/10149.jpg' },
    { picSrc: '../img/img2/things/10152.jpg' },
    { picSrc: '../img/img2/things/10153.jpg' },
    { picSrc: '../img/img2/things/10154.jpg' },
    { picSrc: '../img/img2/things/10155.jpg' },
    { picSrc: '../img/img2/things/10156.jpg' },
    { picSrc: '../img/img2/things/10161.jpg' },
    { picSrc: '../img/img2/things/10162.jpg' },
    { picSrc: '../img/img2/things/10163.jpg' },
    { picSrc: '../img/img2/things/10164.jpg' },
    { picSrc: '../img/img2/things/10165.jpg' },
    { picSrc: '../img/img2/things/10166.jpg' },
    { picSrc: '../img/img2/things/10167.jpg' },
    { picSrc: '../img/img2/things/10168.jpg' },
    { picSrc: '../img/img2/things/10169.jpg' },
    { picSrc: '../img/img2/things/10170.jpg' },
    { picSrc: '../img/img2/things/10176.jpg' },
    { picSrc: '../img/img2/things/10179.jpg' },
    { picSrc: '../img/img2/things/10180.jpg' },
    { picSrc: '../img/img2/things/10181.jpg' },
    { picSrc: '../img/img2/things/10182.jpg' },
    { picSrc: '../img/img2/things/10183.jpg' },
    { picSrc: '../img/img2/things/10184.jpg' },
    { picSrc: '../img/img2/things/10185.jpg' },
    { picSrc: '../img/img2/things/10191.jpg' },
    { picSrc: '../img/img2/things/10193.jpg' },
    { picSrc: '../img/img2/things/10194.jpg' },
    { picSrc: '../img/img2/things/10195.jpg' },
    { picSrc: '../img/img2/things/10196.jpg' },
    { picSrc: '../img/img2/things/10197.jpg' },
    { picSrc: '../img/img2/things/10200.jpg' },
    { picSrc: '../img/img2/things/10203.jpg' },
    { picSrc: '../img/img2/things/10204.jpg' },
    { picSrc: '../img/img2/things/10205.jpg' },
    { picSrc: '../img/img2/things/10206.jpg' },
    { picSrc: '../img/img2/things/10207.jpg' },
    { picSrc: '../img/img2/things/10215.jpg' },
    { picSrc: '../img/img2/things/10216.jpg' },
    { picSrc: '../img/img2/things/10217.jpg' },
    { picSrc: '../img/img2/things/10217.jpg' },
    { picSrc: '../img/img2/things/10219.jpg' },
    { picSrc: '../img/img2/things/10220.jpg' },
    { picSrc: '../img/img2/things/10221.jpg' },
    { picSrc: '../img/img2/things/10222.jpg' },
    { picSrc: '../img/img2/things/10223.jpg' },
    { picSrc: '../img/img2/things/10224.jpg' },
    { picSrc: '../img/img2/things/10227.jpg' },
    { picSrc: '../img/img2/things/10228.jpg' },
    { picSrc: '../img/img2/things/10233.jpg' },
    { picSrc: '../img/img2/things/10234.jpg' },
    { picSrc: '../img/img2/things/10239.jpg' },
    { picSrc: '../img/img2/things/10240.jpg' },
    { picSrc: '../img/img2/things/10245.jpg' },
    { picSrc: '../img/img2/things/10246.jpg' },
    { picSrc: '../img/img2/things/10250.jpg' },
    { picSrc: '../img/img2/things/10251.jpg' },
    { picSrc: '../img/img2/things/10252.jpg' },
    { picSrc: '../img/img2/things/10253.jpg' },
    { picSrc: '../img/img2/things/10255.jpg' },
    { picSrc: '../img/img2/things/10284.jpg' },
    { picSrc: '../img/img2/things/10285.jpg' },
    { picSrc: '../img/img2/things/10286.jpg' },
    { picSrc: '../img/img2/things/10287.jpg' },
    { picSrc: '../img/img2/things/10288.jpg' },
    { picSrc: '../img/img2/things/10289.jpg' },
    { picSrc: '../img/img2/things/10290.jpg' },
    { picSrc: '../img/img2/things/10291.jpg' },
    { picSrc: '../img/img2/things/10292.jpg' },
    { picSrc: '../img/img2/things/10293.jpg' },
    { picSrc: '../img/img2/things/10294.jpg' },
    { picSrc: '../img/img2/things/10295.jpg' },
    { picSrc: '../img/img2/things/10296.jpg' },
    { picSrc: '../img/img2/things/10297.jpg' },
    { picSrc: '../img/img2/things/10298.jpg' },
    { picSrc: '../img/img2/things/10299.jpg' },
    { picSrc: '../img/img2/things/10300.jpg' },
    { picSrc: '../img/img2/things/10301.jpg' }
];
var arr2 = [
    { picSrc: '../img/img2/end/10041.jpg' },
    { picSrc: '../img/img2/end/10042.jpg' },
    { picSrc: '../img/img2/end/10043.jpg' },
    { picSrc: '../img/img2/end/10050.jpg' },
    { picSrc: '../img/img2/end/10051.jpg' },
    { picSrc: '../img/img2/end/10059.jpg' },
    { picSrc: '../img/img2/end/10060.jpg' },
    { picSrc: '../img/img2/end/10062.jpg' },
    { picSrc: '../img/img2/end/10072.jpg' },
    { picSrc: '../img/img2/end/10073.jpg' },
    { picSrc: '../img/img2/end/10083.jpg' },
    { picSrc: '../img/img2/end/10084.jpg' },
    { picSrc: '../img/img2/end/10085.jpg' },
    { picSrc: '../img/img2/end/10086.jpg' },
    { picSrc: '../img/img2/end/10095.jpg' },
    { picSrc: '../img/img2/end/10096.jpg' },
    { picSrc: '../img/img2/end/10097.jpg' },
    { picSrc: '../img/img2/end/10104.jpg' },
    { picSrc: '../img/img2/end/10105.jpg' },
    { picSrc: '../img/img2/end/10122.jpg' },
    { picSrc: '../img/img2/end/10123.jpg' },
    { picSrc: '../img/img2/end/10124.jpg' },
    { picSrc: '../img/img2/end/10136.jpg' },
    { picSrc: '../img/img2/end/10137.jpg' },
    { picSrc: '../img/img2/end/10147.jpg' },
    { picSrc: '../img/img2/end/10148.jpg' },
    { picSrc: '../img/img2/end/10157.jpg' },
    { picSrc: '../img/img2/end/10158.jpg' },
    { picSrc: '../img/img2/end/10171.jpg' },
    { picSrc: '../img/img2/end/10172.jpg' },
    { picSrc: '../img/img2/end/10173.jpg' },
    { picSrc: '../img/img2/end/10186.jpg' },
    { picSrc: '../img/img2/end/10187.jpg' },
    { picSrc: '../img/img2/end/10188.jpg' },
    { picSrc: '../img/img2/end/10198.jpg' },
    { picSrc: '../img/img2/end/10199.jpg' },
    { picSrc: '../img/img2/end/10208.jpg' },
    { picSrc: '../img/img2/end/10209.jpg' },
    { picSrc: '../img/img2/end/10225.jpg' },
    { picSrc: '../img/img2/end/10226.jpg' },
    { picSrc: '../img/img2/end/10235.jpg' },
    { picSrc: '../img/img2/end/10236.jpg' },
    { picSrc: '../img/img2/end/10247.jpg' },
    { picSrc: '../img/img2/end/10254.jpg' },
    { picSrc: '../img/img2/end/10256.jpg' },
    { picSrc: '../img/img2/end/10302.jpg' },
    { picSrc: '../img/img2/end/10303.jpg' },
    { picSrc: '../img/img2/end/10304.jpg' },
    { picSrc: '../img/img2/end/10305.jpg' },
    { picSrc: '../img/img2/end/10306.jpg' },
    { picSrc: '../img/img2/end/10307.jpg' },
    { picSrc: '../img/img2/end/10308.jpg' },
    { picSrc: '../img/img2/end/10309.jpg' }
];
var arr3 = [
    { picSrc: '../img/img2/peo/10001.jpg' },
    { picSrc: '../img/img2/peo/10002.jpg' },
    { picSrc: '../img/img2/peo/10003.jpg' },
    { picSrc: '../img/img2/peo/10004.jpg' },
    { picSrc: '../img/img2/peo/10005.jpg' },
    { picSrc: '../img/img2/peo/10006.jpg' },
    { picSrc: '../img/img2/peo/10007.jpg' },
    { picSrc: '../img/img2/peo/10008.jpg' },
    { picSrc: '../img/img2/peo/10009.jpg' },
    { picSrc: '../img/img2/peo/10010.jpg' },
    { picSrc: '../img/img2/peo/10011.jpg' },
    { picSrc: '../img/img2/peo/10014.jpg' },
    { picSrc: '../img/img2/peo/10019.jpg' },
    { picSrc: '../img/img2/peo/10020.jpg' },
    { picSrc: '../img/img2/peo/10023.jpg' },
    { picSrc: '../img/img2/peo/10026.jpg' },
    { picSrc: '../img/img2/peo/10034.jpg' },
    { picSrc: '../img/img2/peo/10039.jpg' },
    { picSrc: '../img/img2/peo/10040.jpg' },
    { picSrc: '../img/img2/peo/10046.jpg' },
    { picSrc: '../img/img2/peo/10047.jpg' },
    { picSrc: '../img/img2/peo/10048.jpg' },
    { picSrc: '../img/img2/peo/10049.jpg' },
    { picSrc: '../img/img2/peo/10052.jpg' },
    { picSrc: '../img/img2/peo/10064.jpg' },
    { picSrc: '../img/img2/peo/10065.jpg' },
    { picSrc: '../img/img2/peo/10066.jpg' },
    { picSrc: '../img/img2/peo/10074.jpg' },
    { picSrc: '../img/img2/peo/10075.jpg' },
    { picSrc: '../img/img2/peo/10081.jpg' },
    { picSrc: '../img/img2/peo/10087.jpg' },
    { picSrc: '../img/img2/peo/10088.jpg' },
    { picSrc: '../img/img2/peo/10089.jpg' },
    { picSrc: '../img/img2/peo/10098.jpg' },
    { picSrc: '../img/img2/peo/10099.jpg' },
    { picSrc: '../img/img2/peo/10106.jpg' },
    { picSrc: '../img/img2/peo/10107.jpg' },
    { picSrc: '../img/img2/peo/10108.jpg' },
    { picSrc: '../img/img2/peo/10109.jpg' },
    { picSrc: '../img/img2/peo/10110.jpg' },
    { picSrc: '../img/img2/peo/10125.jpg' },
    { picSrc: '../img/img2/peo/10126.jpg' },
    { picSrc: '../img/img2/peo/10128.jpg' },
    { picSrc: '../img/img2/peo/10139.jpg' },
    { picSrc: '../img/img2/peo/10140.jpg' },
    { picSrc: '../img/img2/peo/10150.jpg' },
    { picSrc: '../img/img2/peo/10151.jpg' },
    { picSrc: '../img/img2/peo/10159.jpg' },
    { picSrc: '../img/img2/peo/10160.jpg' },
    { picSrc: '../img/img2/peo/10174.jpg' },
    { picSrc: '../img/img2/peo/10175.jpg' },
    { picSrc: '../img/img2/peo/10177.jpg' },
    { picSrc: '../img/img2/peo/10178.jpg' },
    { picSrc: '../img/img2/peo/10189.jpg' },
    { picSrc: '../img/img2/peo/10190.jpg' },
    { picSrc: '../img/img2/peo/10192.jpg' },
    { picSrc: '../img/img2/peo/10201.jpg' },
    { picSrc: '../img/img2/peo/10202.jpg' },
    { picSrc: '../img/img2/peo/10210.jpg' },
    { picSrc: '../img/img2/peo/10211.jpg' },
    { picSrc: '../img/img2/peo/10212.jpg' },
    { picSrc: '../img/img2/peo/10213.jpg' },
    { picSrc: '../img/img2/peo/10214.jpg' },
    { picSrc: '../img/img2/peo/10229.jpg' },
    { picSrc: '../img/img2/peo/10230.jpg' },
    { picSrc: '../img/img2/peo/10231.jpg' },
    { picSrc: '../img/img2/peo/10232.jpg' },
    { picSrc: '../img/img2/peo/10237.jpg' },
    { picSrc: '../img/img2/peo/10238.jpg' },
    { picSrc: '../img/img2/peo/10241.jpg' },
    { picSrc: '../img/img2/peo/10242.jpg' },
    { picSrc: '../img/img2/peo/10243.jpg' },
    { picSrc: '../img/img2/peo/10244.jpg' },
    { picSrc: '../img/img2/peo/10248.jpg' },
    { picSrc: '../img/img2/peo/10249.jpg' },
    { picSrc: '../img/img2/peo/10257.jpg' },
    { picSrc: '../img/img2/peo/10258.jpg' },
    { picSrc: '../img/img2/peo/10259.jpg' },
    { picSrc: '../img/img2/peo/10260.jpg' },
    { picSrc: '../img/img2/peo/10261.jpg' },
    { picSrc: '../img/img2/peo/10262.jpg' },
    { picSrc: '../img/img2/peo/10263.jpg' },
    { picSrc: '../img/img2/peo/10264.jpg' },
    { picSrc: '../img/img2/peo/10265.jpg' },
    { picSrc: '../img/img2/peo/10266.jpg' },
    { picSrc: '../img/img2/peo/10267.jpg' },
    { picSrc: '../img/img2/peo/10268.jpg' },
    { picSrc: '../img/img2/peo/10269.jpg' },
    { picSrc: '../img/img2/peo/10270.jpg' },
    { picSrc: '../img/img2/peo/10271.jpg' },
    { picSrc: '../img/img2/peo/10272.jpg' },
    { picSrc: '../img/img2/peo/10273.jpg' },
    { picSrc: '../img/img2/peo/10274.jpg' },
    { picSrc: '../img/img2/peo/10275.jpg' },
    { picSrc: '../img/img2/peo/10276.jpg' },
    { picSrc: '../img/img2/peo/10277.jpg' },
    { picSrc: '../img/img2/peo/10278.jpg' },
    { picSrc: '../img/img2/peo/10279.jpg' },
    { picSrc: '../img/img2/peo/10280.jpg' },
    { picSrc: '../img/img2/peo/10281.jpg' },
    { picSrc: '../img/img2/peo/10282.jpg' },
    { picSrc: '../img/img2/peo/10283.jpg' }
];
// 获取左侧菜单的id
var p1 = document.getElementById('1');
var p2 = document.getElementById('2');
var p3 = document.getElementById('3');
var p4 = document.getElementById('4');
// 获取图片与按钮id
var pic = document.getElementById('pic');
var pic0 = document.getElementById('pic0');
var picn1 = document.getElementById('picn1');
var picn2 = document.getElementById('picn2');
var btn = document.getElementsByTagName('ai');
// 中间缓存数组，确定选择的图片组
var arr;
arr = arr0;
var count = 0; //记录点击次数
var count1 = arr.length - 1;
var count2 = 1;
var con1 = [
    { pic: "../img/img2/10004.png" },
    { pic: "../img/img2/10011.png" },
    { pic: "../img/img2/10013.png" },
    { pic: "../img/img2/10012.png" }
];
var con2 = [
    { pic: "../img/img2/10014.png" },
    { pic: "../img/img2/10005.png" },
    { pic: "../img/img2/10006.png" },
    { pic: "../img/img2/10007.png" },
];
//左侧点击的菜单图标，切换为亮色的图片，位置右移，数组改变
p1.onclick = function () {
    p1.src = con1[0].pic;
    p2.src = con2[1].pic;
    p3.src = con2[2].pic;
    p4.src = con2[3].pic;
    pic.src = '../img/img2/all/10001.jpg';
    picn1.src = '../img/img2/all/10309.jpg';
    picn2.src = '../img/img2/all/10002.jpg';
    pic0.src = '../img/img2/all/10001.jpg';
    arr = arr0;
    count = 0;
    count1 = arr.length - 1;
    count2 = 1;
}
p2.onclick = function () {
    p1.src = con2[0].pic;
    p2.src = con1[1].pic;
    p3.src = con2[2].pic;
    p4.src = con2[3].pic;
    pic.src = '../img/img2/peo/10001.jpg';
    picn1.src = '../img/img2/peo/10283.jpg';
    picn2.src = '../img/img2/peo/10002.jpg';
    pic0.src = '../img/img2/peo/10001.jpg';
    arr = arr3;
    count = 0;
    count1 = arr.length - 1;
    count2 = 1;
}
p3.onclick = function () {
    p1.src = con2[0].pic;
    p2.src = con2[1].pic;
    p3.src = con1[2].pic;
    p4.src = con2[3].pic;
    pic.src = '../img/img2/things/10012.jpg';
    picn1.src = '../img/img2/things/10301.jpg';
    picn2.src = '../img/img2/things/10013.jpg';
    pic0.src = '../img/img2/things/10012.jpg';
    arr = arr1;
    count = 0;
    count1 = arr.length - 1;
    count2 = 1;
}
p4.onclick = function () {
    p1.src = con2[0].pic;
    p2.src = con2[1].pic;
    p3.src = con2[2].pic;
    p4.src = con1[3].pic;
    pic.src = '../img/img2/end/10041.jpg';
    picn1.src = '../img/img2/end/10309.jpg';
    picn2.src = '../img/img2/end/10042.jpg';
    pic0.src = '../img/img2/end/10041.jpg';
    arr = arr2;
    count = 0;
    count1 = arr.length - 1;
    count2 = 1;
}
//通过点击改变左侧菜单的背景色
var list = document.querySelector('.side');
var liss = list.querySelectorAll('li');
for (var i = 0; i < liss.length; i++) {
    liss[i].onclick = function () {
        for (var i = 0; i < liss.length; i++) {
            liss[i].className = "";
        }
        this.className = "point";
    }
}

//通过点击按钮切换图片
btn[0].onclick = function () {
    count--;
    count1--;
    count2--;
    if (count < 0) {

        count = arr.length - 1;
    }
    if (count1 < 0) {

        count1 = arr.length - 1;
    }
    if (count2 < 0) {

        count2 = arr.length - 1;
    }
    pic.src = arr[count].picSrc;
    picn1.src = arr[count1].picSrc;
    picn2.src = arr[count2].picSrc;
    pic0.src = arr[count].picSrc;
}

btn[1].onclick = function () {
    count++;
    count1++;
    count2++;
    if (count > arr.length - 1) {

        count = 0;
    }
    if (count1 > arr.length - 1) {

        count1 = 0;
    }
    if (count2 > arr.length - 1) {

        count2 = 0;
    }
    pic.src = arr[count].picSrc;
    pic0.src = arr[count].picSrc;
    picn1.src = arr[count1].picSrc;
    picn2.src = arr[count2].picSrc;
}
//通过点击图片来切换图片
picn1.onclick = function () {
    count--;
    count1--;
    count2--;
    if (count < 0) {

        count = arr.length - 1;
    }
    if (count1 < 0) {

        count1 = arr.length - 1;
    }
    if (count2 < 0) {

        count2 = arr.length - 1;
    }
    pic.src = arr[count].picSrc;
    picn1.src = arr[count1].picSrc;
    picn2.src = arr[count2].picSrc;
    pic0.src = arr[count].picSrc;
}

picn2.onclick = function () {
    count++;
    count1++;
    count2++;
    if (count > arr.length - 1) {

        count = 0;
    }
    if (count1 > arr.length - 1) {

        count1 = 0;
    }
    if (count2 > arr.length - 1) {

        count2 = 0;
    }
    pic.src = arr[count].picSrc;
    pic0.src = arr[count].picSrc;
    picn1.src = arr[count1].picSrc;
    picn2.src = arr[count2].picSrc;
}



