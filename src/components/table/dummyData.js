import React, {useState} from 'react';
import { Table, Tag, Space } from 'antd';
import Card from '../card';
import axios from 'axios';

const paymentColorMap = {
  "cc" : "green",
  "check": "gold",
  "money order": "purple",
  "paypal": "red"
}

export const dataSource = [
  {
      "FirstName": "Monte",
      "LastName": "Parisian",
      "Gender": "Male",
      "Latitude": -73.89007,
      "Longitude": 77.112915,
      "CreditCardNumber": "344689098086777",
      "CreditCardType": "American Express",
      "Email": "NtFGCtS@RxXFpwP.info",
      "DomainName": "faCQqJB.net",
      "PhoneNumber": "386-102-7945",
      "MacAddress": "e4:79:38:08:14:6e",
      "URL": "https://fkckmuV.ru/",
      "UserName": "LVQpGWd",
      "LastLogin": "2004-08-12 07:36:59",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Amya",
      "LastName": "Trantow",
      "Gender": "Female",
      "Latitude": -65.46983,
      "Longitude": 100.0228,
      "CreditCardNumber": "340456523900666",
      "CreditCardType": "American Express",
      "Email": "TqGqBDs@AKTgvnr.info",
      "DomainName": "rEkReUg.ru",
      "PhoneNumber": "431-051-2679",
      "MacAddress": "e0:c0:d4:29:05:2f",
      "URL": "http://www.AJJclfE.biz/NxxpXac",
      "UserName": "JSbyZyJ",
      "LastLogin": "2012-08-25 10:05:10",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Abner",
      "LastName": "Goodwin",
      "Gender": "Male",
      "Latitude": -14.537163,
      "Longitude": 54.21364,
      "CreditCardNumber": "343961378986581",
      "CreditCardType": "American Express",
      "Email": "DobbolS@GgDVMiw.org",
      "DomainName": "XjOcNDf.ru",
      "PhoneNumber": "651-034-7218",
      "MacAddress": "51:a4:b3:59:22:92",
      "URL": "https://SYLTFLM.org/ZdhGKAy.php",
      "UserName": "hJNnrwe",
      "LastLogin": "1978-01-06 11:38:07",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Isobel",
      "LastName": "Nader",
      "Gender": "Prefer to skip",
      "Latitude": 65.115005,
      "Longitude": 54.06096,
      "CreditCardNumber": "372011285301212",
      "CreditCardType": "American Express",
      "Email": "rLIgxgu@KGXDBYd.biz",
      "DomainName": "PINMfVx.org",
      "PhoneNumber": "623-179-1058",
      "MacAddress": "fb:6b:9f:04:33:66",
      "URL": "http://COoOyMY.ru/WZcNmKw.html",
      "UserName": "pGJUcxf",
      "LastLogin": "1990-04-26 10:16:13",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Karen",
      "LastName": "Hirthe",
      "Gender": "Male",
      "Latitude": 21.145226,
      "Longitude": -1.1967316,
      "CreditCardNumber": "348485657538515",
      "CreditCardType": "American Express",
      "Email": "UuPhbwn@vxuXALw.ru",
      "DomainName": "kqCRKTs.com",
      "PhoneNumber": "513-610-4782",
      "MacAddress": "c1:ed:a7:60:39:67",
      "URL": "http://AALCOWy.net/MbJTvxh.php",
      "UserName": "sVITmUB",
      "LastLogin": "1990-04-03 03:09:45",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Thaddeus",
      "LastName": "Grant",
      "Gender": "Female",
      "Latitude": -38.9215,
      "Longitude": 38.626495,
      "CreditCardNumber": "373472676901914",
      "CreditCardType": "American Express",
      "Email": "qdUIbYc@Ehhnknf.biz",
      "DomainName": "vqcAtUE.com",
      "PhoneNumber": "810-657-2391",
      "MacAddress": "b5:b4:e3:f0:2c:f6",
      "URL": "https://SPsjanL.ru/INlsHGC.php",
      "UserName": "EdUJLdl",
      "LastLogin": "1999-12-15 14:55:09",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Brandi",
      "LastName": "Sporer",
      "Gender": "Prefer to skip",
      "Latitude": -10.331482,
      "Longitude": -1.7476501,
      "CreditCardNumber": "371267892592727",
      "CreditCardType": "American Express",
      "Email": "ZDmwXmh@NnfoeNO.org",
      "DomainName": "IVccQwR.net",
      "PhoneNumber": "547-182-1036",
      "MacAddress": "72:69:ad:26:08:f3",
      "URL": "http://www.rYiWfqA.org/",
      "UserName": "PpRawJE",
      "LastLogin": "2007-11-14 12:19:59",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Bernadine",
      "LastName": "Kihn",
      "Gender": "Prefer to skip",
      "Latitude": 11.871124,
      "Longitude": 29.271439,
      "CreditCardNumber": "372373813736581",
      "CreditCardType": "American Express",
      "Email": "FpOFSFI@pTcSbnO.info",
      "DomainName": "eKoucHY.ru",
      "PhoneNumber": "526-389-4710",
      "MacAddress": "72:67:1b:a8:5c:0d",
      "URL": "http://PtfmvRW.biz/wCWDjFS.html",
      "UserName": "aQMguxJ",
      "LastLogin": "2007-01-14 05:49:05",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Della",
      "LastName": "Hyatt",
      "Gender": "Female",
      "Latitude": 24.273422,
      "Longitude": 20.281128,
      "CreditCardNumber": "371468287113505",
      "CreditCardType": "American Express",
      "Email": "OyYNXhy@NEoQoeI.net",
      "DomainName": "uNNXnQY.net",
      "PhoneNumber": "965-748-1031",
      "MacAddress": "a4:76:44:00:9e:62",
      "URL": "https://www.VjbwqwH.info/",
      "UserName": "gFwguoc",
      "LastLogin": "1990-03-12 12:40:49",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Devyn",
      "LastName": "Larkin",
      "Gender": "Male",
      "Latitude": 68.82988,
      "Longitude": 66.47626,
      "CreditCardNumber": "377117383799303",
      "CreditCardType": "American Express",
      "Email": "yHCpFXS@JVOvdaj.com",
      "DomainName": "UUTTFYv.info",
      "PhoneNumber": "129-841-0763",
      "MacAddress": "06:9e:63:f3:4a:e7",
      "URL": "https://ArkaKSJ.info/OFyEESq.html",
      "UserName": "ppuOuGm",
      "LastLogin": "1981-12-30 05:32:43",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Taylor",
      "LastName": "Bartoletti",
      "Gender": "Male",
      "Latitude": 27.933395,
      "Longitude": 168.47113,
      "CreditCardNumber": "374623024511704",
      "CreditCardType": "American Express",
      "Email": "vPOtRPu@MZFiqDQ.biz",
      "DomainName": "NKPrUAT.biz",
      "PhoneNumber": "859-102-6134",
      "MacAddress": "8c:c0:fa:fa:bb:d4",
      "URL": "https://LcvYrrO.info/TovhZmt.php",
      "UserName": "BnVEunw",
      "LastLogin": "1972-04-17 22:08:45",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Magnolia",
      "LastName": "Predovic",
      "Gender": "Prefer to skip",
      "Latitude": 9.900284,
      "Longitude": 62.025696,
      "CreditCardNumber": "345436962567974",
      "CreditCardType": "American Express",
      "Email": "isWMkGY@yKiiNco.ru",
      "DomainName": "KDKMgHk.net",
      "PhoneNumber": "539-261-0817",
      "MacAddress": "78:e2:7e:e5:c9:f5",
      "URL": "https://www.gugJuQp.net/",
      "UserName": "gmMcSsQ",
      "LastLogin": "1982-12-29 11:23:35",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Opal",
      "LastName": "Thiel",
      "Gender": "Prefer to skip",
      "Latitude": -7.600792,
      "Longitude": 158.51215,
      "CreditCardNumber": "340024331346930",
      "CreditCardType": "American Express",
      "Email": "jKcvIOj@kYrEgrM.net",
      "DomainName": "DiuqSIb.com",
      "PhoneNumber": "529-101-3648",
      "MacAddress": "82:ae:41:6c:44:83",
      "URL": "http://AeglDfN.ru/",
      "UserName": "rueBtqE",
      "LastLogin": "2003-10-18 00:21:22",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Bertram",
      "LastName": "McClure",
      "Gender": "Female",
      "Latitude": 84.31412,
      "Longitude": 140.61072,
      "CreditCardNumber": "376565462850109",
      "CreditCardType": "American Express",
      "Email": "cgKXQSg@lZNVfXP.net",
      "DomainName": "HEaHyfC.net",
      "PhoneNumber": "610-394-7251",
      "MacAddress": "bf:44:98:26:d3:60",
      "URL": "https://www.bKSjOAT.com/",
      "UserName": "tCitQLV",
      "LastLogin": "2010-03-11 15:13:57",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Belle",
      "LastName": "Flatley",
      "Gender": "Male",
      "Latitude": -21.949821,
      "Longitude": 103.46219,
      "CreditCardNumber": "342636772339483",
      "CreditCardType": "American Express",
      "Email": "cGaPxfL@IVPoAMA.net",
      "DomainName": "PwvKits.ru",
      "PhoneNumber": "895-310-6721",
      "MacAddress": "4b:9f:d7:d8:eb:62",
      "URL": "http://www.FmBlFAu.org/",
      "UserName": "bHOSmIb",
      "LastLogin": "2016-07-13 05:26:29",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Shirley",
      "LastName": "Stokes",
      "Gender": "Prefer to skip",
      "Latitude": 8.452377,
      "Longitude": -18.131363,
      "CreditCardNumber": "340429807543128",
      "CreditCardType": "American Express",
      "Email": "kEpQlKK@gKbNGwD.net",
      "DomainName": "nZIPaaM.net",
      "PhoneNumber": "586-397-1410",
      "MacAddress": "0b:88:d7:5d:f7:49",
      "URL": "http://UgubnSt.net/KXwxIXr.html",
      "UserName": "SlwDIsT",
      "LastLogin": "2015-08-26 09:19:45",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Brianne",
      "LastName": "Nicolas",
      "Gender": "Female",
      "Latitude": -39.031044,
      "Longitude": -10.571762,
      "CreditCardNumber": "378505293810172",
      "CreditCardType": "American Express",
      "Email": "oAeaGPF@yNKXdvb.info",
      "DomainName": "IwIGCcZ.org",
      "PhoneNumber": "249-718-3651",
      "MacAddress": "07:ac:73:a5:24:e1",
      "URL": "http://mBWYmYp.biz/CwVitpb",
      "UserName": "cTnkmMm",
      "LastLogin": "1990-04-25 03:05:47",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Gianni",
      "LastName": "Towne",
      "Gender": "Prefer to skip",
      "Latitude": -20.868935,
      "Longitude": 48.210648,
      "CreditCardNumber": "379603335198258",
      "CreditCardType": "American Express",
      "Email": "wBNQvSX@oWmnWtZ.ru",
      "DomainName": "qObYEQi.com",
      "PhoneNumber": "249-761-1085",
      "MacAddress": "80:c2:7e:ba:ed:9d",
      "URL": "http://dvColrK.org/",
      "UserName": "acSJLHp",
      "LastLogin": "2014-05-01 17:34:21",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Freddy",
      "LastName": "Hahn",
      "Gender": "Prefer to skip",
      "Latitude": -38.746506,
      "Longitude": 157.19818,
      "CreditCardNumber": "344418803698725",
      "CreditCardType": "American Express",
      "Email": "QDKMZBO@gFALGOt.org",
      "DomainName": "oSnqvbI.info",
      "PhoneNumber": "134-798-6521",
      "MacAddress": "b9:d7:9c:46:a3:b0",
      "URL": "http://wFxONSC.biz/ArAWQVO",
      "UserName": "etHnlHq",
      "LastLogin": "2001-04-24 07:07:55",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Dakota",
      "LastName": "Powlowski",
      "Gender": "Male",
      "Latitude": 22.877083,
      "Longitude": -68.20568,
      "CreditCardNumber": "342030137012477",
      "CreditCardType": "American Express",
      "Email": "MiFXHFB@IhUQTdP.info",
      "DomainName": "UZxhqTC.org",
      "PhoneNumber": "611-049-3257",
      "MacAddress": "68:51:37:3a:5c:a1",
      "URL": "http://mAYJTpl.com/iCcacSm.html",
      "UserName": "XiNsAeS",
      "LastLogin": "2019-03-08 12:10:11",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Wilfred",
      "LastName": "Franecki",
      "Gender": "Female",
      "Latitude": -10.00737,
      "Longitude": 9.474335,
      "CreditCardNumber": "343762073612286",
      "CreditCardType": "American Express",
      "Email": "FIUgioB@TUhbvid.com",
      "DomainName": "cHvtdih.net",
      "PhoneNumber": "596-832-7410",
      "MacAddress": "fe:54:db:99:b8:6b",
      "URL": "https://QBBlNOB.info/nTXqYGv",
      "UserName": "HAqgPxc",
      "LastLogin": "1979-08-01 18:10:29",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Raymundo",
      "LastName": "Thompson",
      "Gender": "Prefer to skip",
      "Latitude": -18.296982,
      "Longitude": -43.492783,
      "CreditCardNumber": "370039383146135",
      "CreditCardType": "American Express",
      "Email": "AiehkRF@mtPUmKQ.biz",
      "DomainName": "MfOsCOy.net",
      "PhoneNumber": "759-462-1083",
      "MacAddress": "b7:30:26:76:a1:be",
      "URL": "https://TgqBXHy.net/",
      "UserName": "vrsrQDk",
      "LastLogin": "1993-03-21 11:31:27",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Alessia",
      "LastName": "Murray",
      "Gender": "Male",
      "Latitude": -47.30039,
      "Longitude": -79.0666,
      "CreditCardNumber": "372562857189369",
      "CreditCardType": "American Express",
      "Email": "QCVyaTH@uNhtMcQ.org",
      "DomainName": "JnbBgkv.com",
      "PhoneNumber": "958-310-7641",
      "MacAddress": "ab:c3:a1:49:c9:1e",
      "URL": "http://RthTBqC.biz/XSrZEdj.html",
      "UserName": "uNGuJfy",
      "LastLogin": "1998-06-20 09:24:20",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Amira",
      "LastName": "Bechtelar",
      "Gender": "Female",
      "Latitude": 11.665268,
      "Longitude": -0.42645264,
      "CreditCardNumber": "377715335831915",
      "CreditCardType": "American Express",
      "Email": "RxtlXkr@bsagfGb.org",
      "DomainName": "MQYjqQb.com",
      "PhoneNumber": "739-102-8416",
      "MacAddress": "a5:aa:c3:9d:67:8c",
      "URL": "https://jsDarck.ru/inLogvE.html",
      "UserName": "sWwVTIT",
      "LastLogin": "1978-05-20 22:12:37",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Arnoldo",
      "LastName": "Stamm",
      "Gender": "Prefer to skip",
      "Latitude": -6.100189,
      "Longitude": 95.451324,
      "CreditCardNumber": "341375763317533",
      "CreditCardType": "American Express",
      "Email": "hotUeiR@llEBqCU.info",
      "DomainName": "uvweApN.net",
      "PhoneNumber": "936-110-4752",
      "MacAddress": "2d:7f:f5:bc:d4:36",
      "URL": "https://www.SChkNJS.net/",
      "UserName": "LsXxtlY",
      "LastLogin": "2013-07-14 05:44:39",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Elmore",
      "LastName": "Donnelly",
      "Gender": "Male",
      "Latitude": -29.787899,
      "Longitude": -168.17157,
      "CreditCardNumber": "376428112599790",
      "CreditCardType": "American Express",
      "Email": "OBRdXyA@mNZZOGH.com",
      "DomainName": "srtkRXp.net",
      "PhoneNumber": "239-476-1851",
      "MacAddress": "74:e6:02:d1:72:b6",
      "URL": "http://QAogXBl.org/uDpdwkE",
      "UserName": "cVgWymd",
      "LastLogin": "2020-07-13 21:31:54",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Sigurd",
      "LastName": "Rutherford",
      "Gender": "Male",
      "Latitude": -63.207325,
      "Longitude": -130.06439,
      "CreditCardNumber": "376791414736745",
      "CreditCardType": "American Express",
      "Email": "NlrJWqj@ghMLRxW.org",
      "DomainName": "GDScYLQ.info",
      "PhoneNumber": "163-782-4951",
      "MacAddress": "e2:e6:f9:89:19:3c",
      "URL": "https://aOEtlrE.net/NMggRPq",
      "UserName": "cxWowrx",
      "LastLogin": "1982-01-09 03:10:17",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Bridie",
      "LastName": "Macejkovic",
      "Gender": "Male",
      "Latitude": 64.933945,
      "Longitude": -60.99489,
      "CreditCardNumber": "342777562986162",
      "CreditCardType": "American Express",
      "Email": "PqRWyHW@XwINCBj.net",
      "DomainName": "WZnFGVw.biz",
      "PhoneNumber": "136-105-8429",
      "MacAddress": "18:2b:58:4e:96:dc",
      "URL": "http://www.XOTyllw.info/",
      "UserName": "qsnEIeO",
      "LastLogin": "2005-01-17 23:30:55",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Santiago",
      "LastName": "Gorczany",
      "Gender": "Prefer to skip",
      "Latitude": -60.95418,
      "Longitude": -36.840256,
      "CreditCardNumber": "373976438141160",
      "CreditCardType": "American Express",
      "Email": "UNZHJAZ@pDhSvIx.info",
      "DomainName": "kBMrGPo.info",
      "PhoneNumber": "538-910-7146",
      "MacAddress": "a0:09:b9:c8:f1:c2",
      "URL": "http://lpYwwfr.com/tgSKbwK",
      "UserName": "MRDGMrt",
      "LastLogin": "2003-09-20 12:22:28",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Gabriel",
      "LastName": "Batz",
      "Gender": "Female",
      "Latitude": -61.81813,
      "Longitude": 55.865646,
      "CreditCardNumber": "347244746316535",
      "CreditCardType": "American Express",
      "Email": "KvDUQMC@nLRCSKJ.com",
      "DomainName": "RXCRpRb.com",
      "PhoneNumber": "710-341-9826",
      "MacAddress": "eb:e8:c1:76:64:b9",
      "URL": "http://www.UTWMFYQ.org/FBkQJFj",
      "UserName": "hWpcDwR",
      "LastLogin": "2016-06-24 08:03:15",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Antonia",
      "LastName": "Kozey",
      "Gender": "Male",
      "Latitude": 64.52673,
      "Longitude": -8.0147705,
      "CreditCardNumber": "375326260176427",
      "CreditCardType": "American Express",
      "Email": "tBxAIRO@LWXlZXV.net",
      "DomainName": "JYpxYcy.ru",
      "PhoneNumber": "861-095-4271",
      "MacAddress": "ce:8a:e8:01:83:55",
      "URL": "http://KccZEFt.biz/VcRsvMa",
      "UserName": "xfpHFYH",
      "LastLogin": "2003-01-20 20:47:56",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Stone",
      "LastName": "Berge",
      "Gender": "Female",
      "Latitude": 76.52066,
      "Longitude": 160.04959,
      "CreditCardNumber": "348288038229405",
      "CreditCardType": "American Express",
      "Email": "BXSqpEQ@GcJEQQx.biz",
      "DomainName": "hSeokah.org",
      "PhoneNumber": "103-712-4865",
      "MacAddress": "5c:a9:d5:96:4f:f2",
      "URL": "http://aYSawOg.net/",
      "UserName": "WEVrydA",
      "LastLogin": "1998-04-28 06:18:26",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Loma",
      "LastName": "Von",
      "Gender": "Male",
      "Latitude": -26.530533,
      "Longitude": 38.88913,
      "CreditCardNumber": "340463665623457",
      "CreditCardType": "American Express",
      "Email": "fPMZwpM@YhEDmlW.net",
      "DomainName": "NVxxmwP.com",
      "PhoneNumber": "648-103-1957",
      "MacAddress": "6b:98:61:01:10:cc",
      "URL": "http://bcLQkuj.org/mCsmMSQ",
      "UserName": "sZxlKlE",
      "LastLogin": "1990-12-16 16:03:27",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Dena",
      "LastName": "Smith",
      "Gender": "Female",
      "Latitude": -36.877186,
      "Longitude": 89.12921,
      "CreditCardNumber": "344962760881334",
      "CreditCardType": "American Express",
      "Email": "BEZnCLu@DjBWyTo.biz",
      "DomainName": "CVucIPJ.ru",
      "PhoneNumber": "231-964-8105",
      "MacAddress": "75:d2:da:b9:95:5e",
      "URL": "https://GVCdufc.net/",
      "UserName": "bDZdcYn",
      "LastLogin": "1973-02-14 16:36:27",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Erna",
      "LastName": "Crona",
      "Gender": "Male",
      "Latitude": 38.490936,
      "Longitude": 18.555588,
      "CreditCardNumber": "374745869346750",
      "CreditCardType": "American Express",
      "Email": "MkEfSeY@UKxnFJH.biz",
      "DomainName": "BiNykeg.org",
      "PhoneNumber": "784-351-9621",
      "MacAddress": "6f:d7:6f:fe:a8:80",
      "URL": "http://www.YeurHlQ.biz/DaOZPuK",
      "UserName": "KvNkmel",
      "LastLogin": "1986-06-07 23:05:31",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Bobby",
      "LastName": "Fritsch",
      "Gender": "Male",
      "Latitude": -36.01865,
      "Longitude": 135.78644,
      "CreditCardNumber": "376657493413280",
      "CreditCardType": "American Express",
      "Email": "WwAstBB@nrddCmu.ru",
      "DomainName": "VIXZAdW.com",
      "PhoneNumber": "239-851-0176",
      "MacAddress": "e9:64:09:c9:a0:e9",
      "URL": "http://LCLEaNt.org/kFXdqjg.html",
      "UserName": "qpqBGpp",
      "LastLogin": "1991-09-20 22:53:09",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Hipolito",
      "LastName": "Gulgowski",
      "Gender": "Female",
      "Latitude": -36.606842,
      "Longitude": 161.31937,
      "CreditCardNumber": "375297865898697",
      "CreditCardType": "American Express",
      "Email": "XUICtdP@AqWXqeG.info",
      "DomainName": "iNtqYxh.net",
      "PhoneNumber": "851-410-2793",
      "MacAddress": "15:29:55:d9:0f:8a",
      "URL": "http://www.gBnXkQJ.com/",
      "UserName": "aSwTtFu",
      "LastLogin": "1993-04-21 13:15:17",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Asha",
      "LastName": "Lockman",
      "Gender": "Female",
      "Latitude": -54.610844,
      "Longitude": -31.932556,
      "CreditCardNumber": "375404949588100",
      "CreditCardType": "American Express",
      "Email": "ZdxdXDo@TbGducx.com",
      "DomainName": "qDDxKHU.org",
      "PhoneNumber": "581-432-6109",
      "MacAddress": "46:50:f4:2a:63:48",
      "URL": "https://mrJIpWR.biz/UuTmIxW.html",
      "UserName": "VDDWrnc",
      "LastLogin": "1984-02-03 17:54:09",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Tyson",
      "LastName": "Hermiston",
      "Gender": "Prefer to skip",
      "Latitude": -21.365479,
      "Longitude": 109.48163,
      "CreditCardNumber": "341110235634197",
      "CreditCardType": "American Express",
      "Email": "QYvYXui@oTsjeci.net",
      "DomainName": "PFyNSos.ru",
      "PhoneNumber": "106-524-3918",
      "MacAddress": "a0:2d:1b:68:1b:ce",
      "URL": "https://www.XhSKIpM.ru/",
      "UserName": "EYGbAfV",
      "LastLogin": "2006-05-05 07:32:07",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Sharon",
      "LastName": "Kling",
      "Gender": "Female",
      "Latitude": -19.273659,
      "Longitude": 77.086975,
      "CreditCardNumber": "372809756022322",
      "CreditCardType": "American Express",
      "Email": "qsXMxFc@wcYTVRu.ru",
      "DomainName": "WLipqQp.biz",
      "PhoneNumber": "184-379-6105",
      "MacAddress": "8f:36:99:47:9b:80",
      "URL": "https://ewfKelc.info/",
      "UserName": "TDcErVA",
      "LastLogin": "1970-12-03 14:45:43",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Ashley",
      "LastName": "Eichmann",
      "Gender": "Prefer to skip",
      "Latitude": 65.08766,
      "Longitude": -91.7716,
      "CreditCardNumber": "377023536242082",
      "CreditCardType": "American Express",
      "Email": "mTcTATe@haeTNhk.net",
      "DomainName": "wbimtBh.com",
      "PhoneNumber": "105-198-6473",
      "MacAddress": "10:b8:09:88:e5:a0",
      "URL": "http://pKpiFdU.ru/gQglEHE.html",
      "UserName": "yaWhXqs",
      "LastLogin": "1997-07-09 07:16:45",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Hosea",
      "LastName": "Ritchie",
      "Gender": "Male",
      "Latitude": 35.791473,
      "Longitude": -16.279358,
      "CreditCardNumber": "376992742172338",
      "CreditCardType": "American Express",
      "Email": "PoOMbEr@TUHKZGR.net",
      "DomainName": "fjfQREh.biz",
      "PhoneNumber": "211-078-6534",
      "MacAddress": "5c:be:18:65:70:82",
      "URL": "https://ULNPiOS.net/xkKLHtS",
      "UserName": "sIubDNR",
      "LastLogin": "2018-09-19 05:13:01",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Susan",
      "LastName": "Vandervort",
      "Gender": "Male",
      "Latitude": -13.74469,
      "Longitude": -84.761604,
      "CreditCardNumber": "343695048515806",
      "CreditCardType": "American Express",
      "Email": "wamDtnK@qdglQkb.com",
      "DomainName": "BqgPnfw.ru",
      "PhoneNumber": "110-962-3547",
      "MacAddress": "18:50:fb:2b:29:78",
      "URL": "https://www.WRAXaTh.org/vrvoJUl",
      "UserName": "UPhaSwv",
      "LastLogin": "2003-09-14 09:16:51",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Effie",
      "LastName": "Greenfelder",
      "Gender": "Female",
      "Latitude": 37.70159,
      "Longitude": -165.3375,
      "CreditCardNumber": "343465394307172",
      "CreditCardType": "American Express",
      "Email": "NmfdbWb@WUJiDAN.com",
      "DomainName": "TJJSlqj.com",
      "PhoneNumber": "723-451-0896",
      "MacAddress": "c5:04:92:13:8f:d6",
      "URL": "https://GfeAODN.org/AAtvosy.html",
      "UserName": "UFxITRC",
      "LastLogin": "2006-02-08 00:48:12",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Pattie",
      "LastName": "Rohan",
      "Gender": "Prefer to skip",
      "Latitude": 34.668434,
      "Longitude": -41.95836,
      "CreditCardNumber": "342766570363053",
      "CreditCardType": "American Express",
      "Email": "ofIlRjR@qNqLbeE.ru",
      "DomainName": "lPlELBQ.com",
      "PhoneNumber": "213-105-6798",
      "MacAddress": "cb:b4:69:3e:81:c6",
      "URL": "http://www.qmOKfGW.info/PBoISES",
      "UserName": "iNMtOHx",
      "LastLogin": "2006-06-24 09:18:58",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Estella",
      "LastName": "D\"Amore",
      "Gender": "Prefer to skip",
      "Latitude": -56.5345,
      "Longitude": 92.453156,
      "CreditCardNumber": "370028225697994",
      "CreditCardType": "American Express",
      "Email": "bqlWCio@EdIaudR.org",
      "DomainName": "DLWpRLF.com",
      "PhoneNumber": "610-578-4139",
      "MacAddress": "f4:97:2c:70:3a:93",
      "URL": "http://www.vxePahj.net/CoaHccR",
      "UserName": "RuRHxtg",
      "LastLogin": "1971-10-14 19:40:13",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Ayana",
      "LastName": "McClure",
      "Gender": "Female",
      "Latitude": -12.514969,
      "Longitude": 29.909363,
      "CreditCardNumber": "375838342314764",
      "CreditCardType": "American Express",
      "Email": "NLKXYCq@HJxkXlP.info",
      "DomainName": "qHKrsxA.info",
      "PhoneNumber": "542-981-0371",
      "MacAddress": "be:a7:c0:3c:02:ea",
      "URL": "http://www.glMrgyS.net/xWrWvaT",
      "UserName": "gDnUaRX",
      "LastLogin": "1977-01-01 05:51:09",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Unique",
      "LastName": "Davis",
      "Gender": "Male",
      "Latitude": 79.72647,
      "Longitude": -80.17729,
      "CreditCardNumber": "345119846999755",
      "CreditCardType": "American Express",
      "Email": "PZXfeoj@SGXoPEl.net",
      "DomainName": "APSpvtf.net",
      "PhoneNumber": "615-824-9103",
      "MacAddress": "20:b8:aa:f7:35:db",
      "URL": "http://FODWoLl.org/caGWuZT.html",
      "UserName": "kZNtDYu",
      "LastLogin": "1978-11-03 17:45:23",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Burnice",
      "LastName": "Herman",
      "Gender": "Male",
      "Latitude": 62.93541,
      "Longitude": -6.3474426,
      "CreditCardNumber": "372953785994402",
      "CreditCardType": "American Express",
      "Email": "tBehCdr@YMYKuHq.biz",
      "DomainName": "oGVJNlM.biz",
      "PhoneNumber": "916-410-3728",
      "MacAddress": "94:0d:66:21:6a:c0",
      "URL": "https://www.wKuxKFN.net/egmqGAo",
      "UserName": "CMbXdxv",
      "LastLogin": "1987-02-16 17:03:26",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Luna",
      "LastName": "Botsford",
      "Gender": "Prefer to skip",
      "Latitude": 10.439705,
      "Longitude": 163.44208,
      "CreditCardNumber": "347910604154752",
      "CreditCardType": "American Express",
      "Email": "iATUCJy@YPgfoXA.com",
      "DomainName": "ncMCyNE.info",
      "PhoneNumber": "810-751-9236",
      "MacAddress": "66:6a:1c:2a:eb:a0",
      "URL": "http://www.cEXqujG.ru/rSBRHNY",
      "UserName": "NLVqSsZ",
      "LastLogin": "1981-01-07 21:36:18",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Irma",
      "LastName": "Harber",
      "Gender": "Female",
      "Latitude": 14.804924,
      "Longitude": 83.39081,
      "CreditCardNumber": "345565022176909",
      "CreditCardType": "American Express",
      "Email": "BVCQWNo@iAMXmMd.org",
      "DomainName": "fCGYCVR.org",
      "PhoneNumber": "314-589-1072",
      "MacAddress": "ad:a1:9c:8b:97:0a",
      "URL": "https://www.iinAgob.com/WvEnYTi",
      "UserName": "tGUvoeL",
      "LastLogin": "1982-06-14 22:28:35",
      "PaymentMethod": "paypal"
  },
  {
      "FirstName": "Willy",
      "LastName": "Jacobs",
      "Gender": "Male",
      "Latitude": -85.37757,
      "Longitude": 20.586777,
      "CreditCardNumber": "345645140328953",
      "CreditCardType": "American Express",
      "Email": "SXkoMCW@OuZbbKu.info",
      "DomainName": "eeQZZNa.biz",
      "PhoneNumber": "961-057-8142",
      "MacAddress": "9b:c9:79:75:67:7b",
      "URL": "https://VRSXwLM.net/",
      "UserName": "FbfAVKi",
      "LastLogin": "1974-12-30 20:04:10",
      "PaymentMethod": "check"
  },
  {
      "FirstName": "Mozell",
      "LastName": "Marquardt",
      "Gender": "Female",
      "Latitude": -45.756123,
      "Longitude": -157.5036,
      "CreditCardNumber": "372468634372555",
      "CreditCardType": "American Express",
      "Email": "LgjmTGa@fGsQDYn.com",
      "DomainName": "FnYmbqi.biz",
      "PhoneNumber": "475-102-8619",
      "MacAddress": "96:8c:07:21:f0:f8",
      "URL": "https://www.ufNZYgb.info/YKoekZg",
      "UserName": "XVYVuCu",
      "LastLogin": "1971-11-10 23:06:06",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Kacey",
      "LastName": "Turner",
      "Gender": "Male",
      "Latitude": 77.52707,
      "Longitude": 163.7042,
      "CreditCardNumber": "345535227674156",
      "CreditCardType": "American Express",
      "Email": "QoTxWJt@FkffEmC.ru",
      "DomainName": "oRpUKAF.com",
      "PhoneNumber": "610-458-3721",
      "MacAddress": "1a:6a:62:7d:4e:41",
      "URL": "http://YcRvNLL.biz/",
      "UserName": "YxWohTy",
      "LastLogin": "1994-02-27 10:30:24",
      "PaymentMethod": "cc"
  },
  {
      "FirstName": "Nickolas",
      "LastName": "Schuster",
      "Gender": "Female",
      "Latitude": -6.944641,
      "Longitude": -40.318695,
      "CreditCardNumber": "373609800200747",
      "CreditCardType": "American Express",
      "Email": "rJMmpJf@jXAJLnG.info",
      "DomainName": "qGMAExK.org",
      "PhoneNumber": "310-962-8715",
      "MacAddress": "21:07:6c:84:43:85",
      "URL": "http://XrOxGvK.biz/aVjtHHQ.html",
      "UserName": "wZDbUrS",
      "LastLogin": "1983-10-23 22:11:28",
      "PaymentMethod": "money order"
  },
  {
      "FirstName": "Edison",
      "LastName": "Rath",
      "Gender": "Prefer to skip",
      "Latitude": -61.70857,
      "Longitude": 54.278366,
      "CreditCardNumber": "345740929662941",
      "CreditCardType": "American Express",
      "Email": "ItiJCgb@dTBMqjO.biz",
      "DomainName": "CphXUep.org",
      "PhoneNumber": "463-128-1079",
      "MacAddress": "39:24:59:8a:19:b2",
      "URL": "https://www.EYaOeNP.com/",
      "UserName": "vPQWwFN",
      "LastLogin": "2017-03-18 18:18:36",
      "PaymentMethod": "money order"
  }
];

export const columns = [
  {
    title: "Personal Details",
    key: "FullName",
    render: (text, record, index) => {
      const {
        FirstName, LastName,
        Email, UserName, PhoneNumber,
        LastLogin
      } = record;
      return (
        <div>
          <p style={{fontWeight: "bold", letterSpacing: "1px", fontSize: "16px"}}>
            {FirstName} {LastName}
          </p>
          <p className="customfield">
            <i class="fas fa-envelope"></i>
            <span>{Email}</span>
          </p>
          <p className="customfield">
            <i class="fas fa-phone"></i>
            <span>{PhoneNumber}</span>
          </p>
          <p className="customfield">
            @
            <span>{UserName}</span>
          </p>
          <p className="customfield">
            <i class="fas fa-eye"></i>
              <span>{LastLogin}</span>
          </p>
        </div>
      )
    },
  },
  {
    title: "Location Details",
    key: "Location",
    render:  (text, record, index) => {
      const {
        Latitude, Longitude
      } = record;
      return (
        <p className="customfield">
          <i class="fas fa-3x fa-street-view"></i>
          <span style={{marginLeft: "10px"}}>
            {Latitude}, {Longitude}
          </span>
        </p>
      )
    }
  },
  {
    title: "Card Details",
    key: "Card",
    render: (text, record, index ) => {
      const {
        CreditCardNumber, CreditCardType
      } = record
      return (
        <Card
          number={CreditCardNumber}
          type={CreditCardType}
        />
      )
    }
  },
  {
    title: 'Gender',
    dataIndex: 'Gender',
    key: 'Gender',
    render: tag => {
      let color = tag.toLowerCase() === "male" ?
                  'geekblue' : tag.toLowerCase() === "female"? 'pink' : 'volcano';
      return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
      )
    }
  },
    {
      title: 'Payment Method',
      dataIndex: 'PaymentMethod',
      key: 'PaymentMethod',
      render: method => {
        let color = paymentColorMap[method]
        return (
            <Tag color={color} key={method}>
              {method.toUpperCase()}
            </Tag>
        )
    }, 
  },{
    title: "Meta Data",
    key: "metaData",
    render: (text, record, index ) => {
      const {
        DomainName,
        MacAddress,
        URL,
      } = record;
      return (
        <>
          <p className="customfield">
            Domain: 
            <span>{DomainName}</span>
          </p>
          <p className="customfield">
            Mac Address:
          <span>{MacAddress}</span>
          </p>
          <p className="customfield">
            URL: 
            <span>
              <a href={URL}>
                {URL}
              </a>
            </span>
          </p>
        </>
      )
    }
  }
];