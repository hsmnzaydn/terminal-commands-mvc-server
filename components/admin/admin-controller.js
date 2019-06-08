const languageSchema = require('../language/model/language-model')
categorySchema = require('../categories/model/category-model')
commandSchema = require('../commands/model/command-model')

require('dotenv').config()

module.exports = {
    login,
    index,
    duplicate
}

async function login(req, res, next) {
    if (req.method == 'GET') {
        res.render('login')
    } else if (req.method == 'POST') {
        req.session.userName = process.env.ADMIN_USERNAME
        req.session.password = process.env.ADMIN_PASSWORD

        userName = req.body.userName
        password = req.body.password
        if (userName == req.session.userName && password == req.session.password) {
            res.redirect('/admin')
        } else {
            res.redirect('/admin/login')
        }



    }

}

async function index(req, res, next) {
    languageSchema.find().then(languages => {
        res.render('index', {
            languages: languages
        })
    })
}



var categories = [{
        "_id": {
            "$oid": "5b11bf998c0c074c8816affd"
        },
        "title": "Dosya Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b040"
        },
        "title": "Ağ Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b08c"
        },
        "title": "APT Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b0d2"
        },
        "title": "Search Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b101"
        },
        "title": "System Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b152"
        },
        "title": "Pacman Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b19a"
        },
        "title": "Commandes FTP",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b1e3"
        },
        "title": "commandes git",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b030"
        },
        "title": "FTP Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b07b"
        },
        "title": "Git Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b0b7"
        },
        "title": "File Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b0f8"
        },
        "title": "Network Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b144"
        },
        "title": "APT Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b190"
        },
        "title": "Commandes de compression",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b1db"
        },
        "title": "Commandes d'autorisation",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b20a"
        },
        "title": "Pacman Komutları",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b018"
        },
        "title": "Arama Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b049"
        },
        "title": "Sistem Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b09a"
        },
        "title": "RPM Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b0e0"
        },
        "title": "Compression Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b12a"
        },
        "title": "Permission Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b167"
        },
        "title": "Commandes de fichiers",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b1a9"
        },
        "title": "Commandes réseau",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b1f4"
        },
        "title": "Commandes APT",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b026"
        },
        "title": "Sıkıştırma Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b072"
        },
        "title": "İzin Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b0a2"
        },
        "title": "Pacman Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b0ea"
        },
        "title": "FTP Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b133"
        },
        "title": "Git Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b182"
        },
        "title": "Commandes de recherche",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b1b2"
        },
        "title": "Commandes système",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b11bf998c0c074c8816b202"
        },
        "title": "Commandes RPM",
        "language": "FRA",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b4b92905e168714a44e2f51"
        },
        "title": "Adb Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b95651db81119351c50d794"
        },
        "title": "Adb Commands",
        "language": "ENG",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b9565cdb81119351c50d799"
        },
        "title": "Docker Komutları",
        "language": "TR",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "5b957bc8b81119351c50d7a9"
        },
        "title": "Docker Commands",
        "language": "ENG",
        "__v": 0
    },
]


var commands=[
    {
    
        "language" : "TR",
        "text" : "ls",
        "detail" : "Klasör altındaki dosyaların adlarını verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ls -i",
        "detail" : "Dosyanın inode numarasını gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ls -R",
        "detail" : "Yinemeli olarak alt dizinlerin listesini gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ls -al",
        "detail" : "Gizli dosyalarıda gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ls -l",
        "detail" : "Dosya veya dizini gösterir.Dosyanın değiştirilme tarihini ve saatini gösterir.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ls -lh",
        "detail" : "Okunabilir biçimde dosya boyutlarını gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "mkdir dizin",
        "detail" : "Yeni bir dizin oluşturur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pwd",
        "detail" : "Bulunduğunuz dizini verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cd dosyayolu",
        "detail" : "Bulunduğunuz dosya yolunu değiştirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cd ..",
        "detail" : "Bir önceki dosya yoluna gider",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rm dosya",
        "detail" : "Dosyayı siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rm a*",
        "detail" : "a ile başlayan tüm dosyaları siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "mv dosya1 dosya2",
        "detail" : "dosya1 'i dosya2' ye taşır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "more dosya",
        "detail" : "Dosyanın içeriğini çıktı olarak verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rm -r dizin",
        "detail" : "Dizini siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rm -f dosya",
        "detail" : "Dosyayı kaldırmaya zorlar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rm *",
        "detail" : "Bütün dosyaları siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "locate dosya",
        "detail" : "Dosyanın bulunduğu dizindeki diğer dosyaları dizinler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find . -type f -name *.php",
        "detail" : "Dizindeki tüm php dosyalarını bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find / -cmin -60",
        "detail" : "1 saat içinde değiştirilen tüm dosyaları bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find <dosya_yolu> -perm -4000",
        "detail" : "Dosya yolunda bulunan suid bite sahip dosyaları bulmak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar czf dosya.tar.gz dosya",
        "detail" : "dosyayı dosya.taz.gz'ye çevirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "gzip dosya",
        "detail" : "dosyayı dosya.gz'ye çevirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cp -r dizin1 dizin2",
        "detail" : "dizin1'i dizin2'ye kopyalar.Eğer dizin2 diye dizin yoksa dizin2 adında bir dizin oluşturur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rm bet*as",
        "detail" : "bet ile başlayıp as ile biten tüm dosyaları siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cat>dosya",
        "detail" : "Dosyanın içine input yazar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ls -s dosya link",
        "detail" : "Dosyada sembolik bir link oluşturur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "comm DosyaA DosyaB",
        "detail" : "Iki dosyayi satir satir karsilastırır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "head dosya",
        "detail" : "Dosyanın ilk 10 satırını verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cp dosyaA dosyaB",
        "detail" : "dosyaA'yi dosyaB'ye kopyalar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "touch dosya",
        "detail" : "Ya dosya oluşturur yada dosyayı günceller",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "less text",
        "detail" : "Text dosyasının içeriğini çıktılar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Dosya Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find / -name foo",
        "detail" : "Dosyaya verilen isim ile arama yapar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find . -type f -perm 0777 - print",
        "detail" : "İzini 777 olan tüm dizinleri bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find / -mmin -60",
        "detail" : "1 saat içinde modifiye edilen tüm dosyaları bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "bzip dosyaadı",
        "detail" : "bzip dosyasını sıkıştırır yada çıkartır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar xzf dosya.tar.gz",
        "detail" : "dosya.tar.gz'yi çıkartır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "gzip -d dosya.gz",
        "detail" : "Dosya.gz dosyasını çıkartır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar cjf dosya.tar.bz2",
        "detail" : "Bzip2 kullanarak bir tar dosyası oluşturur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find /home -iname dosya.txt",
        "detail" : "Adı dosya.text olan ve ana dizinde hem büyük hem de küçük harf içeren dosyaları bulun.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find ~ -empty",
        "detail" : "Home dizininin içindeli tüm boş dizinleri bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find / -size +50M -size -100M",
        "detail" : "50MB ve 100MB arasındaki tüm dosyaları bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar cf dosya.tar dosya",
        "detail" : "dosya'yı dosya.tar a çevirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar cjf dosya.tar.bz2",
        "detail" : "Bzip2 kullanarak bir tar dosyası oluşturur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ftp",
        "detail" : "Ftp clientine girer",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "-i",
        "detail" : "Çoklu transfer sırasında istemleri kapatır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "$",
        "detail" : "Makro çalıştırır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "bye",
        "detail" : "FTP'den çıkar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "status",
        "detail" : "FTP serverın durumunu gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find / -type d -name dosya",
        "detail" : "dosya adındaki tüm dosyaları bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "find / -atime 50",
        "detail" : "50 gün önce erişilen tüm dosyaları bulur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "lsattr",
        "detail" : "Sistemde değiştirilemez dosya olup olmadığını bulmak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Arama Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar xf dosya.tar",
        "detail" : "dosya.tar dosyasını çıkartır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "tar xjf dosya.tar.bz2",
        "detail" : "dosya.tar.bz2 dosyasını çıkartır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sıkıştırma Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "-p",
        "detail" : "Pasif modu kullanır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "-d",
        "detail" : "Debugging aktif",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "binary",
        "detail" : "Image dosyalarını transfer etmek için destek sağlar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "open Host",
        "detail" : "Host'a bağlantı açar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ping host",
        "detail" : "Host adresine ping gönderir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "-v",
        "detail" : "Verbose modu",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ascii",
        "detail" : "Dosya aktarımlarını ascii protokollerine göre ayarlar.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "dir",
        "detail" : "Bulunduğunuz dizindeki dosyaları gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ifconfig",
        "detail" : "Ağ arayüzünüzü gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "account[password]",
        "detail" : "Uzaktan Kumanda ile Gerekli Bir Parola Sağlar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "wget -c adres",
        "detail" : "Kesilmiş indirmeye devam eder",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "account[password]",
        "detail" : "Uzaktan Kumanda ile Gerekli Bir Parola Sağlar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "sudo komut",
        "detail" : "Komutu yönetici izni ile çalıştırır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "arp",
        "detail" : "Ağ kartınızı kontrol eder ve ip adresinizi gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "whoami",
        "detail" : "Giriş yaptığın kullanıcı adını gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "dig domain",
        "detail" : "Domainin Dns bilgilerini getirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "df",
        "detail" : "Disk kullanımını gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "date",
        "detail" : "Tarihi gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "ps aux",
        "detail" : "Sistemde çalışan uygulamaları gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cal",
        "detail" : "Küçük bir takvim gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cat /proc/cpuinfo",
        "detail" : "CPU bilgilerini gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "whereis uygulama",
        "detail" : "Uygulamanın nerede yüklü olduğunu gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "whois domain",
        "detail" : "Domain bilgilerini getirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "netstat",
        "detail" : "Ağ bağlantılarını gözden geçirir ve soketleri açar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "sudo su",
        "detail" : "Terminalde yönetici moduna geçersiniz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "fingure kullanıcıadı",
        "detail" : "Kullanıcı adının bilgilerini gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "free",
        "detail" : "Memory'i ve kullanılan swapı gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "kill uygulama",
        "detail" : "Uygulamayı derhal kapatır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "wget adres",
        "detail" : "Adresteki dosyayı indirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Ağ Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "date;who",
        "detail" : "Tarih ve kullanıcıyı gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "uptime",
        "detail" : "Sistemde geçerli saati gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "cat /proc/meminfo",
        "detail" : "Memory bilgilerini gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "which uygulama",
        "detail" : "Hangi uygulamanın default olarak çalıştığını gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "uname -harf",
        "detail" : "-m Makinanın donanımının adını verir.\n-n Nodename i yazar. Nodename sistemin network iletişimi için kullanılır.\n-r Kernel sürümünü gösterir\n-s Sistem ismini yazar\n-v İşletim sisteminin versiyonuu yazar\n-a yukarıdaki bilgilerin tamamını yazar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apropos",
        "detail" : "Belli bir kelimeyi man sayfalarinda arar.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "continue",
        "detail" : "Bir bloku belli bir kosuldan sonra terk etme ve kaldigin yerden devam eder. ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "halt",
        "detail" : "Sistemi durdur ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "dd",
        "detail" : "Disk içeriklerini kopyalamak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chgrp",
        "detail" : "Grup değiştir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "delgroup grup",
        "detail" : "Grubu sil ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "lsb_release -a",
        "detail" : "Dağıtımla ilgili bilgiyi görmek için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "passwd <kullanıcı_adı>",
        "detail" : "Kullanıcı adının şifresini değiştirmek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "alias",
        "detail" : "Bir komuta için kisayollar yaratır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chfn",
        "detail" : "Finger bilgilerinde değişiklik yap",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "deluser kullanıcı",
        "detail" : "Kullanıcıyı sil ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "sensors",
        "detail" : "CPU sıcaklıklarını gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "help",
        "detail" : "Yardım almak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "shutdown",
        "detail" : "Sistemi kapatmak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "history",
        "detail" : "Daha önce kullanılmış komut satırlarını görmemize yarar.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "clear",
        "detail" : "Monitörü temizler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "groupadd grup",
        "detail" : "Yeni bir grup oluştur ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "dmidecode",
        "detail" : "Sistemimizle ilgili bilgi(bios,memory,cache vb) almak için kullanılır.Örn:demicode --type bios, demicode --type memory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "echo $SHELL",
        "detail" : "Sisteminizde kullanılan kabuk programını görmek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod a-x dosya",
        "detail" : "Tüm kullanıcıların dosya üzerindeki çalıştırma izinlerini kaldırıyoruz.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chage -E tarih(12.02.2022) <kullanıcı_adı>",
        "detail" : "Kullanıcı hesabının parola dolum süresini belirlemek için kullanılır. ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "usermod -L <kullanıcı_adı>",
        "detail" : "Kullanıcı hesabını kilitlemek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod u+rw dosya",
        "detail" : "Bununla sahip (bu genellikle sizsiniz), my dosyası üzerinde okuma ve yazma iznine sahip olur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod +r dosya",
        "detail" : "Dosyayı okuma izni verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chattr +i dosya",
        "detail" : "Dosyayı değiştirilemez yapmak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod u+rw dosya",
        "detail" : "Bununla sahip (bu genellikle sizsiniz), my dosyası üzerinde okuma ve yazma iznine sahip olur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git log",
        "detail" : "Yerel depoda yapılmış olan tüm değişiklikleri gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git config --global user.name \"Kullanıcı adı\"",
        "detail" : "Git kullanırken kullanacağınız kullanıcı adını belirler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git add dosyaadı",
        "detail" : "Depoya yollamak istediğiniz dosyaları indexe ekler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git clone depoadresi",
        "detail" : "Bulunduğunuz klasöre depoyu kopyalar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git commit -m \" Teslim mesajı \" ",
        "detail" : "Yollayacağınız dosyalara mesaj eklersiniz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git checkout -b yenidalAdi",
        "detail" : "Yeni bir dal oluşturur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git pull",
        "detail" : "En son değişiklikleri çekersiniz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get dist-upgrade",
        "detail" : "Debian versiyonunu yükseltir.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get remove paketadı",
        "detail" : "Paketi siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "sudo add-apt-repository yeni_deponun_PPA_adresi",
        "detail" : "Yeni bir depo ekler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "free -m",
        "detail" : "Bellek miktarını görmek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "usermod -U <kullanıcı_adı>",
        "detail" : "Kullanıcı hesabını tekrar aktif etmek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Sistem Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod +w dosya",
        "detail" : "Dosyaya yazma izni verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod +x dosya",
        "detail" : "Dosyaya çalıştırma izni verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git config --global email \"mailAdresi\"",
        "detail" : "Git kullanırken kullanacağınız mail adresini belirler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git clone kullaniciadi@sunucu:/yol/depo ",
        "detail" : "Uzak sunucudaki depoyu bulunduğunuz klasöre depolar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "chmod a+r dosya",
        "detail" : "Tüm kullanıcılara okuma izni verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "İzin Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git status",
        "detail" : "Deponuzda yaptığınız değişiklikleri gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git add *",
        "detail" : "Tüm dosyayı indexe ekler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git checkout master",
        "detail" : "Master dalına geri dönersin",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git merge dalAdı",
        "detail" : "Başka bir dal ile birleştirmek için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get install paketadı",
        "detail" : "Paketi yükler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get autoremove",
        "detail" : "Eski paketleri siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "sudo apt-cache show paket_adı",
        "detail" : "Program hakkında bilgi verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "yum install <program_adı>",
        "detail" : "Depodaki programı kurar.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "yum update",
        "detail" : "Sistemi güncellemek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "IgnoreGroup=package_group",
        "detail" : "Paket grubunu göz ardı ederek yükseltir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -U http://www.examplepackage/repo/examplepkg.tar.xz",
        "detail" : "Yansı üzerinden paketi yükler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Sc $(pacman -Qdtq)",
        "detail" : "Gereksiz tüm paketleri bellekten boşaltır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Ss paketadı",
        "detail" : "Açıklamalarıyla birlikte paketi arar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Qdt",
        "detail" : "Gerekli olmayan paketleri bağımlılıkları olmaksızın listeler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls -l",
        "detail" : "Shows file or directory,size,modified date and time, file or folder name and owner of file and it's permission",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cd ..",
        "detail" : "Change directory to before dir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "rm -r file",
        "detail" : "Delete the file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "rm bet*as",
        "detail" : "Delete starting with as and ending with bet files",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls -s file link",
        "detail" : "Create sembolic link for file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "head file",
        "detail" : "Get first 10 line of file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find / -name foo",
        "detail" : "Search with gived name of file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find . -type f -perm 0777 - print",
        "detail" : "Find all permission 777 files",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find / -mmin -60",
        "detail" : "Find modified files in 1 hour",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "bzip filename",
        "detail" : "Compress of unzip the bzip file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "tar xzf file.tar.gz",
        "detail" : "Unzip file.tar.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "gzip -d file.gz",
        "detail" : "Unzip file.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "-v",
        "detail" : "Verbose mode",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ascii",
        "detail" : "Setting ascii protocol the transfer file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "open Host",
        "detail" : "Open connect to host",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ping host",
        "detail" : "Send ping to address of host",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "wget -c adress",
        "detail" : "Continue the download",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "sudo command",
        "detail" : "Run command with root",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "whoami",
        "detail" : "Show your login account",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rpm -ev <program.rpm>",
        "detail" : "Kurulan paketi sistemden kaldırır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "yum remove <paket_adı> ",
        "detail" : "Kurulan paketi sistemden siler.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "IgnorePkg=package_name",
        "detail" : "Bazı paketleri engelleyerek yükseltir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -U /paket yolu/paketadı.pkg.tar.xz",
        "detail" : "tar.xz uzantılı yerel paketi yüklemeye yarar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Rsc paketadı",
        "detail" : "Bir paketi tüm bağımlılığıyla kaldırır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Rs $(pacman -Qtdq)",
        "detail" : "İhtiyaç duyulmayan paketleri temizler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Ql",
        "detail" : "Kurulu paketlerin listesini verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls -R",
        "detail" : "Shows recursively list of Sub-Directories",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cd dir",
        "detail" : "Changed directory to dir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "rm dir",
        "detail" : "Delete the dir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "rm a*",
        "detail" : "Delete all starting with a file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "mv dir1 dir2",
        "detail" : "Move dir1 to dir2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "more file",
        "detail" : "Get informatin abouth file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "locate fileA",
        "detail" : "Index other files in the directory where the file is located",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find . -type f -name *.php",
        "detail" : "Find all .php file in file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find / -cmin -60",
        "detail" : "Find changed files in 1 hour",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find <file_path> -perm -4000",
        "detail" : "Find has suid_bites file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git branch -d dalAdı",
        "detail" : "Dalı siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get update",
        "detail" : "Uygun durumdaki güncellemeleri yeniler.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get install paket1 paket2 paket3 paket4 paket5 paket6 ...",
        "detail" : "Birden çok paket kurar.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get -f install",
        "detail" : "Hatalı paketleri tamir etmeye çalışır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get help",
        "detail" : "Apt komutu hakkında bilgi verir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-cache search <program_adı> ",
        "detail" : "Kurmak istediğimiz program depoda varmı yokmu diye arar.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman-optimize && sync",
        "detail" : "İndirme hızını optimize eder ve eşleştirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -S paketadı",
        "detail" : "Paket yükler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -R paketadı",
        "detail" : "Paketi kaldırır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Scc",
        "detail" : "Paketlerin tutulduğu belleği boşaltır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Qs paketadı",
        "detail" : "Kurulu paketler içinde arama yapar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls",
        "detail" : "List current directory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls -lh",
        "detail" : "Shows sizes in human readable format",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pwd",
        "detail" : "Show current directory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "rm -f file",
        "detail" : "Force remove file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cp fileA fileB",
        "detail" : "Copy fileA to fileB",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git push origin master",
        "detail" : "Uzak depoya indexe eklediğiniz dosyaları yollar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "git push origin dalAdı",
        "detail" : "Yaptığınız değişiklikleri dala yollar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-get upgrade",
        "detail" : "Tüm paketleri upgrade eder. (en üst sürüme yükseltir)",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "sudo apt-get purge paket_adı",
        "detail" : "Kurulu bir paketi yapılandırma dosyaları ile beraber kaldırır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "dpkg -i paket.deb",
        "detail" : "Paket.deb dosyasını yükler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "rpm -ivh <program.rpm>",
        "detail" : "RPM uzantılı dosyayı kurmak için kullanılır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "apt-cache show <program_adı> ",
        "detail" : "Kurmak istediğimiz program ile ilgili bilgi almak için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "RPM Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Su",
        "detail" : "Sisteminizi günceller",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Sw paketadı",
        "detail" : "Bir paketi kurulum yapmadan indirir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Rs paketadı",
        "detail" : "Başka paketlerce kullanılmayan bağımlılıklarıyla birlikte paketi kaldırır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Sc",
        "detail" : "Belleği temizler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "df",
        "detail" : "Show disk usage",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ps aux",
        "detail" : "Show running application on your system",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "alias",
        "detail" : "Create a shortcut for ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chfn",
        "detail" : "Change information of finger",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "deluser userName",
        "detail" : "Delete the userName ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "help",
        "detail" : "Get help",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "pacman -Si paketadı",
        "detail" : "Paket hakkında bilgi alır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls -i",
        "detail" : "Display Inode number of File or Directory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ls -al",
        "detail" : "Formatted listing with hidden files",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "mkdir dir",
        "detail" : "Create a dir on your current directory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "rm *",
        "detail" : "Delete all file in your current directory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cp -r dir1 dir2",
        "detail" : "Copy dir1 to dir2.If there isn't dir2 it create a dir2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "history",
        "detail" : "Show used terminal commands",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chage -E date(12.02.2022) <userName>",
        "detail" : "Used to specify the user account's password expiration time. ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod u+rw file",
        "detail" : "Give writer and read permission to file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chattr +i file",
        "detail" : "It's make file to unalterable file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git log",
        "detail" : "Show all changes on local repo",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git add fileName",
        "detail" : "Add your file to index",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git checkout -b branchName",
        "detail" : "Create new a branch",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git pull",
        "detail" : "Get last changes",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get dist-upgrade",
        "detail" : "Upgrade your Debian version to last version",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get remove packageName",
        "detail" : "Remove the package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "sudo add-apt-repository yeni_deponun_PPA_adresi",
        "detail" : "Add new repository",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Su",
        "detail" : "Update your system",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Sw package_name",
        "detail" : "Download a package without installing",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Rs package_name",
        "detail" : "Remove package with not use other package's dependencies",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Sc",
        "detail" : "Clean memory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Si package_name",
        "detail" : "Get information about the package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "tar czf file.tar.gz file",
        "detail" : "Convert file to file.tar.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "gzip file",
        "detail" : "Convert file to file.gzip",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "-i",
        "detail" : "Shutdown request on multi transfer.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "account[password]",
        "detail" : "Provides password with remote control",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "dir",
        "detail" : "Show your current files",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ifconfig",
        "detail" : "Show network interface",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "wget adress",
        "detail" : "Download the information of adress",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "date;who",
        "detail" : "Show date and user",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "uptime",
        "detail" : "Show time of your system",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cat /proc/meminfo",
        "detail" : "Show memory information",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "which application",
        "detail" : "Show default application",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "uname -letter",
        "detail" : "-m Show your system hardware.\n-n Write Nodename. Nodename has usage for network communication.\n-r Show kernel's release\n-s Write name of system\n-v Write name of OS \n-a Write all information of up",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apropos",
        "detail" : "Search a word in man's pages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "continue",
        "detail" : "continue the commands ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "halt",
        "detail" : "Stop the system ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "free -m",
        "detail" : "Show quantity of memory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "touch file",
        "detail" : "Create a file or update file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "less text",
        "detail" : "Return content of text",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find /home -iname file.txt",
        "detail" : "Find name is file.txt files in home directory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find ~ -empty",
        "detail" : "Find all empty file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find / -size +50M -size -100M",
        "detail" : "Find between 500M and 100M files",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "tar cf file.tar file",
        "detail" : "Convert file to file.tar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "tar cjf file.tar.bz2",
        "detail" : "Create a file.tar.bz2 with Bzip2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cat>file",
        "detail" : "Write input to in file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "ftp",
        "detail" : "Enter ftp client",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "comm fileA fileB",
        "detail" : "Compare fileA with fileB",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "File Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "-d",
        "detail" : "Active Debugging",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find / -type d -name file",
        "detail" : "Find all file files",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "binary",
        "detail" : "Support transfer of Images",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "find / -atime 50",
        "detail" : "Find changed files in 50 days",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "status",
        "detail" : "Show status of server",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "lsattr",
        "detail" : "Find unalterable files in system",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Search Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "whois domain",
        "detail" : "Get information of domain",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "tar xf file.tar",
        "detail" : "Unzip file.tar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "netstat",
        "detail" : "Look connect of network and open the sockets",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "sudo su",
        "detail" : "Change the mode on terminal",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "fingure userName",
        "detail" : "Show information of userName",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "free",
        "detail" : "Show memory and swap area",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "kill application",
        "detail" : "Shutdown the application",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "dd",
        "detail" : "Usage for content of disk",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chgrp",
        "detail" : "Change group",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "delgroup group",
        "detail" : "Delete the group",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "tar xjf file.tar.bz2",
        "detail" : "Unzip file.tar.bz2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Compression Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "lsb_release -a",
        "detail" : "Show information of distribution",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "-p",
        "detail" : "Use passive mode",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "passwd <userName>",
        "detail" : "Change the password of userName",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "$",
        "detail" : "Run makro",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "echo $SHELL",
        "detail" : "Used to view the shell program used on your system.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "bye",
        "detail" : "Out the FTP",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "FTP Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "arp",
        "detail" : "Control your network card and show your ip",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "dig domain",
        "detail" : "Get dns information of domain",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Network Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod a-x file",
        "detail" : "Remove the permission of all user for file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod a+r file",
        "detail" : "Give read permission to file for All user",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git status",
        "detail" : "Show changes on log file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git add *",
        "detail" : "Add all file to index",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git checkout master",
        "detail" : "Return to master branch",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git merge branchName",
        "detail" : "Merge branch other branch",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get install package_name",
        "detail" : "Install the package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get autoremove",
        "detail" : "Remove old packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "sudo apt-cache show package_name",
        "detail" : "Give information of abouth package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "IgnorePkg=package_name",
        "detail" : "Boosts some packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "date",
        "detail" : "Show date",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -U /package patch/packagename.pkg.tar.xz",
        "detail" : "Install packagename.pkg.tar.xz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cal",
        "detail" : "Show calendar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "cat /proc/cpuinfo",
        "detail" : "Show CPU information",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "whereis application",
        "detail" : "Show directory of application",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "sensors",
        "detail" : "Show temperature of CPU",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "shutdown",
        "detail" : "shutdown the system",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "clear",
        "detail" : "Clear the terminal",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "groupadd group",
        "detail" : "Create a new group ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "dmidecode",
        "detail" : "Get data of system(bios,memory,cache etc).Exp:demicode --type bios, demicode --type memory",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "usermod -L <userName>",
        "detail" : "Lock the userName account",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod +r file",
        "detail" : "Give read permission to file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod u+rw file",
        "detail" : "Bununla sahip (bu genellikle sizsiniz), my dosyası üzerinde okuma ve yazma iznine sahip olur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git config --global user.name \"User name\"",
        "detail" : "Determines default userName for git",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git clone repoAdress",
        "detail" : "Copy the repo to current path",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git commit -m \" commit \" ",
        "detail" : "Add commit to index file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git branch -d branch",
        "detail" : "Delete the branch",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "usermod -U <userName>",
        "detail" : "Re-active the userName",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "System Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod +w file",
        "detail" : "Give to write permission to file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "chmod +x file",
        "detail" : "Give run permission to file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Permission Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git config --global email \"mail adress\"",
        "detail" : "Determines default mail for git",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git clone userName@host:/patch/repo ",
        "detail" : "Copy repo to your current file",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git push origin master",
        "detail" : "Push your files to repo",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "git push origin branch",
        "detail" : "Your changes push to your branch",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Git Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get upgrade",
        "detail" : "upgrade your all package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get update",
        "detail" : "Update your packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "sudo apt-get purge package_name",
        "detail" : "Remove package with dependency",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get install package1 package2 package3 package4 package5 package6 ...",
        "detail" : "Install multi package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "dpkg -i package.deb",
        "detail" : "Install package.deb",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get -f install",
        "detail" : "It tries to repair faulty packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman-optimize && sync",
        "detail" : "Optimize and match download speed",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "apt-get help",
        "detail" : "Get information about help",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "APT Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "IgnoreGroup=package_group",
        "detail" : "Package group is ignoring altitude",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -U http://www.examplepackage/repo/examplepkg.tar.xz",
        "detail" : "Package loads over the mirror",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -S package_name",
        "detail" : "Install package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -R package_name",
        "detail" : "Remove package",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Scc",
        "detail" : "Empty the memory of the packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Qs package_name",
        "detail" : "Search in installed packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls",
        "detail" : "Donnez les noms des fichiers sous le dossier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls -lh",
        "detail" : "Affiche les tailles de fichier dans un format lisible",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pwd",
        "detail" : "Nous donne ce que nous avons",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rm -f fichier",
        "detail" : "Forcer le fichier à supprimer",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cp fichier 1 fichier 2",
        "detail" : "copier le fichier 1 dans le fichier 2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "touch fichier",
        "detail" : "Créez un fichier ou mettez à jour un fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "less texte",
        "detail" : "Sort le contenu du fichier texte",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find /home -iname fichier.txt",
        "detail" : "Recherchez les fichiers portant le nom fichier.texte et les majuscules et minuscules dans la ligne principale.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find ~ -empty",
        "detail" : "Trouve tous les répertoires vides dans le répertoire Home",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Rsc package_name",
        "detail" : "Remove package with dependencies",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Rs $(pacman -Qtdq)",
        "detail" : "Cleans up unneeded packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Ql",
        "detail" : "List of installed packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls -R",
        "detail" : "Répète la liste des sous-répertoires",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cd chemin du fichier",
        "detail" : "Le fichier que vous modifiez va changer le chemin",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rm fichier",
        "detail" : "Supprime le fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find / -size +50M -size -100M",
        "detail" : "Trouve tous les fichiers entre 50 Mo et 100 Mo",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rm a*",
        "detail" : "Supprimez tous les fichiers commençant par un",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar cf fichier.tar fichier",
        "detail" : "convertir le fichier en fichier.tar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "mv fichier 1 fichier 2",
        "detail" : "déplace le fichier 1 vers le fichier 2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar cjf fichier.tar.bz2",
        "detail" : "Créer un fichier tar en utilisant Bzip2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "more fichier",
        "detail" : "Affiche le contenu du fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "locate fichier",
        "detail" : "Indexer d'autres fichiers dans le répertoire où se trouve le fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find . -type f -name *.php",
        "detail" : "Trouver tous les fichiers php dans l'index",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find / -cmin -60",
        "detail" : "Trouve tous les fichiers modifiés dans 1 heure",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find <chemin du fichier> -perm -4000",
        "detail" : "Utilisé pour trouver des fichiers avec des bits suid dans le chemin du fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar czf fichier.tar.gz fichier",
        "detail" : "convertir le fichier en fichier.tar.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "gzip fichier",
        "detail" : "convertir le fichier en fichier.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "-i",
        "detail" : "Désactive les demandes lors de plusieurs transferts.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "$",
        "detail" : "Exécuter la macro",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "bye",
        "detail" : "Dénomination FTP",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "arp",
        "detail" : "Il vérifie votre carte réseau et affiche votre adresse IP",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "dig domain",
        "detail" : "Domainin Dns apporte des informations",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "date",
        "detail" : "Afficher la date",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cal",
        "detail" : "Afficher un petit calendrier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cat /proc/cpuinfo",
        "detail" : "Affiche les informations du processeur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ftp",
        "detail" : "Entrez le client Ftp",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "-v",
        "detail" : "Mode verbeux",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ascii",
        "detail" : "Définit les transferts de fichiers vers les protocoles ascii.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "open Host",
        "detail" : "Ouvre la connexion à l'hôte",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls -i",
        "detail" : "Indique le numéro d'inode du fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ping host",
        "detail" : "Adresse hôte Ping",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls -al",
        "detail" : "Afficher les fichiers cachés",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "mkdir annuaire",
        "detail" : "Créer un nouveau répertoire",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "wget -c adresse",
        "detail" : "Continue d'interrompre le téléchargement",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rm *",
        "detail" : "Supprimer tous les fichiers",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cp -r répertoire 1 répertoire 2",
        "detail" : "Copiez le répertoire 1 dans le répertoire 2. S'il n'y a pas de répertoire 2, créez un répertoire nommé répertoire 2.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "sudo commandement",
        "detail" : "Exécuter la commande avec l'autorisation de l'administrateur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cat>fichier",
        "detail" : "Écrire une entrée dans le fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "comm fichier A fichier B",
        "detail" : "Les deux fichiers comparent la ligne à la ligne.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find / -type d -name fichier",
        "detail" : "trouve tous les fichiers dans le nom du fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find / -atime 50",
        "detail" : "Trouve tous les fichiers saisis il y a 50 jours",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "lsattr",
        "detail" : "Permet de savoir si des fichiers ne peuvent pas être modifiés sur le système",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar xf fichier.tar",
        "detail" : "Supprimer le fichier file.tar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar xjf fichier.tar.bz2",
        "detail" : "Supprimer le fichier .tar.bz2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "-p",
        "detail" : "Utilise le mode passif",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "-d",
        "detail" : "Débogage actif",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "binary",
        "detail" : "Fournit un support pour le transfert de fichiers image",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "status",
        "detail" : "Afficher l'état du serveur FTP",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "whois domain",
        "detail" : "Obtient des informations de domaine",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "netstat",
        "detail" : "Inspecter les connexions réseau et ouvrir les sockets ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "sudo su",
        "detail" : "Vous allez passer en mode administrateur dans le terminal",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "fingure nom d'utilisateur",
        "detail" : "Affiche les informations sur le nom d'utilisateur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "free",
        "detail" : "Affiche la mémoire et l'échange utilisé",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "kill application",
        "detail" : "Ferme immédiatement l'application",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "dd",
        "detail" : "Utilisé pour copier le contenu du disque",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chgrp",
        "detail" : "Changer de groupe",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "delgroup groupe",
        "detail" : "Supprimer le groupe ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "lsb_release -a",
        "detail" : "Utilisé pour afficher des informations sur la distribution",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "passwd <nom d'utilisateur>",
        "detail" : "Utilisé pour changer le mot de passe du nom d'utilisateur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "echo $SHELL",
        "detail" : "Utilisé pour afficher le programme shell utilisé sur votre système.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chmod a-x fichier",
        "detail" : "L'avoir (qui est habituellement vous) a l'autorisation de lire et d'écrire sur mon dossier....",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "whereis application",
        "detail" : "Montrer où l'application est installée",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "sensors",
        "detail" : "Affiche les températures du processeur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "shutdown",
        "detail" : "Utilisé pour éteindre le système",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "clear",
        "detail" : "Nettoie le moniteur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "groupadd groupe",
        "detail" : "Créer un nouveau groupe ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "whoami",
        "detail" : "Afficher le nom d'utilisateur auquel vous êtes connecté",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "df",
        "detail" : "Indique l'utilisation du disque",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ps aux",
        "detail" : "Affiche les applications en cours d'exécution sur le système",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "alias",
        "detail" : "Crée des raccourcis pour une commande",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chfn",
        "detail" : "Modifier les informations sur le doigt",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "deluser utilisateur",
        "detail" : "Supprimer l'utilisateur ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "help",
        "detail" : "Utilisé pour obtenir de l'aide",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "history",
        "detail" : "Il est utile de voir les lignes de commande précédemment utilisées.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chage -E histoire(12.02.2022) <nom d'utilisateur>",
        "detail" : "Permet de déterminer l'heure d'expiration du mot de passe du compte utilisateur. ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chmod u+rw fichier",
        "detail" : "L'avoir (qui est habituellement vous) a l'autorisation de lire et d'écrire sur mon dossier.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chmod a+r fichier",
        "detail" : "Permet à tous les utilisateurs de lire",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Sc $(pacman -Qdtq)",
        "detail" : "Empty all unnecessary packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Ss package_name",
        "detail" : "Search package with explanations",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "pacman -Qdt",
        "detail" : "Unnecessary packages list without dependencies",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls -l",
        "detail" : "Affiche le fichier ou le répertoire Affiche la date et l'heure du changement de fichier.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cd ..",
        "detail" : "Aller au chemin de fichier précédent",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rm -r annuaire",
        "detail" : "Supprimer le répertoire",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rm bet*as",
        "detail" : "supprime tous les fichiers commençant par bet et se terminant par",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ls -s fichier link",
        "detail" : "Crée un lien symbolique dans le fichier.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "head fichier",
        "detail" : "Donne les 10 premières lignes du fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de fichiers",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find / -name foo",
        "detail" : "Recherche par nom donnée au fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find . -type f -perm 0777 - print",
        "detail" : "Trouve tous les répertoires avec une trace de 777",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "dmidecode",
        "detail" : "Utilisé pour obtenir des informations sur notre système (bios, mémoire, cache, etc.) Mode: bios de type demicode, type demicode...",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "usermod -L <nom d'utilisateur>",
        "detail" : "Utilisé pour verrouiller le compte d'utilisateur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chmod +r fichier",
        "detail" : "Vous permet de lire le fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git status",
        "detail" : "Afficher les modifications que vous avez effectuées dans votre dépôt",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chmod +x fichier",
        "detail" : "Permet au fichier de s'exécuter",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git config --global email \"Adresse mail\"",
        "detail" : "Indiquez l'adresse mail à utiliser lors de l'utilisation de git",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git add *",
        "detail" : "Ajoute le fichier entier à l'index",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git checkout master",
        "detail" : "Retournez à la branche principale",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git merge branche",
        "detail" : "Utilisé pour combiner avec une autre branche",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "find / -mmin -60",
        "detail" : "Trouve tous les fichiers modifiés en 1 heure",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de recherche",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get install nom du paquet",
        "detail" : "Forfaits",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "bzip nom de fichier",
        "detail" : "compresser le fichier zip.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get autoremove",
        "detail" : "Supprimer les anciens paquets",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar xzf fichier.tar.gz",
        "detail" : "supprimer file.tar.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "gzip -d fichier.gz",
        "detail" : "Supprimer le fichier file.gz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes de compression",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "tar cjf friecher.tar.bz2",
        "detail" : "Créer un fichier tar en utilisant Bzip2",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "account[password]",
        "detail" : "Fournit un mot de passe avec contrôle à distance",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "dir",
        "detail" : "Affiche les fichiers de votre répertoire actuel",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes FTP",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "ifconfig",
        "detail" : "Indique l'interface réseau",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "wget adresse",
        "detail" : "Télécharger le fichier dans la destination",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes réseau",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "date;who",
        "detail" : "Afficher la date et l'utilisateur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "uptime",
        "detail" : "Affiche l'heure actuelle sur le système",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "cat /proc/meminfo",
        "detail" : "Affiche les informations sur la mémoire",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "which application",
        "detail" : "Indique quelle application fonctionne par défaut",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "uname -lettre",
        "detail" : "-m Donner le nom de l'équipement de la machine.\n-n Écrit Nodename. Nodename est utilisé pour la communication réseau du système.\n-r Afficher la version du noyau\n-s Le système écrit le nom\n-v Ecrire la version du système d'exploitation\n-a écrivez les informations complètes ci-dessus",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apropos",
        "detail" : "Un certain mot est recherché sur les pages de manuel.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "continue",
        "detail" : "Un plan continuera à partir d'où vous vous êtes arrêté après une certaine condition. ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git config --global user.name \"Kullanıcı adı\"",
        "detail" : "Définir le nom d'utilisateur à utiliser lors de l'utilisation de gitr",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git clone adresse de l'entrepôt",
        "detail" : "Copies de votre grand magasin local",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git commit -m \" Message de livraison \" ",
        "detail" : "Vous allez envoyer un message au message",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git branch -d branche",
        "detail" : "La soie dans la vallée",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get update",
        "detail" : "Actualiser les mises à jour dans l'état approprié.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get install paquet1 paquet2 paquet3 paquet4 paquet5 paquet6 ...",
        "detail" : "Installer plusieurs paquets",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get -f install",
        "detail" : "Il essaie de réparer les paquets défectueux",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get help",
        "detail" : "Dit à propos de la commande Apt",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-cache search <nom du programme> ",
        "detail" : "Le programme que nous voulons installer appelle à une dépression.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman-optimize && sync",
        "detail" : "Optimiser et adapter la vitesse de téléchargement",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -S nom du paquet",
        "detail" : "Forfaits",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -R nom du paquet",
        "detail" : "Supprimer le paquet",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Scc",
        "detail" : "Vide la mémoire que les paquets contiennent",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Qs nom du paquet",
        "detail" : "Rechercher dans les packages installés",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git clone nom d'utilisateur@serveurs:/manière/magasin ",
        "detail" : "Le référentiel du serveur distant est votre dossier local",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git push origin master",
        "detail" : "Fichiers que vous ajoutez à l'index du référentiel distant",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git push origin branche",
        "detail" : "Apportez les modifications que vous faites",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get upgrade",
        "detail" : "Il met à jour tous les paquets. (le bordereau supérieur est surélevé)",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "sudo apt-get purge paquet",
        "detail" : "Supprime un package installé avec ses fichiers de configuration.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "dpkg -i paquet.deb",
        "detail" : "Charge le fichier package.deb",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rpm -ivh <program.rpm>",
        "detail" : "Utilisé pour installer le fichier avec l'extension RPM",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-cache show <nom du programme> ",
        "detail" : "Il est utilisé pour obtenir des informations sur le programme que nous voulons installer.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Su",
        "detail" : "Mettez à jour votre système",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Sw nom du paquet",
        "detail" : "Télécharger un package sans l'installer",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "sudo apt-cache show paquet",
        "detail" : "Fournit des informations sur le programme",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "yum install <nom du programme>",
        "detail" : "Il construit le programme sur le sol.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "yum update",
        "detail" : "Sistemi güncellemek için kullanılır.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "IgnoreGroup=package_group",
        "detail" : "Met à jour le groupe de paquets par ignorance",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -U http://www.examplepackage/repo/examplepkg.tar.xz",
        "detail" : "L'emballage se charge sur le miroir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Sc $(pacman -Qdtq)",
        "detail" : "Vider tous les paquets inutiles",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Ss nom du paquet",
        "detail" : "Recherche de paquet avec des explications",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Qdt",
        "detail" : "Liste de paquets inutiles sans dépendances",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Rs nom du paquet",
        "detail" : "Supprimer le package avec des dépendances qui ne sont pas utilisées dans d'autres packages",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Sc",
        "detail" : "Nettoie la mémoire",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Si nom du paquet",
        "detail" : "Obtenir des informations sur le paquet",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "halt",
        "detail" : "Arrêtez le système ",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "free -m",
        "detail" : "Utilisé pour afficher la quantité de mémoire.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "usermod -U <nom d'utilisateur>",
        "detail" : "Il est utilisé pour réactiver le compte d'utilisateur.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes système",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chmod +w fichier",
        "detail" : "Vous permet d'écrire dans le fichier",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "chattr +i fichier",
        "detail" : "Utilisé pour rendre le fichier irrévocable",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes d'autorisation",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git log",
        "detail" : "Afficher toutes les modifications effectuées dans le magasin local",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git add nom de fichier",
        "detail" : "Ajoute des fichiers à l'index que vous souhaitez envoyer au référentiel",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git checkout -b nouveau nom de la succursale",
        "detail" : "Créer une nouvelle branche",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "git pull",
        "detail" : "Prendre les derniers changements",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "commandes git",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get dist-upgrade",
        "detail" : "Mettez à niveau la version Debian.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "apt-get remove paquet",
        "detail" : "Supprimer le paquet",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "sudo add-apt-repository l'adresse PPA du nouveau magasin",
        "detail" : "Ajoute un nouveau référentiel",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes APT",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "rpm -ev <program.rpm>",
        "detail" : "Le package installé est supprimé du système",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "yum remove <nom du paquet> ",
        "detail" : "Supprime le package installé du système.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Commandes RPM",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "IgnorePkg=package_name",
        "detail" : "Booste certains paquets",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -U /paquet manière/nom du paquet.pkg.tar.xz",
        "detail" : "installer le package local tar.xz",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Rsc nom du paquet",
        "detail" : "Supprimer un package avec une dépendance complète",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Rs $(pacman -Qtdq)",
        "detail" : "Nettoie les paquets inutiles",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "FRA",
        "text" : "pacman -Ql",
        "detail" : "Liste des paquets installés",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Pacman Komutları",
                "language" : "FRA",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "adb start-server",
        "detail" : "Adb sunucusunu açar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "adb kill-server",
        "detail" : "Adb sunucusunu kapatır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "adb devices",
        "detail" : "Bilgisayarınıza kablo ile bağlı tüm cihazları ve emülatörleri gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "adb connect telefonIpsi",
        "detail" : "İlgili IP'ye ait cihaza bağlanır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "adb start-server",
        "detail" : "Start adb server",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "adb kill-server",
        "detail" : "Stop Adb server",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "adb devices",
        "detail" : "Show all connected phones ( emulator, connect with usb phone etc. )",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "adb connect IpOfPhone\t",
        "detail" : "Connect to phone",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Adb Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker run ImageId'si ( veya ismi)",
        "detail" : "Image'yi run eder",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker build -t Imageİsmi .",
        "detail" : "Imageİsmi adında image oluşturur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker images",
        "detail" : "Bilgisayarda bulunan tüm imajları gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker ps",
        "detail" : "Bilgisayarda çalışan tüm containerları gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker ps -a ",
        "detail" : "Bilgisayarda bulunan çalışan veya çalışmayan tüm containerları gösterir",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "docker search aranacakİmaj",
        "detail" : "Docker Hub'ta imaj arar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker pull kullanıcıAdı/İmaj",
        "detail" : "Docker Hub'tan imaj çeker",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker login",
        "detail" : "Docker Hub'a giriş yapar",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker push kullanıcıAdı/İmaj",
        "detail" : "Docker Hub'a imaj yükler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "Docker history kullanıcı/İmaj",
        "detail" : "Imaj'ın geçmişini listeler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "docker logs containerId ( veya ismi)",
        "detail" : "Container'ın loglarını listeler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "docker start containerId (veya ismi)",
        "detail" : "Container'ı başlatır",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "docker stop containerId ( veya ismi )",
        "detail" : "Container'ı durdurur",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "docker rm -f containerId ( veya ismi )",
        "detail" : "Container'ı siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "TR",
        "text" : "docker rmi imajId ( veya ismi )",
        "detail" : "İmajı siler",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Komutları",
                "language" : "TR",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker run ImageId ( or name)\t",
        "detail" : "Run image",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker build -t ImageName .\t",
        "detail" : "Create an image named ImageName",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker images",
        "detail" : "Displays all images on the computer.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker ps",
        "detail" : "Displays all container on the computer.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker search imagename",
        "detail" : "Search images on Docker Hub",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker pull username/image",
        "detail" : "Pull image from Docker Hub",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker login",
        "detail" : "Login to Docker Hub",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "Docker push username/Image",
        "detail" : "Uploads an image to Docker Hub. You must be authenticated to run this command.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker ps -a",
        "detail" : "List all container instances, with their ID and status.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker history user/image",
        "detail" : "Lists the history of an image.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker logs [container name or ID]",
        "detail" : "Displays the logs from a running container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker port [container name or ID]",
        "detail" : "Displays the exposed port of a running container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker diff [container name or ID]",
        "detail" : "Lists the changes made to a container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker run -it user/image",
        "detail" : "Runs an image, creating a container and changing the terminal to the terminal within the container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker run -p $HOSTPORT:$CONTAINERPORT -d user/image",
        "detail" : "Run an image in detached mode with port forwarding.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker attach [container name or ID]",
        "detail" : "Changes the command prompt from the host to a running container",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker start [container name or ID]",
        "detail" : "Start a container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker stop [container name or ID]",
        "detail" : "Stop a container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker rm -f [container name or ID]",
        "detail" : "Delete a container",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker rmi",
        "detail" : "Delete an image.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker tag user/image:tag user/image:newtag",
        "detail" : "Add a new tag to an image.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker exec [container name or ID] shell command",
        "detail" : "Executes a command within a running container.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker commit user/image",
        "detail" : "Save a container as an image.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker save user/image",
        "detail" : "Save an image to a tar archive.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    },
    {
    
        "language" : "ENG",
        "text" : "docker load",
        "detail" : "Loads an image from file.",
    
        "__v" : 0,
        "categories" : [ 
            {
    
                "title" : "Docker Commands",
                "language" : "ENG",
                "__v" : 0
            }
        ]
    }
]


async function duplicate(req, res, next) {

   await categories.map(async category => {
        await languageSchema.findOne({
            languageShooter: category.language
        }).then(language => {
              categoryModel=new categorySchema({
                  title:category.title,
                  language:language._id
              })  
              categoryModel.save()
        }).catch(next)
    })

   await commands.map(async command=>{
        await categorySchema.findOne({title:command.categories[0].title}).then(async category=>{
            await languageSchema.findOne({languageShooter:command.language}).then(async language=>{
                var commandModel=new commandSchema({
                    title:command.text,
                    description:command.detail,
                    category:category._id,
                    language:language._id
                })
                commandModel.save()
            })
        })
    })
}