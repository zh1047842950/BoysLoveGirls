/**
 * Created by YZTC on 2017/6/7.
 */

/**
 * Created by YZTC on 2017/6/7.
 */

// import mongodb from 'mongodb'

// export default
function getDB() {

  let MongoClient = require('mongodb').MongoClient;
  // let MongoClient = mongodb.MongoClient;
  let url = 'mongodb://localhost:27017/zhhydb';

  return MongoClient.connect(url, function(err, db) {
    console.log(123456);
    let DB = db.db('boysAndGirls');
    let connection = DB.collection("boys");
    connection.insert(
      [

        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170527/65262.html",
          "img": "http://www.man189.com/sguploads/allimg/170527/441_052G1511511Z.jpg",
          "title": "干净阳光的校园白衬衣帅哥 真实校草照片-干净,帅哥"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170526/65261.html",
          "img": "http://www.man189.com/sguploads/allimg/170526/441_05261I210R54.jpg",
          "title": "帅气空少陈欧阳的写真 阳光可爱的小鲜肉图片-欧阳,帅气"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170526/65260.html",
          "img": "http://www.man189.com/sguploads/allimg/170526/441_05261A1263341.jpg",
          "title": "大胸肌帅哥硬照 身体每一个部位都是硬梆梆的-胸肌,性感"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170526/65259.html",
          "img": "http://www.man189.com/sguploads/allimg/170526/441_0526155111N26.jpg",
          "title": "比黄景瑜还帅的帅哥林靖昌 真实帅哥照片-帅哥,耐看"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170520/65202.html",
          "img": "http://www.man189.com/sguploads/allimg/170520/441_052010105962c.jpg",
          "title": "越南小鲜肉兵哥哥 白皙皮肤的阮海阳-越南,帅气"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170516/65183.html",
          "img": "http://www.man189.com/sguploads/allimg/170516/441_051615311324Y.jpg",
          "title": "真实可爱的精壮弟弟 清秀又有小肌肉-精壮,清秀"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65070.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_0425154952Q33.jpg",
          "title": "嫩出水的可爱型帅哥 二十岁小鲜肉帅哥图片-鲜肉,出水"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65069.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_042515295310b.jpg",
          "title": "肌肉帅哥真实生活照 健身房挥洒汗水的胸肌帅哥-帅哥,胸肌"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65068.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_042515102K100.jpg",
          "title": "帅哥崔涛穿白内裤张开双腿 引发无限想像-双腿,内裤"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65067.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_04251451044G4.jpg",
          "title": "洲洲撩衣秀腹肌 白色T恤湿身显大胸肌和腹肌-腹肌,胸肌"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65066.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_042514100550Z.jpg",
          "title": "卖萌耍帅的正太帅哥 GAY美受图片-帅哥,奉献"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65065.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_04251030106358.jpg",
          "title": "晏人物攝影：运动型帅哥照片-运动型,帅哥"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65064.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_042510095DU7.jpg",
          "title": "五官精致的大胸肌帅哥 真实健身帅哥生活照-帅哥,胸肌"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170425/65063.html",
          "img": "http://www.man189.com/sguploads/allimg/170425/441_042509495S263.jpg",
          "title": "精壮肌肉男白色内裤帅哥床照让你热血沸腾-精壮,白色"
        },
        {"boyType":"sexyBeautyBoys",
          "link": "http://www.man189.com/h/20170424/65059.html",
          "img": "http://www.man189.com/sguploads/allimg/170424/441_04242349541C1.jpg",
          "title": "短发胡茬帅哥露胸肌床照 澳门仔仔硬照-胡茬,澳门"
        }
        ,

        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20170217/64012.html",
          "img": "http://www.man189.com/sguploads/allimg/170217/441-1F21G1241A52-lp.jpg",
          "title": "男运动员紧身衣尴尬的激凸照"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20170128/63612.html",
          "img": "http://www.man189.com/sguploads/allimg/170128/441-1F12Q94013-lp.jpg",
          "title": "健身教练邱藤藤中国红内裤露毛大鸟肌肉写真"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20161228/60952.html",
          "img": "http://www.man189.com/sguploads/allimg/161228/596_122Q349115615.jpg",
          "title": "游泳男教练穿三角泳裤脱落尴尬画面"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20151126/57702.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "惹隐若现的紧身衣半透明帅哥最性感了"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20151126/57701.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "这个体位的体操帅哥裸体看过吗"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20151028/57071.html",
          "img": "http://www.man189.com/sguploads/allimg/151028/596_151028184736_1-lp.jpg",
          "title": "运动帅哥高清阳光半裸照，你喜欢哪个"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150807/55075.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "重庆麦宫ktv男模是直男吗"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150807/55074.html",
          "img": "http://www.man189.com/sguploads/allimg/150807/124Q56492-0-lp.jpg",
          "title": "C罗内裤代言最新写真,C罗新版CR7内裤写真完美肌肉"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150807/55063.html",
          "img": "http://www.man189.com/sguploads/allimg/150807/11052630P-0-lp.jpg",
          "title": "最新宁泽涛黑色泳裤照,宁泽涛透视泳裤性感照"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150722/54214.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "罗博报告拍摄的国家游泳队男队员肌肉裸体写真好性感"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150607/51957.html",
          "img": "http://www.man189.com/sguploads/allimg/150607/596_150607224648_1-lp.jpg",
          "title": "健身教练魏鑫磊个人资料肌肉私照曝光,iFitStar魏鑫磊Rock微博地址写真"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150402/48212.html",
          "img": "http://www.man189.com/sguploads/allimg/150402/596_150402231733_1-lp.jpg",
          "title": "帅哥足球员兼模特benmaocr7微博地址多图曝光"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150402/48209.html",
          "img": "http://www.man189.com/sguploads/allimg/150402/2259545V0-0-lp.jpg",
          "title": "足球帅哥性感图片 场上足球老将，场下帅气小哥"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150326/47813.html",
          "img": "http://www.man189.com/sguploads/allimg/150326/0101531148-0-lp.jpg",
          "title": "贝克汉姆发福裸照曝光,小贝阳台半裸风骚秀纹身"
        },
        {"boyType":"sportBoys",
          "link": "http://www.man189.com/h/20150315/47049.html",
          "img": "http://www.man189.com/sguploads/allimg/150315/125QUY3-0-lp.jpg",
          "title": "《超级战队》宁泽涛脱衣秀肌肉高清组图曝光"
        }
        ,

        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170221/64074.html",
          "img": "http://www.man189.com/sguploads/allimg/170221/441_0221111Tcc3.jpg",
          "title": "欧美肌肉男模William Munoz浴室半裸秀肌肉-肌肉,男模"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170216/63995.html",
          "img": "http://www.man189.com/sguploads/allimg/170216/441_0216092625D05.jpg",
          "title": "DiMarco硬照 第22季全美超模冠军Nyle -聋哑人,全美"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170216/63994.html",
          "img": "http://www.man189.com/sguploads/allimg/170216/441_02160925546296.jpg",
          "title": "Guijarro肌肉图片 西班牙顶级肌肉男模Jonathan-肌肉,西班牙"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170216/63993.html",
          "img": "http://www.man189.com/sguploads/allimg/170216/441_02160925314U5.jpg",
          "title": "美国明星Scott 胸肌壮实性感 Eastwood肌肉图片-斯科特,壮实"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170216/63992.html",
          "img": "http://www.man189.com/sguploads/allimg/170216/441_021609251411H.jpg",
          "title": "Magazine》写真 帅气男模Nick Sandell《ADON-尼克,写真"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63965.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_0214222I62W9.jpg",
          "title": "Garofali性感写真 澳大利亚肌肉男模Daniel-男模,澳洲"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63964.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_0214222G934K.jpg",
          "title": "汤道远：中国肌肉男健美先生 健身健美高手秀-健美,杭州市"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63963.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_0214222F3EW.jpg",
          "title": "帅气欧美肌肉帅哥玩水湿身露胸肌湿身诱惑-帅气,肌肉"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63962.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_021422264H454.jpg",
          "title": "中国肌肉男模帅哥网红名媛一只疯狂的猴子-名媛,男模"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63955.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_0214111T14C4.jpg",
          "title": "Galvez 阳光帅气完美西班牙肌肉男模Victor-西班牙,男模"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63952.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_0214092610Y15.jpg",
          "title": "中国肌肉男模体育生肌肉北京体育大学刘佳萌-男模,肌肉"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170214/63951.html",
          "img": "http://www.man189.com/sguploads/allimg/170214/441_021409254J408.jpg",
          "title": "西班牙肌肉男模Victor Joan Crisol by Galvez-西班牙,男模"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170213/63949.html",
          "img": "http://www.man189.com/sguploads/allimg/170213/441_0213221JM613.jpg",
          "title": "instagram肌肉帅哥 来自印尼的东方肌肉男模-肌肉,男模"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170213/63933.html",
          "img": "http://www.man189.com/sguploads/allimg/170213/441_0213112452KS.jpg",
          "title": "阿根廷23厘米演员Joaquin Ferreira肌肉图片-阿根廷,演员"
        },
        {"boyType":"muscleBoys",
          "link": "http://www.man189.com/h/20170213/63932.html",
          "img": "http://www.man189.com/sguploads/allimg/170213/441_0213112435ZG.jpg",
          "title": "阳光帅气阳刚亚洲男 新加坡肌肉男 东南亚肌肉男-肌肉男,东南亚"
        }
        ,

        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20161203/60062.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "韩国大长腿健身教练朴一书性感激凸大鸟图"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151030/57157.html",
          "img": "http://www.man189.com/sguploads/allimg/151030/441_1030194KUQ2.jpg",
          "title": "络腮胡帅哥图片 吴超成熟稳重展型男魅力-络腮胡,稳重"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151030/57156.html",
          "img": "http://www.man189.com/sguploads/allimg/151030/441_1030134124T02.jpg",
          "title": "孙艺洲时尚大片 飞机头发型帅哥图片-发型,飞机"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151029/57137.html",
          "img": "http://www.man189.com/sguploads/allimg/151029/441_10291T60461L.jpg",
          "title": "任重个性写真 安静沉思文艺范儿十足-写真,个性"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151029/57123.html",
          "img": "http://www.man189.com/sguploads/allimg/151029/441_1029124ZJ342.jpg",
          "title": "乔振宇拍封面大片 面容冷峻硬朗男人味十足-硬朗,封面"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151028/57077.html",
          "img": "http://www.man189.com/sguploads/allimg/151028/441_102Q94540MM.jpg",
          "title": "苗驰英伦写真大片 帅气儒雅显绅士范儿-英伦,绅士"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151028/57067.html",
          "img": "http://www.man189.com/sguploads/allimg/151028/441_102Q34RL035.jpg",
          "title": "罗晋时尚大片曝光 西装革履绅士范儿十足-绅士,西装革履"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151027/56989.html",
          "img": "http://www.man189.com/sguploads/allimg/151027/441_102GT60015A.jpg",
          "title": "潮男蒋一铭个性写真 眼神深邃展型男魅力-写真,深邃"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151027/56971.html",
          "img": "http://www.man189.com/sguploads/allimg/151027/441_102G2455221E.jpg",
          "title": "正装帅哥图片 霍政谚型男大片曝光-大片,曝光"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151025/56911.html",
          "img": "http://www.man189.com/sguploads/allimg/151025/596_151025090646_1_lit.jpg",
          "title": "台湾豆花男模陈奕廷肌肉翘屁股贴臀膜写真，看样子也是0"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151024/56909.html",
          "img": "http://www.man189.com/sguploads/allimg/151024/441_1024194P41632.jpg",
          "title": "型男黄恺杰时尚写真曝光-写真,曝光"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151024/56884.html",
          "img": "http://www.man189.com/sguploads/allimg/151024/441_1024134P33443.jpg",
          "title": "黄觉40岁生日写真大片 绅士范儿十足 表情鬼马显天真-大片,写真"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151023/56867.html",
          "img": "http://www.man189.com/sguploads/allimg/151023/441_10231945356020.jpg",
          "title": "韩庚最新写真 内敛忧郁熟男范儿十足-男人,写真"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151023/56850.html",
          "img": "http://www.man189.com/sguploads/allimg/151023/441_1023134G4b23.jpg",
          "title": "成熟帅哥 傅方俊时尚写真  风格多变帅气逼人-逼人,多变"
        },
        {"boyType":"asianBoys",
          "link": "http://www.man189.com/h/20151022/56806.html",
          "img": "http://www.man189.com/sguploads/allimg/151022/441_10221TP3H08.jpg",
          "title": "董子健运动写真照片 拉弓射箭展青春活力-射箭,写真"
        }
        ,

        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20151117/57577.html",
          "img": "http://www.man189.com/sguploads/allimg/151117/1145511556-0-lp.jpg",
          "title": "美国截肢军人性感肌肉写真,美军伤残士兵写真真正的军中帅哥迈克尔斯托克斯(Michael Stokes)"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150529/51431.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "俊俏“小鲜肉”Grant Gustin帅气照萌萌哒-鲜肉,俊俏"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150507/50561.html",
          "img": "http://www.man189.com/sguploads/allimg/150507/441_050F3123250B.jpg",
          "title": "酷酷帅帅男生图片-图片,欧美"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150506/50544.html",
          "img": "http://www.man189.com/sguploads/allimg/150506/441_05061412454119.jpg",
          "title": "街拍西装型男 不同版型的区别-西装,区别"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150506/50541.html",
          "img": "http://www.man189.com/sguploads/allimg/150506/441_050613122E615.jpg",
          "title": "正装型男 身材好的欧美肌肉帅哥-帅哥,肌肉"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150506/50538.html",
          "img": "http://www.man189.com/sguploads/allimg/150506/441_050611124a223.jpg",
          "title": "欧美西装男 Jules Bianchi-西装,欧美"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150426/49819.html",
          "img": "http://www.man189.com/sguploads/allimg/150426/441_04261316442596.jpg",
          "title": "肌肉发达的欧美帅哥图片-欧美,肌肉"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150425/49712.html",
          "img": "http://www.man189.com/sguploads/allimg/150425/441_04250220339C9.jpg",
          "title": "欧美帅哥全裸拍写真 肌肉帅哥大片阴毛霸气外露-帅哥,阴毛"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150421/49340.html",
          "img": "http://www.man189.com/sguploads/allimg/150421/441_042100251b0H.jpg",
          "title": "穿正装的优质帅哥图片-点击,图片"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150419/49223.html",
          "img": "http://www.man189.com/sguploads/allimg/150419/441_0419231R2O16.jpg",
          "title": "欧美型男街拍图片 衣衫不整其实很性感-图片,欧美"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150414/48756.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "贝克汉姆16岁大儿子晒帅照 帅气变运动型男-贝克汉姆,大儿子"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150322/47633.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "欧美型男们的穿搭“保温”法 给冬季叠穿造温度-保温,冬季"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150322/47627.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "毕盖帕克男模2015春夏运动男装 男性也卖肉-男模,男装"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150322/47625.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "智族GQ型男时尚写真 Arthur Kulkov正装秀-写真,时尚"
        },
        {"boyType":"EuropeUsaBoys",
          "link": "http://www.man189.com/h/20150322/47623.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "名模Jon Kortajarena演绎时尚男装大片-名模,男装"
        }
        ,

        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20141228/43415.html",
          "img": "http://www.man189.com/sguploads/allimg/141228/596_141228203004_1-lp.jpg",
          "title": " 迟来的圣诞礼物,性感成熟的帅哥裸男圣诞诱惑"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20141222/42817.html",
          "img": "http://www.man189.com/sguploads/allimg/141222/596_141222131751_1-lp.jpg",
          "title": "张嘉译成熟暖风澳洲写真"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20141222/42816.html",
          "img": "http://www.man189.com/sguploads/allimg/141222/596_141222131517_1-lp.jpg",
          "title": "国民大叔张嘉译黄志忠携手亮相展示熟男魅力"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100319/13599.html",
          "img": "http://www.man189.com/sguploads/allimg/100319/1_031Z30ZD616.jpg",
          "title": "李洪涛：喜欢大叔的同志最爱-洪涛"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100313/13385.html",
          "img": "http://www.man189.com/sguploads/allimg/100313/1_031303135W144.jpg",
          "title": "穿浅灰色西服的西装熟男-西服"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100313/13384.html",
          "img": "http://www.man189.com/sguploads/allimg/100313/1_031303135451c.jpg",
          "title": "十九楼的帅气西装男-西装"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100312/13344.html",
          "img": "http://www.man189.com/sguploads/allimg/100312/1_0312032HaI2.jpg",
          "title": "蓝裤-"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100312/13345.html",
          "img": "http://www.man189.com/sguploads/allimg/100312/1_0312032I5R11.jpg",
          "title": "灰裤-"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100311/13305.html",
          "img": "http://www.man189.com/sguploads/allimg/100311/1_031103093J0E.jpg",
          "title": "蓝衣黑裤帅气熟男-帅气"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100311/13304.html",
          "img": "http://www.man189.com/sguploads/allimg/100311/1_03110309334D8.jpg",
          "title": "英俊的西装熟男-西装"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100309/13233.html",
          "img": "http://www.man189.com/sguploads/allimg/100801/1_0P123143U5G.jpg",
          "title": "国外西装熟男大荟萃-西装"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20100309/13232.html",
          "img": "http://www.man189.com/sguploads/allimg/100801/1_0P123144b3J.jpg",
          "title": "欧美西装熟男风采一-西装"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20091107/11881.html",
          "img": "http://www.man189.com/uppic/171069/0909130401/2e8e5295bd8ef8a41f66ea7440c0d6b3_lit.jpg",
          "title": "生活中常见的中老年-中老年"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20091106/11839.html",
          "img": "http://www.man189.com/uppic/171069/0909130401/cb24016cc92813d6039a64ec59737dc7_lit.jpg",
          "title": "胖壮成熟中年男人-中年"
        },
        {"boyType":"maturityBoys",
          "link": "http://www.man189.com/h/20091106/11838.html",
          "img": "http://www.man189.com/uppic/171069/0909130401/59067dc6dccf9839761ae91fa7053e23_lit.jpg",
          "title": "成熟中年人人爱-中年"
        }
        ,

        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20151016/56687.html",
          "img": "http://www.man189.com/sguploads/allimg/151016/441_1016144T51c6.jpg",
          "title": "一对帅哥在洗衣房纠缠 肌肉帅哥互相摸大鸟-帅哥,洗衣房"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20151015/56681.html",
          "img": "http://www.man189.com/sguploads/allimg/151015/441_1015204Q92563.jpg",
          "title": "西安最帅售票员赵浩楠微博私照曝光-售票员,西安"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20151014/56677.html",
          "img": "http://www.man189.com/sguploads/allimg/151014/441_1014204U445W.jpg",
          "title": "央视最帅男主播李泽鹏照片 李泽鹏生活照-央视,生活照"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20151009/56507.html",
          "img": "http://www.man189.com/sguploads/allimg/151009/441_10091U6161R8.jpg",
          "title": "Mc雷振2015最新生活照-生活照,最新"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150507/50567.html",
          "img": "http://www.man189.com/sguploads/allimg/150507/441_050F6122UN3.jpg",
          "title": "长相清秀的90后帅哥图片-清秀,长相"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150506/50526.html",
          "img": "http://www.man189.com/sguploads/allimg/150506/441_050610122b616.jpg",
          "title": "居家帅哥的诱人内裤秀-居家,诱人"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150506/50518.html",
          "img": "http://www.man189.com/sguploads/allimg/150506/441_05060912525048.jpg",
          "title": "网络小鲜肉陈慕帅照 潮男完爆柯震东-鲜肉,网络"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150411/48582.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "广场舞男神自拍照 飞机头发型帅倒一片-广场,舞男"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150410/48576.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "穿衣显瘦脱衣有肉的网络帅哥图片-穿衣,图片"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150321/47580.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "穿韩版长袖衬衣模特帅哥高清照片-模特,长袖"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150321/47577.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "戴着眼睛的90后时尚型男 真实帅哥生活照-生活照,帅哥"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150321/47569.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "90后帅哥背心透明和内裤激情四射写真 大根清晰可见-背心,内裤"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150321/47562.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "北大图书馆男神走红网络 2015年网络红人第一人-北大,图书馆"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150320/47556.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "北京潮男帅哥街拍 时尚爷们博主Chris Su街拍集锦-爷们,北京"
        },
        {"boyType":"handsomeBoys",
          "link": "http://www.man189.com/h/20150320/47554.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "微博红人网络帅哥 Izue骥肌肉照 性感多毛-红人,肌肉"
        }
        ,
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20170217/64013.html",
          "img": "http://www.man189.com/sguploads/allimg/170217/441-1F21G13534-lp.jpg",
          "title": "bootlust马靴警察图迷晕靴子长官视频资源"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20170103/61240.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "警察肌肉帅哥领衔脱衣秀极品身材-帅哥,肌肉,圣诞"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20170103/61262.html",
          "img": "http://www.man189.com/images/defaultpic.gif",
          "title": "泰国肌肉男模小鲜肉部队参军后私照曝光-鲜肉,男模,泰国"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20151217/57899.html",
          "img": "http://www.man189.com/sguploads/allimg/151217/212JM414-0-lp.jpg",
          "title": "国防科大第三届健美大赛军校帅哥健美铜人胴体诱人"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20151125/57689.html",
          "img": "http://www.man189.com/sguploads/allimg/151125/1152553515-0-lp.jpg",
          "title": "山东警察学院章丘校区95后帅哥警校生雪中赤膊拉练肌肉图"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20150527/51362.html",
          "img": "http://www.man189.com/sguploads/allimg/150527/441_052G919143R7.jpg",
          "title": "健身的警校大叔性感肌肉写真-帅哥,同志"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20150527/51361.html",
          "img": "http://www.man189.com/sguploads/allimg/150527/441_052G62H42201.jpg",
          "title": "军营中好帅气唯美的画面-帅哥,同志"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20150327/47855.html",
          "img": "http://www.man189.com/sguploads/allimg/150327/004F91V3-0-lp.jpg",
          "title": "《战狼》宣传直男帅哥集结广州 直男特种兵秀腹肌pk吴京高清大图"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20141211/41928.html",
          "img": "http://www.man189.com/sguploads/allimg/141211/1911494F9-0-lp.jpg",
          "title": "军中帅哥大蜕变,解放军新兵群晒穿越照：参军前样子果然很霸道"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20141205/41529.html",
          "img": "http://www.man189.com/sguploads/allimg/141205/596_141205230440_1-lp.jpg",
          "title": "南昌消防战士秀“变态肌肉"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20141012/36005.html",
          "img": "http://www.man189.com/sguploads/allimg/141012/596_141012141846_1-lp.jpg",
          "title": "男模王金斌山振东上演军营男男禁爱基情写真 王金斌山振东战爱激情"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20140913/32762.html",
          "img": "http://www.man189.com/sguploads/allimg/140913/598_140913212818_1-lp.jpg",
          "title": "四川德阳消防支队武警战士＂浴火重生＂组照,四川消防武警阳刚写真"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20140731/27798.html",
          "img": "http://www.man189.com/sguploads/allimg/140731/1_0I1011H39463.jpg",
          "title": "当兵的帅哥，主要看肌肉-当兵,肌肉"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20140731/27796.html",
          "img": "http://www.man189.com/sguploads/allimg/140731/1_0I10016246345.jpg",
          "title": "陆军爷们自拍秀-爷们,自拍"
        },
        {"boyType":"militaryPoliceBoys",
          "link": "http://www.man189.com/h/20140730/27794.html",
          "img": "http://www.man189.com/sguploads/allimg/140730/1_0I02326232491.jpg",
          "title": "一个很帅的消防兵-"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27773.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I014154V600.jpg",
          "title": "九寨沟的帅警，太帅太精神了-精神"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27771.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I01316114L0.jpg",
          "title": "俄罗斯大兵-俄罗斯,大兵"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27769.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I0121620W04.jpg",
          "title": "乌鲁木齐西大桥的帅交警-乌鲁木齐,交警"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27763.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I01116195534.jpg",
          "title": "军营中的快乐氛围-军营,氛围"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27750.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I0101613DL.jpg",
          "title": "帅气的军警雄姿-雄姿,军警"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27747.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I009163N130.jpg",
          "title": "帅帅的军人和特警-特警,军人"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27745.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I00Q5442E9.jpg",
          "title": "军警正装-军警"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27743.html",
          "img":"http://www.man189.com/images/defaultpic.gif",
          "title": "陕师大军训教官-教官,师大"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27740.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I00616395J9.jpg",
          "title": "风华正茂的肌肉型男-风华正茂,肌肉"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27738.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I0051534cc.jpg",
          "title": "雪豹突击队队员-那个叫帅猛-雪豹,突击队"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27736.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I00415526147.jpg",
          "title": "制服控之军警，迷死你啊-军警"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27734.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I00315315950.jpg",
          "title": "帅军哥哥-哥哥"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27732.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I0021F42328.jpg",
          "title": "帅、猛...海军陆战队-海军陆战队"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27730.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I001160H2M.jpg",
          "title": "两大极品男模军装肉搏（谁的肉体更撩人）-肉搏,男模"
        },
        {"boyType":"militaryPoliceBoys",
          "link":"http://www.man189.com/h/20140730/27728.html",
          "img":"http://www.man189.com/sguploads/allimg/140730/1_0I000153924W.jpg",
          "title": "中国武警帅哥在伊拉克守卫中国油田-中国,伊拉克"
        }

        ]
    );
    console.log(DB,connection)
  });
}

getDB();
