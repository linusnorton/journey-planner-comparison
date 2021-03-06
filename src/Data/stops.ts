
/**
 * Three character CRS code
 */
export type CRS = string;

/**
 * Location (mostly physical stations, some logical group stations)
 */
export interface Stop {
  name: string,
  code: CRS,
  crs: string
}

export const stops: Stop[] = [
  {
    "code": "1072",
    "name": "London",
    "crs": ""
  },
  {
    "code": "0410",
    "name": "Bedford Stations",
    "crs": ""
  },
  {
    "code": "0418",
    "name": "Birmingham",
    "crs": ""
  },
  {
    "code": "1780",
    "name": "Bootle (Merseyside)",
    "crs": ""
  },
  {
    "code": "0424",
    "name": "Bradford (West Yorkshire)",
    "crs": ""
  },
  {
    "code": "0428",
    "name": "Canterbury",
    "crs": ""
  },
  {
    "code": "0258",
    "name": "Catford Stations",
    "crs": ""
  },
  {
    "code": "0254",
    "name": "Colchester Stations",
    "crs": ""
  },
  {
    "code": "0449",
    "name": "Croydon",
    "crs": ""
  },
  {
    "code": "0429",
    "name": "Dorchester",
    "crs": ""
  },
  {
    "code": "0416",
    "name": "Dorking Stations",
    "crs": ""
  },
  {
    "code": "0259",
    "name": "Edenbridge Stations",
    "crs": ""
  },
  {
    "code": "0263",
    "name": "Enfield",
    "crs": ""
  },
  {
    "code": "0431",
    "name": "Falkirk",
    "crs": ""
  },
  {
    "code": "0260",
    "name": "Farnborough",
    "crs": ""
  },
  {
    "code": "0432",
    "name": "Folkestone",
    "crs": ""
  },
  {
    "code": "0433",
    "name": "Glasgow",
    "crs": ""
  },
  {
    "code": "0404",
    "name": "Helensburgh",
    "crs": ""
  },
  {
    "code": "0413",
    "name": "Hertford",
    "crs": ""
  },
  {
    "code": "0435",
    "name": "Liverpool",
    "crs": ""
  },
  {
    "code": "0437",
    "name": "Maidstone",
    "crs": ""
  },
  {
    "code": "0438",
    "name": "Manchester",
    "crs": ""
  },
  {
    "code": "0441",
    "name": "Newark",
    "crs": ""
  },
  {
    "code": "0262",
    "name": "Penge",
    "crs": ""
  },
  {
    "code": "0268",
    "name": "Pontefract",
    "crs": ""
  },
  {
    "code": "0440",
    "name": "Portsmouth",
    "crs": ""
  },
  {
    "code": "0403",
    "name": "Reading Stations",
    "crs": ""
  },
  {
    "code": "0411",
    "name": "Southend",
    "crs": ""
  },
  {
    "code": "0271",
    "name": "Thorne",
    "crs": ""
  },
  {
    "code": "7468",
    "name": "Tilbury",
    "crs": ""
  },
  {
    "code": "0443",
    "name": "Tyndrum",
    "crs": ""
  },
  {
    "code": "0265",
    "name": "West Hampstead",
    "crs": ""
  },
  {
    "code": "0444",
    "name": "Wakefield",
    "crs": ""
  },
  {
    "code": "0445",
    "name": "Warrington",
    "crs": ""
  },
  {
    "code": "0446",
    "name": "Wigan",
    "crs": ""
  },
  {
    "code": "0447",
    "name": "Worcester",
    "crs": ""
  },
  {
    "code": "0027",
    "name": "Trvcard 1",
    "crs": ""
  },
  {
    "code": "0028",
    "name": "Trvcard 2",
    "crs": ""
  },
  {
    "code": "0029",
    "name": "Trvcard 3",
    "crs": ""
  },
  {
    "code": "0030",
    "name": "Trvcard 4",
    "crs": ""
  },
  {
    "code": "0031",
    "name": "Trvcard 5",
    "crs": ""
  },
  {
    "code": "0032",
    "name": "London Zones 1-2",
    "crs": "12A"
  },
  {
    "code": "0033",
    "name": "London Zones 1-3",
    "crs": "13A"
  },
  {
    "code": "0034",
    "name": "London Zones 1-4",
    "crs": "14A"
  },
  {
    "code": "0035",
    "name": "London All Zones Travelcard",
    "crs": ""
  },
  {
    "code": "0036",
    "name": "London Zones 2-3",
    "crs": "23A"
  },
  {
    "code": "0037",
    "name": "London Zones 2-4",
    "crs": "24A"
  },
  {
    "code": "0038",
    "name": "London Zones 2-6",
    "crs": "26A"
  },
  {
    "code": "0039",
    "name": "London Zones 3-4",
    "crs": "34A"
  },
  {
    "code": "0040",
    "name": "London Zones 3-6",
    "crs": "36A"
  },
  {
    "code": "0041",
    "name": "Boundary Zone 2",
    "crs": ""
  },
  {
    "code": "0042",
    "name": "Boundary Zone 3",
    "crs": ""
  },
  {
    "code": "0043",
    "name": "Boundary Zone 4",
    "crs": ""
  },
  {
    "code": "0044",
    "name": "Boundary Zone 5",
    "crs": ""
  },
  {
    "code": "0051",
    "name": "London Zone 1*",
    "crs": "11A"
  },
  {
    "code": "0052",
    "name": "London Zone 2*",
    "crs": "22A"
  },
  {
    "code": "0053",
    "name": "London Zone 3*",
    "crs": "33A"
  },
  {
    "code": "0054",
    "name": "London Zone 4*",
    "crs": "44A"
  },
  {
    "code": "0055",
    "name": "London Zones 5-6",
    "crs": "56A"
  },
  {
    "code": "0057",
    "name": "London Zones 4-6",
    "crs": "46A"
  },
  {
    "code": "0059",
    "name": "London Zone 6*",
    "crs": "66A"
  },
  {
    "code": "0060",
    "name": "London Zone 5*",
    "crs": "55A"
  },
  {
    "code": "0061",
    "name": "London Zones 4-5",
    "crs": "45A"
  },
  {
    "code": "0062",
    "name": "London Zones 3-5",
    "crs": "35A"
  },
  {
    "code": "0063",
    "name": "London Zones 2-5",
    "crs": "25A"
  },
  {
    "code": "0064",
    "name": "London Zones 1-5",
    "crs": "15A"
  },
  {
    "code": "0065",
    "name": "Zone U1245 Londn",
    "crs": ""
  },
  {
    "code": "0066",
    "name": "Zone U2345 Londn",
    "crs": ""
  },
  {
    "code": "0067",
    "name": "Zone U345* Londn",
    "crs": ""
  },
  {
    "code": "0068",
    "name": "Zone U45*  Londn",
    "crs": ""
  },
  {
    "code": "0069",
    "name": "Zone U5*   Londn",
    "crs": ""
  },
  {
    "code": "0070",
    "name": "Zone U6*   Londn",
    "crs": ""
  },
  {
    "code": "0071",
    "name": "Trvcard 6",
    "crs": ""
  },
  {
    "code": "0072",
    "name": "Boundary Zone 6",
    "crs": ""
  },
  {
    "code": "0240",
    "name": "Birkenhead 12 Quays",
    "crs": "BKI"
  },
  {
    "code": "0252",
    "name": "Hawes",
    "crs": "HMK"
  },
  {
    "code": "0253",
    "name": "Penzance Quay",
    "crs": "PNQ"
  },
  {
    "code": "0269",
    "name": "St Mary'S Quay",
    "crs": "SMQ"
  },
  {
    "code": "0283",
    "name": "Broadway",
    "crs": "BWY"
  },
  {
    "code": "0286",
    "name": "Cirencester",
    "crs": "CCR"
  },
  {
    "code": "0295",
    "name": "Lampeter",
    "crs": "LTR"
  },
  {
    "code": "0329",
    "name": "Balbriggan  IR",
    "crs": "BAP"
  },
  {
    "code": "0336",
    "name": "Bodmin Mount Folly",
    "crs": "BDF"
  },
  {
    "code": "0340",
    "name": "Hull Bus Stn",
    "crs": "HUU"
  },
  {
    "code": "0355",
    "name": "Scrabster",
    "crs": "SCB"
  },
  {
    "code": "0362",
    "name": "Southsea Hoverport",
    "crs": "SHV"
  },
  {
    "code": "0375",
    "name": "Energlyn & Churchill Park",
    "crs": "ECP"
  },
  {
    "code": "0451",
    "name": "Manchester Ctlz",
    "crs": "MCZ"
  },
  {
    "code": "0500",
    "name": "Acton Town Und",
    "crs": "ZAT"
  },
  {
    "code": "0501",
    "name": "Barbican",
    "crs": "ZBB"
  },
  {
    "code": "0502",
    "name": "London Aldgate",
    "crs": "ZAD"
  },
  {
    "code": "0503",
    "name": "Aldgate East Und",
    "crs": "ZAE"
  },
  {
    "code": "0505",
    "name": "Alperton Und",
    "crs": "ZAP"
  },
  {
    "code": "0506",
    "name": "Amersham",
    "crs": "AMR"
  },
  {
    "code": "0507",
    "name": "Angel Und",
    "crs": "ZAN"
  },
  {
    "code": "0508",
    "name": "Archway Und",
    "crs": "ZAR"
  },
  {
    "code": "0509",
    "name": "Arnos Grove Und",
    "crs": "ZAG"
  },
  {
    "code": "0511",
    "name": "Baker Street Und",
    "crs": "ZBS"
  },
  {
    "code": "0512",
    "name": "Balham Und",
    "crs": "ZBL"
  },
  {
    "code": "0513",
    "name": "Bank Und",
    "crs": "ZBA"
  },
  {
    "code": "0514",
    "name": "Barking L.T.",
    "crs": "ZKB"
  },
  {
    "code": "0515",
    "name": "Barkingside Und",
    "crs": "ZBN"
  },
  {
    "code": "0516",
    "name": "Barons Court Lt",
    "crs": "ZBQ"
  },
  {
    "code": "0517",
    "name": "Bayswater Und",
    "crs": "ZBY"
  },
  {
    "code": "0518",
    "name": "Becontree",
    "crs": "ZBZ"
  },
  {
    "code": "0519",
    "name": "Belsize Park Und",
    "crs": "ZBP"
  },
  {
    "code": "0520",
    "name": "Bethnal Grn Und",
    "crs": "ZBE"
  },
  {
    "code": "0521",
    "name": "Blackfriars Und",
    "crs": "ZBF"
  },
  {
    "code": "0524",
    "name": "Bond Street Und",
    "crs": "ZBD"
  },
  {
    "code": "0525",
    "name": "Borough Und",
    "crs": "ZBU"
  },
  {
    "code": "0526",
    "name": "Boston Manor Und",
    "crs": "ZBM"
  },
  {
    "code": "0527",
    "name": "Bounds Green Und",
    "crs": "ZBG"
  },
  {
    "code": "0528",
    "name": "Bow Road Und",
    "crs": "ZBR"
  },
  {
    "code": "0529",
    "name": "Brent Cross Und",
    "crs": "ZBT"
  },
  {
    "code": "0530",
    "name": "Bromley-By-Bow Lt",
    "crs": "ZBW"
  },
  {
    "code": "0531",
    "name": "Buckhurst Hl Und",
    "crs": "ZBI"
  },
  {
    "code": "0532",
    "name": "Burnt Oak Und",
    "crs": "ZBO"
  },
  {
    "code": "0534",
    "name": "Caledonian R Und",
    "crs": "ZCR"
  },
  {
    "code": "0535",
    "name": "Camden Town Und",
    "crs": "ZCT"
  },
  {
    "code": "0536",
    "name": "Cannon St Und",
    "crs": "ZCS"
  },
  {
    "code": "0537",
    "name": "Canons Park Und",
    "crs": "ZCP"
  },
  {
    "code": "0539",
    "name": "Chalfont & Latimer Und",
    "crs": "CFO"
  },
  {
    "code": "0540",
    "name": "Chalk Farm Und",
    "crs": "ZCF"
  },
  {
    "code": "0541",
    "name": "Chancery Ln Und",
    "crs": "ZCY"
  },
  {
    "code": "0542",
    "name": "Embankment Und",
    "crs": "ZEK"
  },
  {
    "code": "0543",
    "name": "Chesham Und",
    "crs": "ZCM"
  },
  {
    "code": "0544",
    "name": "Chigwell Und",
    "crs": "ZCG"
  },
  {
    "code": "0545",
    "name": "Chiswick Pk Und",
    "crs": "ZCI"
  },
  {
    "code": "0546",
    "name": "Chorleywood Und",
    "crs": "CLW"
  },
  {
    "code": "0547",
    "name": "Clapham Cmmn Und",
    "crs": "ZCC"
  },
  {
    "code": "0548",
    "name": "Clapham Nth Und",
    "crs": "ZCN"
  },
  {
    "code": "0549",
    "name": "Clapham Sth Und",
    "crs": "ZCA"
  },
  {
    "code": "0550",
    "name": "Cockfosters Und",
    "crs": "ZCK"
  },
  {
    "code": "0551",
    "name": "Colindale Und",
    "crs": "ZCD"
  },
  {
    "code": "0552",
    "name": "Colliers Wd Und",
    "crs": ""
  },
  {
    "code": "0553",
    "name": "Covent Gardn Und",
    "crs": "ZCV"
  },
  {
    "code": "0554",
    "name": "Croxley Und",
    "crs": ""
  },
  {
    "code": "0554",
    "name": "Croxley Und",
    "crs": "ZCO"
  },
  {
    "code": "0555",
    "name": "Dagenham East L.T.",
    "crs": "ZDE"
  },
  {
    "code": "0556",
    "name": "Dagenham Hwy Und",
    "crs": "ZDH"
  },
  {
    "code": "0558",
    "name": "Dollis Hill Und",
    "crs": "ZDO"
  },
  {
    "code": "0560",
    "name": "Ealing Bway Und",
    "crs": "ZEB"
  },
  {
    "code": "0561",
    "name": "Ealing Cmmn Und",
    "crs": "ZEC"
  },
  {
    "code": "0562",
    "name": "Earl's Court L.T.",
    "crs": "ZET"
  },
  {
    "code": "0563",
    "name": "East Acton Und",
    "crs": "ZEA"
  },
  {
    "code": "0564",
    "name": "Eastcote Und",
    "crs": "ZEE"
  },
  {
    "code": "0565",
    "name": "East Finchly Und",
    "crs": "ZEF"
  },
  {
    "code": "0566",
    "name": "East Ham Und",
    "crs": "ZEH"
  },
  {
    "code": "0567",
    "name": "East Putney",
    "crs": "ZPU"
  },
  {
    "code": "0568",
    "name": "Edgware (Lul)",
    "crs": "ZED"
  },
  {
    "code": "0569",
    "name": "Edgware Rd C/Und",
    "crs": "ZEM"
  },
  {
    "code": "0570",
    "name": "Elephant & Castle (Lt)",
    "crs": "ZEL"
  },
  {
    "code": "0571",
    "name": "Elm Park Und",
    "crs": "ZEP"
  },
  {
    "code": "0572",
    "name": "Epping Und",
    "crs": "ZEG"
  },
  {
    "code": "0574",
    "name": "Euston Und",
    "crs": "ZEU"
  },
  {
    "code": "0575",
    "name": "Euston Sq Und",
    "crs": "ZES"
  },
  {
    "code": "0576",
    "name": "Fairlop Und",
    "crs": "ZFA"
  },
  {
    "code": "0577",
    "name": "Farringdon Mtr",
    "crs": "ZFD"
  },
  {
    "code": "0577",
    "name": "Farringdon",
    "crs": "ZFD"
  },
  {
    "code": "0578",
    "name": "Finchley Ctl Und",
    "crs": "ZFC"
  },
  {
    "code": "0579",
    "name": "Finchley Road Und",
    "crs": "ZFR"
  },
  {
    "code": "0580",
    "name": "Finsbury Pk Und",
    "crs": "ZFP"
  },
  {
    "code": "0581",
    "name": "Fulham Bdway Und",
    "crs": "ZFB"
  },
  {
    "code": "0582",
    "name": "Gants Hill Und",
    "crs": "ZGA"
  },
  {
    "code": "0583",
    "name": "Gloucestr Rd Und",
    "crs": "ZGR"
  },
  {
    "code": "0584",
    "name": "Golders Grn Und",
    "crs": "ZGG"
  },
  {
    "code": "0585",
    "name": "Goldhawk Rd Und",
    "crs": "ZGW"
  },
  {
    "code": "0586",
    "name": "Goodge St Und",
    "crs": "ZGS"
  },
  {
    "code": "0587",
    "name": "Grange Hill Und",
    "crs": "ZGH"
  },
  {
    "code": "0588",
    "name": "Great Pld St Und",
    "crs": "ZGP"
  },
  {
    "code": "0589",
    "name": "Greenford Und",
    "crs": ""
  },
  {
    "code": "0590",
    "name": "Green Park Und",
    "crs": "ZGE"
  },
  {
    "code": "0591",
    "name": "Gunnersbury Und",
    "crs": ""
  },
  {
    "code": "0592",
    "name": "Hainault Und",
    "crs": "ZHT"
  },
  {
    "code": "0593",
    "name": "Hammersmith (District) Lul",
    "crs": "ZHA"
  },
  {
    "code": "0594",
    "name": "Hampstead Und",
    "crs": "ZHM"
  },
  {
    "code": "0595",
    "name": "Hanger Lane Und",
    "crs": "ZHL"
  },
  {
    "code": "0596",
    "name": "Harlesden Und",
    "crs": ""
  },
  {
    "code": "0597",
    "name": "Harrow & Wld Und",
    "crs": ""
  },
  {
    "code": "0598",
    "name": "Harrow-on-the-Hill",
    "crs": "HOH"
  },
  {
    "code": "0601",
    "name": "Hendon Ctl Und",
    "crs": "ZHN"
  },
  {
    "code": "0602",
    "name": "High Barnet Und",
    "crs": "ZHB"
  },
  {
    "code": "0603",
    "name": "Highbury & I Und",
    "crs": "ZHI"
  },
  {
    "code": "0604",
    "name": "Highgate Und",
    "crs": "ZHG"
  },
  {
    "code": "0605",
    "name": "Kensington High St L.T.",
    "crs": "ZHS"
  },
  {
    "code": "0606",
    "name": "Hillingdon Und",
    "crs": "ZHD"
  },
  {
    "code": "0607",
    "name": "Holborn Und",
    "crs": "ZHO"
  },
  {
    "code": "0608",
    "name": "Holland Park Und",
    "crs": "ZHP"
  },
  {
    "code": "0609",
    "name": "Holloway Rd Und",
    "crs": "ZHR"
  },
  {
    "code": "0610",
    "name": "Hornchurch Und",
    "crs": "ZHU"
  },
  {
    "code": "0611",
    "name": "Hounslow Ctl Und",
    "crs": "ZHC"
  },
  {
    "code": "0612",
    "name": "Hounslow E Und",
    "crs": "ZHE"
  },
  {
    "code": "0613",
    "name": "Hounslow W Und",
    "crs": "ZHW"
  },
  {
    "code": "0614",
    "name": "Hyde Pk Cnr Und",
    "crs": "ZHY"
  },
  {
    "code": "0615",
    "name": "Ickenham Und",
    "crs": "ZIC"
  },
  {
    "code": "0616",
    "name": "Kennington Und",
    "crs": "ZKE"
  },
  {
    "code": "0617",
    "name": "Kensal Green Und",
    "crs": ""
  },
  {
    "code": "0618",
    "name": "Kensington O Und",
    "crs": ""
  },
  {
    "code": "0619",
    "name": "Kentish Town Und",
    "crs": "ZKT"
  },
  {
    "code": "0620",
    "name": "Kenton Und",
    "crs": ""
  },
  {
    "code": "0621",
    "name": "Kew Gardens Und",
    "crs": ""
  },
  {
    "code": "0622",
    "name": "Kilburn Und",
    "crs": "ZKI"
  },
  {
    "code": "0623",
    "name": "Kilburn Park Lt",
    "crs": "ZKP"
  },
  {
    "code": "0624",
    "name": "Kingsbury Und",
    "crs": "ZKY"
  },
  {
    "code": "0625",
    "name": "Kings Cross Und",
    "crs": "ZKX"
  },
  {
    "code": "0626",
    "name": "Knightsbrdge Und",
    "crs": "ZKN"
  },
  {
    "code": "0627",
    "name": "Ladbroke Gve Und",
    "crs": "ZLG"
  },
  {
    "code": "0628",
    "name": "Lambeth Nth Und",
    "crs": "ZLN"
  },
  {
    "code": "0629",
    "name": "Lancaster Gt Und",
    "crs": "ZLA"
  },
  {
    "code": "0630",
    "name": "Latimer Road Und",
    "crs": "ZLR"
  },
  {
    "code": "0631",
    "name": "Leicester Sq Und",
    "crs": "ZLS"
  },
  {
    "code": "0632",
    "name": "Leyton Und",
    "crs": "ZLY"
  },
  {
    "code": "0633",
    "name": "Leytonstone Und",
    "crs": "ZLE"
  },
  {
    "code": "0634",
    "name": "Liverpool St Und",
    "crs": "ZLV"
  },
  {
    "code": "0635",
    "name": "London Brdge Und",
    "crs": "ZLB"
  },
  {
    "code": "0636",
    "name": "Loughton Und",
    "crs": "ZLO"
  },
  {
    "code": "0637",
    "name": "Maida Vale Lt",
    "crs": "ZMV"
  },
  {
    "code": "0638",
    "name": "Manor House Und",
    "crs": "ZMR"
  },
  {
    "code": "0639",
    "name": "Mansion House Lt",
    "crs": "ZMH"
  },
  {
    "code": "0640",
    "name": "Marble Arch Und",
    "crs": "ZMA"
  },
  {
    "code": "0641",
    "name": "Marylebone Und",
    "crs": "ZMY"
  },
  {
    "code": "0642",
    "name": "Mile End Und",
    "crs": "ZME"
  },
  {
    "code": "0643",
    "name": "Mill Hill E Und",
    "crs": "ZML"
  },
  {
    "code": "0644",
    "name": "Monument Und",
    "crs": "ZMM"
  },
  {
    "code": "0645",
    "name": "Moorgate Lt",
    "crs": "ZMG"
  },
  {
    "code": "0646",
    "name": "Moor Park",
    "crs": "ZMP"
  },
  {
    "code": "0647",
    "name": "Morden Und",
    "crs": "ZMO"
  },
  {
    "code": "0648",
    "name": "Morningtn Cr Und",
    "crs": "ZMC"
  },
  {
    "code": "0649",
    "name": "Neasden Und",
    "crs": "ZNN"
  },
  {
    "code": "0650",
    "name": "Newbury Park Und",
    "crs": "ZNP"
  },
  {
    "code": "0651",
    "name": "New Cross Und",
    "crs": ""
  },
  {
    "code": "0652",
    "name": "New Cross Gt Und",
    "crs": ""
  },
  {
    "code": "0653",
    "name": "North Acton Underground",
    "crs": "ZNA"
  },
  {
    "code": "0654",
    "name": "North Ealing Und",
    "crs": "ZNE"
  },
  {
    "code": "0655",
    "name": "Northfields Und",
    "crs": "ZNF"
  },
  {
    "code": "0656",
    "name": "North Harrow Und",
    "crs": "ZNH"
  },
  {
    "code": "0657",
    "name": "Northolt Und",
    "crs": "ZNO"
  },
  {
    "code": "0659",
    "name": "North Wembly Und",
    "crs": ""
  },
  {
    "code": "0660",
    "name": "Northwick Pk Und",
    "crs": "ZNK"
  },
  {
    "code": "0661",
    "name": "Northwood Und",
    "crs": ""
  },
  {
    "code": "0661",
    "name": "Northwood Und",
    "crs": "ZND"
  },
  {
    "code": "0661",
    "name": "Northwood",
    "crs": "ZND"
  },
  {
    "code": "0662",
    "name": "Northwood Hs Und",
    "crs": "ZNS"
  },
  {
    "code": "0663",
    "name": "Notting H Gt Und",
    "crs": "ZNG"
  },
  {
    "code": "0664",
    "name": "Oakwood Und",
    "crs": "ZOA"
  },
  {
    "code": "0665",
    "name": "Old Street Und",
    "crs": ""
  },
  {
    "code": "0667",
    "name": "Osterley Und",
    "crs": "ZOY"
  },
  {
    "code": "0668",
    "name": "Oval Und",
    "crs": "ZOV"
  },
  {
    "code": "0669",
    "name": "Oxford Circ Und",
    "crs": "ZOC"
  },
  {
    "code": "0670",
    "name": "Paddington Und",
    "crs": "ZPA"
  },
  {
    "code": "0671",
    "name": "Park Royal Und",
    "crs": "ZPK"
  },
  {
    "code": "0672",
    "name": "Parsons Grn Und",
    "crs": "ZPG"
  },
  {
    "code": "0673",
    "name": "Perivale Und",
    "crs": "ZPE"
  },
  {
    "code": "0674",
    "name": "London Piccadilly Circus",
    "crs": "ZPC"
  },
  {
    "code": "0675",
    "name": "Pinner Und",
    "crs": "ZPI"
  },
  {
    "code": "0676",
    "name": "Plaistow L.T.",
    "crs": "ZPS"
  },
  {
    "code": "0677",
    "name": "Preston Road Und",
    "crs": "ZPR"
  },
  {
    "code": "0678",
    "name": "Putney Brdge Und",
    "crs": "ZPB"
  },
  {
    "code": "0679",
    "name": "Queensbury Und",
    "crs": "ZQB"
  },
  {
    "code": "0680",
    "name": "Queens Park Und",
    "crs": ""
  },
  {
    "code": "0681",
    "name": "Queensway Und",
    "crs": "ZQW"
  },
  {
    "code": "0682",
    "name": "Ravenscrt Pk Und",
    "crs": "ZRA"
  },
  {
    "code": "0683",
    "name": "Rayners Lane Und",
    "crs": "ZRL"
  },
  {
    "code": "0684",
    "name": "Redbridge Lt Station",
    "crs": "ZRE"
  },
  {
    "code": "0685",
    "name": "Regents Park Und",
    "crs": "ZRP"
  },
  {
    "code": "0686",
    "name": "Richmond Und",
    "crs": ""
  },
  {
    "code": "0687",
    "name": "Rickmansworth",
    "crs": "RIC"
  },
  {
    "code": "0688",
    "name": "Roding Vally Und",
    "crs": "ZRV"
  },
  {
    "code": "0689",
    "name": "Rotherhithe Und",
    "crs": "ZRO"
  },
  {
    "code": "0690",
    "name": "Royal Oak (Lul)",
    "crs": "ZRY"
  },
  {
    "code": "0690",
    "name": "Royal Oak Und",
    "crs": "ZRY"
  },
  {
    "code": "0691",
    "name": "Ruislip Und",
    "crs": "ZRU"
  },
  {
    "code": "0692",
    "name": "Ruislip Gdns Und",
    "crs": "ZRG"
  },
  {
    "code": "0693",
    "name": "Ruislip Manr Und",
    "crs": "ZRM"
  },
  {
    "code": "0694",
    "name": "Russell Sq Und",
    "crs": "ZRS"
  },
  {
    "code": "0695",
    "name": "St James Pk Und",
    "crs": "ZSS"
  },
  {
    "code": "0696",
    "name": "St Johns Wd Und",
    "crs": "ZSJ"
  },
  {
    "code": "0697",
    "name": "St Pauls Und",
    "crs": "ZSP"
  },
  {
    "code": "0698",
    "name": "Seven Sistrs Und",
    "crs": "ZSV"
  },
  {
    "code": "0699",
    "name": "Shadwell Und",
    "crs": "ZSW"
  },
  {
    "code": "0700",
    "name": "Shephrds B C/Und",
    "crs": "ZSZ"
  },
  {
    "code": "0701",
    "name": "Shoreditch Und",
    "crs": "ZSD"
  },
  {
    "code": "0702",
    "name": "Sloane Sq Und",
    "crs": "ZLQ"
  },
  {
    "code": "0703",
    "name": "Snaresbrook Und",
    "crs": "ZSN"
  },
  {
    "code": "0704",
    "name": "South Ealing Und",
    "crs": "ZSE"
  },
  {
    "code": "0705",
    "name": "Southfields",
    "crs": "SFS"
  },
  {
    "code": "0705",
    "name": "Southfields Und",
    "crs": ""
  },
  {
    "code": "0706",
    "name": "Southgate Und",
    "crs": "ZSA"
  },
  {
    "code": "0707",
    "name": "South Harrow Und",
    "crs": "ZSX"
  },
  {
    "code": "0708",
    "name": "South Kensington Lt",
    "crs": "ZSK"
  },
  {
    "code": "0709",
    "name": "South Kenton Und",
    "crs": ""
  },
  {
    "code": "0710",
    "name": "South Ruislp Und",
    "crs": ""
  },
  {
    "code": "0711",
    "name": "South Wimbledon Lt",
    "crs": "ZSI"
  },
  {
    "code": "0712",
    "name": "South Woodfd Und",
    "crs": "ZQS"
  },
  {
    "code": "0713",
    "name": "Stamford Brk Und",
    "crs": "ZSF"
  },
  {
    "code": "0714",
    "name": "Stanmore Und",
    "crs": "ZSM"
  },
  {
    "code": "0715",
    "name": "Stepney Grn Und",
    "crs": "ZSG"
  },
  {
    "code": "0716",
    "name": "Stockwell Und",
    "crs": "ZSL"
  },
  {
    "code": "0717",
    "name": "Stonebrge Pk Und",
    "crs": ""
  },
  {
    "code": "0718",
    "name": "Charing X Und",
    "crs": "ZCX"
  },
  {
    "code": "0720",
    "name": "Sudbury Hill Und",
    "crs": "ZSH"
  },
  {
    "code": "0721",
    "name": "Sudbury Town Und",
    "crs": "ZSY"
  },
  {
    "code": "0722",
    "name": "Surrey Quays Und",
    "crs": "ZSU"
  },
  {
    "code": "0723",
    "name": "Swiss Cottge Und",
    "crs": "ZSC"
  },
  {
    "code": "0724",
    "name": "Temple Und",
    "crs": "ZTM"
  },
  {
    "code": "0725",
    "name": "Theydon Bois Und",
    "crs": "ZTY"
  },
  {
    "code": "0726",
    "name": "Tooting Bec Und",
    "crs": "ZTB"
  },
  {
    "code": "0727",
    "name": "Tooting Bway Und",
    "crs": "ZTO"
  },
  {
    "code": "0728",
    "name": "Tottnhm Ct R Und",
    "crs": "ZTC"
  },
  {
    "code": "0729",
    "name": "Tottenhm Hle Und",
    "crs": "ZTT"
  },
  {
    "code": "0730",
    "name": "Totteridge Und",
    "crs": "ZTW"
  },
  {
    "code": "0731",
    "name": "Tower Hill L.T.",
    "crs": "ZTH"
  },
  {
    "code": "0733",
    "name": "Tufnell Park Und",
    "crs": "ZTP"
  },
  {
    "code": "0734",
    "name": "Turnham Green Lt",
    "crs": "ZTU"
  },
  {
    "code": "0735",
    "name": "Turnpike Lane Und",
    "crs": "ZTL"
  },
  {
    "code": "0736",
    "name": "Upminster L.T.",
    "crs": "ZUM"
  },
  {
    "code": "0737",
    "name": "Upminster Bg Und",
    "crs": "ZUB"
  },
  {
    "code": "0738",
    "name": "Upney Und",
    "crs": "ZUY"
  },
  {
    "code": "0739",
    "name": "Upton Park Und",
    "crs": "ZUP"
  },
  {
    "code": "0740",
    "name": "Uxbridge Und",
    "crs": "ZUX"
  },
  {
    "code": "0741",
    "name": "Victoria Und",
    "crs": "ZVI"
  },
  {
    "code": "0742",
    "name": "Walthamstw C Und",
    "crs": "ZWW"
  },
  {
    "code": "0743",
    "name": "Wanstead Und",
    "crs": "ZWN"
  },
  {
    "code": "0744",
    "name": "Wapping Und",
    "crs": "ZWP"
  },
  {
    "code": "0745",
    "name": "Warren St Und",
    "crs": "ZWS"
  },
  {
    "code": "0746",
    "name": "Warwick Avenue Lt",
    "crs": "ZWV"
  },
  {
    "code": "0747",
    "name": "Waterloo Lul",
    "crs": "ZWA"
  },
  {
    "code": "0748",
    "name": "Watford Met Und",
    "crs": ""
  },
  {
    "code": "0748",
    "name": "Watford Met Und",
    "crs": "ZWT"
  },
  {
    "code": "0749",
    "name": "Stratfrd Hst Dlr",
    "crs": "ZST"
  },
  {
    "code": "0750",
    "name": "Abbey Road Dlr",
    "crs": "ZAL"
  },
  {
    "code": "0751",
    "name": "Wembley Ctl Und",
    "crs": ""
  },
  {
    "code": "0752",
    "name": "Wembley Park Und",
    "crs": "ZWY"
  },
  {
    "code": "0753",
    "name": "West Acton Und",
    "crs": "ZWE"
  },
  {
    "code": "0754",
    "name": "Westbourne P Und",
    "crs": "ZWU"
  },
  {
    "code": "0755",
    "name": "West Bromptn Und",
    "crs": "ZWB"
  },
  {
    "code": "0756",
    "name": "West Finchly Und",
    "crs": "ZWF"
  },
  {
    "code": "0757",
    "name": "West Ham Lt",
    "crs": "ZWZ"
  },
  {
    "code": "0757",
    "name": "West Ham Und",
    "crs": ""
  },
  {
    "code": "0758",
    "name": "West Hampstd Und",
    "crs": "ZWH"
  },
  {
    "code": "0759",
    "name": "West Harrow Und",
    "crs": "ZWX"
  },
  {
    "code": "0760",
    "name": "West Kensgtn Und",
    "crs": "ZWK"
  },
  {
    "code": "0761",
    "name": "Westminster Und",
    "crs": "ZWM"
  },
  {
    "code": "0762",
    "name": "West Ruislip Und",
    "crs": ""
  },
  {
    "code": "0763",
    "name": "Whitechapel Und",
    "crs": "ZWL"
  },
  {
    "code": "0764",
    "name": "White City Und",
    "crs": "ZWC"
  },
  {
    "code": "0765",
    "name": "Willesdn Grn Und",
    "crs": "ZWG"
  },
  {
    "code": "0766",
    "name": "Willesden Jn Und",
    "crs": ""
  },
  {
    "code": "0767",
    "name": "Wimbledon Und",
    "crs": ""
  },
  {
    "code": "0768",
    "name": "Wimbledon Park",
    "crs": "WPK"
  },
  {
    "code": "0768",
    "name": "Wimbledon Pk Und",
    "crs": ""
  },
  {
    "code": "0769",
    "name": "Woodford Und",
    "crs": "ZWO"
  },
  {
    "code": "0770",
    "name": "Wood Green Und",
    "crs": "ZWD"
  },
  {
    "code": "0771",
    "name": "Woodside Pk Und",
    "crs": "ZWI"
  },
  {
    "code": "0773",
    "name": "Hammersmth M/Und",
    "crs": "ZHZ"
  },
  {
    "code": "0774",
    "name": "Edgware Rd B/Und",
    "crs": "ZER"
  },
  {
    "code": "0775",
    "name": "Shephrds B M/Und",
    "crs": "ZSB"
  },
  {
    "code": "0776",
    "name": "Pimlico Und",
    "crs": "ZPO"
  },
  {
    "code": "0777",
    "name": "Vauxhall Und",
    "crs": "ZVA"
  },
  {
    "code": "0778",
    "name": "Brixton Und",
    "crs": "ZBX"
  },
  {
    "code": "0779",
    "name": "Hatton Cross Und",
    "crs": "ZHX"
  },
  {
    "code": "0782",
    "name": "Heathrow Underground",
    "crs": "ZHJ"
  },
  {
    "code": "0784",
    "name": "Southwark Lt",
    "crs": "ZSO"
  },
  {
    "code": "0785",
    "name": "Zone U1*   Londn",
    "crs": ""
  },
  {
    "code": "0786",
    "name": "Zone U1256 Londn",
    "crs": ""
  },
  {
    "code": "0787",
    "name": "Bermondsey Lrt",
    "crs": "ZEO"
  },
  {
    "code": "0787",
    "name": "Bermondsey Und",
    "crs": ""
  },
  {
    "code": "0789",
    "name": "North Greenwich Und",
    "crs": "NGR"
  },
  {
    "code": "0790",
    "name": "Zone U12*  Londn",
    "crs": ""
  },
  {
    "code": "0791",
    "name": "Zone U123* Londn",
    "crs": ""
  },
  {
    "code": "0792",
    "name": "Zone U1234*Londn",
    "crs": ""
  },
  {
    "code": "0793",
    "name": "Zone U2*   Londn",
    "crs": ""
  },
  {
    "code": "0797",
    "name": "Zone U23*  Londn",
    "crs": ""
  },
  {
    "code": "0808",
    "name": "Hoek Van Holland",
    "crs": "HVH"
  },
  {
    "code": "0825",
    "name": "Zone U234* Londn",
    "crs": ""
  },
  {
    "code": "0829",
    "name": "Zone U2356 Londn",
    "crs": ""
  },
  {
    "code": "0830",
    "name": "Zone U3*   Londn",
    "crs": ""
  },
  {
    "code": "0835",
    "name": "Zone U34*  Londn",
    "crs": ""
  },
  {
    "code": "0836",
    "name": "Luton Bus",
    "crs": "LUB"
  },
  {
    "code": "0839",
    "name": "Zone U3456 Londn",
    "crs": ""
  },
  {
    "code": "0841",
    "name": "Zone U4*   Londn",
    "crs": ""
  },
  {
    "code": "0844",
    "name": "Zone U456  Londn",
    "crs": ""
  },
  {
    "code": "0847",
    "name": "Zone U56   Londn",
    "crs": ""
  },
  {
    "code": "0859",
    "name": "Pudding Mill Lane Dlr",
    "crs": "ZPM"
  },
  {
    "code": "0864",
    "name": "Tower Gatewy Dlr",
    "crs": "ZTG"
  },
  {
    "code": "0879",
    "name": "Cutty Sark Dlr",
    "crs": "ZAA"
  },
  {
    "code": "0880",
    "name": "Gravesend Piers",
    "crs": "GFY"
  },
  {
    "code": "0897",
    "name": "Deptford Bridge Dlr",
    "crs": "ZDB"
  },
  {
    "code": "0898",
    "name": "Elverson Rd Dlr",
    "crs": "ZAC"
  },
  {
    "code": "0942",
    "name": "Alvechurch Red Lion",
    "crs": "ARP"
  },
  {
    "code": "0943",
    "name": "Leigh Fleurdelis",
    "crs": "LFL"
  },
  {
    "code": "0944",
    "name": "London Road D R",
    "crs": "LRR"
  },
  {
    "code": "0946",
    "name": "Preston Prk Ldnr",
    "crs": "PPR"
  },
  {
    "code": "0947",
    "name": "Winchelsea New I",
    "crs": "WNI"
  },
  {
    "code": "0990",
    "name": "Armadale (West Lothian)",
    "crs": "ARM"
  },
  {
    "code": "0991",
    "name": "Blackridge",
    "crs": "BKR"
  },
  {
    "code": "0992",
    "name": "Caldercruix",
    "crs": "CAC"
  },
  {
    "code": "1003",
    "name": "Bescot Stadium",
    "crs": "BSC"
  },
  {
    "code": "1004",
    "name": "Aston",
    "crs": "AST"
  },
  {
    "code": "1006",
    "name": "Birmingham Snow Hill",
    "crs": "BSW"
  },
  {
    "code": "1010",
    "name": "Tame Bridge Parkway",
    "crs": "TAB"
  },
  {
    "code": "1011",
    "name": "Witton (West Midlands)",
    "crs": "WTT"
  },
  {
    "code": "1016",
    "name": "Cannock",
    "crs": "CAO"
  },
  {
    "code": "1017",
    "name": "Landywood",
    "crs": "LAW"
  },
  {
    "code": "1018",
    "name": "Bloxwich North",
    "crs": "BWN"
  },
  {
    "code": "1022",
    "name": "Haggerston",
    "crs": "HGG"
  },
  {
    "code": "1023",
    "name": "Hoxton",
    "crs": "HOX"
  },
  {
    "code": "1024",
    "name": "Shoreditch High Street",
    "crs": "SDC"
  },
  {
    "code": "1030",
    "name": "Coventry",
    "crs": "COV"
  },
  {
    "code": "1033",
    "name": "Hampton-in-Arden",
    "crs": "HIA"
  },
  {
    "code": "1034",
    "name": "Marston Green",
    "crs": "MGN"
  },
  {
    "code": "1035",
    "name": "Tile Hill",
    "crs": "THL"
  },
  {
    "code": "1036",
    "name": "Adderley Park",
    "crs": "ADD"
  },
  {
    "code": "1039",
    "name": "Rotherhithe",
    "crs": "ROE"
  },
  {
    "code": "1040",
    "name": "Duddeston",
    "crs": "DUD"
  },
  {
    "code": "1041",
    "name": "Erdington",
    "crs": "ERD"
  },
  {
    "code": "1042",
    "name": "Four Oaks",
    "crs": "FOK"
  },
  {
    "code": "1043",
    "name": "Stechford",
    "crs": "SCF"
  },
  {
    "code": "1044",
    "name": "Sutton Coldfield",
    "crs": "SUT"
  },
  {
    "code": "1045",
    "name": "Berkswell",
    "crs": "BKW"
  },
  {
    "code": "1056",
    "name": "Wilnecote (Staffordshire)",
    "crs": "WNE"
  },
  {
    "code": "1067",
    "name": "Long Buckby",
    "crs": "LBK"
  },
  {
    "code": "1069",
    "name": "Northampton",
    "crs": "NMP"
  },
  {
    "code": "1074",
    "name": "Atherstone",
    "crs": "ATH"
  },
  {
    "code": "1077",
    "name": "Nuneaton",
    "crs": "NUN"
  },
  {
    "code": "1078",
    "name": "Polesworth",
    "crs": "PSW"
  },
  {
    "code": "1082",
    "name": "Shadwell",
    "crs": "SDE"
  },
  {
    "code": "1083",
    "name": "Surrey Quays",
    "crs": "SQE"
  },
  {
    "code": "1084",
    "name": "Rugeley Trent Valley",
    "crs": "RGL"
  },
  {
    "code": "1085",
    "name": "Wapping",
    "crs": "WPE"
  },
  {
    "code": "1087",
    "name": "Rugby",
    "crs": "RUG"
  },
  {
    "code": "1090",
    "name": "Aylesbury Vale Parkway",
    "crs": "AVP"
  },
  {
    "code": "1096",
    "name": "Barnt Green",
    "crs": "BTG"
  },
  {
    "code": "1097",
    "name": "Jewellery Quarter",
    "crs": "JEQ"
  },
  {
    "code": "1105",
    "name": "Selly Oak",
    "crs": "SLY"
  },
  {
    "code": "1109",
    "name": "Kings Norton",
    "crs": "KNN"
  },
  {
    "code": "1110",
    "name": "Longbridge",
    "crs": "LOB"
  },
  {
    "code": "1111",
    "name": "Northfield",
    "crs": "NFD"
  },
  {
    "code": "1112",
    "name": "Bournville",
    "crs": "BRV"
  },
  {
    "code": "1114",
    "name": "Smethwick Galton Bridge",
    "crs": "SGB"
  },
  {
    "code": "1121",
    "name": "Water Orton",
    "crs": "WTO"
  },
  {
    "code": "1127",
    "name": "Birmingham New Street",
    "crs": "BHM"
  },
  {
    "code": "1128",
    "name": "Perry Barr",
    "crs": "PRY"
  },
  {
    "code": "1129",
    "name": "Canley",
    "crs": "CNL"
  },
  {
    "code": "1130",
    "name": "Chester Road",
    "crs": "CRD"
  },
  {
    "code": "1132",
    "name": "Gravelly Hill",
    "crs": "GVH"
  },
  {
    "code": "1133",
    "name": "Lea Hall",
    "crs": "LEH"
  },
  {
    "code": "1135",
    "name": "Rugeley Town",
    "crs": "RGT"
  },
  {
    "code": "1138",
    "name": "Wylde Green",
    "crs": "WYL"
  },
  {
    "code": "1141",
    "name": "Bloxwich",
    "crs": "BLX"
  },
  {
    "code": "1143",
    "name": "Coseley",
    "crs": "CSY"
  },
  {
    "code": "1145",
    "name": "Hamstead (Birmingham)",
    "crs": "HSD"
  },
  {
    "code": "1148",
    "name": "Hednesford",
    "crs": "HNF"
  },
  {
    "code": "1149",
    "name": "Sandwell & Dudley",
    "crs": "SAD"
  },
  {
    "code": "1150",
    "name": "Smethwick Rolfe Street",
    "crs": "SMR"
  },
  {
    "code": "1159",
    "name": "Tipton",
    "crs": "TIP"
  },
  {
    "code": "1165",
    "name": "Bedworth",
    "crs": "BEH"
  },
  {
    "code": "1176",
    "name": "Blake Street",
    "crs": "BKT"
  },
  {
    "code": "1177",
    "name": "Lichfield City",
    "crs": "LIC"
  },
  {
    "code": "1178",
    "name": "Shenstone",
    "crs": "SEN"
  },
  {
    "code": "1179",
    "name": "Butlers Lane",
    "crs": "BUL"
  },
  {
    "code": "1195",
    "name": "Penkridge",
    "crs": "PKG"
  },
  {
    "code": "1198",
    "name": "Alvechurch",
    "crs": "ALV"
  },
  {
    "code": "1208",
    "name": "Redditch",
    "crs": "RDC"
  },
  {
    "code": "1212",
    "name": "Dudley Port",
    "crs": "DDP"
  },
  {
    "code": "1215",
    "name": "Birmingham International",
    "crs": "BHI"
  },
  {
    "code": "1216",
    "name": "Walsall",
    "crs": "WSL"
  },
  {
    "code": "1218",
    "name": "Wolverhampton",
    "crs": "WVH"
  },
  {
    "code": "1220",
    "name": "Goostrey",
    "crs": "GTR"
  },
  {
    "code": "1221",
    "name": "Holmes Chapel",
    "crs": "HCH"
  },
  {
    "code": "1223",
    "name": "Alsager",
    "crs": "ASG"
  },
  {
    "code": "1227",
    "name": "Congleton",
    "crs": "CNG"
  },
  {
    "code": "1229",
    "name": "Kidsgrove",
    "crs": "KDG"
  },
  {
    "code": "1243",
    "name": "Crewe",
    "crs": "CRE"
  },
  {
    "code": "1247",
    "name": "Nantwich",
    "crs": "NAN"
  },
  {
    "code": "1261",
    "name": "Sandbach",
    "crs": "SDB"
  },
  {
    "code": "1268",
    "name": "Stafford",
    "crs": "STA"
  },
  {
    "code": "1279",
    "name": "Barlaston",
    "crs": "BRT"
  },
  {
    "code": "1279",
    "name": "Barlaston Orchard Place",
    "crs": "BPL"
  },
  {
    "code": "1282",
    "name": "Blythe Bridge",
    "crs": "BYB"
  },
  {
    "code": "1291",
    "name": "Lichfield Trent Valley Hl",
    "crs": "LTV"
  },
  {
    "code": "1291",
    "name": "Lichfield Trent Valley",
    "crs": "LTV"
  },
  {
    "code": "1305",
    "name": "Longport",
    "crs": "LPT"
  },
  {
    "code": "1306",
    "name": "Longton",
    "crs": "LGN"
  },
  {
    "code": "1314",
    "name": "Stoke-on-Trent",
    "crs": "SOT"
  },
  {
    "code": "1316",
    "name": "Stone (Staffs)",
    "crs": "SNE"
  },
  {
    "code": "1322",
    "name": "Tamworth Hl",
    "crs": "TAM"
  },
  {
    "code": "1322",
    "name": "Tamworth",
    "crs": "TAM"
  },
  {
    "code": "1342",
    "name": "Uttoxeter",
    "crs": "UTT"
  },
  {
    "code": "1346",
    "name": "Prees",
    "crs": "PRS"
  },
  {
    "code": "1347",
    "name": "Wem",
    "crs": "WEM"
  },
  {
    "code": "1348",
    "name": "Whitchurch (Shropshire)",
    "crs": "WTC"
  },
  {
    "code": "1350",
    "name": "Wrenbury",
    "crs": "WRE"
  },
  {
    "code": "1351",
    "name": "Yorton",
    "crs": "YRT"
  },
  {
    "code": "1357",
    "name": "Wedgwood Lane",
    "crs": "WER"
  },
  {
    "code": "1357",
    "name": "Wedgwood",
    "crs": "WED"
  },
  {
    "code": "1360",
    "name": "Bletchley",
    "crs": "BLY"
  },
  {
    "code": "1364",
    "name": "Wolverton",
    "crs": "WOL"
  },
  {
    "code": "1372",
    "name": "Cheddington",
    "crs": "CED"
  },
  {
    "code": "1373",
    "name": "Leighton Buzzard",
    "crs": "LBZ"
  },
  {
    "code": "1377",
    "name": "Fenny Stratford",
    "crs": "FEN"
  },
  {
    "code": "1378",
    "name": "Milton Keynes Central",
    "crs": "MKC"
  },
  {
    "code": "1380",
    "name": "Aspley Guise",
    "crs": "APG"
  },
  {
    "code": "1381",
    "name": "Bow Brickhill",
    "crs": "BWB"
  },
  {
    "code": "1384",
    "name": "Kempston Hardwick",
    "crs": "KMH"
  },
  {
    "code": "1386",
    "name": "Stewartby",
    "crs": "SWR"
  },
  {
    "code": "1390",
    "name": "Berkhamsted",
    "crs": "BKM"
  },
  {
    "code": "1391",
    "name": "Hemel Hempstead",
    "crs": "HML"
  },
  {
    "code": "1392",
    "name": "Kings Langley",
    "crs": "KGL"
  },
  {
    "code": "1393",
    "name": "Tring",
    "crs": "TRI"
  },
  {
    "code": "1395",
    "name": "Bushey",
    "crs": "BSH"
  },
  {
    "code": "1397",
    "name": "Harrow & Wealdstone",
    "crs": "HRW"
  },
  {
    "code": "1398",
    "name": "Hatch End",
    "crs": "HTE"
  },
  {
    "code": "1399",
    "name": "Kenton",
    "crs": "KNT"
  },
  {
    "code": "1402",
    "name": "Watford Junction",
    "crs": "WFJ"
  },
  {
    "code": "1403",
    "name": "Watford North",
    "crs": "WFN"
  },
  {
    "code": "1404",
    "name": "Acton Central",
    "crs": "ACC"
  },
  {
    "code": "1409",
    "name": "Gospel Oak",
    "crs": "GPO"
  },
  {
    "code": "1413",
    "name": "Hampstead Heath",
    "crs": "HDH"
  },
  {
    "code": "1415",
    "name": "Kilburn High Road",
    "crs": "KBN"
  },
  {
    "code": "1419",
    "name": "Queens Park (London)",
    "crs": "QPW"
  },
  {
    "code": "1421",
    "name": "West Hampstead",
    "crs": "WHD"
  },
  {
    "code": "1422",
    "name": "North Wembley",
    "crs": "NWB"
  },
  {
    "code": "1423",
    "name": "Wembley Central",
    "crs": "WMB"
  },
  {
    "code": "1429",
    "name": "Dalston Kingsland",
    "crs": "DLK"
  },
  {
    "code": "1430",
    "name": "Apsley",
    "crs": "APS"
  },
  {
    "code": "1434",
    "name": "Headstone Lane",
    "crs": "HDL"
  },
  {
    "code": "1437",
    "name": "Brondesbury",
    "crs": "BSY"
  },
  {
    "code": "1438",
    "name": "Brondesbury Park",
    "crs": "BSP"
  },
  {
    "code": "1439",
    "name": "Caledonian Road & Barnsbur",
    "crs": "CIR"
  },
  {
    "code": "1440",
    "name": "Camden Road",
    "crs": "CMD"
  },
  {
    "code": "1441",
    "name": "Canonbury",
    "crs": "CNN"
  },
  {
    "code": "1442",
    "name": "Carpenders Park",
    "crs": "CPK"
  },
  {
    "code": "1443",
    "name": "Dalston Junction",
    "crs": "DLJ"
  },
  {
    "code": "1444",
    "name": "London Euston",
    "crs": "EUS"
  },
  {
    "code": "1445",
    "name": "Finchley Road & Frognal",
    "crs": "FNY"
  },
  {
    "code": "1447",
    "name": "Kensal Green",
    "crs": "KNL"
  },
  {
    "code": "1448",
    "name": "Kensal Rise",
    "crs": "KNR"
  },
  {
    "code": "1449",
    "name": "Kentish Town West",
    "crs": "KTW"
  },
  {
    "code": "1451",
    "name": "South Hampstead",
    "crs": "SOH"
  },
  {
    "code": "1452",
    "name": "South Acton",
    "crs": "SAT"
  },
  {
    "code": "1453",
    "name": "South Kenton",
    "crs": "SOK"
  },
  {
    "code": "1454",
    "name": "Stonebridge Park",
    "crs": "SBP"
  },
  {
    "code": "1455",
    "name": "Watford High Street",
    "crs": "WFH"
  },
  {
    "code": "1457",
    "name": "Willesden Jn",
    "crs": "WIJ"
  },
  {
    "code": "1457",
    "name": "Willesden Junction",
    "crs": "WIJ"
  },
  {
    "code": "1463",
    "name": "Great Missenden",
    "crs": "GMN"
  },
  {
    "code": "1466",
    "name": "Wendover",
    "crs": "WND"
  },
  {
    "code": "1467",
    "name": "Stoke Mandeville",
    "crs": "SKM"
  },
  {
    "code": "1475",
    "name": "London Marylebone",
    "crs": "MYB"
  },
  {
    "code": "1478",
    "name": "Northolt Park",
    "crs": "NLT"
  },
  {
    "code": "1483",
    "name": "Sudbury & Harrow Road",
    "crs": "SUD"
  },
  {
    "code": "1484",
    "name": "Sudbury Hill Harrow",
    "crs": "SDH"
  },
  {
    "code": "1492",
    "name": "Aylesbury",
    "crs": "AYS"
  },
  {
    "code": "1509",
    "name": "Wembley Stadium",
    "crs": "WCX"
  },
  {
    "code": "1510",
    "name": "Bedford St Johns",
    "crs": "BSJ"
  },
  {
    "code": "1512",
    "name": "Bedford",
    "crs": "BDM"
  },
  {
    "code": "1519",
    "name": "Cricklewood",
    "crs": "CRI"
  },
  {
    "code": "1521",
    "name": "Harlesden",
    "crs": "HDN"
  },
  {
    "code": "1522",
    "name": "Hendon",
    "crs": "HEN"
  },
  {
    "code": "1524",
    "name": "Upper Holloway",
    "crs": "UHL"
  },
  {
    "code": "1525",
    "name": "West Hampstead Thameslink",
    "crs": "WHP"
  },
  {
    "code": "1527",
    "name": "Mill Hill Broadway",
    "crs": "MIL"
  },
  {
    "code": "1532",
    "name": "Flitwick",
    "crs": "FLT"
  },
  {
    "code": "1533",
    "name": "Harlington (Bedfordshire)",
    "crs": "HLN"
  },
  {
    "code": "1534",
    "name": "Leagrave",
    "crs": "LEA"
  },
  {
    "code": "1536",
    "name": "Luton",
    "crs": "LUT"
  },
  {
    "code": "1537",
    "name": "Millbrook (Bedfordshire)",
    "crs": "MLB"
  },
  {
    "code": "1538",
    "name": "Ridgmont",
    "crs": "RID"
  },
  {
    "code": "1539",
    "name": "Woburn Sands",
    "crs": "WOB"
  },
  {
    "code": "1540",
    "name": "London St Pancras Intl",
    "crs": "SPX"
  },
  {
    "code": "1541",
    "name": "Stratfrd Int(Civ",
    "crs": "SDI"
  },
  {
    "code": "1542",
    "name": "Elstree & Borehamwood",
    "crs": "ELS"
  },
  {
    "code": "1543",
    "name": "Harpenden",
    "crs": "HPD"
  },
  {
    "code": "1544",
    "name": "Ebbsfleet Intciv",
    "crs": "EBF"
  },
  {
    "code": "1546",
    "name": "Radlett",
    "crs": "RDT"
  },
  {
    "code": "1548",
    "name": "St Albans City",
    "crs": "SAC"
  },
  {
    "code": "1553",
    "name": "Kentish Town",
    "crs": "KTN"
  },
  {
    "code": "1555",
    "name": "London St Pancras Ll",
    "crs": "STP"
  },
  {
    "code": "1555",
    "name": "London St Pancras",
    "crs": "STP"
  },
  {
    "code": "1559",
    "name": "Garston (Herts)",
    "crs": "GSN"
  },
  {
    "code": "1560",
    "name": "Bricket Wood",
    "crs": "BWO"
  },
  {
    "code": "1561",
    "name": "Park Street",
    "crs": "PKT"
  },
  {
    "code": "1562",
    "name": "St Albans Abbey",
    "crs": "SAA"
  },
  {
    "code": "1563",
    "name": "How Wood (Hertfordshire)",
    "crs": "HWW"
  },
  {
    "code": "1579",
    "name": "Lidlington",
    "crs": "LID"
  },
  {
    "code": "1581",
    "name": "Matlock",
    "crs": "MAT"
  },
  {
    "code": "1582",
    "name": "Matlock Bath",
    "crs": "MTB"
  },
  {
    "code": "1585",
    "name": "Whatstandwell",
    "crs": "WTS"
  },
  {
    "code": "1595",
    "name": "Shirebrook",
    "crs": "SHB"
  },
  {
    "code": "1598",
    "name": "Cardiff Central Bus Stn",
    "crs": "CCB"
  },
  {
    "code": "1624",
    "name": "Attenborough",
    "crs": "ATB"
  },
  {
    "code": "1625",
    "name": "Beeston",
    "crs": "BEE"
  },
  {
    "code": "1655",
    "name": "Kelvindale",
    "crs": "KVD"
  },
  {
    "code": "1658",
    "name": "Burton-on-Trent",
    "crs": "BUT"
  },
  {
    "code": "1659",
    "name": "Canada Water",
    "crs": "ZCW"
  },
  {
    "code": "1663",
    "name": "Pye Corner",
    "crs": "PYE"
  },
  {
    "code": "1678",
    "name": "Ambergate",
    "crs": "AMB"
  },
  {
    "code": "1679",
    "name": "Belper",
    "crs": "BLP"
  },
  {
    "code": "1687",
    "name": "Peartree",
    "crs": "PEA"
  },
  {
    "code": "1691",
    "name": "Duffield",
    "crs": "DFI"
  },
  {
    "code": "1699",
    "name": "Spondon",
    "crs": "SPO"
  },
  {
    "code": "1727",
    "name": "Mansfield",
    "crs": "MFT"
  },
  {
    "code": "1728",
    "name": "Mansfield Woodhouse",
    "crs": "MSW"
  },
  {
    "code": "1734",
    "name": "Howwood (Renfrewshire)",
    "crs": "HOZ"
  },
  {
    "code": "1761",
    "name": "Langley Mill",
    "crs": "LGM"
  },
  {
    "code": "1783",
    "name": "Tutbury & Hatton",
    "crs": "TUT"
  },
  {
    "code": "1805",
    "name": "Alfreton",
    "crs": "ALF"
  },
  {
    "code": "1822",
    "name": "Cromford",
    "crs": "CMF"
  },
  {
    "code": "1823",
    "name": "Derby",
    "crs": "DBY"
  },
  {
    "code": "1826",
    "name": "Nottingham",
    "crs": "NOT"
  },
  {
    "code": "1829",
    "name": "Long Eaton",
    "crs": "LGE"
  },
  {
    "code": "1847",
    "name": "Corby",
    "crs": "COR"
  },
  {
    "code": "1851",
    "name": "Melton Mowbray",
    "crs": "MMO"
  },
  {
    "code": "1857",
    "name": "Kettering",
    "crs": "KET"
  },
  {
    "code": "1861",
    "name": "Sutton Parkway",
    "crs": "SPK"
  },
  {
    "code": "1862",
    "name": "Hucknall",
    "crs": "HKN"
  },
  {
    "code": "1863",
    "name": "Newstead",
    "crs": "NSD"
  },
  {
    "code": "1865",
    "name": "Bulwell",
    "crs": "BLW"
  },
  {
    "code": "1867",
    "name": "Kirkby-In-Ashfield",
    "crs": "KKB"
  },
  {
    "code": "1870",
    "name": "Hinckley",
    "crs": "HNK"
  },
  {
    "code": "1871",
    "name": "Langwith - Whaley Thorns",
    "crs": "LAG"
  },
  {
    "code": "1874",
    "name": "Creswell",
    "crs": "CWD"
  },
  {
    "code": "1881",
    "name": "Narborough",
    "crs": "NBR"
  },
  {
    "code": "1897",
    "name": "Loughborough",
    "crs": "LBO"
  },
  {
    "code": "1900",
    "name": "Syston",
    "crs": "SYS"
  },
  {
    "code": "1901",
    "name": "East Midlands Parkway",
    "crs": "EMD"
  },
  {
    "code": "1902",
    "name": "Sileby",
    "crs": "SIL"
  },
  {
    "code": "1903",
    "name": "Barrow upon Soar",
    "crs": "BWS"
  },
  {
    "code": "1904",
    "name": "Oakham",
    "crs": "OKM"
  },
  {
    "code": "1905",
    "name": "Willington",
    "crs": "WIL"
  },
  {
    "code": "1909",
    "name": "Market Harborough",
    "crs": "MHR"
  },
  {
    "code": "1940",
    "name": "Wellingborough",
    "crs": "WEL"
  },
  {
    "code": "1947",
    "name": "Leicester",
    "crs": "LEI"
  },
  {
    "code": "1949",
    "name": "South Wigston",
    "crs": "SWS"
  },
  {
    "code": "1953",
    "name": "Askam",
    "crs": "ASK"
  },
  {
    "code": "1954",
    "name": "Barrow-in-Furness",
    "crs": "BIF"
  },
  {
    "code": "1957",
    "name": "Dalton",
    "crs": "DLT"
  },
  {
    "code": "1959",
    "name": "Kirkby-in-Furness",
    "crs": "KBF"
  },
  {
    "code": "1962",
    "name": "Roose",
    "crs": "ROO"
  },
  {
    "code": "1963",
    "name": "Arnside",
    "crs": "ARN"
  },
  {
    "code": "1964",
    "name": "Cark & Cartmel",
    "crs": "CAK"
  },
  {
    "code": "1965",
    "name": "Grange-over-Sands",
    "crs": "GOS"
  },
  {
    "code": "1966",
    "name": "Kents Bank",
    "crs": "KBK"
  },
  {
    "code": "1968",
    "name": "Silverdale",
    "crs": "SVR"
  },
  {
    "code": "1975",
    "name": "Burneside (Cumbria)",
    "crs": "BUD"
  },
  {
    "code": "1976",
    "name": "Kendal",
    "crs": "KEN"
  },
  {
    "code": "1977",
    "name": "Staveley",
    "crs": "SVL"
  },
  {
    "code": "1978",
    "name": "Windermere",
    "crs": "WDM"
  },
  {
    "code": "1979",
    "name": "Soton Town Quay",
    "crs": "STQ"
  },
  {
    "code": "1988",
    "name": "Maryport",
    "crs": "MRY"
  },
  {
    "code": "1993",
    "name": "Bootle (Cumbria)",
    "crs": "BOC"
  },
  {
    "code": "1994",
    "name": "Drigg",
    "crs": "DRI"
  },
  {
    "code": "1996",
    "name": "Green Road",
    "crs": "GNR"
  },
  {
    "code": "1997",
    "name": "Millom",
    "crs": "MLM"
  },
  {
    "code": "1999",
    "name": "Ravenglass for Eskdale",
    "crs": "RAV"
  },
  {
    "code": "2000",
    "name": "Silecroft",
    "crs": "SIC"
  },
  {
    "code": "2002",
    "name": "St Bees",
    "crs": "SBS"
  },
  {
    "code": "2003",
    "name": "Seascale",
    "crs": "SSC"
  },
  {
    "code": "2004",
    "name": "Sellafield",
    "crs": "SEL"
  },
  {
    "code": "2010",
    "name": "Ulverston",
    "crs": "ULV"
  },
  {
    "code": "2026",
    "name": "Flimby",
    "crs": "FLM"
  },
  {
    "code": "2027",
    "name": "Harrington",
    "crs": "HRR"
  },
  {
    "code": "2032",
    "name": "Parton",
    "crs": "PRN"
  },
  {
    "code": "2040",
    "name": "Workington",
    "crs": "WKG"
  },
  {
    "code": "2045",
    "name": "Braystones",
    "crs": "BYS"
  },
  {
    "code": "2046",
    "name": "Foxfield",
    "crs": "FOX"
  },
  {
    "code": "2047",
    "name": "Nethertown",
    "crs": "NRT"
  },
  {
    "code": "2048",
    "name": "Whitehaven",
    "crs": "WTH"
  },
  {
    "code": "2049",
    "name": "Corkickle",
    "crs": "CKL"
  },
  {
    "code": "2052",
    "name": "Appleby",
    "crs": "APP"
  },
  {
    "code": "2053",
    "name": "Braintree Freeport",
    "crs": "BTP"
  },
  {
    "code": "2054",
    "name": "Armathwaite",
    "crs": "AWT"
  },
  {
    "code": "2057",
    "name": "Kirkby Stephen",
    "crs": "KSW"
  },
  {
    "code": "2058",
    "name": "Langwathby",
    "crs": "LGW"
  },
  {
    "code": "2059",
    "name": "Lazonby & Kirkoswald",
    "crs": "LZB"
  },
  {
    "code": "2077",
    "name": "Dalston (Cumbria)",
    "crs": "DLS"
  },
  {
    "code": "2080",
    "name": "Euxton Balshaw Lane",
    "crs": "EBA"
  },
  {
    "code": "2090",
    "name": "Oxenholme Lake District",
    "crs": "OXN"
  },
  {
    "code": "2095",
    "name": "Aspatria",
    "crs": "ASP"
  },
  {
    "code": "2098",
    "name": "Wigton",
    "crs": "WGT"
  },
  {
    "code": "2102",
    "name": "Penrith North Lakes",
    "crs": "PNR"
  },
  {
    "code": "2103",
    "name": "Dent",
    "crs": "DNT"
  },
  {
    "code": "2104",
    "name": "Garsdale",
    "crs": "GSD"
  },
  {
    "code": "2105",
    "name": "Horton-In-Ribblesdale",
    "crs": "HIR"
  },
  {
    "code": "2106",
    "name": "Ribblehead",
    "crs": "RHD"
  },
  {
    "code": "2107",
    "name": "Settle",
    "crs": "SET"
  },
  {
    "code": "2118",
    "name": "Carlisle",
    "crs": "CAR"
  },
  {
    "code": "2121",
    "name": "Ellesmere Port",
    "crs": "ELP"
  },
  {
    "code": "2122",
    "name": "Ince & Elton",
    "crs": "INE"
  },
  {
    "code": "2123",
    "name": "Blundellsands & Crosby",
    "crs": "BLN"
  },
  {
    "code": "2124",
    "name": "Kirkby (Merseyside)",
    "crs": "KIR"
  },
  {
    "code": "2125",
    "name": "Aintree",
    "crs": "AIN"
  },
  {
    "code": "2126",
    "name": "Fazakerley",
    "crs": "FAZ"
  },
  {
    "code": "2128",
    "name": "Eastham Rake",
    "crs": "ERA"
  },
  {
    "code": "2131",
    "name": "Rice Lane",
    "crs": "RIL"
  },
  {
    "code": "2133",
    "name": "Waterloo (Merseyside)",
    "crs": "WLO"
  },
  {
    "code": "2136",
    "name": "Bidston",
    "crs": "BID"
  },
  {
    "code": "2138",
    "name": "Heswall",
    "crs": "HSW"
  },
  {
    "code": "2139",
    "name": "Neston",
    "crs": "NES"
  },
  {
    "code": "2141",
    "name": "Upton",
    "crs": "UPT"
  },
  {
    "code": "2145",
    "name": "Birkenhead North",
    "crs": "BKN"
  },
  {
    "code": "2146",
    "name": "Hawarden Bridge",
    "crs": "HWB"
  },
  {
    "code": "2148",
    "name": "Liverpool Lnd Sg",
    "crs": "LVS"
  },
  {
    "code": "2149",
    "name": "Helsby",
    "crs": "HSB"
  },
  {
    "code": "2151",
    "name": "Moreton (Merseyside)",
    "crs": "MRT"
  },
  {
    "code": "2152",
    "name": "New Brighton",
    "crs": "NBN"
  },
  {
    "code": "2154",
    "name": "Wallasey Grove Road",
    "crs": "WLG"
  },
  {
    "code": "2155",
    "name": "Maghull",
    "crs": "MAG"
  },
  {
    "code": "2156",
    "name": "Little Sutton",
    "crs": "LTT"
  },
  {
    "code": "2157",
    "name": "Overpool",
    "crs": "OVE"
  },
  {
    "code": "2158",
    "name": "Mouldsworth",
    "crs": "MLD"
  },
  {
    "code": "2159",
    "name": "Stanlow & Thornton",
    "crs": "SNT"
  },
  {
    "code": "2160",
    "name": "Huyton",
    "crs": "HUY"
  },
  {
    "code": "2161",
    "name": "Whiston",
    "crs": "WHN"
  },
  {
    "code": "2169",
    "name": "Edge Hill",
    "crs": "EDG"
  },
  {
    "code": "2171",
    "name": "Mossley Hill",
    "crs": "MSH"
  },
  {
    "code": "2186",
    "name": "Capenhurst",
    "crs": "CPU"
  },
  {
    "code": "2187",
    "name": "Bache",
    "crs": "BAC"
  },
  {
    "code": "2188",
    "name": "Bebington",
    "crs": "BEB"
  },
  {
    "code": "2189",
    "name": "Rock Ferry",
    "crs": "RFY"
  },
  {
    "code": "2190",
    "name": "Bromborough",
    "crs": "BOM"
  },
  {
    "code": "2191",
    "name": "Bromborough Rake",
    "crs": "BMR"
  },
  {
    "code": "2193",
    "name": "Hooton",
    "crs": "HOO"
  },
  {
    "code": "2194",
    "name": "Hoylake",
    "crs": "HYK"
  },
  {
    "code": "2195",
    "name": "Bootle New Strand",
    "crs": "BNW"
  },
  {
    "code": "2198",
    "name": "Port Sunlight",
    "crs": "PSL"
  },
  {
    "code": "2199",
    "name": "Spital",
    "crs": "SPI"
  },
  {
    "code": "2201",
    "name": "West Kirby",
    "crs": "WKI"
  },
  {
    "code": "2215",
    "name": "Aughton Park",
    "crs": "AUG"
  },
  {
    "code": "2217",
    "name": "Birkenhead Central",
    "crs": "BKC"
  },
  {
    "code": "2218",
    "name": "Green Lane",
    "crs": "GNL"
  },
  {
    "code": "2219",
    "name": "Birkenhead Hamilton Square",
    "crs": "BKQ"
  },
  {
    "code": "2220",
    "name": "Birkenhead Park",
    "crs": "BKP"
  },
  {
    "code": "2222",
    "name": "Bryn",
    "crs": "BYN"
  },
  {
    "code": "2225",
    "name": "Cressington",
    "crs": "CSG"
  },
  {
    "code": "2226",
    "name": "Moorfields",
    "crs": "MRF"
  },
  {
    "code": "2227",
    "name": "Eccleston Park",
    "crs": "ECL"
  },
  {
    "code": "2229",
    "name": "Hall Road",
    "crs": "HLR"
  },
  {
    "code": "2230",
    "name": "Hartford (Cheshire)",
    "crs": "HTF"
  },
  {
    "code": "2231",
    "name": "Hillside",
    "crs": "HIL"
  },
  {
    "code": "2235",
    "name": "Hunts Cross",
    "crs": "HNX"
  },
  {
    "code": "2236",
    "name": "Ince (Manchester)",
    "crs": "INC"
  },
  {
    "code": "2237",
    "name": "Leasowe",
    "crs": "LSW"
  },
  {
    "code": "2238",
    "name": "Bank Hall",
    "crs": "BAH"
  },
  {
    "code": "2239",
    "name": "Bootle Oriel Road",
    "crs": "BOT"
  },
  {
    "code": "2240",
    "name": "Broad Green",
    "crs": "BGE"
  },
  {
    "code": "2242",
    "name": "Liverpool Central",
    "crs": "LVC"
  },
  {
    "code": "2244",
    "name": "Liverpool James Street",
    "crs": "LVJ"
  },
  {
    "code": "2245",
    "name": "Kirkdale",
    "crs": "KKD"
  },
  {
    "code": "2246",
    "name": "Liverpool Lime Street",
    "crs": "LIV"
  },
  {
    "code": "2246",
    "name": "Liverpool Lime Street Ll",
    "crs": "LIV"
  },
  {
    "code": "2247",
    "name": "Orrell Park",
    "crs": "OPK"
  },
  {
    "code": "2248",
    "name": "St Michaels",
    "crs": "STM"
  },
  {
    "code": "2249",
    "name": "Sandhills",
    "crs": "SDL"
  },
  {
    "code": "2250",
    "name": "Seaforth & Litherland",
    "crs": "SFL"
  },
  {
    "code": "2251",
    "name": "Walton (Merseyside)",
    "crs": "WAO"
  },
  {
    "code": "2253",
    "name": "Manor Road",
    "crs": "MNR"
  },
  {
    "code": "2254",
    "name": "Meols",
    "crs": "MEO"
  },
  {
    "code": "2255",
    "name": "Aigburth",
    "crs": "AIG"
  },
  {
    "code": "2257",
    "name": "Newton-le-Willows",
    "crs": "NLW"
  },
  {
    "code": "2258",
    "name": "Old Roan",
    "crs": "ORN"
  },
  {
    "code": "2259",
    "name": "Orrell",
    "crs": "ORR"
  },
  {
    "code": "2261",
    "name": "Roby",
    "crs": "ROB"
  },
  {
    "code": "2262",
    "name": "Southport",
    "crs": "SOP"
  },
  {
    "code": "2264",
    "name": "Thatto Heath",
    "crs": "THH"
  },
  {
    "code": "2265",
    "name": "Wallasey Village",
    "crs": "WLV"
  },
  {
    "code": "2266",
    "name": "West Allerton",
    "crs": "WSA"
  },
  {
    "code": "2269",
    "name": "Winsford",
    "crs": "WSF"
  },
  {
    "code": "2279",
    "name": "Burscough Bridge",
    "crs": "BCB"
  },
  {
    "code": "2280",
    "name": "Burscough Junction",
    "crs": "BCJ"
  },
  {
    "code": "2281",
    "name": "Ormskirk",
    "crs": "OMS"
  },
  {
    "code": "2283",
    "name": "Town Green",
    "crs": "TWN"
  },
  {
    "code": "2284",
    "name": "Frodsham",
    "crs": "FRD"
  },
  {
    "code": "2287",
    "name": "Acton Bridge",
    "crs": "ACB"
  },
  {
    "code": "2291",
    "name": "Runcorn",
    "crs": "RUN"
  },
  {
    "code": "2292",
    "name": "Earlestown",
    "crs": "ERL"
  },
  {
    "code": "2294",
    "name": "Runcorn East",
    "crs": "RUE"
  },
  {
    "code": "2295",
    "name": "Halewood",
    "crs": "HED"
  },
  {
    "code": "2296",
    "name": "Rainhill",
    "crs": "RNH"
  },
  {
    "code": "2301",
    "name": "Glazebrook",
    "crs": "GLZ"
  },
  {
    "code": "2303",
    "name": "Hough Green",
    "crs": "HGN"
  },
  {
    "code": "2304",
    "name": "Birchwood",
    "crs": "BWD"
  },
  {
    "code": "2305",
    "name": "Cuddington",
    "crs": "CUD"
  },
  {
    "code": "2306",
    "name": "Delamere",
    "crs": "DLM"
  },
  {
    "code": "2307",
    "name": "Lostock Gralam",
    "crs": "LTG"
  },
  {
    "code": "2308",
    "name": "Plumley",
    "crs": "PLM"
  },
  {
    "code": "2313",
    "name": "Croston",
    "crs": "CSO"
  },
  {
    "code": "2315",
    "name": "Rufford",
    "crs": "RUF"
  },
  {
    "code": "2325",
    "name": "Greenbank",
    "crs": "GBK"
  },
  {
    "code": "2326",
    "name": "Northwich",
    "crs": "NWI"
  },
  {
    "code": "2335",
    "name": "Garswood",
    "crs": "GSW"
  },
  {
    "code": "2337",
    "name": "Prescot",
    "crs": "PSC"
  },
  {
    "code": "2339",
    "name": "Lea Green",
    "crs": "LEG"
  },
  {
    "code": "2340",
    "name": "St Helens Junction",
    "crs": "SHJ"
  },
  {
    "code": "2341",
    "name": "St Helens Central",
    "crs": "SNH"
  },
  {
    "code": "2350",
    "name": "Ainsdale",
    "crs": "ANS"
  },
  {
    "code": "2351",
    "name": "Bescar Lane",
    "crs": "BES"
  },
  {
    "code": "2352",
    "name": "Birkdale",
    "crs": "BDL"
  },
  {
    "code": "2354",
    "name": "Formby",
    "crs": "FBY"
  },
  {
    "code": "2355",
    "name": "Freshfield",
    "crs": "FRE"
  },
  {
    "code": "2356",
    "name": "Hightown",
    "crs": "HTO"
  },
  {
    "code": "2357",
    "name": "Meols Cop",
    "crs": "MEC"
  },
  {
    "code": "2358",
    "name": "New Lane",
    "crs": "NLN"
  },
  {
    "code": "2363",
    "name": "Wigan North Western",
    "crs": "WGN"
  },
  {
    "code": "2364",
    "name": "Upholland",
    "crs": "UPL"
  },
  {
    "code": "2384",
    "name": "Warrington Bank Quay",
    "crs": "WBQ"
  },
  {
    "code": "2387",
    "name": "Padgate",
    "crs": "PDG"
  },
  {
    "code": "2388",
    "name": "Sankey for Penketh",
    "crs": "SNK"
  },
  {
    "code": "2390",
    "name": "Warrington Central",
    "crs": "WAC"
  },
  {
    "code": "2391",
    "name": "Widnes",
    "crs": "WID"
  },
  {
    "code": "2396",
    "name": "Appley Bridge",
    "crs": "APB"
  },
  {
    "code": "2397",
    "name": "Gathurst",
    "crs": "GST"
  },
  {
    "code": "2398",
    "name": "Hindley",
    "crs": "HIN"
  },
  {
    "code": "2399",
    "name": "Hoscar",
    "crs": "HSC"
  },
  {
    "code": "2402",
    "name": "Parbold",
    "crs": "PBL"
  },
  {
    "code": "2403",
    "name": "Pemberton",
    "crs": "PEM"
  },
  {
    "code": "2404",
    "name": "Rainford",
    "crs": "RNF"
  },
  {
    "code": "2406",
    "name": "Wigan Wallgate",
    "crs": "WGW"
  },
  {
    "code": "2412",
    "name": "Chester",
    "crs": "CTR"
  },
  {
    "code": "2420",
    "name": "Bearley",
    "crs": "BER"
  },
  {
    "code": "2422",
    "name": "Buckley",
    "crs": "BCK"
  },
  {
    "code": "2425",
    "name": "Cefn-y-Bedd",
    "crs": "CYB"
  },
  {
    "code": "2428",
    "name": "Hawarden",
    "crs": "HWD"
  },
  {
    "code": "2432",
    "name": "Hope (Flintshire)",
    "crs": "HPE"
  },
  {
    "code": "2433",
    "name": "Penyffordd",
    "crs": "PNF"
  },
  {
    "code": "2435",
    "name": "Bodorgan",
    "crs": "BOR"
  },
  {
    "code": "2437",
    "name": "Holyhead",
    "crs": "HHD"
  },
  {
    "code": "2439",
    "name": "Ty Croes",
    "crs": "TYC"
  },
  {
    "code": "2440",
    "name": "Valley",
    "crs": "VAL"
  },
  {
    "code": "2444",
    "name": "Roman Bridge",
    "crs": "RMB"
  },
  {
    "code": "2448",
    "name": "Abergele & Pensarn",
    "crs": "AGL"
  },
  {
    "code": "2449",
    "name": "Betws-y-Coed",
    "crs": "BYC"
  },
  {
    "code": "2450",
    "name": "Blaenau Ffestiniog",
    "crs": "BFF"
  },
  {
    "code": "2451",
    "name": "Colwyn Bay",
    "crs": "CWB"
  },
  {
    "code": "2452",
    "name": "Dolwyddelan",
    "crs": "DWD"
  },
  {
    "code": "2454",
    "name": "Glan Conwy",
    "crs": "GCW"
  },
  {
    "code": "2455",
    "name": "North Llanrwst",
    "crs": "NLR"
  },
  {
    "code": "2457",
    "name": "Llanrwst",
    "crs": "LWR"
  },
  {
    "code": "2459",
    "name": "Pont-y-Pant",
    "crs": "PYP"
  },
  {
    "code": "2461",
    "name": "Rhyl",
    "crs": "RHL"
  },
  {
    "code": "2463",
    "name": "Tal-y-Cafn",
    "crs": "TLC"
  },
  {
    "code": "2467",
    "name": "Llanfairpwll",
    "crs": "LPG"
  },
  {
    "code": "2471",
    "name": "Bangor (Gwynedd)",
    "crs": "BNG"
  },
  {
    "code": "2480",
    "name": "Deganwy",
    "crs": "DGY"
  },
  {
    "code": "2484",
    "name": "Llandudno",
    "crs": "LLD"
  },
  {
    "code": "2485",
    "name": "Llandudno Junction",
    "crs": "LLJ"
  },
  {
    "code": "2486",
    "name": "Conwy",
    "crs": "CNW"
  },
  {
    "code": "2488",
    "name": "Llanfairfechan",
    "crs": "LLF"
  },
  {
    "code": "2494",
    "name": "Penmaenmawr",
    "crs": "PMW"
  },
  {
    "code": "2513",
    "name": "Flint",
    "crs": "FLN"
  },
  {
    "code": "2521",
    "name": "Prestatyn",
    "crs": "PRT"
  },
  {
    "code": "2536",
    "name": "Caergwrle",
    "crs": "CGW"
  },
  {
    "code": "2538",
    "name": "Dolgarrog",
    "crs": "DLG"
  },
  {
    "code": "2540",
    "name": "Bordon Camp (Fire Station)",
    "crs": "BDZ"
  },
  {
    "code": "2541",
    "name": "Romsey Bus Station",
    "crs": "REB"
  },
  {
    "code": "2544",
    "name": "Rhosneigr",
    "crs": "RHO"
  },
  {
    "code": "2546",
    "name": "Shotton",
    "crs": "SHT"
  },
  {
    "code": "2549",
    "name": "Burnley Manchester Road",
    "crs": "BYM"
  },
  {
    "code": "2550",
    "name": "Burnley Central",
    "crs": "BNC"
  },
  {
    "code": "2552",
    "name": "Accrington",
    "crs": "ACR"
  },
  {
    "code": "2554",
    "name": "Brierfield",
    "crs": "BRF"
  },
  {
    "code": "2556",
    "name": "Church & Oswaldtwistle",
    "crs": "CTW"
  },
  {
    "code": "2557",
    "name": "Hapton",
    "crs": "HPN"
  },
  {
    "code": "2558",
    "name": "Huncoat",
    "crs": "HCT"
  },
  {
    "code": "2561",
    "name": "Bamber Bridge",
    "crs": "BMB"
  },
  {
    "code": "2562",
    "name": "Colne",
    "crs": "CNE"
  },
  {
    "code": "2565",
    "name": "Nelson",
    "crs": "NEL"
  },
  {
    "code": "2572",
    "name": "Hall-I'-Th'-Wood",
    "crs": "HID"
  },
  {
    "code": "2573",
    "name": "Cherry Tree",
    "crs": "CYT"
  },
  {
    "code": "2574",
    "name": "Clitheroe",
    "crs": "CLH"
  },
  {
    "code": "2576",
    "name": "Darwen",
    "crs": "DWN"
  },
  {
    "code": "2580",
    "name": "Rishton",
    "crs": "RIS"
  },
  {
    "code": "2584",
    "name": "Atherton",
    "crs": "ATN"
  },
  {
    "code": "2585",
    "name": "Hag Fold",
    "crs": "HGF"
  },
  {
    "code": "2598",
    "name": "Lostock",
    "crs": "LOT"
  },
  {
    "code": "2599",
    "name": "Bolton",
    "crs": "BON"
  },
  {
    "code": "2603",
    "name": "Brinnington",
    "crs": "BNT"
  },
  {
    "code": "2604",
    "name": "Hattersley",
    "crs": "HTY"
  },
  {
    "code": "2605",
    "name": "Kearsley",
    "crs": "KSL"
  },
  {
    "code": "2606",
    "name": "Moses Gate",
    "crs": "MSS"
  },
  {
    "code": "2612",
    "name": "Walkden",
    "crs": "WKD"
  },
  {
    "code": "2619",
    "name": "Westhoughton",
    "crs": "WHG"
  },
  {
    "code": "2640",
    "name": "Carnforth",
    "crs": "CNF"
  },
  {
    "code": "2641",
    "name": "Adlington (Lancashire)",
    "crs": "ADL"
  },
  {
    "code": "2653",
    "name": "Clapham (North Yorkshire)",
    "crs": "CPY"
  },
  {
    "code": "2654",
    "name": "Gargrave",
    "crs": "GGV"
  },
  {
    "code": "2655",
    "name": "Giggleswick",
    "crs": "GIG"
  },
  {
    "code": "2656",
    "name": "Hellifield",
    "crs": "HLD"
  },
  {
    "code": "2657",
    "name": "Long Preston",
    "crs": "LPR"
  },
  {
    "code": "2660",
    "name": "Smithy Bridge",
    "crs": "SMB"
  },
  {
    "code": "2661",
    "name": "Littleborough",
    "crs": "LTL"
  },
  {
    "code": "2662",
    "name": "Ansdell & Fairhaven",
    "crs": "AFV"
  },
  {
    "code": "2665",
    "name": "Walsden",
    "crs": "WDN"
  },
  {
    "code": "2666",
    "name": "Squires Gate",
    "crs": "SQU"
  },
  {
    "code": "2668",
    "name": "Kirkham & Wesham",
    "crs": "KKM"
  },
  {
    "code": "2669",
    "name": "Layton (Lancs)",
    "crs": "LAY"
  },
  {
    "code": "2670",
    "name": "Lytham",
    "crs": "LTM"
  },
  {
    "code": "2671",
    "name": "Poulton-le-Fylde",
    "crs": "PFY"
  },
  {
    "code": "2672",
    "name": "St Annes-on-the-Sea",
    "crs": "SAS"
  },
  {
    "code": "2673",
    "name": "Salwick",
    "crs": "SLW"
  },
  {
    "code": "2675",
    "name": "Moss Side",
    "crs": "MOS"
  },
  {
    "code": "2676",
    "name": "Bentham",
    "crs": "BEN"
  },
  {
    "code": "2677",
    "name": "Todmorden",
    "crs": "TOD"
  },
  {
    "code": "2681",
    "name": "Wennington",
    "crs": "WNN"
  },
  {
    "code": "2685",
    "name": "Lancaster",
    "crs": "LAN"
  },
  {
    "code": "2689",
    "name": "Lostock Hall",
    "crs": "LOH"
  },
  {
    "code": "2690",
    "name": "Bare Lane",
    "crs": "BAR"
  },
  {
    "code": "2691",
    "name": "Heysham Port",
    "crs": "HHB"
  },
  {
    "code": "2695",
    "name": "Morecambe",
    "crs": "MCM"
  },
  {
    "code": "2697",
    "name": "Bromley Cross",
    "crs": "BMC"
  },
  {
    "code": "2710",
    "name": "Leyland",
    "crs": "LEY"
  },
  {
    "code": "2722",
    "name": "Rose Grove",
    "crs": "RSG"
  },
  {
    "code": "2728",
    "name": "Skipton",
    "crs": "SKI"
  },
  {
    "code": "2732",
    "name": "Blackrod",
    "crs": "BLK"
  },
  {
    "code": "2734",
    "name": "Ramsgreave & Wilpshire",
    "crs": "RGW"
  },
  {
    "code": "2735",
    "name": "Langho",
    "crs": "LHO"
  },
  {
    "code": "2736",
    "name": "Whalley",
    "crs": "WHE"
  },
  {
    "code": "2737",
    "name": "Blackburn",
    "crs": "BBN"
  },
  {
    "code": "2738",
    "name": "Blackpool Pleasure Beach",
    "crs": "BPB"
  },
  {
    "code": "2739",
    "name": "Blackpool North",
    "crs": "BPN"
  },
  {
    "code": "2740",
    "name": "Blackpool South",
    "crs": "BPS"
  },
  {
    "code": "2743",
    "name": "Burnley Barracks",
    "crs": "BUB"
  },
  {
    "code": "2745",
    "name": "Chorley",
    "crs": "CRL"
  },
  {
    "code": "2747",
    "name": "Entwistle",
    "crs": "ENT"
  },
  {
    "code": "2750",
    "name": "Mill Hill (Lancashire)",
    "crs": "MLH"
  },
  {
    "code": "2752",
    "name": "Pleasington",
    "crs": "PLS"
  },
  {
    "code": "2753",
    "name": "Preston",
    "crs": "PRE"
  },
  {
    "code": "2760",
    "name": "Alderley Edge",
    "crs": "ALD"
  },
  {
    "code": "2762",
    "name": "Chapel-en-le-Frith",
    "crs": "CEF"
  },
  {
    "code": "2764",
    "name": "Chelford",
    "crs": "CEL"
  },
  {
    "code": "2765",
    "name": "Disley",
    "crs": "DSL"
  },
  {
    "code": "2766",
    "name": "Dove Holes",
    "crs": "DVH"
  },
  {
    "code": "2767",
    "name": "Handforth",
    "crs": "HTH"
  },
  {
    "code": "2768",
    "name": "Hazel Grove",
    "crs": "HAZ"
  },
  {
    "code": "2769",
    "name": "New Mills Newtown",
    "crs": "NMN"
  },
  {
    "code": "2770",
    "name": "Davenport",
    "crs": "DVN"
  },
  {
    "code": "2771",
    "name": "Stockport",
    "crs": "SPT"
  },
  {
    "code": "2772",
    "name": "Whaley Bridge",
    "crs": "WBR"
  },
  {
    "code": "2773",
    "name": "Woodsmoor",
    "crs": "WSR"
  },
  {
    "code": "2774",
    "name": "Wilmslow",
    "crs": "WML"
  },
  {
    "code": "2777",
    "name": "Daisy Hill",
    "crs": "DSY"
  },
  {
    "code": "2779",
    "name": "Bredbury",
    "crs": "BDY"
  },
  {
    "code": "2780",
    "name": "Fairfield",
    "crs": "FRF"
  },
  {
    "code": "2785",
    "name": "Belle Vue",
    "crs": "BLV"
  },
  {
    "code": "2786",
    "name": "Flowery Field",
    "crs": "FLF"
  },
  {
    "code": "2789",
    "name": "Newton for Hyde",
    "crs": "NWN"
  },
  {
    "code": "2790",
    "name": "Ashton-under-Lyne",
    "crs": "AHN"
  },
  {
    "code": "2794",
    "name": "Salford Crescent",
    "crs": "SLD"
  },
  {
    "code": "2795",
    "name": "Clifton (Manchester)",
    "crs": "CLI"
  },
  {
    "code": "2798",
    "name": "Salford Central",
    "crs": "SFD"
  },
  {
    "code": "2799",
    "name": "Moorside",
    "crs": "MSD"
  },
  {
    "code": "2800",
    "name": "Swinton (Manchester)",
    "crs": "SNN"
  },
  {
    "code": "2806",
    "name": "Altrincham",
    "crs": "ALT"
  },
  {
    "code": "2811",
    "name": "Farnworth",
    "crs": "FNW"
  },
  {
    "code": "2817",
    "name": "Irlam",
    "crs": "IRL"
  },
  {
    "code": "2820",
    "name": "Bamford",
    "crs": "BAM"
  },
  {
    "code": "2823",
    "name": "Chinley",
    "crs": "CLY"
  },
  {
    "code": "2824",
    "name": "Edale",
    "crs": "EDL"
  },
  {
    "code": "2825",
    "name": "Grindleford",
    "crs": "GRN"
  },
  {
    "code": "2826",
    "name": "Hathersage",
    "crs": "HSG"
  },
  {
    "code": "2828",
    "name": "Hope (Derbyshire)",
    "crs": "HOP"
  },
  {
    "code": "2829",
    "name": "Hyde Central",
    "crs": "HYC"
  },
  {
    "code": "2830",
    "name": "Marple",
    "crs": "MPL"
  },
  {
    "code": "2833",
    "name": "Romiley",
    "crs": "RML"
  },
  {
    "code": "2834",
    "name": "Strines",
    "crs": "SRN"
  },
  {
    "code": "2835",
    "name": "Woodley",
    "crs": "WLY"
  },
  {
    "code": "2845",
    "name": "Hale",
    "crs": "HAL"
  },
  {
    "code": "2848",
    "name": "Knutsford",
    "crs": "KNF"
  },
  {
    "code": "2849",
    "name": "Mobberley",
    "crs": "MOB"
  },
  {
    "code": "2850",
    "name": "Ashley",
    "crs": "ASY"
  },
  {
    "code": "2855",
    "name": "Denton",
    "crs": "DTN"
  },
  {
    "code": "2857",
    "name": "Reddish South",
    "crs": "RDS"
  },
  {
    "code": "2860",
    "name": "Heald Green",
    "crs": "HDG"
  },
  {
    "code": "2861",
    "name": "Heaton Chapel",
    "crs": "HTC"
  },
  {
    "code": "2862",
    "name": "Levenshulme",
    "crs": "LVM"
  },
  {
    "code": "2867",
    "name": "Mauldeth Road",
    "crs": "MAU"
  },
  {
    "code": "2868",
    "name": "Styal",
    "crs": "SYA"
  },
  {
    "code": "2870",
    "name": "Cheadle Hulme",
    "crs": "CHU"
  },
  {
    "code": "2871",
    "name": "Macclesfield",
    "crs": "MAC"
  },
  {
    "code": "2873",
    "name": "Rose Hill Marple",
    "crs": "RSH"
  },
  {
    "code": "2874",
    "name": "Poynton",
    "crs": "PYT"
  },
  {
    "code": "2875",
    "name": "Prestbury",
    "crs": "PRB"
  },
  {
    "code": "2892",
    "name": "Broadbottom",
    "crs": "BDB"
  },
  {
    "code": "2893",
    "name": "Dinting",
    "crs": "DTG"
  },
  {
    "code": "2895",
    "name": "Glossop",
    "crs": "GLO"
  },
  {
    "code": "2896",
    "name": "Hadfield",
    "crs": "HDF"
  },
  {
    "code": "2900",
    "name": "Greenfield",
    "crs": "GNF"
  },
  {
    "code": "2903",
    "name": "Mossley (Manchester)",
    "crs": "MSL"
  },
  {
    "code": "2916",
    "name": "Patricroft",
    "crs": "PAT"
  },
  {
    "code": "2919",
    "name": "Castleton (Manchester)",
    "crs": "CAS"
  },
  {
    "code": "2920",
    "name": "Mills Hill (Manchester)",
    "crs": "MIH"
  },
  {
    "code": "2924",
    "name": "Rochdale",
    "crs": "RCD"
  },
  {
    "code": "2935",
    "name": "Flixton",
    "crs": "FLI"
  },
  {
    "code": "2937",
    "name": "Humphrey Park",
    "crs": "HUP"
  },
  {
    "code": "2938",
    "name": "Urmston",
    "crs": "URM"
  },
  {
    "code": "2939",
    "name": "Adlington (Cheshire)",
    "crs": "ADC"
  },
  {
    "code": "2940",
    "name": "Navigation Road",
    "crs": "NVR"
  },
  {
    "code": "2941",
    "name": "Ashburys",
    "crs": "ABY"
  },
  {
    "code": "2944",
    "name": "Bramhall",
    "crs": "BML"
  },
  {
    "code": "2945",
    "name": "Burnage",
    "crs": "BNA"
  },
  {
    "code": "2946",
    "name": "Buxton",
    "crs": "BUX"
  },
  {
    "code": "2947",
    "name": "Chassen Road",
    "crs": "CSR"
  },
  {
    "code": "2948",
    "name": "Godley",
    "crs": "GDL"
  },
  {
    "code": "2949",
    "name": "East Didsbury",
    "crs": "EDY"
  },
  {
    "code": "2950",
    "name": "Eccles",
    "crs": "ECC"
  },
  {
    "code": "2952",
    "name": "Furness Vale",
    "crs": "FNV"
  },
  {
    "code": "2953",
    "name": "Gatley",
    "crs": "GTY"
  },
  {
    "code": "2955",
    "name": "Guide Bridge",
    "crs": "GUI"
  },
  {
    "code": "2959",
    "name": "Hyde North",
    "crs": "HYT"
  },
  {
    "code": "2960",
    "name": "Ardwick",
    "crs": "ADK"
  },
  {
    "code": "2961",
    "name": "Manchester Airport",
    "crs": "MIA"
  },
  {
    "code": "2962",
    "name": "Gorton",
    "crs": "GTO"
  },
  {
    "code": "2963",
    "name": "Deansgate",
    "crs": "DGT"
  },
  {
    "code": "2966",
    "name": "Manchester Oxford Road",
    "crs": "MCO"
  },
  {
    "code": "2968",
    "name": "Manchester Piccadilly",
    "crs": "MAN"
  },
  {
    "code": "2969",
    "name": "Trafford Park",
    "crs": "TRA"
  },
  {
    "code": "2970",
    "name": "Manchester Victoria",
    "crs": "MCV"
  },
  {
    "code": "2971",
    "name": "Middlewood",
    "crs": "MDL"
  },
  {
    "code": "2973",
    "name": "Moston",
    "crs": "MSO"
  },
  {
    "code": "2974",
    "name": "New Mills Central",
    "crs": "NMC"
  },
  {
    "code": "2977",
    "name": "Ryder Brow",
    "crs": "RRB"
  },
  {
    "code": "2979",
    "name": "Reddish North",
    "crs": "RDN"
  },
  {
    "code": "2983",
    "name": "Stalybridge",
    "crs": "SYB"
  },
  {
    "code": "2985",
    "name": "Timperley",
    "crs": "TIM"
  },
  {
    "code": "2996",
    "name": "Manchester United Football",
    "crs": "MUF"
  },
  {
    "code": "3000",
    "name": "Acton Main Line",
    "crs": "AML"
  },
  {
    "code": "3003",
    "name": "Ascott-under-Wychwood",
    "crs": "AUW"
  },
  {
    "code": "3004",
    "name": "Charlbury",
    "crs": "CBY"
  },
  {
    "code": "3005",
    "name": "Combe (Oxon)",
    "crs": "CME"
  },
  {
    "code": "3007",
    "name": "Hanborough",
    "crs": "HND"
  },
  {
    "code": "3008",
    "name": "Kingham",
    "crs": "KGM"
  },
  {
    "code": "3009",
    "name": "Shipton",
    "crs": "SIP"
  },
  {
    "code": "3012",
    "name": "Finstock",
    "crs": "FIN"
  },
  {
    "code": "3018",
    "name": "Bourne End",
    "crs": "BNE"
  },
  {
    "code": "3019",
    "name": "Cookham",
    "crs": "COO"
  },
  {
    "code": "3021",
    "name": "Marlow",
    "crs": "MLW"
  },
  {
    "code": "3030",
    "name": "Didcot Parkway",
    "crs": "DID"
  },
  {
    "code": "3031",
    "name": "Cholsey",
    "crs": "CHO"
  },
  {
    "code": "3033",
    "name": "Goring & Streatley",
    "crs": "GOR"
  },
  {
    "code": "3036",
    "name": "Pangbourne",
    "crs": "PAN"
  },
  {
    "code": "3047",
    "name": "Beaconsfield",
    "crs": "BCF"
  },
  {
    "code": "3048",
    "name": "Bicester North",
    "crs": "BCS"
  },
  {
    "code": "3051",
    "name": "Gerrards Cross",
    "crs": "GER"
  },
  {
    "code": "3052",
    "name": "Denham",
    "crs": "DNM"
  },
  {
    "code": "3053",
    "name": "Haddenham & Thame Parkway",
    "crs": "HDM"
  },
  {
    "code": "3054",
    "name": "High Wycombe",
    "crs": "HWY"
  },
  {
    "code": "3055",
    "name": "Princes Risborough",
    "crs": "PRR"
  },
  {
    "code": "3056",
    "name": "Saunderton",
    "crs": "SDR"
  },
  {
    "code": "3057",
    "name": "South Ruislip",
    "crs": "SRU"
  },
  {
    "code": "3059",
    "name": "West Ruislip",
    "crs": "WRU"
  },
  {
    "code": "3060",
    "name": "Denham Golf Club",
    "crs": "DGC"
  },
  {
    "code": "3061",
    "name": "Seer Green & Jordans",
    "crs": "SRG"
  },
  {
    "code": "3062",
    "name": "Pewsey",
    "crs": "PEW"
  },
  {
    "code": "3066",
    "name": "Little Kimble",
    "crs": "LTK"
  },
  {
    "code": "3067",
    "name": "Monks Risborough",
    "crs": "MRS"
  },
  {
    "code": "3070",
    "name": "Bedwyn",
    "crs": "BDW"
  },
  {
    "code": "3071",
    "name": "Newbury Racecourse",
    "crs": "NRC"
  },
  {
    "code": "3072",
    "name": "Hungerford",
    "crs": "HGD"
  },
  {
    "code": "3073",
    "name": "Kintbury",
    "crs": "KIT"
  },
  {
    "code": "3074",
    "name": "Newbury",
    "crs": "NBY"
  },
  {
    "code": "3087",
    "name": "London Paddington Crossrl",
    "crs": "PAD"
  },
  {
    "code": "3087",
    "name": "London Paddington",
    "crs": "PAD"
  },
  {
    "code": "3092",
    "name": "Kensington Olympia",
    "crs": "KPA"
  },
  {
    "code": "3098",
    "name": "Castle Bar Park",
    "crs": "CBP"
  },
  {
    "code": "3099",
    "name": "Drayton Green",
    "crs": "DRG"
  },
  {
    "code": "3104",
    "name": "Bicester Village",
    "crs": "BIT"
  },
  {
    "code": "3107",
    "name": "Culham",
    "crs": "CUM"
  },
  {
    "code": "3109",
    "name": "Appleford",
    "crs": "APF"
  },
  {
    "code": "3110",
    "name": "Islip",
    "crs": "ISP"
  },
  {
    "code": "3115",
    "name": "Oxford",
    "crs": "OXF"
  },
  {
    "code": "3118",
    "name": "Radley",
    "crs": "RAD"
  },
  {
    "code": "3121",
    "name": "Oxford Parkway",
    "crs": "OXP"
  },
  {
    "code": "3136",
    "name": "Greenford",
    "crs": "GFD"
  },
  {
    "code": "3138",
    "name": "South Greenford",
    "crs": "SGN"
  },
  {
    "code": "3144",
    "name": "Furze Platt",
    "crs": "FZP"
  },
  {
    "code": "3145",
    "name": "Aldermaston",
    "crs": "AMT"
  },
  {
    "code": "3146",
    "name": "Henley-on-Thames",
    "crs": "HOT"
  },
  {
    "code": "3147",
    "name": "Maidenhead",
    "crs": "MAI"
  },
  {
    "code": "3149",
    "name": "Reading 4/5/6",
    "crs": "RDG"
  },
  {
    "code": "3149",
    "name": "Reading",
    "crs": "RDG"
  },
  {
    "code": "3150",
    "name": "Shiplake",
    "crs": "SHI"
  },
  {
    "code": "3151",
    "name": "Taplow",
    "crs": "TAP"
  },
  {
    "code": "3152",
    "name": "Thatcham",
    "crs": "THA"
  },
  {
    "code": "3153",
    "name": "Theale",
    "crs": "THE"
  },
  {
    "code": "3154",
    "name": "Tilehurst",
    "crs": "TLH"
  },
  {
    "code": "3155",
    "name": "Twyford",
    "crs": "TWY"
  },
  {
    "code": "3158",
    "name": "Wargrave",
    "crs": "WGV"
  },
  {
    "code": "3159",
    "name": "Midgham",
    "crs": "MDG"
  },
  {
    "code": "3160",
    "name": "Reading West",
    "crs": "RDW"
  },
  {
    "code": "3170",
    "name": "Iver",
    "crs": "IVR"
  },
  {
    "code": "3171",
    "name": "Langley (Berkshire)",
    "crs": "LNY"
  },
  {
    "code": "3172",
    "name": "Slough",
    "crs": "SLO"
  },
  {
    "code": "3174",
    "name": "West Drayton",
    "crs": "WDT"
  },
  {
    "code": "3175",
    "name": "Windsor & Eton Central",
    "crs": "WNC"
  },
  {
    "code": "3176",
    "name": "Burnham (Bucks)",
    "crs": "BNM"
  },
  {
    "code": "3179",
    "name": "Heathrow T2 Bus",
    "crs": "HWA"
  },
  {
    "code": "3179",
    "name": "Heathrow Terminal 2 F",
    "crs": "HWA"
  },
  {
    "code": "3180",
    "name": "Heathrow T3 Bus",
    "crs": "HWE"
  },
  {
    "code": "3180",
    "name": "Heathrow Terminal 3 F",
    "crs": "HWE"
  },
  {
    "code": "3182",
    "name": "Heathrow T4 Bus",
    "crs": "HWF"
  },
  {
    "code": "3182",
    "name": "Heathrow Terminal 4 Buses",
    "crs": "HWF"
  },
  {
    "code": "3182",
    "name": "Heathrow Terminal 4 F",
    "crs": "HWF"
  },
  {
    "code": "3186",
    "name": "Hayes & Harlington",
    "crs": "HAY"
  },
  {
    "code": "3187",
    "name": "Southall",
    "crs": "STL"
  },
  {
    "code": "3188",
    "name": "West Ealing",
    "crs": "WEA"
  },
  {
    "code": "3190",
    "name": "Ealing Broadway",
    "crs": "EAL"
  },
  {
    "code": "3190",
    "name": "Ealing Common",
    "crs": "EAL"
  },
  {
    "code": "3191",
    "name": "Hanwell",
    "crs": "HAN"
  },
  {
    "code": "3194",
    "name": "Heyford",
    "crs": "HYD"
  },
  {
    "code": "3195",
    "name": "Tackley",
    "crs": "TAC"
  },
  {
    "code": "3200",
    "name": "Avonmouth",
    "crs": "AVN"
  },
  {
    "code": "3202",
    "name": "Clifton Down",
    "crs": "CFN"
  },
  {
    "code": "3203",
    "name": "Montpelier",
    "crs": "MTP"
  },
  {
    "code": "3205",
    "name": "Severn Beach",
    "crs": "SVB"
  },
  {
    "code": "3206",
    "name": "Shirehampton",
    "crs": "SHH"
  },
  {
    "code": "3213",
    "name": "Patchway",
    "crs": "PWY"
  },
  {
    "code": "3214",
    "name": "Pilning",
    "crs": "PIL"
  },
  {
    "code": "3219",
    "name": "Oldfield Park",
    "crs": "OLF"
  },
  {
    "code": "3225",
    "name": "Lawrence Hill",
    "crs": "LWH"
  },
  {
    "code": "3230",
    "name": "Bristol Parkway",
    "crs": "BPW"
  },
  {
    "code": "3231",
    "name": "Bristol Temple Meads",
    "crs": "BRI"
  },
  {
    "code": "3234",
    "name": "Heathrow T5 Bus",
    "crs": "HWX"
  },
  {
    "code": "3235",
    "name": "Filton Abbey Wood",
    "crs": "FIT"
  },
  {
    "code": "3237",
    "name": "Keynsham",
    "crs": "KYN"
  },
  {
    "code": "3238",
    "name": "Cam & Dursley",
    "crs": "CDU"
  },
  {
    "code": "3245",
    "name": "Bedminster",
    "crs": "BMT"
  },
  {
    "code": "3246",
    "name": "Parson Street",
    "crs": "PSN"
  },
  {
    "code": "3247",
    "name": "Redland",
    "crs": "RDA"
  },
  {
    "code": "3250",
    "name": "Stapleton Road",
    "crs": "SRD"
  },
  {
    "code": "3252",
    "name": "St Andrews Road",
    "crs": "SAR"
  },
  {
    "code": "3254",
    "name": "Sea Mills",
    "crs": "SML"
  },
  {
    "code": "3265",
    "name": "Avoncliff",
    "crs": "AVF"
  },
  {
    "code": "3267",
    "name": "Chippenham",
    "crs": "CPM"
  },
  {
    "code": "3271",
    "name": "Bath Spa",
    "crs": "BTH"
  },
  {
    "code": "3314",
    "name": "Highbridge & Burnham",
    "crs": "HIG"
  },
  {
    "code": "3325",
    "name": "Kemble",
    "crs": "KEM"
  },
  {
    "code": "3333",
    "name": "Swindon (Wilts)",
    "crs": "SWI"
  },
  {
    "code": "3341",
    "name": "Bradford-on-Avon",
    "crs": "BOA"
  },
  {
    "code": "3344",
    "name": "Freshford",
    "crs": "FFD"
  },
  {
    "code": "3346",
    "name": "Melksham",
    "crs": "MKM"
  },
  {
    "code": "3348",
    "name": "Trowbridge",
    "crs": "TRO"
  },
  {
    "code": "3380",
    "name": "Yate",
    "crs": "YAE"
  },
  {
    "code": "3388",
    "name": "Weston Milton",
    "crs": "WNM"
  },
  {
    "code": "3389",
    "name": "Nailsea & Backwell",
    "crs": "NLS"
  },
  {
    "code": "3390",
    "name": "Worle",
    "crs": "WOR"
  },
  {
    "code": "3391",
    "name": "Weston-super-Mare",
    "crs": "WSM"
  },
  {
    "code": "3392",
    "name": "Yatton",
    "crs": "YAT"
  },
  {
    "code": "3408",
    "name": "Dawlish",
    "crs": "DWL"
  },
  {
    "code": "3409",
    "name": "Dawlish Warren",
    "crs": "DWW"
  },
  {
    "code": "3410",
    "name": "Exeter St Davids",
    "crs": "EXD"
  },
  {
    "code": "3413",
    "name": "Starcross",
    "crs": "SCS"
  },
  {
    "code": "3414",
    "name": "Exeter St Thomas",
    "crs": "EXT"
  },
  {
    "code": "3422",
    "name": "Polsloe Bridge",
    "crs": "POL"
  },
  {
    "code": "3426",
    "name": "Newton Abbot",
    "crs": "NTA"
  },
  {
    "code": "3427",
    "name": "Paignton",
    "crs": "PGN"
  },
  {
    "code": "3430",
    "name": "Teignmouth",
    "crs": "TGM"
  },
  {
    "code": "3432",
    "name": "Torre",
    "crs": "TRR"
  },
  {
    "code": "3434",
    "name": "Torquay",
    "crs": "TQY"
  },
  {
    "code": "3446",
    "name": "Bishops Lydeard Ws Rwy",
    "crs": "BIB"
  },
  {
    "code": "3449",
    "name": "Bridgwater",
    "crs": "BWT"
  },
  {
    "code": "3471",
    "name": "Taunton",
    "crs": "TAU"
  },
  {
    "code": "3474",
    "name": "Tiverton Parkway",
    "crs": "TVP"
  },
  {
    "code": "3498",
    "name": "Lelant Saltings",
    "crs": "LTS"
  },
  {
    "code": "3499",
    "name": "Penmere",
    "crs": "PNM"
  },
  {
    "code": "3501",
    "name": "Bodmin Parkway",
    "crs": "BOD"
  },
  {
    "code": "3502",
    "name": "Bugle",
    "crs": "BGL"
  },
  {
    "code": "3504",
    "name": "Camborne",
    "crs": "CBN"
  },
  {
    "code": "3508",
    "name": "Falmouth Docks",
    "crs": "FAL"
  },
  {
    "code": "3513",
    "name": "Hayle",
    "crs": "HYL"
  },
  {
    "code": "3517",
    "name": "Lostwithiel",
    "crs": "LOS"
  },
  {
    "code": "3518",
    "name": "Luxulyan",
    "crs": "LUX"
  },
  {
    "code": "3523",
    "name": "Newquay",
    "crs": "NQY"
  },
  {
    "code": "3524",
    "name": "Par",
    "crs": "PAR"
  },
  {
    "code": "3525",
    "name": "Penryn",
    "crs": "PYN"
  },
  {
    "code": "3526",
    "name": "Penzance",
    "crs": "PNZ"
  },
  {
    "code": "3528",
    "name": "Perranwell",
    "crs": "PRW"
  },
  {
    "code": "3530",
    "name": "Redruth",
    "crs": "RED"
  },
  {
    "code": "3531",
    "name": "Quintrell Downs",
    "crs": "QUI"
  },
  {
    "code": "3532",
    "name": "Roche",
    "crs": "ROC"
  },
  {
    "code": "3534",
    "name": "St Austell",
    "crs": "SAU"
  },
  {
    "code": "3536",
    "name": "St Columb Road",
    "crs": "SCR"
  },
  {
    "code": "3537",
    "name": "St Erth",
    "crs": "SER"
  },
  {
    "code": "3538",
    "name": "St Ives (Cornwall)",
    "crs": "SIV"
  },
  {
    "code": "3539",
    "name": "Lelant",
    "crs": "LEL"
  },
  {
    "code": "3540",
    "name": "Truro",
    "crs": "TRU"
  },
  {
    "code": "3542",
    "name": "Carbis Bay",
    "crs": "CBB"
  },
  {
    "code": "3549",
    "name": "Bere Alston",
    "crs": "BAS"
  },
  {
    "code": "3550",
    "name": "Bere Ferrers",
    "crs": "BFE"
  },
  {
    "code": "3555",
    "name": "Ivybridge",
    "crs": "IVY"
  },
  {
    "code": "3558",
    "name": "Totnes",
    "crs": "TOT"
  },
  {
    "code": "3562",
    "name": "Calstock",
    "crs": "CSK"
  },
  {
    "code": "3563",
    "name": "Gunnislake",
    "crs": "GSL"
  },
  {
    "code": "3568",
    "name": "Causeland",
    "crs": "CAU"
  },
  {
    "code": "3570",
    "name": "Coombe Junction Halt",
    "crs": "COE"
  },
  {
    "code": "3571",
    "name": "Keyham",
    "crs": "KEY"
  },
  {
    "code": "3572",
    "name": "St Keyne Wishing Well Halt",
    "crs": "SKN"
  },
  {
    "code": "3573",
    "name": "Liskeard",
    "crs": "LSK"
  },
  {
    "code": "3574",
    "name": "Looe",
    "crs": "LOO"
  },
  {
    "code": "3576",
    "name": "Menheniot",
    "crs": "MEN"
  },
  {
    "code": "3579",
    "name": "Devonport",
    "crs": "DPT"
  },
  {
    "code": "3580",
    "name": "Plymouth",
    "crs": "PLY"
  },
  {
    "code": "3584",
    "name": "Sandplace",
    "crs": "SDP"
  },
  {
    "code": "3586",
    "name": "St Germans",
    "crs": "SGM"
  },
  {
    "code": "3587",
    "name": "Saltash",
    "crs": "STS"
  },
  {
    "code": "3588",
    "name": "Dockyard (Devonport)",
    "crs": "DOC"
  },
  {
    "code": "3590",
    "name": "St Budeaux Ferry Road",
    "crs": "SBF"
  },
  {
    "code": "3591",
    "name": "Falmouth Town",
    "crs": "FMT"
  },
  {
    "code": "3592",
    "name": "St Budeaux Victoria Road",
    "crs": "SBV"
  },
  {
    "code": "3602",
    "name": "Abergavenny",
    "crs": "AGV"
  },
  {
    "code": "3607",
    "name": "Hereford",
    "crs": "HFD"
  },
  {
    "code": "3620",
    "name": "Leominster",
    "crs": "LEO"
  },
  {
    "code": "3623",
    "name": "Brunswick",
    "crs": "BRW"
  },
  {
    "code": "3624",
    "name": "Conway Park",
    "crs": "CNP"
  },
  {
    "code": "3628",
    "name": "Ebbw Vale Town",
    "crs": "EBB"
  },
  {
    "code": "3634",
    "name": "Craven Arms",
    "crs": "CRV"
  },
  {
    "code": "3635",
    "name": "Ludlow",
    "crs": "LUD"
  },
  {
    "code": "3645",
    "name": "Luton Airport Parkway",
    "crs": "LTN"
  },
  {
    "code": "3667",
    "name": "Luton Airport",
    "crs": "LUA"
  },
  {
    "code": "3674",
    "name": "Newport (South Wales)",
    "crs": "NWP"
  },
  {
    "code": "3679",
    "name": "Severn Tunnel Junction",
    "crs": "STJ"
  },
  {
    "code": "3680",
    "name": "Caldicot",
    "crs": "CDT"
  },
  {
    "code": "3738",
    "name": "Cwmbran",
    "crs": "CWM"
  },
  {
    "code": "3744",
    "name": "Pontypool & New Inn",
    "crs": "PPL"
  },
  {
    "code": "3774",
    "name": "Chepstow",
    "crs": "CPW"
  },
  {
    "code": "3776",
    "name": "Eskbank",
    "crs": "EKB"
  },
  {
    "code": "3785",
    "name": "Cilmeri",
    "crs": "CIM"
  },
  {
    "code": "3793",
    "name": "Belfast Port",
    "crs": "BFA"
  },
  {
    "code": "3795",
    "name": "Eastbrook",
    "crs": "EBK"
  },
  {
    "code": "3796",
    "name": "Waun-Gron Park",
    "crs": "WNG"
  },
  {
    "code": "3797",
    "name": "Danescourt",
    "crs": "DCT"
  },
  {
    "code": "3801",
    "name": "Abercynon",
    "crs": "ACY"
  },
  {
    "code": "3805",
    "name": "Barry",
    "crs": "BRY"
  },
  {
    "code": "3806",
    "name": "Barry Docks",
    "crs": "BYD"
  },
  {
    "code": "3807",
    "name": "Barry Island",
    "crs": "BYI"
  },
  {
    "code": "3809",
    "name": "Bridgend",
    "crs": "BGN"
  },
  {
    "code": "3811",
    "name": "Cadoxton",
    "crs": "CAD"
  },
  {
    "code": "3812",
    "name": "Caerphilly",
    "crs": "CPH"
  },
  {
    "code": "3813",
    "name": "Aber",
    "crs": "ABE"
  },
  {
    "code": "3815",
    "name": "Cardiff Bay",
    "crs": "CDB"
  },
  {
    "code": "3817",
    "name": "Ty Glas",
    "crs": "TGS"
  },
  {
    "code": "3818",
    "name": "Ynyswen",
    "crs": "YNW"
  },
  {
    "code": "3820",
    "name": "Cathays",
    "crs": "CYS"
  },
  {
    "code": "3828",
    "name": "Cogan",
    "crs": "CGN"
  },
  {
    "code": "3830",
    "name": "Dinas Powys",
    "crs": "DNS"
  },
  {
    "code": "3839",
    "name": "Grangetown (Cardiff)",
    "crs": "GTN"
  },
  {
    "code": "3844",
    "name": "Llandaf",
    "crs": "LLN"
  },
  {
    "code": "3845",
    "name": "Heath High Level",
    "crs": "HHL"
  },
  {
    "code": "3847",
    "name": "Llanishen",
    "crs": "LLS"
  },
  {
    "code": "3850",
    "name": "Pontyclun",
    "crs": "PYC"
  },
  {
    "code": "3851",
    "name": "Pencoed",
    "crs": "PCD"
  },
  {
    "code": "3852",
    "name": "Llwynypia",
    "crs": "LLY"
  },
  {
    "code": "3853",
    "name": "Lisvane & Thornhill",
    "crs": "LVT"
  },
  {
    "code": "3855",
    "name": "Merthyr Tydfil",
    "crs": "MER"
  },
  {
    "code": "3857",
    "name": "Merthyr Vale",
    "crs": "MEV"
  },
  {
    "code": "3859",
    "name": "Mountain Ash",
    "crs": "MTA"
  },
  {
    "code": "3861",
    "name": "Dingle Road",
    "crs": "DGL"
  },
  {
    "code": "3862",
    "name": "Fernhill",
    "crs": "FER"
  },
  {
    "code": "3863",
    "name": "Penarth",
    "crs": "PEN"
  },
  {
    "code": "3870",
    "name": "Porth",
    "crs": "POR"
  },
  {
    "code": "3871",
    "name": "Ystrad Rhondda",
    "crs": "YSR"
  },
  {
    "code": "3873",
    "name": "Fairwater",
    "crs": "FRW"
  },
  {
    "code": "3874",
    "name": "Radyr",
    "crs": "RDR"
  },
  {
    "code": "3876",
    "name": "Rhoose Cardiff Intl Airpor",
    "crs": "RIA"
  },
  {
    "code": "3880",
    "name": "Taffs Well",
    "crs": "TAF"
  },
  {
    "code": "3882",
    "name": "Tonypandy",
    "crs": "TNP"
  },
  {
    "code": "3886",
    "name": "Trefforest Estate",
    "crs": "TRE"
  },
  {
    "code": "3887",
    "name": "Trefforest",
    "crs": "TRF"
  },
  {
    "code": "3888",
    "name": "Trehafod",
    "crs": "TRH"
  },
  {
    "code": "3889",
    "name": "Treherbert",
    "crs": "TRB"
  },
  {
    "code": "3891",
    "name": "Treorchy",
    "crs": "TRY"
  },
  {
    "code": "3895",
    "name": "Ninian Park",
    "crs": "NNP"
  },
  {
    "code": "3896",
    "name": "Whitchurch (Cardiff)",
    "crs": "WHT"
  },
  {
    "code": "3897",
    "name": "Ton Pentre",
    "crs": "TPN"
  },
  {
    "code": "3899",
    "name": "Cardiff Central",
    "crs": "CDF"
  },
  {
    "code": "3900",
    "name": "Cardiff Queen Street",
    "crs": "CDQ"
  },
  {
    "code": "3901",
    "name": "Dinas (Rhondda)",
    "crs": "DMG"
  },
  {
    "code": "3904",
    "name": "Pontypridd",
    "crs": "PPD"
  },
  {
    "code": "3905",
    "name": "Coryton",
    "crs": "COY"
  },
  {
    "code": "3906",
    "name": "Rhiwbina",
    "crs": "RHI"
  },
  {
    "code": "3907",
    "name": "Birchgrove",
    "crs": "BCG"
  },
  {
    "code": "3908",
    "name": "Heath Low Level",
    "crs": "HLL"
  },
  {
    "code": "3944",
    "name": "Pentre-Bach",
    "crs": "PTB"
  },
  {
    "code": "3961",
    "name": "Garth (Bridgend)",
    "crs": "GMG"
  },
  {
    "code": "3962",
    "name": "Maesteg (Ewenny Road)",
    "crs": "MEW"
  },
  {
    "code": "3963",
    "name": "Maesteg",
    "crs": "MST"
  },
  {
    "code": "3965",
    "name": "Wildmill",
    "crs": "WMI"
  },
  {
    "code": "3981",
    "name": "Cwmbach",
    "crs": "CMH"
  },
  {
    "code": "3982",
    "name": "Aberdare",
    "crs": "ABA"
  },
  {
    "code": "3992",
    "name": "Penrhiwceiber",
    "crs": "PER"
  },
  {
    "code": "3994",
    "name": "Quakers Yard",
    "crs": "QYD"
  },
  {
    "code": "4011",
    "name": "Bargoed",
    "crs": "BGD"
  },
  {
    "code": "4012",
    "name": "Brithdir",
    "crs": "BHD"
  },
  {
    "code": "4018",
    "name": "Llanbradach",
    "crs": "LNB"
  },
  {
    "code": "4021",
    "name": "Pengam",
    "crs": "PGM"
  },
  {
    "code": "4022",
    "name": "Gilfach Fargoed",
    "crs": "GFF"
  },
  {
    "code": "4023",
    "name": "Pontlottyn",
    "crs": "PLT"
  },
  {
    "code": "4025",
    "name": "Tir-Phil",
    "crs": "TIR"
  },
  {
    "code": "4026",
    "name": "Ystrad Mynach",
    "crs": "YSM"
  },
  {
    "code": "4027",
    "name": "Rhymney",
    "crs": "RHY"
  },
  {
    "code": "4028",
    "name": "Hengoed",
    "crs": "HNG"
  },
  {
    "code": "4059",
    "name": "Llandovery",
    "crs": "LLV"
  },
  {
    "code": "4060",
    "name": "Llangadog",
    "crs": "LLG"
  },
  {
    "code": "4061",
    "name": "Llanwrda",
    "crs": "LNR"
  },
  {
    "code": "4066",
    "name": "Ffairfach",
    "crs": "FFA"
  },
  {
    "code": "4068",
    "name": "Carmarthen",
    "crs": "CMN"
  },
  {
    "code": "4069",
    "name": "Clarbeston Road",
    "crs": "CLR"
  },
  {
    "code": "4070",
    "name": "Clunderwen",
    "crs": "CUW"
  },
  {
    "code": "4074",
    "name": "Ferryside",
    "crs": "FYS"
  },
  {
    "code": "4076",
    "name": "Fishguard Harbour",
    "crs": "FGH"
  },
  {
    "code": "4079",
    "name": "Haverfordwest",
    "crs": "HVF"
  },
  {
    "code": "4081",
    "name": "Johnston (Pembs)",
    "crs": "JOH"
  },
  {
    "code": "4083",
    "name": "Kilgetty",
    "crs": "KGT"
  },
  {
    "code": "4084",
    "name": "Lamphey",
    "crs": "LAM"
  },
  {
    "code": "4094",
    "name": "Manorbier",
    "crs": "MRB"
  },
  {
    "code": "4095",
    "name": "Milford Haven",
    "crs": "MFH"
  },
  {
    "code": "4098",
    "name": "Narberth",
    "crs": "NAR"
  },
  {
    "code": "4101",
    "name": "Pembroke",
    "crs": "PMB"
  },
  {
    "code": "4102",
    "name": "Pembroke Dock",
    "crs": "PMD"
  },
  {
    "code": "4108",
    "name": "Saundersfoot",
    "crs": "SDF"
  },
  {
    "code": "4110",
    "name": "Tenby",
    "crs": "TEN"
  },
  {
    "code": "4111",
    "name": "Whitland",
    "crs": "WTL"
  },
  {
    "code": "4124",
    "name": "Bynea",
    "crs": "BYE"
  },
  {
    "code": "4129",
    "name": "Penally",
    "crs": "PNA"
  },
  {
    "code": "4131",
    "name": "Gowerton",
    "crs": "GWN"
  },
  {
    "code": "4132",
    "name": "Kidwelly",
    "crs": "KWL"
  },
  {
    "code": "4133",
    "name": "Llanelli",
    "crs": "LLE"
  },
  {
    "code": "4138",
    "name": "Llangennech",
    "crs": "LLH"
  },
  {
    "code": "4140",
    "name": "Pembrey & Burry Port",
    "crs": "PBY"
  },
  {
    "code": "4147",
    "name": "Cynghordy",
    "crs": "CYN"
  },
  {
    "code": "4148",
    "name": "Garth (Powys)",
    "crs": "GTH"
  },
  {
    "code": "4157",
    "name": "Sugar Loaf",
    "crs": "SUG"
  },
  {
    "code": "4162",
    "name": "Llangammarch",
    "crs": "LLM"
  },
  {
    "code": "4163",
    "name": "Llanwrtyd",
    "crs": "LNW"
  },
  {
    "code": "4175",
    "name": "Broome",
    "crs": "BME"
  },
  {
    "code": "4181",
    "name": "Port Talbot Parkway",
    "crs": "PTA"
  },
  {
    "code": "4182",
    "name": "Bucknell",
    "crs": "BUK"
  },
  {
    "code": "4185",
    "name": "Pyle",
    "crs": "PYL"
  },
  {
    "code": "4186",
    "name": "Baglan",
    "crs": "BAJ"
  },
  {
    "code": "4187",
    "name": "Briton Ferry",
    "crs": "BNF"
  },
  {
    "code": "4188",
    "name": "Dolau",
    "crs": "DOL"
  },
  {
    "code": "4189",
    "name": "Hopton Heath",
    "crs": "HPT"
  },
  {
    "code": "4206",
    "name": "Knighton",
    "crs": "KNI"
  },
  {
    "code": "4207",
    "name": "Llangynllo",
    "crs": "LGO"
  },
  {
    "code": "4216",
    "name": "Neath",
    "crs": "NTH"
  },
  {
    "code": "4217",
    "name": "Skewen",
    "crs": "SKE"
  },
  {
    "code": "4219",
    "name": "Bow Street",
    "crs": "BOW"
  },
  {
    "code": "4222",
    "name": "Swansea",
    "crs": "SWA"
  },
  {
    "code": "4223",
    "name": "Llansamlet",
    "crs": "LAS"
  },
  {
    "code": "4226",
    "name": "Llanbister Road",
    "crs": "LLT"
  },
  {
    "code": "4227",
    "name": "Llandrindod",
    "crs": "LLO"
  },
  {
    "code": "4228",
    "name": "Knucklas",
    "crs": "KNU"
  },
  {
    "code": "4236",
    "name": "Ammanford",
    "crs": "AMF"
  },
  {
    "code": "4247",
    "name": "Llandybie",
    "crs": "LLI"
  },
  {
    "code": "4248",
    "name": "Llandeilo",
    "crs": "LLL"
  },
  {
    "code": "4250",
    "name": "Pantyffynnon",
    "crs": "PTF"
  },
  {
    "code": "4251",
    "name": "Pontarddulais",
    "crs": "PTD"
  },
  {
    "code": "4254",
    "name": "Pen-y-Bont",
    "crs": "PNY"
  },
  {
    "code": "4270",
    "name": "Sarn",
    "crs": "SRR"
  },
  {
    "code": "4271",
    "name": "Tondu",
    "crs": "TDU"
  },
  {
    "code": "4276",
    "name": "Troed-y-Rhiw",
    "crs": "TRD"
  },
  {
    "code": "4300",
    "name": "Gwersyllt",
    "crs": "GWE"
  },
  {
    "code": "4303",
    "name": "Aberystwyth",
    "crs": "AYW"
  },
  {
    "code": "4304",
    "name": "Borth",
    "crs": "BRH"
  },
  {
    "code": "4312",
    "name": "Criccieth",
    "crs": "CCC"
  },
  {
    "code": "4313",
    "name": "Porthmadog",
    "crs": "PTM"
  },
  {
    "code": "4314",
    "name": "Pwllheli",
    "crs": "PWL"
  },
  {
    "code": "4317",
    "name": "Builth Road",
    "crs": "BHR"
  },
  {
    "code": "4327",
    "name": "Llanaber",
    "crs": "LLA"
  },
  {
    "code": "4334",
    "name": "Llandecwyn",
    "crs": "LLC"
  },
  {
    "code": "4335",
    "name": "Penhelig",
    "crs": "PHG"
  },
  {
    "code": "4350",
    "name": "Boxhill Burfd Br",
    "crs": "BXX"
  },
  {
    "code": "4355",
    "name": "Talybont",
    "crs": "TLB"
  },
  {
    "code": "4356",
    "name": "Llanbedr",
    "crs": "LBR"
  },
  {
    "code": "4357",
    "name": "Tygwyn",
    "crs": "TYG"
  },
  {
    "code": "4365",
    "name": "Church Stretton",
    "crs": "CTT"
  },
  {
    "code": "4387",
    "name": "Shrewsbury",
    "crs": "SHR"
  },
  {
    "code": "4409",
    "name": "Penychain",
    "crs": "PNC"
  },
  {
    "code": "4412",
    "name": "Caersws",
    "crs": "CWS"
  },
  {
    "code": "4416",
    "name": "Fairbourne",
    "crs": "FRB"
  },
  {
    "code": "4421",
    "name": "Llwyngwril",
    "crs": "LLW"
  },
  {
    "code": "4422",
    "name": "Machynlleth",
    "crs": "MCN"
  },
  {
    "code": "4426",
    "name": "Newtown (Powys)",
    "crs": "NWT"
  },
  {
    "code": "4432",
    "name": "Tonfanau",
    "crs": "TNF"
  },
  {
    "code": "4433",
    "name": "Tywyn",
    "crs": "TYW"
  },
  {
    "code": "4434",
    "name": "Welshpool",
    "crs": "WLP"
  },
  {
    "code": "4435",
    "name": "Aberdovey",
    "crs": "AVY"
  },
  {
    "code": "4436",
    "name": "Dovey Junction",
    "crs": "DVY"
  },
  {
    "code": "4440",
    "name": "Abererch",
    "crs": "ABH"
  },
  {
    "code": "4445",
    "name": "Barmouth",
    "crs": "BRM"
  },
  {
    "code": "4449",
    "name": "Chirk",
    "crs": "CRK"
  },
  {
    "code": "4452",
    "name": "London Thameslink",
    "crs": ""
  },
  {
    "code": "4455",
    "name": "Dyffryn Ardudwy",
    "crs": "DYF"
  },
  {
    "code": "4457",
    "name": "Gobowen",
    "crs": "GOB"
  },
  {
    "code": "4458",
    "name": "Harlech",
    "crs": "HRL"
  },
  {
    "code": "4460",
    "name": "Llandanwg",
    "crs": "LDN"
  },
  {
    "code": "4463",
    "name": "Pensarn (Gwynedd)",
    "crs": "PES"
  },
  {
    "code": "4469",
    "name": "Minffordd",
    "crs": "MFF"
  },
  {
    "code": "4470",
    "name": "Morfa Mawddach",
    "crs": "MFA"
  },
  {
    "code": "4473",
    "name": "Penrhyndeudraeth",
    "crs": "PRH"
  },
  {
    "code": "4477",
    "name": "Ruabon",
    "crs": "RUA"
  },
  {
    "code": "4479",
    "name": "Talsarnau",
    "crs": "TAL"
  },
  {
    "code": "4486",
    "name": "Wrexham Central",
    "crs": "WXC"
  },
  {
    "code": "4487",
    "name": "Wrexham General",
    "crs": "WRX"
  },
  {
    "code": "4502",
    "name": "Banbury",
    "crs": "BAN"
  },
  {
    "code": "4503",
    "name": "Five Ways",
    "crs": "FWY"
  },
  {
    "code": "4504",
    "name": "University (Birmingham)",
    "crs": "UNI"
  },
  {
    "code": "4508",
    "name": "Kings Sutton",
    "crs": "KGS"
  },
  {
    "code": "4513",
    "name": "Bordesley",
    "crs": "BBS"
  },
  {
    "code": "4515",
    "name": "Birmingham Moor Street",
    "crs": "BMO"
  },
  {
    "code": "4518",
    "name": "Tyseley",
    "crs": "TYS"
  },
  {
    "code": "4519",
    "name": "Danzey",
    "crs": "DZY"
  },
  {
    "code": "4520",
    "name": "Earlswood (West Midlands)",
    "crs": "EWD"
  },
  {
    "code": "4521",
    "name": "Hall Green",
    "crs": "HLG"
  },
  {
    "code": "4523",
    "name": "The Hawthorns",
    "crs": "THW"
  },
  {
    "code": "4524",
    "name": "Henley-in-Arden",
    "crs": "HNL"
  },
  {
    "code": "4525",
    "name": "Dorridge",
    "crs": "DDG"
  },
  {
    "code": "4526",
    "name": "Shirley",
    "crs": "SRL"
  },
  {
    "code": "4527",
    "name": "Solihull",
    "crs": "SOL"
  },
  {
    "code": "4528",
    "name": "Widney Manor",
    "crs": "WMR"
  },
  {
    "code": "4529",
    "name": "Acocks Green",
    "crs": "ACG"
  },
  {
    "code": "4530",
    "name": "Small Heath",
    "crs": "SMA"
  },
  {
    "code": "4532",
    "name": "Wythall",
    "crs": "WYT"
  },
  {
    "code": "4533",
    "name": "Olton",
    "crs": "OLT"
  },
  {
    "code": "4535",
    "name": "Spring Road",
    "crs": "SRI"
  },
  {
    "code": "4536",
    "name": "Wood End",
    "crs": "WDE"
  },
  {
    "code": "4537",
    "name": "Yardley Wood",
    "crs": "YRD"
  },
  {
    "code": "4538",
    "name": "The Lakes (Warwickshire)",
    "crs": "TLK"
  },
  {
    "code": "4539",
    "name": "Whitlocks End",
    "crs": "WTE"
  },
  {
    "code": "4540",
    "name": "Wootton Wawen",
    "crs": "WWW"
  },
  {
    "code": "4558",
    "name": "Stratford-upon-Avon",
    "crs": "SAV"
  },
  {
    "code": "4559",
    "name": "Den Haag Cs",
    "crs": "DHC"
  },
  {
    "code": "4560",
    "name": "Schiedam Rotwest",
    "crs": "SRW"
  },
  {
    "code": "4568",
    "name": "Wilmcote (Warwickshire)",
    "crs": "WMC"
  },
  {
    "code": "4574",
    "name": "Blakedown",
    "crs": "BKD"
  },
  {
    "code": "4577",
    "name": "Hagley",
    "crs": "HAG"
  },
  {
    "code": "4579",
    "name": "Hartlebury",
    "crs": "HBY"
  },
  {
    "code": "4581",
    "name": "Kidderminster",
    "crs": "KID"
  },
  {
    "code": "4593",
    "name": "Claverdon",
    "crs": "CLV"
  },
  {
    "code": "4594",
    "name": "Hatton",
    "crs": "HTN"
  },
  {
    "code": "4595",
    "name": "Lapworth",
    "crs": "LPW"
  },
  {
    "code": "4597",
    "name": "Leamington Spa",
    "crs": "LMS"
  },
  {
    "code": "4600",
    "name": "Warwick",
    "crs": "WRW"
  },
  {
    "code": "4606",
    "name": "Rowley Regis",
    "crs": "ROW"
  },
  {
    "code": "4607",
    "name": "Langley Green",
    "crs": "LGG"
  },
  {
    "code": "4614",
    "name": "Albrighton",
    "crs": "ALB"
  },
  {
    "code": "4616",
    "name": "Codsall",
    "crs": "CSL"
  },
  {
    "code": "4617",
    "name": "Cosford",
    "crs": "COS"
  },
  {
    "code": "4618",
    "name": "Bilbrook",
    "crs": "BBK"
  },
  {
    "code": "4619",
    "name": "Shifnal",
    "crs": "SFN"
  },
  {
    "code": "4639",
    "name": "Cradley Heath",
    "crs": "CRA"
  },
  {
    "code": "4640",
    "name": "Lye",
    "crs": "LYE"
  },
  {
    "code": "4641",
    "name": "Old Hill",
    "crs": "OHL"
  },
  {
    "code": "4643",
    "name": "Stourbridge Town",
    "crs": "SBT"
  },
  {
    "code": "4646",
    "name": "Stourbridge Junction",
    "crs": "SBJ"
  },
  {
    "code": "4675",
    "name": "Zone WM*5 W Mids",
    "crs": ""
  },
  {
    "code": "4677",
    "name": "Zone WM*7 W Mids",
    "crs": ""
  },
  {
    "code": "4678",
    "name": "Zone WM*8 W Mids",
    "crs": ""
  },
  {
    "code": "4679",
    "name": "Zone WM*9 W Mids",
    "crs": ""
  },
  {
    "code": "4689",
    "name": "Oakengates",
    "crs": "OKN"
  },
  {
    "code": "4690",
    "name": "Wellington (Shropshire)",
    "crs": "WLN"
  },
  {
    "code": "4691",
    "name": "Telford Central",
    "crs": "TFC"
  },
  {
    "code": "4700",
    "name": "Ashchurch for Tewkesbury",
    "crs": "ASC"
  },
  {
    "code": "4715",
    "name": "Bromsgrove",
    "crs": "BMV"
  },
  {
    "code": "4731",
    "name": "Cheltenham Spa",
    "crs": "CNM"
  },
  {
    "code": "4740",
    "name": "Evesham",
    "crs": "EVE"
  },
  {
    "code": "4760",
    "name": "Gloucester",
    "crs": "GCR"
  },
  {
    "code": "4770",
    "name": "Stonehouse",
    "crs": "SHU"
  },
  {
    "code": "4771",
    "name": "Stroud (Glos)",
    "crs": "STD"
  },
  {
    "code": "4784",
    "name": "Ledbury",
    "crs": "LED"
  },
  {
    "code": "4787",
    "name": "Southend Airport",
    "crs": "SIA"
  },
  {
    "code": "4794",
    "name": "Honeybourne",
    "crs": "HYB"
  },
  {
    "code": "4796",
    "name": "Long Marston Gbrf",
    "crs": "LMN"
  },
  {
    "code": "4796",
    "name": "Long Marston",
    "crs": "LMN"
  },
  {
    "code": "4814",
    "name": "Moreton-in-Marsh",
    "crs": "MIM"
  },
  {
    "code": "4826",
    "name": "Lydney",
    "crs": "LYD"
  },
  {
    "code": "4876",
    "name": "Colwall",
    "crs": "CWL"
  },
  {
    "code": "4878",
    "name": "Droitwich Spa",
    "crs": "DTW"
  },
  {
    "code": "4884",
    "name": "Malvern Link",
    "crs": "MVL"
  },
  {
    "code": "4887",
    "name": "Pershore",
    "crs": "PSH"
  },
  {
    "code": "4891",
    "name": "Worcester Shrub Hill",
    "crs": "WOS"
  },
  {
    "code": "4892",
    "name": "Great Malvern",
    "crs": "GMV"
  },
  {
    "code": "4893",
    "name": "Worcester Foregate Street",
    "crs": "WOF"
  },
  {
    "code": "4935",
    "name": "Whitechapel",
    "crs": "ZLW"
  },
  {
    "code": "5003",
    "name": "Appledore (Kent)",
    "crs": "APD"
  },
  {
    "code": "5004",
    "name": "Ashford International",
    "crs": "AFK"
  },
  {
    "code": "5006",
    "name": "Broadstairs",
    "crs": "BSR"
  },
  {
    "code": "5007",
    "name": "Canterbury West",
    "crs": "CBW"
  },
  {
    "code": "5008",
    "name": "Chartham",
    "crs": "CRT"
  },
  {
    "code": "5009",
    "name": "Chilham",
    "crs": "CIL"
  },
  {
    "code": "5011",
    "name": "Deal",
    "crs": "DEA"
  },
  {
    "code": "5018",
    "name": "Margate",
    "crs": "MAR"
  },
  {
    "code": "5019",
    "name": "Minster",
    "crs": "MSR"
  },
  {
    "code": "5021",
    "name": "Ore",
    "crs": "ORE"
  },
  {
    "code": "5023",
    "name": "Ramsgate",
    "crs": "RAM"
  },
  {
    "code": "5024",
    "name": "Rye",
    "crs": "RYE"
  },
  {
    "code": "5025",
    "name": "Sandling",
    "crs": "SDG"
  },
  {
    "code": "5026",
    "name": "Sandwich",
    "crs": "SDW"
  },
  {
    "code": "5027",
    "name": "Folkestone West",
    "crs": "FKW"
  },
  {
    "code": "5028",
    "name": "Three Oaks",
    "crs": "TOK"
  },
  {
    "code": "5029",
    "name": "Sturry",
    "crs": "STU"
  },
  {
    "code": "5030",
    "name": "Westenhanger",
    "crs": "WHA"
  },
  {
    "code": "5031",
    "name": "Wye",
    "crs": "WYE"
  },
  {
    "code": "5033",
    "name": "Dover Priory",
    "crs": "DVP"
  },
  {
    "code": "5034",
    "name": "Dumpton Park",
    "crs": "DMP"
  },
  {
    "code": "5035",
    "name": "Folkestone Central",
    "crs": "FKC"
  },
  {
    "code": "5036",
    "name": "Doleham",
    "crs": "DLH"
  },
  {
    "code": "5037",
    "name": "Ham Street",
    "crs": "HMT"
  },
  {
    "code": "5038",
    "name": "Kearsney",
    "crs": "KSN"
  },
  {
    "code": "5040",
    "name": "Martin Mill",
    "crs": "MTM"
  },
  {
    "code": "5041",
    "name": "Walmer",
    "crs": "WAM"
  },
  {
    "code": "5042",
    "name": "Winchelsea",
    "crs": "WSE"
  },
  {
    "code": "5046",
    "name": "Beckenham Junction",
    "crs": "BKJ"
  },
  {
    "code": "5047",
    "name": "Catford Bridge",
    "crs": "CFB"
  },
  {
    "code": "5048",
    "name": "Clock House",
    "crs": "CLK"
  },
  {
    "code": "5049",
    "name": "Elmers End",
    "crs": "ELE"
  },
  {
    "code": "5050",
    "name": "Hayes (Kent)",
    "crs": "HYS"
  },
  {
    "code": "5051",
    "name": "Lewisham",
    "crs": "LEW"
  },
  {
    "code": "5053",
    "name": "Lower Sydenham",
    "crs": "LSY"
  },
  {
    "code": "5054",
    "name": "West Wickham",
    "crs": "WWI"
  },
  {
    "code": "5056",
    "name": "Eden Park",
    "crs": "EDN"
  },
  {
    "code": "5057",
    "name": "Ladywell",
    "crs": "LAD"
  },
  {
    "code": "5058",
    "name": "New Beckenham",
    "crs": "NBC"
  },
  {
    "code": "5059",
    "name": "St Johns (London)",
    "crs": "SAJ"
  },
  {
    "code": "5062",
    "name": "Bellingham",
    "crs": "BGM"
  },
  {
    "code": "5063",
    "name": "Bickley",
    "crs": "BKL"
  },
  {
    "code": "5064",
    "name": "Bromley South",
    "crs": "BMS"
  },
  {
    "code": "5065",
    "name": "Eynsford",
    "crs": "EYN"
  },
  {
    "code": "5066",
    "name": "Herne Hill",
    "crs": "HNH"
  },
  {
    "code": "5068",
    "name": "Nunhead",
    "crs": "NHD"
  },
  {
    "code": "5069",
    "name": "Mitcham Eastfields",
    "crs": "MTC"
  },
  {
    "code": "5071",
    "name": "Otford",
    "crs": "OTF"
  },
  {
    "code": "5072",
    "name": "Penge East",
    "crs": "PNE"
  },
  {
    "code": "5073",
    "name": "St Mary Cray",
    "crs": "SMY"
  },
  {
    "code": "5074",
    "name": "Shoreham (Kent)",
    "crs": "SEH"
  },
  {
    "code": "5075",
    "name": "Swanley",
    "crs": "SAY"
  },
  {
    "code": "5076",
    "name": "Beckenham Hill",
    "crs": "BEC"
  },
  {
    "code": "5077",
    "name": "Catford",
    "crs": "CTF"
  },
  {
    "code": "5078",
    "name": "Crofton Park",
    "crs": "CFT"
  },
  {
    "code": "5079",
    "name": "Kemsing",
    "crs": "KMS"
  },
  {
    "code": "5080",
    "name": "Kent House",
    "crs": "KTH"
  },
  {
    "code": "5081",
    "name": "Brixton",
    "crs": "BRX"
  },
  {
    "code": "5082",
    "name": "Loughborough Junction",
    "crs": "LGJ"
  },
  {
    "code": "5083",
    "name": "Ravensbourne",
    "crs": "RVB"
  },
  {
    "code": "5084",
    "name": "Shortlands",
    "crs": "SRT"
  },
  {
    "code": "5085",
    "name": "Sydenham Hill",
    "crs": "SYH"
  },
  {
    "code": "5086",
    "name": "West Dulwich",
    "crs": "WDU"
  },
  {
    "code": "5089",
    "name": "Barnehurst",
    "crs": "BNH"
  },
  {
    "code": "5090",
    "name": "Bat & Ball",
    "crs": "BBL"
  },
  {
    "code": "5091",
    "name": "Bearsted",
    "crs": "BSD"
  },
  {
    "code": "5092",
    "name": "Belvedere",
    "crs": "BVD"
  },
  {
    "code": "5093",
    "name": "Bexley",
    "crs": "BXY"
  },
  {
    "code": "5094",
    "name": "Bexleyheath",
    "crs": "BXH"
  },
  {
    "code": "5095",
    "name": "Blackheath",
    "crs": "BKH"
  },
  {
    "code": "5096",
    "name": "Bromley North",
    "crs": "BMN"
  },
  {
    "code": "5097",
    "name": "Charing (Kent)",
    "crs": "CHG"
  },
  {
    "code": "5098",
    "name": "Chelsfield",
    "crs": "CLD"
  },
  {
    "code": "5099",
    "name": "Chislehurst",
    "crs": "CIT"
  },
  {
    "code": "5100",
    "name": "Crayford",
    "crs": "CRY"
  },
  {
    "code": "5101",
    "name": "Dartford",
    "crs": "DFD"
  },
  {
    "code": "5102",
    "name": "Dunton Green",
    "crs": "DNG"
  },
  {
    "code": "5103",
    "name": "Eltham",
    "crs": "ELW"
  },
  {
    "code": "5104",
    "name": "Erith",
    "crs": "ERH"
  },
  {
    "code": "5105",
    "name": "Farningham Road",
    "crs": "FNR"
  },
  {
    "code": "5107",
    "name": "Hither Green",
    "crs": "HGR"
  },
  {
    "code": "5108",
    "name": "Kidbrooke",
    "crs": "KDB"
  },
  {
    "code": "5109",
    "name": "Knockholt",
    "crs": "KCK"
  },
  {
    "code": "5110",
    "name": "Lee (London)",
    "crs": "LEE"
  },
  {
    "code": "5111",
    "name": "Lenham",
    "crs": "LEN"
  },
  {
    "code": "5112",
    "name": "London Blackfriars",
    "crs": "BFR"
  },
  {
    "code": "5114",
    "name": "Longfield",
    "crs": "LGF"
  },
  {
    "code": "5115",
    "name": "Maidstone East",
    "crs": "MDE"
  },
  {
    "code": "5116",
    "name": "Meopham",
    "crs": "MEP"
  },
  {
    "code": "5118",
    "name": "Mottingham",
    "crs": "MTG"
  },
  {
    "code": "5119",
    "name": "New Eltham",
    "crs": "NEH"
  },
  {
    "code": "5120",
    "name": "Northfleet",
    "crs": "NFL"
  },
  {
    "code": "5121",
    "name": "City Thameslink",
    "crs": "CTK"
  },
  {
    "code": "5122",
    "name": "Orpington",
    "crs": "ORP"
  },
  {
    "code": "5123",
    "name": "Petts Wood",
    "crs": "PET"
  },
  {
    "code": "5124",
    "name": "Sevenoaks",
    "crs": "SEV"
  },
  {
    "code": "5125",
    "name": "Sidcup",
    "crs": "SID"
  },
  {
    "code": "5126",
    "name": "Sole Street",
    "crs": "SOR"
  },
  {
    "code": "5128",
    "name": "Welling",
    "crs": "WLI"
  },
  {
    "code": "5129",
    "name": "West Malling",
    "crs": "WMA"
  },
  {
    "code": "5130",
    "name": "Borough Green & Wrotham",
    "crs": "BRG"
  },
  {
    "code": "5131",
    "name": "Abbey Wood",
    "crs": "ABW"
  },
  {
    "code": "5131",
    "name": "Abbey Wood Mtr",
    "crs": "ABW"
  },
  {
    "code": "5132",
    "name": "Albany Park",
    "crs": "AYP"
  },
  {
    "code": "5133",
    "name": "Barming",
    "crs": "BMG"
  },
  {
    "code": "5134",
    "name": "East Malling",
    "crs": "EML"
  },
  {
    "code": "5135",
    "name": "Elmstead Woods",
    "crs": "ESD"
  },
  {
    "code": "5137",
    "name": "Falconwood",
    "crs": "FCN"
  },
  {
    "code": "5138",
    "name": "Greenhithe for Bluewater",
    "crs": "GNH"
  },
  {
    "code": "5139",
    "name": "Grove Park",
    "crs": "GRP"
  },
  {
    "code": "5140",
    "name": "Harrietsham",
    "crs": "HRM"
  },
  {
    "code": "5141",
    "name": "Hollingbourne",
    "crs": "HBN"
  },
  {
    "code": "5142",
    "name": "London Cannon Street",
    "crs": "CST"
  },
  {
    "code": "5143",
    "name": "London Charing Cross",
    "crs": "CHX"
  },
  {
    "code": "5144",
    "name": "Charlton",
    "crs": "CTN"
  },
  {
    "code": "5145",
    "name": "Deptford",
    "crs": "DEP"
  },
  {
    "code": "5146",
    "name": "Greenwich",
    "crs": "GNW"
  },
  {
    "code": "5148",
    "name": "London Bridge",
    "crs": "LBG"
  },
  {
    "code": "5149",
    "name": "Maze Hill",
    "crs": "MZH"
  },
  {
    "code": "5150",
    "name": "New Cross",
    "crs": "NWX"
  },
  {
    "code": "5151",
    "name": "Westcombe Park",
    "crs": "WCB"
  },
  {
    "code": "5152",
    "name": "Woolwich Arsenal",
    "crs": "WWA"
  },
  {
    "code": "5153",
    "name": "Woolwich Dockyard",
    "crs": "WWD"
  },
  {
    "code": "5154",
    "name": "Slade Green",
    "crs": "SGR"
  },
  {
    "code": "5155",
    "name": "Sundridge Park",
    "crs": "SUP"
  },
  {
    "code": "5156",
    "name": "Swanscombe",
    "crs": "SWM"
  },
  {
    "code": "5158",
    "name": "London Waterloo East",
    "crs": "WAE"
  },
  {
    "code": "5160",
    "name": "Adisham",
    "crs": "ADM"
  },
  {
    "code": "5162",
    "name": "Aylesford",
    "crs": "AYL"
  },
  {
    "code": "5163",
    "name": "Birchington-on-Sea",
    "crs": "BCH"
  },
  {
    "code": "5164",
    "name": "Canterbury East",
    "crs": "CBE"
  },
  {
    "code": "5167",
    "name": "Faversham",
    "crs": "FAV"
  },
  {
    "code": "5169",
    "name": "Gillingham (Kent)",
    "crs": "GLM"
  },
  {
    "code": "5172",
    "name": "Gravesend",
    "crs": "GRV"
  },
  {
    "code": "5173",
    "name": "Halling",
    "crs": "HAI"
  },
  {
    "code": "5174",
    "name": "Herne Bay",
    "crs": "HNB"
  },
  {
    "code": "5175",
    "name": "Newington",
    "crs": "NGT"
  },
  {
    "code": "5176",
    "name": "Queenborough",
    "crs": "QBR"
  },
  {
    "code": "5177",
    "name": "Rainham (Kent)",
    "crs": "RAI"
  },
  {
    "code": "5179",
    "name": "Selling",
    "crs": "SEG"
  },
  {
    "code": "5184",
    "name": "Sheerness-on-Sea",
    "crs": "SSS"
  },
  {
    "code": "5185",
    "name": "Snowdown",
    "crs": "SWO"
  },
  {
    "code": "5186",
    "name": "Shepherds Well",
    "crs": "SPH"
  },
  {
    "code": "5187",
    "name": "Sittingbourne",
    "crs": "SIT"
  },
  {
    "code": "5189",
    "name": "Snodland",
    "crs": "SDA"
  },
  {
    "code": "5191",
    "name": "Strood (Kent)",
    "crs": "SOO"
  },
  {
    "code": "5193",
    "name": "Teynham",
    "crs": "TEY"
  },
  {
    "code": "5195",
    "name": "Westgate-on-Sea",
    "crs": "WGA"
  },
  {
    "code": "5196",
    "name": "Whitstable",
    "crs": "WHI"
  },
  {
    "code": "5197",
    "name": "Aylesham",
    "crs": "AYH"
  },
  {
    "code": "5198",
    "name": "Bekesbourne",
    "crs": "BKS"
  },
  {
    "code": "5199",
    "name": "Chatham",
    "crs": "CTM"
  },
  {
    "code": "5200",
    "name": "Chestfield & Swalecliffe",
    "crs": "CSW"
  },
  {
    "code": "5201",
    "name": "Cuxton",
    "crs": "CUX"
  },
  {
    "code": "5202",
    "name": "Higham",
    "crs": "HGM"
  },
  {
    "code": "5203",
    "name": "Rochester",
    "crs": "RTR"
  },
  {
    "code": "5205",
    "name": "Kemsley",
    "crs": "KML"
  },
  {
    "code": "5208",
    "name": "Plumstead",
    "crs": "PLU"
  },
  {
    "code": "5211",
    "name": "Bexhill",
    "crs": "BEX"
  },
  {
    "code": "5215",
    "name": "Battle",
    "crs": "BAT"
  },
  {
    "code": "5217",
    "name": "Etchingham",
    "crs": "ETC"
  },
  {
    "code": "5218",
    "name": "Frant",
    "crs": "FRT"
  },
  {
    "code": "5219",
    "name": "Hastings",
    "crs": "HGS"
  },
  {
    "code": "5220",
    "name": "Headcorn",
    "crs": "HCN"
  },
  {
    "code": "5222",
    "name": "Maidstone West",
    "crs": "MDW"
  },
  {
    "code": "5223",
    "name": "Marden",
    "crs": "MRN"
  },
  {
    "code": "5224",
    "name": "Paddock Wood",
    "crs": "PDW"
  },
  {
    "code": "5225",
    "name": "Pluckley",
    "crs": "PLC"
  },
  {
    "code": "5226",
    "name": "Robertsbridge",
    "crs": "RBR"
  },
  {
    "code": "5227",
    "name": "Beltring",
    "crs": "BEG"
  },
  {
    "code": "5228",
    "name": "Staplehurst",
    "crs": "SPU"
  },
  {
    "code": "5229",
    "name": "Tonbridge",
    "crs": "TON"
  },
  {
    "code": "5230",
    "name": "Tunbridge Wells",
    "crs": "TBW"
  },
  {
    "code": "5231",
    "name": "Wadhurst",
    "crs": "WAD"
  },
  {
    "code": "5232",
    "name": "Yalding",
    "crs": "YAL"
  },
  {
    "code": "5233",
    "name": "Crowhurst",
    "crs": "CWU"
  },
  {
    "code": "5234",
    "name": "East Farleigh",
    "crs": "EFL"
  },
  {
    "code": "5235",
    "name": "High Brooms",
    "crs": "HIB"
  },
  {
    "code": "5236",
    "name": "Hildenborough",
    "crs": "HLB"
  },
  {
    "code": "5237",
    "name": "Maidstone Barracks",
    "crs": "MDB"
  },
  {
    "code": "5238",
    "name": "New Hythe",
    "crs": "NHE"
  },
  {
    "code": "5239",
    "name": "St Leonards Warrior Square",
    "crs": "SLQ"
  },
  {
    "code": "5240",
    "name": "Stonegate",
    "crs": "SOG"
  },
  {
    "code": "5241",
    "name": "Wateringbury",
    "crs": "WTR"
  },
  {
    "code": "5242",
    "name": "West St Leonards",
    "crs": "WLD"
  },
  {
    "code": "5246",
    "name": "Elephant & Castle",
    "crs": "EPH"
  },
  {
    "code": "5248",
    "name": "Stone Crossing",
    "crs": "SCG"
  },
  {
    "code": "5249",
    "name": "Swale",
    "crs": "SWL"
  },
  {
    "code": "5250",
    "name": "Amberley",
    "crs": "AMY"
  },
  {
    "code": "5251",
    "name": "Arundel",
    "crs": "ARU"
  },
  {
    "code": "5252",
    "name": "Barnham",
    "crs": "BAA"
  },
  {
    "code": "5253",
    "name": "Bognor Regis",
    "crs": "BOG"
  },
  {
    "code": "5254",
    "name": "Bosham",
    "crs": "BOH"
  },
  {
    "code": "5255",
    "name": "Chichester",
    "crs": "CCH"
  },
  {
    "code": "5257",
    "name": "Emsworth",
    "crs": "EMS"
  },
  {
    "code": "5258",
    "name": "Ford",
    "crs": "FOD"
  },
  {
    "code": "5260",
    "name": "Littlehampton",
    "crs": "LIT"
  },
  {
    "code": "5261",
    "name": "Fishbourne (Sussex)",
    "crs": "FSB"
  },
  {
    "code": "5262",
    "name": "Nutbourne",
    "crs": "NUT"
  },
  {
    "code": "5263",
    "name": "Southbourne",
    "crs": "SOB"
  },
  {
    "code": "5264",
    "name": "Warblington",
    "crs": "WBL"
  },
  {
    "code": "5267",
    "name": "Angmering",
    "crs": "ANG"
  },
  {
    "code": "5268",
    "name": "Brighton",
    "crs": "BTN"
  },
  {
    "code": "5272",
    "name": "Goring-by-Sea",
    "crs": "GBS"
  },
  {
    "code": "5273",
    "name": "Hove",
    "crs": "HOV"
  },
  {
    "code": "5275",
    "name": "Lancing",
    "crs": "LAC"
  },
  {
    "code": "5276",
    "name": "Portslade",
    "crs": "PLD"
  },
  {
    "code": "5277",
    "name": "Shoreham-by-Sea",
    "crs": "SSE"
  },
  {
    "code": "5278",
    "name": "West Worthing",
    "crs": "WWO"
  },
  {
    "code": "5279",
    "name": "Worthing",
    "crs": "WRH"
  },
  {
    "code": "5280",
    "name": "Aldrington",
    "crs": "AGT"
  },
  {
    "code": "5281",
    "name": "London Road (Brighton)",
    "crs": "LRB"
  },
  {
    "code": "5282",
    "name": "Durrington-on-Sea",
    "crs": "DUR"
  },
  {
    "code": "5283",
    "name": "East Worthing",
    "crs": "EWR"
  },
  {
    "code": "5284",
    "name": "Fishersgate",
    "crs": "FSG"
  },
  {
    "code": "5285",
    "name": "Preston Park",
    "crs": "PRP"
  },
  {
    "code": "5286",
    "name": "Southwick",
    "crs": "SWK"
  },
  {
    "code": "5289",
    "name": "Haydons Road",
    "crs": "HYR"
  },
  {
    "code": "5290",
    "name": "St Helier (London)",
    "crs": "SIH"
  },
  {
    "code": "5291",
    "name": "Morden South",
    "crs": "MDS"
  },
  {
    "code": "5292",
    "name": "South Merton",
    "crs": "SMO"
  },
  {
    "code": "5293",
    "name": "West Sutton",
    "crs": "WSU"
  },
  {
    "code": "5294",
    "name": "Leigh (Kent)",
    "crs": "LIH"
  },
  {
    "code": "5296",
    "name": "Chilworth",
    "crs": "CHL"
  },
  {
    "code": "5297",
    "name": "Dorking West",
    "crs": "DKT"
  },
  {
    "code": "5298",
    "name": "Gomshall",
    "crs": "GOM"
  },
  {
    "code": "5301",
    "name": "Clapham High Street",
    "crs": "CLP"
  },
  {
    "code": "5308",
    "name": "Holmwood",
    "crs": "HLM"
  },
  {
    "code": "5309",
    "name": "Horsham",
    "crs": "HRH"
  },
  {
    "code": "5310",
    "name": "Ockley",
    "crs": "OLY"
  },
  {
    "code": "5312",
    "name": "Moulsecoomb",
    "crs": "MCB"
  },
  {
    "code": "5316",
    "name": "Warnham",
    "crs": "WNH"
  },
  {
    "code": "5319",
    "name": "Christs Hospital",
    "crs": "CHH"
  },
  {
    "code": "5323",
    "name": "Berwick (Sussex)",
    "crs": "BRK"
  },
  {
    "code": "5324",
    "name": "Buxted",
    "crs": "BXD"
  },
  {
    "code": "5325",
    "name": "Crowborough",
    "crs": "COH"
  },
  {
    "code": "5329",
    "name": "Lewes",
    "crs": "LWS"
  },
  {
    "code": "5330",
    "name": "Newhaven Harbour",
    "crs": "NVH"
  },
  {
    "code": "5331",
    "name": "Newhaven Town",
    "crs": "NVN"
  },
  {
    "code": "5332",
    "name": "Plumpton",
    "crs": "PMP"
  },
  {
    "code": "5333",
    "name": "Seaford",
    "crs": "SEF"
  },
  {
    "code": "5334",
    "name": "Uckfield",
    "crs": "UCK"
  },
  {
    "code": "5335",
    "name": "Newhaven Marine",
    "crs": "NVM"
  },
  {
    "code": "5336",
    "name": "Cooksbridge",
    "crs": "CBR"
  },
  {
    "code": "5337",
    "name": "Falmer",
    "crs": "FMR"
  },
  {
    "code": "5338",
    "name": "Glynde",
    "crs": "GLY"
  },
  {
    "code": "5339",
    "name": "Southease",
    "crs": "SEE"
  },
  {
    "code": "5341",
    "name": "Wivelsfield",
    "crs": "WVF"
  },
  {
    "code": "5345",
    "name": "New Cross Gate",
    "crs": "NXG"
  },
  {
    "code": "5347",
    "name": "Ashtead",
    "crs": "AHD"
  },
  {
    "code": "5348",
    "name": "Banstead",
    "crs": "BAD"
  },
  {
    "code": "5350",
    "name": "Belmont",
    "crs": "BLM"
  },
  {
    "code": "5351",
    "name": "Caterham",
    "crs": "CAT"
  },
  {
    "code": "5352",
    "name": "Cheam",
    "crs": "CHE"
  },
  {
    "code": "5353",
    "name": "Chipstead",
    "crs": "CHP"
  },
  {
    "code": "5355",
    "name": "East Croydon",
    "crs": "ECR"
  },
  {
    "code": "5356",
    "name": "Crystal Palace",
    "crs": "CYP"
  },
  {
    "code": "5357",
    "name": "Dorking",
    "crs": "DKG"
  },
  {
    "code": "5358",
    "name": "East Dulwich",
    "crs": "EDW"
  },
  {
    "code": "5359",
    "name": "Edenbridge Town",
    "crs": "EBT"
  },
  {
    "code": "5360",
    "name": "Epsom",
    "crs": "EPS"
  },
  {
    "code": "5361",
    "name": "Epsom Downs",
    "crs": "EPD"
  },
  {
    "code": "5362",
    "name": "Forest Hill",
    "crs": "FOH"
  },
  {
    "code": "5363",
    "name": "Gipsy Hill",
    "crs": "GIP"
  },
  {
    "code": "5364",
    "name": "Hackbridge",
    "crs": "HCB"
  },
  {
    "code": "5365",
    "name": "Horley",
    "crs": "HOR"
  },
  {
    "code": "5366",
    "name": "Kingswood",
    "crs": "KND"
  },
  {
    "code": "5368",
    "name": "Leatherhead",
    "crs": "LHD"
  },
  {
    "code": "5369",
    "name": "Lingfield",
    "crs": "LFD"
  },
  {
    "code": "5372",
    "name": "Wandsworth Road",
    "crs": "WWR"
  },
  {
    "code": "5376",
    "name": "Norwood Junction",
    "crs": "NWD"
  },
  {
    "code": "5377",
    "name": "Oxted",
    "crs": "OXT"
  },
  {
    "code": "5378",
    "name": "Penge West",
    "crs": "PNW"
  },
  {
    "code": "5379",
    "name": "Purley",
    "crs": "PUR"
  },
  {
    "code": "5380",
    "name": "Salfords (Surrey)",
    "crs": "SAF"
  },
  {
    "code": "5382",
    "name": "Coulsdon Town",
    "crs": "CDN"
  },
  {
    "code": "5383",
    "name": "Streatham",
    "crs": "STE"
  },
  {
    "code": "5384",
    "name": "Streatham Common",
    "crs": "SRC"
  },
  {
    "code": "5385",
    "name": "Sutton (London)",
    "crs": "SUO"
  },
  {
    "code": "5386",
    "name": "Tadworth",
    "crs": "TAD"
  },
  {
    "code": "5387",
    "name": "Tattenham Corner",
    "crs": "TAT"
  },
  {
    "code": "5388",
    "name": "Thornton Heath",
    "crs": "TTH"
  },
  {
    "code": "5389",
    "name": "Tooting",
    "crs": "TOO"
  },
  {
    "code": "5390",
    "name": "Tulse Hill",
    "crs": "TUH"
  },
  {
    "code": "5391",
    "name": "Upper Warlingham",
    "crs": "UWL"
  },
  {
    "code": "5392",
    "name": "Waddon",
    "crs": "WDO"
  },
  {
    "code": "5394",
    "name": "Wallington",
    "crs": "WLT"
  },
  {
    "code": "5395",
    "name": "Wandsworth Common",
    "crs": "WSW"
  },
  {
    "code": "5396",
    "name": "Whyteleafe",
    "crs": "WHY"
  },
  {
    "code": "5397",
    "name": "Anerley",
    "crs": "ANZ"
  },
  {
    "code": "5398",
    "name": "Ashurst (Kent)",
    "crs": "AHS"
  },
  {
    "code": "5399",
    "name": "Balham",
    "crs": "BAL"
  },
  {
    "code": "5401",
    "name": "Birkbeck",
    "crs": "BIK"
  },
  {
    "code": "5402",
    "name": "Bishopstone",
    "crs": "BIP"
  },
  {
    "code": "5403",
    "name": "Boxhill & Westhumble",
    "crs": "BXW"
  },
  {
    "code": "5404",
    "name": "Brockley",
    "crs": "BCY"
  },
  {
    "code": "5405",
    "name": "Carshalton",
    "crs": "CSH"
  },
  {
    "code": "5406",
    "name": "Carshalton Beeches",
    "crs": "CSB"
  },
  {
    "code": "5408",
    "name": "Coulsdon South",
    "crs": "CDS"
  },
  {
    "code": "5409",
    "name": "Cowden",
    "crs": "CWN"
  },
  {
    "code": "5410",
    "name": "South Croydon",
    "crs": "SCY"
  },
  {
    "code": "5411",
    "name": "West Croydon",
    "crs": "WCY"
  },
  {
    "code": "5412",
    "name": "Dorking Deepdene",
    "crs": "DPD"
  },
  {
    "code": "5413",
    "name": "Dormans",
    "crs": "DMS"
  },
  {
    "code": "5414",
    "name": "Earlswood (Surrey)",
    "crs": "ELD"
  },
  {
    "code": "5415",
    "name": "Ewell East",
    "crs": "EWE"
  },
  {
    "code": "5416",
    "name": "Gatwick Airport",
    "crs": "GTW"
  },
  {
    "code": "5417",
    "name": "Hever",
    "crs": "HEV"
  },
  {
    "code": "5418",
    "name": "Honor Oak Park",
    "crs": "HPA"
  },
  {
    "code": "5419",
    "name": "Kenley",
    "crs": "KLY"
  },
  {
    "code": "5420",
    "name": "Battersea Park",
    "crs": "BAK"
  },
  {
    "code": "5421",
    "name": "Denmark Hill",
    "crs": "DMK"
  },
  {
    "code": "5423",
    "name": "Peckham Rye",
    "crs": "PMR"
  },
  {
    "code": "5424",
    "name": "Queens Road Peckham",
    "crs": "QRP"
  },
  {
    "code": "5425",
    "name": "South Bermondsey",
    "crs": "SBM"
  },
  {
    "code": "5426",
    "name": "London Victoria",
    "crs": "VIC"
  },
  {
    "code": "5427",
    "name": "Mitcham Junction",
    "crs": "MIJ"
  },
  {
    "code": "5428",
    "name": "Norbury",
    "crs": "NRB"
  },
  {
    "code": "5429",
    "name": "North Dulwich",
    "crs": "NDL"
  },
  {
    "code": "5430",
    "name": "Purley Oaks",
    "crs": "PUO"
  },
  {
    "code": "5431",
    "name": "Reedham (London)",
    "crs": "RHM"
  },
  {
    "code": "5432",
    "name": "Riddlesdown",
    "crs": "RDD"
  },
  {
    "code": "5433",
    "name": "Sanderstead",
    "crs": "SNR"
  },
  {
    "code": "5434",
    "name": "Selhurst",
    "crs": "SRS"
  },
  {
    "code": "5435",
    "name": "Streatham Hill",
    "crs": "SRH"
  },
  {
    "code": "5436",
    "name": "Sutton Common",
    "crs": "SUC"
  },
  {
    "code": "5437",
    "name": "Sydenham",
    "crs": "SYD"
  },
  {
    "code": "5438",
    "name": "West Norwood",
    "crs": "WNW"
  },
  {
    "code": "5439",
    "name": "Whyteleafe South",
    "crs": "WHS"
  },
  {
    "code": "5440",
    "name": "Woldingham",
    "crs": "WOH"
  },
  {
    "code": "5441",
    "name": "Woodmansterne",
    "crs": "WME"
  },
  {
    "code": "5448",
    "name": "Eastbourne",
    "crs": "EBN"
  },
  {
    "code": "5450",
    "name": "Hampden Park (Sussex)",
    "crs": "HMD"
  },
  {
    "code": "5455",
    "name": "Polegate",
    "crs": "PLG"
  },
  {
    "code": "5457",
    "name": "Collington",
    "crs": "CLL"
  },
  {
    "code": "5458",
    "name": "Cooden Beach",
    "crs": "COB"
  },
  {
    "code": "5459",
    "name": "Eridge",
    "crs": "ERI"
  },
  {
    "code": "5460",
    "name": "Normans Bay",
    "crs": "NSB"
  },
  {
    "code": "5461",
    "name": "Pevensey & Westham",
    "crs": "PEV"
  },
  {
    "code": "5462",
    "name": "Pevensey Bay",
    "crs": "PEB"
  },
  {
    "code": "5463",
    "name": "Hurst Green",
    "crs": "HUR"
  },
  {
    "code": "5464",
    "name": "Billingshurst",
    "crs": "BIG"
  },
  {
    "code": "5466",
    "name": "Ashford Intl(Civ",
    "crs": "ASI"
  },
  {
    "code": "5468",
    "name": "Pulborough",
    "crs": "PUL"
  },
  {
    "code": "5470",
    "name": "London International(Civ)",
    "crs": "LNE"
  },
  {
    "code": "5472",
    "name": "Betchworth",
    "crs": "BTO"
  },
  {
    "code": "5473",
    "name": "Edenbridge",
    "crs": "EBR"
  },
  {
    "code": "5474",
    "name": "Godstone",
    "crs": "GDN"
  },
  {
    "code": "5475",
    "name": "Merstham",
    "crs": "MHM"
  },
  {
    "code": "5476",
    "name": "Nutfield",
    "crs": "NUF"
  },
  {
    "code": "5477",
    "name": "Penshurst",
    "crs": "PHR"
  },
  {
    "code": "5478",
    "name": "Redhill",
    "crs": "RDH"
  },
  {
    "code": "5480",
    "name": "Reigate",
    "crs": "REI"
  },
  {
    "code": "5483",
    "name": "Burgess Hill",
    "crs": "BUG"
  },
  {
    "code": "5484",
    "name": "Crawley",
    "crs": "CRW"
  },
  {
    "code": "5486",
    "name": "East Grinstead",
    "crs": "EGR"
  },
  {
    "code": "5489",
    "name": "Hassocks",
    "crs": "HSK"
  },
  {
    "code": "5490",
    "name": "Haywards Heath",
    "crs": "HHE"
  },
  {
    "code": "5491",
    "name": "Three Bridges",
    "crs": "TBD"
  },
  {
    "code": "5492",
    "name": "Balcombe",
    "crs": "BAB"
  },
  {
    "code": "5493",
    "name": "Faygate",
    "crs": "FGT"
  },
  {
    "code": "5494",
    "name": "Smallbrook Junction",
    "crs": "SAB"
  },
  {
    "code": "5495",
    "name": "Ifield",
    "crs": "IFI"
  },
  {
    "code": "5498",
    "name": "Littlehaven",
    "crs": "LVN"
  },
  {
    "code": "5500",
    "name": "Bramley (Hants)",
    "crs": "BMY"
  },
  {
    "code": "5501",
    "name": "Mortimer",
    "crs": "MOR"
  },
  {
    "code": "5502",
    "name": "Dilton Marsh",
    "crs": "DMH"
  },
  {
    "code": "5504",
    "name": "Lake",
    "crs": "LKE"
  },
  {
    "code": "5505",
    "name": "Warminster",
    "crs": "WMN"
  },
  {
    "code": "5509",
    "name": "Fratton",
    "crs": "FTN"
  },
  {
    "code": "5510",
    "name": "Andover",
    "crs": "ADV"
  },
  {
    "code": "5514",
    "name": "Grateley",
    "crs": "GRT"
  },
  {
    "code": "5520",
    "name": "Basingstoke",
    "crs": "BSK"
  },
  {
    "code": "5521",
    "name": "Farnborough (Main)",
    "crs": "FNB"
  },
  {
    "code": "5522",
    "name": "Fleet",
    "crs": "FLE"
  },
  {
    "code": "5523",
    "name": "Hook",
    "crs": "HOK"
  },
  {
    "code": "5525",
    "name": "Sandown",
    "crs": "SAN"
  },
  {
    "code": "5526",
    "name": "Overton",
    "crs": "OVR"
  },
  {
    "code": "5527",
    "name": "Whitchurch (Hampshire)",
    "crs": "WCH"
  },
  {
    "code": "5528",
    "name": "Winchfield",
    "crs": "WNF"
  },
  {
    "code": "5529",
    "name": "Shanklin",
    "crs": "SHN"
  },
  {
    "code": "5530",
    "name": "Brading",
    "crs": "BDN"
  },
  {
    "code": "5532",
    "name": "Havant",
    "crs": "HAV"
  },
  {
    "code": "5537",
    "name": "Portsmouth & Southsea",
    "crs": "PMS"
  },
  {
    "code": "5538",
    "name": "Bedhampton",
    "crs": "BDH"
  },
  {
    "code": "5539",
    "name": "Hilsea",
    "crs": "HLS"
  },
  {
    "code": "5540",
    "name": "Portsmouth Harbour",
    "crs": "PMH"
  },
  {
    "code": "5541",
    "name": "Ryde Pier Head",
    "crs": "RYP"
  },
  {
    "code": "5542",
    "name": "Ryde Esplanade",
    "crs": "RYD"
  },
  {
    "code": "5543",
    "name": "Ryde St Johns Road",
    "crs": "RYR"
  },
  {
    "code": "5544",
    "name": "Alton",
    "crs": "AON"
  },
  {
    "code": "5545",
    "name": "Farnham",
    "crs": "FNH"
  },
  {
    "code": "5547",
    "name": "Ash Vale",
    "crs": "AHV"
  },
  {
    "code": "5550",
    "name": "Addlestone",
    "crs": "ASN"
  },
  {
    "code": "5551",
    "name": "Barnes",
    "crs": "BNS"
  },
  {
    "code": "5552",
    "name": "Brentford",
    "crs": "BFD"
  },
  {
    "code": "5553",
    "name": "Chertsey",
    "crs": "CHY"
  },
  {
    "code": "5554",
    "name": "Chessington South",
    "crs": "CSS"
  },
  {
    "code": "5555",
    "name": "Clandon",
    "crs": "CLA"
  },
  {
    "code": "5556",
    "name": "Claygate",
    "crs": "CLG"
  },
  {
    "code": "5557",
    "name": "Cobham & Stoke D'Abernon",
    "crs": "CSD"
  },
  {
    "code": "5558",
    "name": "Esher",
    "crs": "ESH"
  },
  {
    "code": "5559",
    "name": "Feltham",
    "crs": "FEL"
  },
  {
    "code": "5560",
    "name": "Hampton (London)",
    "crs": "HMP"
  },
  {
    "code": "5561",
    "name": "Hampton Court",
    "crs": "HMC"
  },
  {
    "code": "5562",
    "name": "Horsley",
    "crs": "HSY"
  },
  {
    "code": "5563",
    "name": "Hounslow",
    "crs": "HOU"
  },
  {
    "code": "5565",
    "name": "Kingston",
    "crs": "KNG"
  },
  {
    "code": "5566",
    "name": "Ebbsfleet International",
    "crs": "EBD"
  },
  {
    "code": "5567",
    "name": "New Malden",
    "crs": "NEM"
  },
  {
    "code": "5568",
    "name": "Norbiton",
    "crs": "NBT"
  },
  {
    "code": "5569",
    "name": "Raynes Park",
    "crs": "RAY"
  },
  {
    "code": "5570",
    "name": "Richmond (London)",
    "crs": "RMD"
  },
  {
    "code": "5570",
    "name": "Richmond (Surrey)",
    "crs": "RMD"
  },
  {
    "code": "5571",
    "name": "Surbiton",
    "crs": "SUR"
  },
  {
    "code": "5572",
    "name": "Teddington",
    "crs": "TED"
  },
  {
    "code": "5573",
    "name": "Tolworth",
    "crs": "TOL"
  },
  {
    "code": "5574",
    "name": "Twickenham",
    "crs": "TWI"
  },
  {
    "code": "5575",
    "name": "Walton-on-Thames",
    "crs": "WAL"
  },
  {
    "code": "5576",
    "name": "Wandsworth Town",
    "crs": "WNT"
  },
  {
    "code": "5577",
    "name": "Weybridge",
    "crs": "WYB"
  },
  {
    "code": "5578",
    "name": "Wimbledon",
    "crs": "WIM"
  },
  {
    "code": "5579",
    "name": "Worcester Park",
    "crs": "WCP"
  },
  {
    "code": "5580",
    "name": "Barnes Bridge",
    "crs": "BNI"
  },
  {
    "code": "5581",
    "name": "Berrylands",
    "crs": "BRS"
  },
  {
    "code": "5582",
    "name": "Chessington North",
    "crs": "CSN"
  },
  {
    "code": "5583",
    "name": "Chiswick",
    "crs": "CHK"
  },
  {
    "code": "5584",
    "name": "Earlsfield",
    "crs": "EAD"
  },
  {
    "code": "5586",
    "name": "Ewell West",
    "crs": "EWW"
  },
  {
    "code": "5587",
    "name": "Fulwell",
    "crs": "FLW"
  },
  {
    "code": "5588",
    "name": "Gunnersbury",
    "crs": "GUN"
  },
  {
    "code": "5589",
    "name": "Hampton Wick",
    "crs": "HMW"
  },
  {
    "code": "5590",
    "name": "Hersham",
    "crs": "HER"
  },
  {
    "code": "5591",
    "name": "Hinchley Wood",
    "crs": "HYW"
  },
  {
    "code": "5592",
    "name": "Isleworth",
    "crs": "ISL"
  },
  {
    "code": "5593",
    "name": "Kew Bridge",
    "crs": "KWB"
  },
  {
    "code": "5594",
    "name": "Kew Gardens",
    "crs": "KWG"
  },
  {
    "code": "5595",
    "name": "Clapham Junction",
    "crs": "CLJ"
  },
  {
    "code": "5596",
    "name": "Queenstown Road (Battersea",
    "crs": "QRB"
  },
  {
    "code": "5597",
    "name": "Vauxhall",
    "crs": "VXH"
  },
  {
    "code": "5598",
    "name": "London Waterloo",
    "crs": "WAT"
  },
  {
    "code": "5599",
    "name": "Malden Manor",
    "crs": "MAL"
  },
  {
    "code": "5600",
    "name": "Mortlake",
    "crs": "MTL"
  },
  {
    "code": "5601",
    "name": "North Sheen",
    "crs": "NSH"
  },
  {
    "code": "5602",
    "name": "Oxshott",
    "crs": "OXS"
  },
  {
    "code": "5603",
    "name": "Putney",
    "crs": "PUT"
  },
  {
    "code": "5604",
    "name": "St Margarets (London)",
    "crs": "SMG"
  },
  {
    "code": "5605",
    "name": "Shepperton",
    "crs": "SHP"
  },
  {
    "code": "5606",
    "name": "Stoneleigh",
    "crs": "SNL"
  },
  {
    "code": "5607",
    "name": "Strawberry Hill",
    "crs": "STW"
  },
  {
    "code": "5608",
    "name": "Sunbury",
    "crs": "SUU"
  },
  {
    "code": "5609",
    "name": "Syon Lane",
    "crs": "SYL"
  },
  {
    "code": "5610",
    "name": "Thames Ditton",
    "crs": "THD"
  },
  {
    "code": "5611",
    "name": "Whitton (London)",
    "crs": "WTN"
  },
  {
    "code": "5612",
    "name": "Wimbledon Chase",
    "crs": "WBO"
  },
  {
    "code": "5613",
    "name": "Upper Halliford",
    "crs": "UPH"
  },
  {
    "code": "5623",
    "name": "Aldershot",
    "crs": "AHT"
  },
  {
    "code": "5624",
    "name": "Bentley (Hants)",
    "crs": "BTY"
  },
  {
    "code": "5625",
    "name": "Blackwater",
    "crs": "BAW"
  },
  {
    "code": "5626",
    "name": "Bookham",
    "crs": "BKA"
  },
  {
    "code": "5628",
    "name": "Crowthorne",
    "crs": "CRN"
  },
  {
    "code": "5629",
    "name": "Godalming",
    "crs": "GOD"
  },
  {
    "code": "5631",
    "name": "Guildford",
    "crs": "GLD"
  },
  {
    "code": "5632",
    "name": "London Road (Guildford)",
    "crs": "LRD"
  },
  {
    "code": "5633",
    "name": "Haslemere",
    "crs": "HSL"
  },
  {
    "code": "5634",
    "name": "Liphook",
    "crs": "LIP"
  },
  {
    "code": "5635",
    "name": "Liss",
    "crs": "LIS"
  },
  {
    "code": "5636",
    "name": "North Camp",
    "crs": "NCM"
  },
  {
    "code": "5638",
    "name": "Shalford (Surrey)",
    "crs": "SFR"
  },
  {
    "code": "5639",
    "name": "Wanborough",
    "crs": "WAN"
  },
  {
    "code": "5640",
    "name": "Witley",
    "crs": "WTY"
  },
  {
    "code": "5641",
    "name": "Ash",
    "crs": "ASH"
  },
  {
    "code": "5642",
    "name": "Effingham Junction",
    "crs": "EFF"
  },
  {
    "code": "5643",
    "name": "Farncombe",
    "crs": "FNC"
  },
  {
    "code": "5644",
    "name": "Milford (Surrey)",
    "crs": "MLF"
  },
  {
    "code": "5645",
    "name": "Motspur Park",
    "crs": "MOT"
  },
  {
    "code": "5646",
    "name": "Sandhurst (Berkshire)",
    "crs": "SND"
  },
  {
    "code": "5657",
    "name": "Petersfield",
    "crs": "PTR"
  },
  {
    "code": "5658",
    "name": "Rowlands Castle",
    "crs": "RLN"
  },
  {
    "code": "5663",
    "name": "Salisbury",
    "crs": "SAL"
  },
  {
    "code": "5666",
    "name": "Ascot",
    "crs": "ACT"
  },
  {
    "code": "5667",
    "name": "Ashford (Surrey)",
    "crs": "AFS"
  },
  {
    "code": "5668",
    "name": "Datchet",
    "crs": "DAT"
  },
  {
    "code": "5669",
    "name": "Egham",
    "crs": "EGH"
  },
  {
    "code": "5670",
    "name": "Staines",
    "crs": "SNS"
  },
  {
    "code": "5671",
    "name": "Sunningdale",
    "crs": "SNG"
  },
  {
    "code": "5672",
    "name": "Windsor & Eton Riverside",
    "crs": "WNR"
  },
  {
    "code": "5673",
    "name": "Wraysbury",
    "crs": "WRY"
  },
  {
    "code": "5674",
    "name": "Longcross",
    "crs": "LNG"
  },
  {
    "code": "5675",
    "name": "Sunnymeads",
    "crs": "SNY"
  },
  {
    "code": "5676",
    "name": "Virginia Water",
    "crs": "VIR"
  },
  {
    "code": "5678",
    "name": "Kempton Park",
    "crs": "KMP"
  },
  {
    "code": "5681",
    "name": "Bagshot",
    "crs": "BAG"
  },
  {
    "code": "5682",
    "name": "Camberley",
    "crs": "CAM"
  },
  {
    "code": "5683",
    "name": "Frimley",
    "crs": "FML"
  },
  {
    "code": "5684",
    "name": "West Byfleet",
    "crs": "WBY"
  },
  {
    "code": "5685",
    "name": "Woking",
    "crs": "WOK"
  },
  {
    "code": "5686",
    "name": "Worplesdon",
    "crs": "WPL"
  },
  {
    "code": "5687",
    "name": "Brookwood",
    "crs": "BKO"
  },
  {
    "code": "5688",
    "name": "Farnborough North",
    "crs": "FNN"
  },
  {
    "code": "5689",
    "name": "Byfleet & New Haw",
    "crs": "BFN"
  },
  {
    "code": "5692",
    "name": "Martins Heron",
    "crs": "MAO"
  },
  {
    "code": "5693",
    "name": "Bracknell",
    "crs": "BCE"
  },
  {
    "code": "5694",
    "name": "Earley",
    "crs": "EAR"
  },
  {
    "code": "5696",
    "name": "Wokingham",
    "crs": "WKM"
  },
  {
    "code": "5697",
    "name": "Winnersh",
    "crs": "WNS"
  },
  {
    "code": "5698",
    "name": "Winnersh Triangle",
    "crs": "WTI"
  },
  {
    "code": "5702",
    "name": "Bruton",
    "crs": "BRU"
  },
  {
    "code": "5703",
    "name": "Castle Cary",
    "crs": "CLC"
  },
  {
    "code": "5707",
    "name": "Frome",
    "crs": "FRO"
  },
  {
    "code": "5712",
    "name": "Westbury",
    "crs": "WSB"
  },
  {
    "code": "5714",
    "name": "Axminster",
    "crs": "AXM"
  },
  {
    "code": "5717",
    "name": "Honiton",
    "crs": "HON"
  },
  {
    "code": "5725",
    "name": "Barnstaple",
    "crs": "BNP"
  },
  {
    "code": "5751",
    "name": "St James Park (Exeter)",
    "crs": "SJP"
  },
  {
    "code": "5753",
    "name": "Digby & Sowton",
    "crs": "DIG"
  },
  {
    "code": "5754",
    "name": "Crediton",
    "crs": "CDI"
  },
  {
    "code": "5755",
    "name": "Exeter Central",
    "crs": "EXC"
  },
  {
    "code": "5756",
    "name": "Exmouth",
    "crs": "EXM"
  },
  {
    "code": "5757",
    "name": "Pinhoe",
    "crs": "PIN"
  },
  {
    "code": "5758",
    "name": "Topsham",
    "crs": "TOP"
  },
  {
    "code": "5759",
    "name": "Whimple",
    "crs": "WHM"
  },
  {
    "code": "5760",
    "name": "Exton",
    "crs": "EXN"
  },
  {
    "code": "5761",
    "name": "Lympstone Village",
    "crs": "LYM"
  },
  {
    "code": "5762",
    "name": "Lympstone Commando",
    "crs": "LYC"
  },
  {
    "code": "5786",
    "name": "Okehampton",
    "crs": "OKE"
  },
  {
    "code": "5796",
    "name": "Gillingham (Dorset)",
    "crs": "GIL"
  },
  {
    "code": "5798",
    "name": "Tisbury",
    "crs": "TIS"
  },
  {
    "code": "5808",
    "name": "Feniton",
    "crs": "FNT"
  },
  {
    "code": "5820",
    "name": "Chapelton (Devon)",
    "crs": "CPN"
  },
  {
    "code": "5821",
    "name": "Copplestone",
    "crs": "COP"
  },
  {
    "code": "5822",
    "name": "Eggesford",
    "crs": "EGG"
  },
  {
    "code": "5823",
    "name": "Kings Nympton",
    "crs": "KGN"
  },
  {
    "code": "5824",
    "name": "Lapford",
    "crs": "LAP"
  },
  {
    "code": "5825",
    "name": "Morchard Road",
    "crs": "MRD"
  },
  {
    "code": "5826",
    "name": "Umberleigh",
    "crs": "UMB"
  },
  {
    "code": "5827",
    "name": "Yeoford",
    "crs": "YEO"
  },
  {
    "code": "5828",
    "name": "Newton St Cyres",
    "crs": "NTC"
  },
  {
    "code": "5829",
    "name": "Portsmouth Arms",
    "crs": "PMA"
  },
  {
    "code": "5832",
    "name": "Crewkerne",
    "crs": "CKN"
  },
  {
    "code": "5835",
    "name": "Sherborne",
    "crs": "SHE"
  },
  {
    "code": "5836",
    "name": "Chandlers Ford",
    "crs": "CFR"
  },
  {
    "code": "5837",
    "name": "Templecombe",
    "crs": "TMC"
  },
  {
    "code": "5838",
    "name": "Yeovil Junction",
    "crs": "YVJ"
  },
  {
    "code": "5840",
    "name": "Chetnole",
    "crs": "CNO"
  },
  {
    "code": "5849",
    "name": "Thornford",
    "crs": "THO"
  },
  {
    "code": "5853",
    "name": "Maiden Newton",
    "crs": "MDN"
  },
  {
    "code": "5856",
    "name": "Yeovil Pen Mill",
    "crs": "YVP"
  },
  {
    "code": "5857",
    "name": "Yetminster",
    "crs": "YET"
  },
  {
    "code": "5875",
    "name": "Branksome",
    "crs": "BSM"
  },
  {
    "code": "5876",
    "name": "Bournemouth",
    "crs": "BMH"
  },
  {
    "code": "5879",
    "name": "Christchurch",
    "crs": "CHR"
  },
  {
    "code": "5880",
    "name": "Hinton Admiral",
    "crs": "HNA"
  },
  {
    "code": "5881",
    "name": "New Milton",
    "crs": "NWM"
  },
  {
    "code": "5882",
    "name": "Parkstone (Dorset)",
    "crs": "PKS"
  },
  {
    "code": "5883",
    "name": "Poole",
    "crs": "POO"
  },
  {
    "code": "5884",
    "name": "Sway",
    "crs": "SWY"
  },
  {
    "code": "5885",
    "name": "Pokesdown",
    "crs": "POK"
  },
  {
    "code": "5886",
    "name": "Brockenhurst",
    "crs": "BCU"
  },
  {
    "code": "5887",
    "name": "Lymington Town",
    "crs": "LYT"
  },
  {
    "code": "5890",
    "name": "Beaulieu Road",
    "crs": "BEU"
  },
  {
    "code": "5891",
    "name": "Poole Quay",
    "crs": "PFT"
  },
  {
    "code": "5892",
    "name": "Lymington Pier",
    "crs": "LYP"
  },
  {
    "code": "5893",
    "name": "Hedge End",
    "crs": "HDE"
  },
  {
    "code": "5894",
    "name": "Botley",
    "crs": "BOE"
  },
  {
    "code": "5896",
    "name": "Cosham",
    "crs": "CSA"
  },
  {
    "code": "5899",
    "name": "Eastleigh",
    "crs": "ESL"
  },
  {
    "code": "5900",
    "name": "Fareham",
    "crs": "FRM"
  },
  {
    "code": "5906",
    "name": "Ashurst New Forest",
    "crs": "ANF"
  },
  {
    "code": "5908",
    "name": "Micheldever",
    "crs": "MIC"
  },
  {
    "code": "5909",
    "name": "Millbrook (Hampshire)",
    "crs": "MBK"
  },
  {
    "code": "5911",
    "name": "Netley",
    "crs": "NTL"
  },
  {
    "code": "5912",
    "name": "Redbridge",
    "crs": "RDB"
  },
  {
    "code": "5914",
    "name": "St Denys",
    "crs": "SDN"
  },
  {
    "code": "5920",
    "name": "Swanwick",
    "crs": "SNW"
  },
  {
    "code": "5921",
    "name": "Totton",
    "crs": "TTN"
  },
  {
    "code": "5922",
    "name": "Southampton Airport Parkwa",
    "crs": "SOA"
  },
  {
    "code": "5924",
    "name": "Winchester",
    "crs": "WIN"
  },
  {
    "code": "5925",
    "name": "Woolston",
    "crs": "WLS"
  },
  {
    "code": "5927",
    "name": "Bursledon",
    "crs": "BUO"
  },
  {
    "code": "5928",
    "name": "Portchester",
    "crs": "PTC"
  },
  {
    "code": "5929",
    "name": "Shawford",
    "crs": "SHW"
  },
  {
    "code": "5930",
    "name": "Sholing",
    "crs": "SHO"
  },
  {
    "code": "5931",
    "name": "Soton Royal Pier",
    "crs": "SMP"
  },
  {
    "code": "5932",
    "name": "Southampton Central",
    "crs": "SOU"
  },
  {
    "code": "5933",
    "name": "Swaythling",
    "crs": "SWG"
  },
  {
    "code": "5940",
    "name": "Hamworthy",
    "crs": "HAM"
  },
  {
    "code": "5941",
    "name": "Holton Heath",
    "crs": "HOL"
  },
  {
    "code": "5942",
    "name": "Dean",
    "crs": "DEN"
  },
  {
    "code": "5943",
    "name": "Romsey",
    "crs": "ROM"
  },
  {
    "code": "5944",
    "name": "Mottisfont & Dunbridge",
    "crs": "DBG"
  },
  {
    "code": "5945",
    "name": "Bitterne",
    "crs": "BTE"
  },
  {
    "code": "5947",
    "name": "Hamble",
    "crs": "HME"
  },
  {
    "code": "5957",
    "name": "Moreton (Dorset)",
    "crs": "MTN"
  },
  {
    "code": "5958",
    "name": "Swanage",
    "crs": "SGE"
  },
  {
    "code": "5959",
    "name": "Wareham",
    "crs": "WRM"
  },
  {
    "code": "5960",
    "name": "Wool",
    "crs": "WOO"
  },
  {
    "code": "5961",
    "name": "Dorchester South",
    "crs": "DCH"
  },
  {
    "code": "5962",
    "name": "Dorchester West",
    "crs": "DCW"
  },
  {
    "code": "5965",
    "name": "Weymouth",
    "crs": "WEY"
  },
  {
    "code": "5966",
    "name": "Weymouth Quay",
    "crs": "WYQ"
  },
  {
    "code": "5967",
    "name": "Upwey",
    "crs": "UPW"
  },
  {
    "code": "5979",
    "name": "Southampton Dks",
    "crs": "SDK"
  },
  {
    "code": "6000",
    "name": "Drayton Park",
    "crs": "DYP"
  },
  {
    "code": "6003",
    "name": "Old Street",
    "crs": "OLD"
  },
  {
    "code": "6004",
    "name": "Essex Road",
    "crs": "EXR"
  },
  {
    "code": "6005",
    "name": "Moorgate",
    "crs": "MOG"
  },
  {
    "code": "6006",
    "name": "Bayford",
    "crs": "BAY"
  },
  {
    "code": "6007",
    "name": "Crews Hill",
    "crs": "CWH"
  },
  {
    "code": "6008",
    "name": "Cuffley",
    "crs": "CUF"
  },
  {
    "code": "6009",
    "name": "Highbury & Islington",
    "crs": "HHY"
  },
  {
    "code": "6009",
    "name": "Highbury & Islington Nll",
    "crs": "HHY"
  },
  {
    "code": "6010",
    "name": "Enfield Chase",
    "crs": "ENC"
  },
  {
    "code": "6012",
    "name": "Harringay",
    "crs": "HGY"
  },
  {
    "code": "6015",
    "name": "Hornsey",
    "crs": "HRN"
  },
  {
    "code": "6018",
    "name": "New Barnet",
    "crs": "NBA"
  },
  {
    "code": "6019",
    "name": "New Southgate",
    "crs": "NSG"
  },
  {
    "code": "6020",
    "name": "Oakleigh Park",
    "crs": "OKL"
  },
  {
    "code": "6021",
    "name": "Palmers Green",
    "crs": "PAL"
  },
  {
    "code": "6022",
    "name": "Potters Bar",
    "crs": "PBR"
  },
  {
    "code": "6024",
    "name": "Winchmore Hill",
    "crs": "WIH"
  },
  {
    "code": "6025",
    "name": "Alexandra Palace",
    "crs": "AAP"
  },
  {
    "code": "6027",
    "name": "Bowes Park",
    "crs": "BOP"
  },
  {
    "code": "6028",
    "name": "Gordon Hill",
    "crs": "GDH"
  },
  {
    "code": "6029",
    "name": "Grange Park",
    "crs": "GPK"
  },
  {
    "code": "6070",
    "name": "Hatfield (Herts)",
    "crs": "HAT"
  },
  {
    "code": "6073",
    "name": "Welham Green",
    "crs": "WMG"
  },
  {
    "code": "6074",
    "name": "Brookmans Park",
    "crs": "BPK"
  },
  {
    "code": "6075",
    "name": "Hadley Wood",
    "crs": "HDW"
  },
  {
    "code": "6083",
    "name": "Ashwell & Morden",
    "crs": "AWM"
  },
  {
    "code": "6084",
    "name": "Baldock",
    "crs": "BDK"
  },
  {
    "code": "6085",
    "name": "Hertford North",
    "crs": "HFN"
  },
  {
    "code": "6086",
    "name": "Hitchin",
    "crs": "HIT"
  },
  {
    "code": "6088",
    "name": "Knebworth",
    "crs": "KBW"
  },
  {
    "code": "6089",
    "name": "Letchworth Garden City",
    "crs": "LET"
  },
  {
    "code": "6090",
    "name": "Royston",
    "crs": "RYS"
  },
  {
    "code": "6092",
    "name": "Stevenage",
    "crs": "SVG"
  },
  {
    "code": "6095",
    "name": "Watton-at-Stone",
    "crs": "WAS"
  },
  {
    "code": "6096",
    "name": "Welwyn North",
    "crs": "WLW"
  },
  {
    "code": "6108",
    "name": "Huntingdon",
    "crs": "HUN"
  },
  {
    "code": "6110",
    "name": "St Neots",
    "crs": "SNO"
  },
  {
    "code": "6119",
    "name": "Finsbury Park",
    "crs": "FPK"
  },
  {
    "code": "6121",
    "name": "London Kings Cross",
    "crs": "KGX"
  },
  {
    "code": "6133",
    "name": "Peterborough",
    "crs": "PBO"
  },
  {
    "code": "6140",
    "name": "Stamford",
    "crs": "SMD"
  },
  {
    "code": "6158",
    "name": "Atos Online 1",
    "crs": ""
  },
  {
    "code": "6170",
    "name": "Biggleswade",
    "crs": "BIW"
  },
  {
    "code": "6171",
    "name": "Arlesey",
    "crs": "ARL"
  },
  {
    "code": "6172",
    "name": "Sandy",
    "crs": "SDY"
  },
  {
    "code": "6183",
    "name": "Welwyn Garden City",
    "crs": "WGC"
  },
  {
    "code": "6200",
    "name": "Burton Joyce",
    "crs": "BUJ"
  },
  {
    "code": "6201",
    "name": "Carlton",
    "crs": "CTO"
  },
  {
    "code": "6202",
    "name": "Lowdham",
    "crs": "LOW"
  },
  {
    "code": "6203",
    "name": "Thurgarton",
    "crs": "THU"
  },
  {
    "code": "6204",
    "name": "Bleasby",
    "crs": "BSB"
  },
  {
    "code": "6206",
    "name": "Goxhill",
    "crs": "GOX"
  },
  {
    "code": "6207",
    "name": "Barton-on-Humber",
    "crs": "BAU"
  },
  {
    "code": "6209",
    "name": "New Holland",
    "crs": "NHL"
  },
  {
    "code": "6210",
    "name": "Thornton Abbey",
    "crs": "TNA"
  },
  {
    "code": "6211",
    "name": "Ulceby",
    "crs": "ULC"
  },
  {
    "code": "6212",
    "name": "Barrow Haven",
    "crs": "BAV"
  },
  {
    "code": "6216",
    "name": "Boston",
    "crs": "BSN"
  },
  {
    "code": "6220",
    "name": "Heckington",
    "crs": "HEC"
  },
  {
    "code": "6221",
    "name": "Hubberts Bridge",
    "crs": "HBB"
  },
  {
    "code": "6228",
    "name": "Swineshead",
    "crs": "SWE"
  },
  {
    "code": "6233",
    "name": "Aslockton",
    "crs": "ALK"
  },
  {
    "code": "6235",
    "name": "Bingham",
    "crs": "BIN"
  },
  {
    "code": "6237",
    "name": "Bottesford",
    "crs": "BTF"
  },
  {
    "code": "6238",
    "name": "Elton & Orston",
    "crs": "ELO"
  },
  {
    "code": "6241",
    "name": "Netherfield",
    "crs": "NET"
  },
  {
    "code": "6242",
    "name": "Radcliffe (Nottinghamshire",
    "crs": "RDF"
  },
  {
    "code": "6245",
    "name": "Nutfield Memorial Hall",
    "crs": "XET"
  },
  {
    "code": "6260",
    "name": "Havenhouse",
    "crs": "HVN"
  },
  {
    "code": "6265",
    "name": "Skegness",
    "crs": "SKG"
  },
  {
    "code": "6267",
    "name": "Thorpe Culvert",
    "crs": "TPC"
  },
  {
    "code": "6268",
    "name": "Wainfleet",
    "crs": "WFL"
  },
  {
    "code": "6274",
    "name": "Cleethorpes",
    "crs": "CLE"
  },
  {
    "code": "6275",
    "name": "Great Coates",
    "crs": "GCT"
  },
  {
    "code": "6276",
    "name": "Grimsby Docks",
    "crs": "GMD"
  },
  {
    "code": "6280",
    "name": "Grimsby Town",
    "crs": "GMB"
  },
  {
    "code": "6281",
    "name": "Habrough",
    "crs": "HAB"
  },
  {
    "code": "6283",
    "name": "Healing",
    "crs": "HLI"
  },
  {
    "code": "6287",
    "name": "Stallingborough",
    "crs": "SLL"
  },
  {
    "code": "6289",
    "name": "New Clee",
    "crs": "NCE"
  },
  {
    "code": "6297",
    "name": "Metheringham",
    "crs": "MGM"
  },
  {
    "code": "6310",
    "name": "Hykeham",
    "crs": "HKM"
  },
  {
    "code": "6318",
    "name": "Market Rasen",
    "crs": "MKR"
  },
  {
    "code": "6327",
    "name": "Ruskington",
    "crs": "RKT"
  },
  {
    "code": "6328",
    "name": "Saxilby",
    "crs": "SXY"
  },
  {
    "code": "6340",
    "name": "Lincoln",
    "crs": "LCN"
  },
  {
    "code": "6349",
    "name": "Collingham",
    "crs": "CLM"
  },
  {
    "code": "6351",
    "name": "Fiskerton",
    "crs": "FSK"
  },
  {
    "code": "6353",
    "name": "Rolleston",
    "crs": "ROL"
  },
  {
    "code": "6355",
    "name": "Swinderby",
    "crs": "SWD"
  },
  {
    "code": "6358",
    "name": "Ancaster",
    "crs": "ANC"
  },
  {
    "code": "6361",
    "name": "Rauceby",
    "crs": "RAU"
  },
  {
    "code": "6362",
    "name": "Sleaford",
    "crs": "SLR"
  },
  {
    "code": "6388",
    "name": "Spalding",
    "crs": "SPA"
  },
  {
    "code": "6389",
    "name": "Droylesden Mtlk",
    "crs": "DML"
  },
  {
    "code": "6391",
    "name": "Gorebridge",
    "crs": "GBG"
  },
  {
    "code": "6392",
    "name": "Reading Bus",
    "crs": "RBU"
  },
  {
    "code": "6393",
    "name": "Conon Bridge",
    "crs": "CBD"
  },
  {
    "code": "6401",
    "name": "Kiveton Bridge",
    "crs": "KIV"
  },
  {
    "code": "6406",
    "name": "Barnetby",
    "crs": "BTB"
  },
  {
    "code": "6417",
    "name": "Doncaster",
    "crs": "DON"
  },
  {
    "code": "6424",
    "name": "Gainsborough Lea Road",
    "crs": "GBL"
  },
  {
    "code": "6456",
    "name": "Scunthorpe",
    "crs": "SCU"
  },
  {
    "code": "6464",
    "name": "Brigg",
    "crs": "BGG"
  },
  {
    "code": "6465",
    "name": "Gainsborough Central",
    "crs": "GNB"
  },
  {
    "code": "6466",
    "name": "Kirton Lindsey",
    "crs": "KTL"
  },
  {
    "code": "6469",
    "name": "Grantham",
    "crs": "GRA"
  },
  {
    "code": "6488",
    "name": "Conisbrough",
    "crs": "CNS"
  },
  {
    "code": "6498",
    "name": "Newark Castle",
    "crs": "NCT"
  },
  {
    "code": "6499",
    "name": "Newark North Gate",
    "crs": "NNG"
  },
  {
    "code": "6511",
    "name": "Retford Low Level",
    "crs": "RET"
  },
  {
    "code": "6511",
    "name": "Retford",
    "crs": "RET"
  },
  {
    "code": "6524",
    "name": "Crowle",
    "crs": "CWE"
  },
  {
    "code": "6527",
    "name": "Kirk Sandall",
    "crs": "KKS"
  },
  {
    "code": "6528",
    "name": "Hatfield & Stainforth",
    "crs": "HFS"
  },
  {
    "code": "6530",
    "name": "Thorne North",
    "crs": "TNN"
  },
  {
    "code": "6531",
    "name": "Thorne South",
    "crs": "TNS"
  },
  {
    "code": "6532",
    "name": "Althorpe Humber",
    "crs": "ALP"
  },
  {
    "code": "6543",
    "name": "Bermuda Park",
    "crs": "BEP"
  },
  {
    "code": "6544",
    "name": "Kirkstall Forge",
    "crs": "KLF"
  },
  {
    "code": "6545",
    "name": "Edinburgh Gateway",
    "crs": "EGY"
  },
  {
    "code": "6546",
    "name": "Stone Crown St",
    "crs": "SCN"
  },
  {
    "code": "6549",
    "name": "Kings Lynn Busgn",
    "crs": "KLS"
  },
  {
    "code": "6550",
    "name": "Alpamare Water Park",
    "crs": "AWP"
  },
  {
    "code": "6551",
    "name": "Whitwell",
    "crs": "WWL"
  },
  {
    "code": "6553",
    "name": "Bond Street Crossrail",
    "crs": "BDS"
  },
  {
    "code": "6556",
    "name": "Tottenham Court Road Cross",
    "crs": "TCR"
  },
  {
    "code": "6557",
    "name": "Whitechapel Mtr",
    "crs": "WHX"
  },
  {
    "code": "6560",
    "name": "Canary Wharf Crossrail",
    "crs": "CWX"
  },
  {
    "code": "6561",
    "name": "Custom House Crossrail",
    "crs": "CUS"
  },
  {
    "code": "6562",
    "name": "Woolwich Crossrail",
    "crs": "WWC"
  },
  {
    "code": "6565",
    "name": "Kiveton Park",
    "crs": "KVP"
  },
  {
    "code": "6570",
    "name": "Shireoaks",
    "crs": "SRO"
  },
  {
    "code": "6574",
    "name": "Worksop",
    "crs": "WRK"
  },
  {
    "code": "6576",
    "name": "Maghull North",
    "crs": "MNS"
  },
  {
    "code": "6580",
    "name": "Worcestershire Parkway",
    "crs": "WOP"
  },
  {
    "code": "6583",
    "name": "Warrington West",
    "crs": "WAW"
  },
  {
    "code": "6587",
    "name": "Charlbury Village",
    "crs": "CVG"
  },
  {
    "code": "6597",
    "name": "Kintore",
    "crs": "KTR"
  },
  {
    "code": "6599",
    "name": "Meridian Water",
    "crs": "MRW"
  },
  {
    "code": "6604",
    "name": "Horden",
    "crs": "HRE"
  },
  {
    "code": "6615",
    "name": "Chesterfield",
    "crs": "CHD"
  },
  {
    "code": "6616",
    "name": "Dronfield",
    "crs": "DRO"
  },
  {
    "code": "6634",
    "name": "Penistone",
    "crs": "PNS"
  },
  {
    "code": "6663",
    "name": "Meadowhall",
    "crs": "MHS"
  },
  {
    "code": "6664",
    "name": "Chapeltown (South Yorkshir",
    "crs": "CLN"
  },
  {
    "code": "6667",
    "name": "Elsecar",
    "crs": "ELR"
  },
  {
    "code": "6676",
    "name": "Rotherham Central",
    "crs": "RMC"
  },
  {
    "code": "6680",
    "name": "Fishguard & Goodwick",
    "crs": "FGW"
  },
  {
    "code": "6686",
    "name": "Swinton (South Yorkshire)",
    "crs": "SWN"
  },
  {
    "code": "6688",
    "name": "Wombwell",
    "crs": "WOM"
  },
  {
    "code": "6690",
    "name": "Dore & Totley",
    "crs": "DOR"
  },
  {
    "code": "6691",
    "name": "Sheffield",
    "crs": "SHF"
  },
  {
    "code": "6707",
    "name": "Mexborough",
    "crs": "MEX"
  },
  {
    "code": "6729",
    "name": "Darnall",
    "crs": "DAN"
  },
  {
    "code": "6732",
    "name": "Woodhouse",
    "crs": "WDH"
  },
  {
    "code": "6774",
    "name": "Barnsley",
    "crs": "BNY"
  },
  {
    "code": "6781",
    "name": "Dodworth",
    "crs": "DOD"
  },
  {
    "code": "6782",
    "name": "Silkstone Common",
    "crs": "SLK"
  },
  {
    "code": "6786",
    "name": "Cairnryan",
    "crs": "CRP"
  },
  {
    "code": "6794",
    "name": "Stratford-Upon-Avon Parkwa",
    "crs": "STY"
  },
  {
    "code": "6800",
    "name": "Bishops Stortford",
    "crs": "BIS"
  },
  {
    "code": "6801",
    "name": "Braintree",
    "crs": "BTR"
  },
  {
    "code": "6804",
    "name": "Harlow Mill",
    "crs": "HWM"
  },
  {
    "code": "6806",
    "name": "Sawbridgeworth",
    "crs": "SAW"
  },
  {
    "code": "6810",
    "name": "Brimsdown",
    "crs": "BMD"
  },
  {
    "code": "6812",
    "name": "Broxbourne",
    "crs": "BXB"
  },
  {
    "code": "6814",
    "name": "Cheshunt",
    "crs": "CHN"
  },
  {
    "code": "6815",
    "name": "Enfield Lock",
    "crs": "ENL"
  },
  {
    "code": "6818",
    "name": "Hertford East",
    "crs": "HFE"
  },
  {
    "code": "6819",
    "name": "Ponders End",
    "crs": "PON"
  },
  {
    "code": "6820",
    "name": "Rye House",
    "crs": "RYH"
  },
  {
    "code": "6821",
    "name": "St Margarets (Hertfordshir",
    "crs": "SMT"
  },
  {
    "code": "6823",
    "name": "Waltham Cross",
    "crs": "WLC"
  },
  {
    "code": "6824",
    "name": "Ware",
    "crs": "WAR"
  },
  {
    "code": "6827",
    "name": "Harlow Town",
    "crs": "HWN"
  },
  {
    "code": "6829",
    "name": "Roydon",
    "crs": "RYN"
  },
  {
    "code": "6832",
    "name": "Elsenham",
    "crs": "ESM"
  },
  {
    "code": "6833",
    "name": "Stansted Mountfitchet",
    "crs": "SST"
  },
  {
    "code": "6833",
    "name": "Stansted",
    "crs": "SST"
  },
  {
    "code": "6834",
    "name": "Stansted Airport",
    "crs": "SSD"
  },
  {
    "code": "6836",
    "name": "Chelmsford",
    "crs": "CHM"
  },
  {
    "code": "6837",
    "name": "Cressing",
    "crs": "CES"
  },
  {
    "code": "6838",
    "name": "Kelvedon",
    "crs": "KEL"
  },
  {
    "code": "6844",
    "name": "Witham",
    "crs": "WTM"
  },
  {
    "code": "6845",
    "name": "Hatfield Peverel",
    "crs": "HAP"
  },
  {
    "code": "6846",
    "name": "White Notley",
    "crs": "WNY"
  },
  {
    "code": "6847",
    "name": "Alresford (Essex)",
    "crs": "ALR"
  },
  {
    "code": "6850",
    "name": "Clacton-On-Sea",
    "crs": "CLT"
  },
  {
    "code": "6851",
    "name": "Hythe (Essex)",
    "crs": "HYH"
  },
  {
    "code": "6853",
    "name": "Colchester Town",
    "crs": "CET"
  },
  {
    "code": "6854",
    "name": "Frinton-On-Sea",
    "crs": "FRI"
  },
  {
    "code": "6855",
    "name": "Great Bentley",
    "crs": "GRB"
  },
  {
    "code": "6856",
    "name": "Manningtree",
    "crs": "MNG"
  },
  {
    "code": "6857",
    "name": "Thorpe-le-Soken",
    "crs": "TLS"
  },
  {
    "code": "6858",
    "name": "Walton-On-The-Naze",
    "crs": "WON"
  },
  {
    "code": "6859",
    "name": "Weeley",
    "crs": "WEE"
  },
  {
    "code": "6860",
    "name": "Wivenhoe",
    "crs": "WIV"
  },
  {
    "code": "6861",
    "name": "Colchester",
    "crs": "COL"
  },
  {
    "code": "6862",
    "name": "Kirby Cross",
    "crs": "KBX"
  },
  {
    "code": "6863",
    "name": "Marks Tey",
    "crs": "MKT"
  },
  {
    "code": "6867",
    "name": "Hackney Downs",
    "crs": "HAC"
  },
  {
    "code": "6869",
    "name": "Althorne Essex",
    "crs": "ALN"
  },
  {
    "code": "6870",
    "name": "Battlesbridge",
    "crs": "BLB"
  },
  {
    "code": "6871",
    "name": "Billericay",
    "crs": "BIC"
  },
  {
    "code": "6872",
    "name": "Brentwood",
    "crs": "BRE"
  },
  {
    "code": "6873",
    "name": "Burnham-on-Crouch",
    "crs": "BUU"
  },
  {
    "code": "6874",
    "name": "Chadwell Heath",
    "crs": "CTH"
  },
  {
    "code": "6875",
    "name": "North Fambridge",
    "crs": "NFA"
  },
  {
    "code": "6876",
    "name": "Forest Gate",
    "crs": "FOG"
  },
  {
    "code": "6877",
    "name": "Gidea Park",
    "crs": "GDP"
  },
  {
    "code": "6878",
    "name": "Goodmayes",
    "crs": "GMY"
  },
  {
    "code": "6879",
    "name": "Harold Wood",
    "crs": "HRO"
  },
  {
    "code": "6880",
    "name": "Hockley",
    "crs": "HOC"
  },
  {
    "code": "6881",
    "name": "Ilford",
    "crs": "IFD"
  },
  {
    "code": "6882",
    "name": "Ingatestone",
    "crs": "INT"
  },
  {
    "code": "6883",
    "name": "Manor Park",
    "crs": "MNP"
  },
  {
    "code": "6884",
    "name": "Rayleigh",
    "crs": "RLG"
  },
  {
    "code": "6885",
    "name": "Rochford",
    "crs": "RFD"
  },
  {
    "code": "6886",
    "name": "Romford",
    "crs": "RMF"
  },
  {
    "code": "6888",
    "name": "Shenfield",
    "crs": "SNF"
  },
  {
    "code": "6890",
    "name": "Southminster",
    "crs": "SMN"
  },
  {
    "code": "6891",
    "name": "Wickford",
    "crs": "WIC"
  },
  {
    "code": "6892",
    "name": "South Woodham Ferrers",
    "crs": "SOF"
  },
  {
    "code": "6893",
    "name": "Seven Kings",
    "crs": "SVK"
  },
  {
    "code": "6901",
    "name": "Dovercourt",
    "crs": "DVC"
  },
  {
    "code": "6902",
    "name": "Harwich International",
    "crs": "HPQ"
  },
  {
    "code": "6905",
    "name": "Harwich Town",
    "crs": "HWC"
  },
  {
    "code": "6906",
    "name": "Mistley",
    "crs": "MIS"
  },
  {
    "code": "6907",
    "name": "Wrabness",
    "crs": "WRB"
  },
  {
    "code": "6913",
    "name": "Bush Hill Park",
    "crs": "BHK"
  },
  {
    "code": "6914",
    "name": "Chingford",
    "crs": "CHI"
  },
  {
    "code": "6919",
    "name": "Highams Park",
    "crs": "HIP"
  },
  {
    "code": "6926",
    "name": "Clapton",
    "crs": "CPT"
  },
  {
    "code": "6927",
    "name": "Lea Bridge",
    "crs": "LEB"
  },
  {
    "code": "6929",
    "name": "Newtongrange",
    "crs": "NEG"
  },
  {
    "code": "6931",
    "name": "Seven Sisters",
    "crs": "SVS"
  },
  {
    "code": "6934",
    "name": "Stoke Newington",
    "crs": "SKW"
  },
  {
    "code": "6941",
    "name": "Edmonton Green",
    "crs": "EDR"
  },
  {
    "code": "6947",
    "name": "Southbury",
    "crs": "SBU"
  },
  {
    "code": "6949",
    "name": "Theobalds Grove",
    "crs": "TEO"
  },
  {
    "code": "6951",
    "name": "Tottenham Hale",
    "crs": "TOM"
  },
  {
    "code": "6952",
    "name": "Turkey Street",
    "crs": "TUR"
  },
  {
    "code": "6953",
    "name": "Walthamstow Central",
    "crs": "WHC"
  },
  {
    "code": "6954",
    "name": "Wood Street",
    "crs": "WST"
  },
  {
    "code": "6956",
    "name": "White Hart Lane",
    "crs": "WHL"
  },
  {
    "code": "6958",
    "name": "Bruce Grove",
    "crs": "BCV"
  },
  {
    "code": "6959",
    "name": "Enfield Town",
    "crs": "ENF"
  },
  {
    "code": "6961",
    "name": "Bethnal Green",
    "crs": "BET"
  },
  {
    "code": "6962",
    "name": "Cambridge Heath",
    "crs": "CBH"
  },
  {
    "code": "6963",
    "name": "Shawfair",
    "crs": "SFI"
  },
  {
    "code": "6965",
    "name": "Liverpool Street Mtr",
    "crs": "LST"
  },
  {
    "code": "6965",
    "name": "London Liverpool Street",
    "crs": "LST"
  },
  {
    "code": "6966",
    "name": "London Fields",
    "crs": "LOF"
  },
  {
    "code": "6967",
    "name": "Rectory Road",
    "crs": "REC"
  },
  {
    "code": "6968",
    "name": "Stamford Hill",
    "crs": "SMH"
  },
  {
    "code": "6969",
    "name": "Stratford (London)",
    "crs": "SRA"
  },
  {
    "code": "6970",
    "name": "Maryland",
    "crs": "MYL"
  },
  {
    "code": "6971",
    "name": "Northumberland Park",
    "crs": "NUM"
  },
  {
    "code": "6972",
    "name": "Silver Street",
    "crs": "SLV"
  },
  {
    "code": "6973",
    "name": "St James Street (Walthamst",
    "crs": "SJS"
  },
  {
    "code": "6977",
    "name": "Hackney Central",
    "crs": "HKC"
  },
  {
    "code": "6978",
    "name": "Hackney Wick",
    "crs": "HKW"
  },
  {
    "code": "6979",
    "name": "Homerton",
    "crs": "HMN"
  },
  {
    "code": "7006",
    "name": "Brundall Gardens",
    "crs": "BGA"
  },
  {
    "code": "7008",
    "name": "Bury St Edmunds",
    "crs": "BSE"
  },
  {
    "code": "7011",
    "name": "Kennett",
    "crs": "KNE"
  },
  {
    "code": "7017",
    "name": "Audley End",
    "crs": "AUD"
  },
  {
    "code": "7022",
    "name": "Cambridge",
    "crs": "CBG"
  },
  {
    "code": "7027",
    "name": "Dullingham",
    "crs": "DUL"
  },
  {
    "code": "7029",
    "name": "Foxton",
    "crs": "FXN"
  },
  {
    "code": "7032",
    "name": "Great Chesterford",
    "crs": "GRC"
  },
  {
    "code": "7036",
    "name": "Meldreth",
    "crs": "MEL"
  },
  {
    "code": "7038",
    "name": "Newmarket",
    "crs": "NMK"
  },
  {
    "code": "7039",
    "name": "Newport (Essex)",
    "crs": "NWE"
  },
  {
    "code": "7043",
    "name": "Shelford (Cambridgeshire)",
    "crs": "SED"
  },
  {
    "code": "7044",
    "name": "Shepreth",
    "crs": "STH"
  },
  {
    "code": "7047",
    "name": "Whittlesford Parkway",
    "crs": "WLF"
  },
  {
    "code": "7051",
    "name": "Chappel & Wakes Colne",
    "crs": "CWC"
  },
  {
    "code": "7055",
    "name": "Downham Market",
    "crs": "DOW"
  },
  {
    "code": "7057",
    "name": "Watlington",
    "crs": "WTG"
  },
  {
    "code": "7068",
    "name": "Ely",
    "crs": "ELY"
  },
  {
    "code": "7072",
    "name": "Littleport",
    "crs": "LTP"
  },
  {
    "code": "7073",
    "name": "Shippea Hill",
    "crs": "SPP"
  },
  {
    "code": "7079",
    "name": "Waterbeach",
    "crs": "WBC"
  },
  {
    "code": "7085",
    "name": "Bures",
    "crs": "BUE"
  },
  {
    "code": "7090",
    "name": "Heathrow Terminals 1, 2, 3X",
    "crs": "HXX"
  },
  {
    "code": "7091",
    "name": "Heathrow Terminal 4X",
    "crs": "HAF"
  },
  {
    "code": "7098",
    "name": "Sudbury (Suffolk)",
    "crs": "SUY"
  },
  {
    "code": "7115",
    "name": "Kings Lynn",
    "crs": "KLN"
  },
  {
    "code": "7165",
    "name": "Manea",
    "crs": "MNE"
  },
  {
    "code": "7166",
    "name": "March",
    "crs": "MCH"
  },
  {
    "code": "7187",
    "name": "Whittlesea",
    "crs": "WLE"
  },
  {
    "code": "7200",
    "name": "Brandon",
    "crs": "BND"
  },
  {
    "code": "7201",
    "name": "Lakenheath",
    "crs": "LAK"
  },
  {
    "code": "7203",
    "name": "Thetford",
    "crs": "TTF"
  },
  {
    "code": "7211",
    "name": "Darsham",
    "crs": "DSM"
  },
  {
    "code": "7212",
    "name": "Derby Road (Ipswich)",
    "crs": "DBR"
  },
  {
    "code": "7214",
    "name": "Felixstowe",
    "crs": "FLX"
  },
  {
    "code": "7217",
    "name": "Ipswich",
    "crs": "IPS"
  },
  {
    "code": "7221",
    "name": "Melton (Suffolk)",
    "crs": "MES"
  },
  {
    "code": "7222",
    "name": "Stratford International",
    "crs": "SFA"
  },
  {
    "code": "7224",
    "name": "Saxmundham",
    "crs": "SAX"
  },
  {
    "code": "7225",
    "name": "Trimley",
    "crs": "TRM"
  },
  {
    "code": "7226",
    "name": "Westerfield",
    "crs": "WFI"
  },
  {
    "code": "7227",
    "name": "Wickham Market",
    "crs": "WCM"
  },
  {
    "code": "7228",
    "name": "Woodbridge",
    "crs": "WDB"
  },
  {
    "code": "7258",
    "name": "Beccles",
    "crs": "BCC"
  },
  {
    "code": "7259",
    "name": "Brampton (Suffolk)",
    "crs": "BRP"
  },
  {
    "code": "7266",
    "name": "Halesworth",
    "crs": "HAS"
  },
  {
    "code": "7268",
    "name": "Lowestoft",
    "crs": "LWT"
  },
  {
    "code": "7273",
    "name": "Oulton Broad North",
    "crs": "OUN"
  },
  {
    "code": "7274",
    "name": "Oulton Broad South",
    "crs": "OUS"
  },
  {
    "code": "7286",
    "name": "Acle",
    "crs": "ACL"
  },
  {
    "code": "7289",
    "name": "Brundall",
    "crs": "BDA"
  },
  {
    "code": "7290",
    "name": "Buckenham",
    "crs": "BUC"
  },
  {
    "code": "7292",
    "name": "Cantley",
    "crs": "CNY"
  },
  {
    "code": "7295",
    "name": "Cromer",
    "crs": "CMR"
  },
  {
    "code": "7297",
    "name": "Roughton Road",
    "crs": "RNR"
  },
  {
    "code": "7299",
    "name": "Gunton",
    "crs": "GNT"
  },
  {
    "code": "7300",
    "name": "Haddiscoe",
    "crs": "HAD"
  },
  {
    "code": "7305",
    "name": "Lingwood",
    "crs": "LGD"
  },
  {
    "code": "7308",
    "name": "North Walsham",
    "crs": "NWA"
  },
  {
    "code": "7309",
    "name": "Norwich",
    "crs": "NRW"
  },
  {
    "code": "7316",
    "name": "Reedham (Norfolk)",
    "crs": "REE"
  },
  {
    "code": "7318",
    "name": "Salhouse",
    "crs": "SAH"
  },
  {
    "code": "7319",
    "name": "Sheringham",
    "crs": "SHM"
  },
  {
    "code": "7320",
    "name": "Somerleyton",
    "crs": "SYT"
  },
  {
    "code": "7326",
    "name": "Worstead",
    "crs": "WRT"
  },
  {
    "code": "7327",
    "name": "Hoveton & Wroxham",
    "crs": "HXM"
  },
  {
    "code": "7328",
    "name": "Great Yarmouth",
    "crs": "GYM"
  },
  {
    "code": "7329",
    "name": "West Runton",
    "crs": "WRN"
  },
  {
    "code": "7330",
    "name": "Berney Arms",
    "crs": "BYA"
  },
  {
    "code": "7348",
    "name": "Diss",
    "crs": "DIS"
  },
  {
    "code": "7349",
    "name": "Elmswell",
    "crs": "ESW"
  },
  {
    "code": "7354",
    "name": "Needham Market",
    "crs": "NMT"
  },
  {
    "code": "7355",
    "name": "Stowmarket",
    "crs": "SMK"
  },
  {
    "code": "7356",
    "name": "Thurston",
    "crs": "TRS"
  },
  {
    "code": "7367",
    "name": "Attleborough",
    "crs": "ATL"
  },
  {
    "code": "7370",
    "name": "Eccles Road",
    "crs": "ECS"
  },
  {
    "code": "7371",
    "name": "Dereham (Coach)",
    "crs": "DEB"
  },
  {
    "code": "7374",
    "name": "Harling Road",
    "crs": "HRD"
  },
  {
    "code": "7379",
    "name": "Spooner Row",
    "crs": "SPN"
  },
  {
    "code": "7383",
    "name": "Wymondham",
    "crs": "WMD"
  },
  {
    "code": "7400",
    "name": "Blackhorse Road",
    "crs": "BHO"
  },
  {
    "code": "7401",
    "name": "Harringay Green Lanes",
    "crs": "HRY"
  },
  {
    "code": "7402",
    "name": "Leyton Midland Road",
    "crs": "LEM"
  },
  {
    "code": "7403",
    "name": "Leytonstone High Road",
    "crs": "LER"
  },
  {
    "code": "7404",
    "name": "South Tottenham",
    "crs": "STO"
  },
  {
    "code": "7406",
    "name": "Crouch Hill",
    "crs": "CRH"
  },
  {
    "code": "7407",
    "name": "Walthamstow Queens Road",
    "crs": "WMW"
  },
  {
    "code": "7408",
    "name": "Wanstead Park",
    "crs": "WNP"
  },
  {
    "code": "7416",
    "name": "Coventry Arena",
    "crs": "CAA"
  },
  {
    "code": "7419",
    "name": "Prittlewell",
    "crs": "PRL"
  },
  {
    "code": "7420",
    "name": "Southend Victoria",
    "crs": "SOV"
  },
  {
    "code": "7427",
    "name": "Bath Bus Station",
    "crs": "XDO"
  },
  {
    "code": "7428",
    "name": "Bristol T M Bus",
    "crs": "XDU"
  },
  {
    "code": "7430",
    "name": "Chippenham New Rd",
    "crs": "XDN"
  },
  {
    "code": "7431",
    "name": "Plymouth Salt Rd",
    "crs": "XDJ"
  },
  {
    "code": "7432",
    "name": "Swindon Bus Stn",
    "crs": "XDK"
  },
  {
    "code": "7433",
    "name": "Totnes Down Stn Forecourt",
    "crs": "XDP"
  },
  {
    "code": "7433",
    "name": "Totnes Stn Road",
    "crs": "XDP"
  },
  {
    "code": "7435",
    "name": "Par Stn Bus Stop",
    "crs": "XDR"
  },
  {
    "code": "7439",
    "name": "Benfleet",
    "crs": "BEF"
  },
  {
    "code": "7440",
    "name": "Dagenham Dock",
    "crs": "DDK"
  },
  {
    "code": "7443",
    "name": "Grays",
    "crs": "GRY"
  },
  {
    "code": "7445",
    "name": "Laindon",
    "crs": "LAI"
  },
  {
    "code": "7446",
    "name": "Leigh-on-Sea",
    "crs": "LES"
  },
  {
    "code": "7447",
    "name": "Chafford Hundred",
    "crs": "CFH"
  },
  {
    "code": "7451",
    "name": "Ockendon",
    "crs": "OCK"
  },
  {
    "code": "7452",
    "name": "Pitsea",
    "crs": "PSE"
  },
  {
    "code": "7453",
    "name": "Purfleet",
    "crs": "PFL"
  },
  {
    "code": "7454",
    "name": "Rainham (Essex)",
    "crs": "RNM"
  },
  {
    "code": "7455",
    "name": "Shoeburyness",
    "crs": "SRY"
  },
  {
    "code": "7456",
    "name": "Southend Central",
    "crs": "SOC"
  },
  {
    "code": "7457",
    "name": "Southend East",
    "crs": "SOE"
  },
  {
    "code": "7458",
    "name": "Stanford-le-Hope",
    "crs": "SFO"
  },
  {
    "code": "7460",
    "name": "Thorpe Bay",
    "crs": "TPB"
  },
  {
    "code": "7461",
    "name": "Tilbury Riverside",
    "crs": "TBR"
  },
  {
    "code": "7462",
    "name": "Tilbury Town",
    "crs": "TIL"
  },
  {
    "code": "7464",
    "name": "Upminster",
    "crs": "UPM"
  },
  {
    "code": "7466",
    "name": "West Horndon",
    "crs": "WHR"
  },
  {
    "code": "7467",
    "name": "Woodgrange Park",
    "crs": "WGR"
  },
  {
    "code": "7469",
    "name": "Chalkwell",
    "crs": "CHW"
  },
  {
    "code": "7471",
    "name": "East Tilbury",
    "crs": "ETL"
  },
  {
    "code": "7473",
    "name": "Emerson Park",
    "crs": "EMP"
  },
  {
    "code": "7474",
    "name": "West Ham",
    "crs": "WEH"
  },
  {
    "code": "7476",
    "name": "Westcliff",
    "crs": "WCF"
  },
  {
    "code": "7490",
    "name": "London Fenchurch Street",
    "crs": "FST"
  },
  {
    "code": "7491",
    "name": "Limehouse",
    "crs": "LHS"
  },
  {
    "code": "7492",
    "name": "Barking",
    "crs": "BKG"
  },
  {
    "code": "7494",
    "name": "Basildon",
    "crs": "BSO"
  },
  {
    "code": "7501",
    "name": "Buckshaw Parkway",
    "crs": "BSV"
  },
  {
    "code": "7503",
    "name": "Blaydon",
    "crs": "BLO"
  },
  {
    "code": "7504",
    "name": "Corbridge",
    "crs": "CRB"
  },
  {
    "code": "7506",
    "name": "Hexham",
    "crs": "HEX"
  },
  {
    "code": "7509",
    "name": "Prudhoe",
    "crs": "PRU"
  },
  {
    "code": "7510",
    "name": "Riding Mill",
    "crs": "RDM"
  },
  {
    "code": "7513",
    "name": "Stocksfield",
    "crs": "SKS"
  },
  {
    "code": "7514",
    "name": "Wylam",
    "crs": "WYM"
  },
  {
    "code": "7515",
    "name": "Commondale",
    "crs": "COM"
  },
  {
    "code": "7516",
    "name": "Kildale",
    "crs": "KLD"
  },
  {
    "code": "7520",
    "name": "Allens West",
    "crs": "ALW"
  },
  {
    "code": "7521",
    "name": "Teesside Airport",
    "crs": "TEA"
  },
  {
    "code": "7563",
    "name": "Bardon Mill",
    "crs": "BLL"
  },
  {
    "code": "7565",
    "name": "Brampton (Cumbria)",
    "crs": "BMP"
  },
  {
    "code": "7568",
    "name": "Haltwhistle",
    "crs": "HWH"
  },
  {
    "code": "7569",
    "name": "Haydon Bridge",
    "crs": "HDB"
  },
  {
    "code": "7572",
    "name": "Wetheral",
    "crs": "WRL"
  },
  {
    "code": "7579",
    "name": "Cramlington",
    "crs": "CRM"
  },
  {
    "code": "7603",
    "name": "Manors",
    "crs": "MAS"
  },
  {
    "code": "7632",
    "name": "St Peters",
    "crs": "STZ"
  },
  {
    "code": "7639",
    "name": "St Keyne Village",
    "crs": "SKV"
  },
  {
    "code": "7640",
    "name": "Sunderland",
    "crs": "SUN"
  },
  {
    "code": "7641",
    "name": "Seaburn",
    "crs": "SEB"
  },
  {
    "code": "7646",
    "name": "Duloe(Causeland)",
    "crs": "DLE"
  },
  {
    "code": "7662",
    "name": "Acklington",
    "crs": "ACK"
  },
  {
    "code": "7680",
    "name": "Morpeth",
    "crs": "MPT"
  },
  {
    "code": "7685",
    "name": "Pegswood",
    "crs": "PEG"
  },
  {
    "code": "7695",
    "name": "Widdrington",
    "crs": "WDD"
  },
  {
    "code": "7725",
    "name": "Metrocentre",
    "crs": "MCE"
  },
  {
    "code": "7728",
    "name": "Newcastle",
    "crs": "NCL"
  },
  {
    "code": "7736",
    "name": "Chester-le-Street",
    "crs": "CLS"
  },
  {
    "code": "7740",
    "name": "Brockley Whins",
    "crs": "BNR"
  },
  {
    "code": "7744",
    "name": "Dunston",
    "crs": "DOT"
  },
  {
    "code": "7745",
    "name": "Durham",
    "crs": "DHM"
  },
  {
    "code": "7746",
    "name": "East Boldon",
    "crs": "EBL"
  },
  {
    "code": "7765",
    "name": "Corfe Castle",
    "crs": "CFC"
  },
  {
    "code": "7766",
    "name": "Heworth",
    "crs": "HEW"
  },
  {
    "code": "7766",
    "name": "Heworth (Metro)",
    "crs": "HEW"
  },
  {
    "code": "7771",
    "name": "Ashurst Bald Faced Stag",
    "crs": "ABF"
  },
  {
    "code": "7780",
    "name": "Robroyston",
    "crs": "RRN"
  },
  {
    "code": "7783",
    "name": "Ilkeston",
    "crs": "ILN"
  },
  {
    "code": "7784",
    "name": "Bishopstone Hill Rise",
    "crs": "BST"
  },
  {
    "code": "7785",
    "name": "Cowden Crosroads",
    "crs": "COC"
  },
  {
    "code": "7787",
    "name": "Alnmouth",
    "crs": "ALM"
  },
  {
    "code": "7791",
    "name": "Berwick-upon-Tweed",
    "crs": "BWK"
  },
  {
    "code": "7792",
    "name": "Chathill",
    "crs": "CHT"
  },
  {
    "code": "7814",
    "name": "Seaham",
    "crs": "SEA"
  },
  {
    "code": "7816",
    "name": "Eridge A26 Bus S",
    "crs": "ERB"
  },
  {
    "code": "7834",
    "name": "Newton Aycliffe",
    "crs": "NAY"
  },
  {
    "code": "7835",
    "name": "Bishop Auckland",
    "crs": "BIA"
  },
  {
    "code": "7877",
    "name": "Darlington",
    "crs": "DAR"
  },
  {
    "code": "7884",
    "name": "Hever Brocasfarm",
    "crs": "HBF"
  },
  {
    "code": "7885",
    "name": "Kenley (A22)",
    "crs": "KEB"
  },
  {
    "code": "7887",
    "name": "Heighington",
    "crs": "HEI"
  },
  {
    "code": "7893",
    "name": "Shildon",
    "crs": "SHD"
  },
  {
    "code": "7895",
    "name": "North Road (Darlington)",
    "crs": "NRD"
  },
  {
    "code": "7897",
    "name": "Dinsdale",
    "crs": "DND"
  },
  {
    "code": "7909",
    "name": "Battersby",
    "crs": "BTT"
  },
  {
    "code": "7910",
    "name": "Billingham",
    "crs": "BIL"
  },
  {
    "code": "7914",
    "name": "Castleton Moor",
    "crs": "CSM"
  },
  {
    "code": "7915",
    "name": "Danby",
    "crs": "DNY"
  },
  {
    "code": "7916",
    "name": "Eaglescliffe",
    "crs": "EAG"
  },
  {
    "code": "7917",
    "name": "Yarm",
    "crs": "YRM"
  },
  {
    "code": "7918",
    "name": "Egton",
    "crs": "EGT"
  },
  {
    "code": "7921",
    "name": "Glaisdale",
    "crs": "GLS"
  },
  {
    "code": "7922",
    "name": "Great Ayton",
    "crs": "GTA"
  },
  {
    "code": "7925",
    "name": "Lealholm",
    "crs": "LHM"
  },
  {
    "code": "7928",
    "name": "Marske",
    "crs": "MSK"
  },
  {
    "code": "7929",
    "name": "Middlesbrough",
    "crs": "MBR"
  },
  {
    "code": "7930",
    "name": "Gypsy Lane",
    "crs": "GYP"
  },
  {
    "code": "7932",
    "name": "British Steel Redcar",
    "crs": "RBS"
  },
  {
    "code": "7946",
    "name": "Nunthorpe",
    "crs": "NNT"
  },
  {
    "code": "7947",
    "name": "Marton",
    "crs": "MTO"
  },
  {
    "code": "7950",
    "name": "Redcar Central",
    "crs": "RCC"
  },
  {
    "code": "7951",
    "name": "Saltburn",
    "crs": "SLB"
  },
  {
    "code": "7953",
    "name": "South Bank",
    "crs": "SBK"
  },
  {
    "code": "7966",
    "name": "Nuneaton Bus Stn",
    "crs": "NNN"
  },
  {
    "code": "7973",
    "name": "Wedgwood Old Rd",
    "crs": "WEO"
  },
  {
    "code": "7974",
    "name": "Redcar East",
    "crs": "RCE"
  },
  {
    "code": "7975",
    "name": "Stockton",
    "crs": "STK"
  },
  {
    "code": "7976",
    "name": "Thornaby",
    "crs": "TBY"
  },
  {
    "code": "7978",
    "name": "Longbeck",
    "crs": "LGK"
  },
  {
    "code": "7985",
    "name": "Kenilworth",
    "crs": "KNW"
  },
  {
    "code": "7994",
    "name": "Southease Church",
    "crs": "SEZ"
  },
  {
    "code": "7996",
    "name": "Northallerton",
    "crs": "NTR"
  },
  {
    "code": "8001",
    "name": "Cambridge North",
    "crs": "CMB"
  },
  {
    "code": "8007",
    "name": "Seaton Carew",
    "crs": "SEC"
  },
  {
    "code": "8009",
    "name": "Hartlepool",
    "crs": "HPL"
  },
  {
    "code": "8025",
    "name": "Goole",
    "crs": "GOO"
  },
  {
    "code": "8031",
    "name": "Rawcliffe",
    "crs": "RWC"
  },
  {
    "code": "8033",
    "name": "Saltmarshe",
    "crs": "SAM"
  },
  {
    "code": "8036",
    "name": "Snaith",
    "crs": "SNI"
  },
  {
    "code": "8045",
    "name": "Arram",
    "crs": "ARR"
  },
  {
    "code": "8047",
    "name": "Bempton",
    "crs": "BEM"
  },
  {
    "code": "8048",
    "name": "Beverley",
    "crs": "BEV"
  },
  {
    "code": "8049",
    "name": "Bridlington",
    "crs": "BDT"
  },
  {
    "code": "8050",
    "name": "Broomfleet",
    "crs": "BMF"
  },
  {
    "code": "8051",
    "name": "Brough",
    "crs": "BUH"
  },
  {
    "code": "8056",
    "name": "Cottingham",
    "crs": "CGM"
  },
  {
    "code": "8057",
    "name": "Driffield",
    "crs": "DRF"
  },
  {
    "code": "8061",
    "name": "Ferriby",
    "crs": "FRY"
  },
  {
    "code": "8062",
    "name": "Filey",
    "crs": "FIL"
  },
  {
    "code": "8067",
    "name": "Hessle",
    "crs": "HES"
  },
  {
    "code": "8071",
    "name": "Howden",
    "crs": "HOW"
  },
  {
    "code": "8098",
    "name": "Hunmanby",
    "crs": "HUB"
  },
  {
    "code": "8099",
    "name": "Hutton Cranswick",
    "crs": "HUT"
  },
  {
    "code": "8107",
    "name": "Nafferton",
    "crs": "NFN"
  },
  {
    "code": "8114",
    "name": "Eastrington",
    "crs": "EGN"
  },
  {
    "code": "8117",
    "name": "Gilberdyke",
    "crs": "GBD"
  },
  {
    "code": "8123",
    "name": "Wressle",
    "crs": "WRS"
  },
  {
    "code": "8126",
    "name": "Hull",
    "crs": "HUL"
  },
  {
    "code": "8129",
    "name": "Hensall",
    "crs": "HEL"
  },
  {
    "code": "8130",
    "name": "Whitley Bridge",
    "crs": "WBD"
  },
  {
    "code": "8142",
    "name": "South Milford",
    "crs": "SOM"
  },
  {
    "code": "8155",
    "name": "Grosmont",
    "crs": "GMT"
  },
  {
    "code": "8164",
    "name": "Malton",
    "crs": "MLT"
  },
  {
    "code": "8174",
    "name": "Ruswarp",
    "crs": "RUS"
  },
  {
    "code": "8178",
    "name": "Seamer",
    "crs": "SEM"
  },
  {
    "code": "8179",
    "name": "Sleights",
    "crs": "SLH"
  },
  {
    "code": "8184",
    "name": "Whitby",
    "crs": "WTB"
  },
  {
    "code": "8185",
    "name": "Scarborough",
    "crs": "SCA"
  },
  {
    "code": "8191",
    "name": "Thirsk",
    "crs": "THI"
  },
  {
    "code": "8201",
    "name": "Selby",
    "crs": "SBY"
  },
  {
    "code": "8212",
    "name": "Hornbeam Park",
    "crs": "HBP"
  },
  {
    "code": "8213",
    "name": "Harrogate",
    "crs": "HGT"
  },
  {
    "code": "8214",
    "name": "Knaresborough",
    "crs": "KNA"
  },
  {
    "code": "8221",
    "name": "Starbeck",
    "crs": "SBE"
  },
  {
    "code": "8232",
    "name": "Cattal",
    "crs": "CTL"
  },
  {
    "code": "8233",
    "name": "Church Fenton",
    "crs": "CHF"
  },
  {
    "code": "8241",
    "name": "Hammerton",
    "crs": "HMM"
  },
  {
    "code": "8254",
    "name": "Poppleton",
    "crs": "POP"
  },
  {
    "code": "8257",
    "name": "Sherburn-in-Elmet",
    "crs": "SIE"
  },
  {
    "code": "8261",
    "name": "Ulleskelf",
    "crs": "ULL"
  },
  {
    "code": "8263",
    "name": "York",
    "crs": "YRK"
  },
  {
    "code": "8282",
    "name": "Thurnscoe",
    "crs": "THC"
  },
  {
    "code": "8284",
    "name": "Goldthorpe",
    "crs": "GOE"
  },
  {
    "code": "8309",
    "name": "Outwood",
    "crs": "OUT"
  },
  {
    "code": "8326",
    "name": "Dewsbury",
    "crs": "DEW"
  },
  {
    "code": "8345",
    "name": "Bradford Interchange",
    "crs": "BDI"
  },
  {
    "code": "8346",
    "name": "Bradford Forster Square",
    "crs": "BDQ"
  },
  {
    "code": "8347",
    "name": "Shipley",
    "crs": "SHY"
  },
  {
    "code": "8352",
    "name": "Bentley (South Yorkshire)",
    "crs": "BYK"
  },
  {
    "code": "8353",
    "name": "Adwick",
    "crs": "AWK"
  },
  {
    "code": "8355",
    "name": "South Elmsall",
    "crs": "SES"
  },
  {
    "code": "8358",
    "name": "Sandal & Agbrigg",
    "crs": "SNA"
  },
  {
    "code": "8359",
    "name": "Castleford",
    "crs": "CFD"
  },
  {
    "code": "8360",
    "name": "Glasshoughton",
    "crs": "GLH"
  },
  {
    "code": "8411",
    "name": "Halifax",
    "crs": "HFX"
  },
  {
    "code": "8416",
    "name": "Low Moor",
    "crs": "LMR"
  },
  {
    "code": "8420",
    "name": "Darton",
    "crs": "DRT"
  },
  {
    "code": "8429",
    "name": "Brockholes",
    "crs": "BHS"
  },
  {
    "code": "8431",
    "name": "Berry Brow",
    "crs": "BBW"
  },
  {
    "code": "8432",
    "name": "Denby Dale",
    "crs": "DBD"
  },
  {
    "code": "8436",
    "name": "Honley",
    "crs": "HOY"
  },
  {
    "code": "8437",
    "name": "Huddersfield",
    "crs": "HUD"
  },
  {
    "code": "8441",
    "name": "Deighton",
    "crs": "DHN"
  },
  {
    "code": "8443",
    "name": "Lockwood",
    "crs": "LCK"
  },
  {
    "code": "8445",
    "name": "Marsden (Yorks)",
    "crs": "MSN"
  },
  {
    "code": "8448",
    "name": "Shepley",
    "crs": "SPY"
  },
  {
    "code": "8450",
    "name": "Slaithwaite",
    "crs": "SWT"
  },
  {
    "code": "8451",
    "name": "Stocksmoor",
    "crs": "SSM"
  },
  {
    "code": "8468",
    "name": "Keighley",
    "crs": "KEI"
  },
  {
    "code": "8469",
    "name": "Steeton & Silsden",
    "crs": "SON"
  },
  {
    "code": "8470",
    "name": "Cononley",
    "crs": "CEY"
  },
  {
    "code": "8472",
    "name": "East Garforth",
    "crs": "EGF"
  },
  {
    "code": "8473",
    "name": "Cross Gates",
    "crs": "CRG"
  },
  {
    "code": "8474",
    "name": "Garforth",
    "crs": "GRF"
  },
  {
    "code": "8477",
    "name": "Micklefield",
    "crs": "MIK"
  },
  {
    "code": "8479",
    "name": "Pannal",
    "crs": "PNL"
  },
  {
    "code": "8484",
    "name": "Batley",
    "crs": "BTL"
  },
  {
    "code": "8487",
    "name": "Leeds",
    "crs": "LDS"
  },
  {
    "code": "8496",
    "name": "Bramley (West Yorkshire)",
    "crs": "BLE"
  },
  {
    "code": "8498",
    "name": "Headingley",
    "crs": "HDY"
  },
  {
    "code": "8499",
    "name": "Horsforth",
    "crs": "HRS"
  },
  {
    "code": "8500",
    "name": "Burley Park",
    "crs": "BUY"
  },
  {
    "code": "8503",
    "name": "Leeds Whitehall",
    "crs": "LZZ"
  },
  {
    "code": "8504",
    "name": "Morley",
    "crs": "MLY"
  },
  {
    "code": "8505",
    "name": "Cottingley",
    "crs": "COT"
  },
  {
    "code": "8506",
    "name": "New Pudsey",
    "crs": "NPD"
  },
  {
    "code": "8509",
    "name": "Weeton",
    "crs": "WET"
  },
  {
    "code": "8514",
    "name": "Brighouse",
    "crs": "BGH"
  },
  {
    "code": "8518",
    "name": "Mirfield",
    "crs": "MIR"
  },
  {
    "code": "8519",
    "name": "Ravensthorpe",
    "crs": "RVN"
  },
  {
    "code": "8524",
    "name": "Hebden Bridge",
    "crs": "HBD"
  },
  {
    "code": "8526",
    "name": "Mytholmroyd",
    "crs": "MYT"
  },
  {
    "code": "8527",
    "name": "Sowerby Bridge",
    "crs": "SOW"
  },
  {
    "code": "8528",
    "name": "Normanton",
    "crs": "NOR"
  },
  {
    "code": "8530",
    "name": "Warwick Parkway",
    "crs": "WRP"
  },
  {
    "code": "8536",
    "name": "Bolton-Upon-Dearne",
    "crs": "BTD"
  },
  {
    "code": "8539",
    "name": "Moorthorpe",
    "crs": "MRP"
  },
  {
    "code": "8540",
    "name": "Pontefract Baghill",
    "crs": "PFR"
  },
  {
    "code": "8541",
    "name": "Pontefract Tanshelf",
    "crs": "POT"
  },
  {
    "code": "8543",
    "name": "Streethouse",
    "crs": "SHC"
  },
  {
    "code": "8544",
    "name": "Featherstone",
    "crs": "FEA"
  },
  {
    "code": "8546",
    "name": "Knottingley",
    "crs": "KNO"
  },
  {
    "code": "8548",
    "name": "Pontefract Monkhill",
    "crs": "PFM"
  },
  {
    "code": "8552",
    "name": "Baildon",
    "crs": "BLD"
  },
  {
    "code": "8553",
    "name": "Bingley",
    "crs": "BIY"
  },
  {
    "code": "8554",
    "name": "Crossflatts",
    "crs": "CFL"
  },
  {
    "code": "8556",
    "name": "Frizinghall",
    "crs": "FZH"
  },
  {
    "code": "8561",
    "name": "Saltaire",
    "crs": "SAE"
  },
  {
    "code": "8562",
    "name": "Apperley Bridge",
    "crs": "APY"
  },
  {
    "code": "8564",
    "name": "Ben Rhydding",
    "crs": "BEY"
  },
  {
    "code": "8565",
    "name": "Burley-in-Wharfedale",
    "crs": "BUW"
  },
  {
    "code": "8567",
    "name": "Guiseley",
    "crs": "GSY"
  },
  {
    "code": "8568",
    "name": "Ilkley",
    "crs": "ILK"
  },
  {
    "code": "8574",
    "name": "Menston",
    "crs": "MNN"
  },
  {
    "code": "8578",
    "name": "Woodlesford",
    "crs": "WDS"
  },
  {
    "code": "8583",
    "name": "Fitzwilliam",
    "crs": "FZW"
  },
  {
    "code": "8584",
    "name": "Wakefield Kirkgate",
    "crs": "WKK"
  },
  {
    "code": "8589",
    "name": "Wavertree Technology Park",
    "crs": "WAV"
  },
  {
    "code": "8591",
    "name": "Wakefield Westgate",
    "crs": "WKF"
  },
  {
    "code": "8600",
    "name": "Achanalt",
    "crs": "AAT"
  },
  {
    "code": "8601",
    "name": "Achnasheen",
    "crs": "ACN"
  },
  {
    "code": "8602",
    "name": "Achnashellach",
    "crs": "ACH"
  },
  {
    "code": "8605",
    "name": "Alness",
    "crs": "ASS"
  },
  {
    "code": "8606",
    "name": "Altnabreac",
    "crs": "ABC"
  },
  {
    "code": "8608",
    "name": "Attadale",
    "crs": "ATT"
  },
  {
    "code": "8610",
    "name": "Aviemore",
    "crs": "AVM"
  },
  {
    "code": "8613",
    "name": "Ardgay",
    "crs": "ARD"
  },
  {
    "code": "8614",
    "name": "Invershin",
    "crs": "INH"
  },
  {
    "code": "8618",
    "name": "Brora",
    "crs": "BRA"
  },
  {
    "code": "8621",
    "name": "Carrbridge",
    "crs": "CAG"
  },
  {
    "code": "8625",
    "name": "Culrain",
    "crs": "CUA"
  },
  {
    "code": "8628",
    "name": "Dalwhinnie",
    "crs": "DLW"
  },
  {
    "code": "8632",
    "name": "Dingwall",
    "crs": "DIN"
  },
  {
    "code": "8637",
    "name": "Fearn",
    "crs": "FRN"
  },
  {
    "code": "8638",
    "name": "Forres",
    "crs": "FOR"
  },
  {
    "code": "8639",
    "name": "Forsinard",
    "crs": "FRS"
  },
  {
    "code": "8640",
    "name": "Garve",
    "crs": "GVE"
  },
  {
    "code": "8641",
    "name": "Georgemas Junction",
    "crs": "GGJ"
  },
  {
    "code": "8642",
    "name": "Dunrobin Castle",
    "crs": "DNO"
  },
  {
    "code": "8643",
    "name": "Golspie",
    "crs": "GOL"
  },
  {
    "code": "8647",
    "name": "Helmsdale",
    "crs": "HMS"
  },
  {
    "code": "8648",
    "name": "Invergordon",
    "crs": "IGD"
  },
  {
    "code": "8649",
    "name": "Inverness",
    "crs": "INV"
  },
  {
    "code": "8652",
    "name": "Kildonan",
    "crs": "KIL"
  },
  {
    "code": "8653",
    "name": "Kinbrace",
    "crs": "KBC"
  },
  {
    "code": "8655",
    "name": "Kingussie",
    "crs": "KIN"
  },
  {
    "code": "8657",
    "name": "Kyle of Lochalsh",
    "crs": "KYL"
  },
  {
    "code": "8658",
    "name": "Lairg",
    "crs": "LRG"
  },
  {
    "code": "8660",
    "name": "Lochluichart",
    "crs": "LCC"
  },
  {
    "code": "8665",
    "name": "Muir of Ord",
    "crs": "MOO"
  },
  {
    "code": "8666",
    "name": "Nairn",
    "crs": "NRN"
  },
  {
    "code": "8668",
    "name": "Newtonmore",
    "crs": "NWR"
  },
  {
    "code": "8670",
    "name": "Plockton",
    "crs": "PLK"
  },
  {
    "code": "8671",
    "name": "Rogart",
    "crs": "ROG"
  },
  {
    "code": "8672",
    "name": "Scotscalder",
    "crs": "SCT"
  },
  {
    "code": "8673",
    "name": "Strathcarron",
    "crs": "STC"
  },
  {
    "code": "8674",
    "name": "Stromeferry",
    "crs": "STF"
  },
  {
    "code": "8676",
    "name": "Tain",
    "crs": "TAI"
  },
  {
    "code": "8677",
    "name": "Thurso",
    "crs": "THS"
  },
  {
    "code": "8680",
    "name": "Wick",
    "crs": "WCK"
  },
  {
    "code": "8681",
    "name": "Duirinish",
    "crs": "DRN"
  },
  {
    "code": "8682",
    "name": "Duncraig",
    "crs": "DCG"
  },
  {
    "code": "8683",
    "name": "Fellgate Metro",
    "crs": "FEG"
  },
  {
    "code": "8684",
    "name": "Stadium Of Light",
    "crs": "STI"
  },
  {
    "code": "8708",
    "name": "Connel Ferry",
    "crs": "CON"
  },
  {
    "code": "8711",
    "name": "Dalmally",
    "crs": "DAL"
  },
  {
    "code": "8712",
    "name": "Loch Awe",
    "crs": "LHA"
  },
  {
    "code": "8713",
    "name": "Dunblane",
    "crs": "DBL"
  },
  {
    "code": "8715",
    "name": "Gleneagles",
    "crs": "GLE"
  },
  {
    "code": "8720",
    "name": "Horwich Parkway",
    "crs": "HWI"
  },
  {
    "code": "8724",
    "name": "Sampford Courtenay",
    "crs": "SMC"
  },
  {
    "code": "8725",
    "name": "Oban",
    "crs": "OBN"
  },
  {
    "code": "8726",
    "name": "Falls of Cruachan",
    "crs": "FOC"
  },
  {
    "code": "8727",
    "name": "Taynuilt",
    "crs": "TAY"
  },
  {
    "code": "8728",
    "name": "Tyndrum Lower",
    "crs": "TYL"
  },
  {
    "code": "8750",
    "name": "Blair Atholl",
    "crs": "BLA"
  },
  {
    "code": "8763",
    "name": "Dunkeld & Birnam",
    "crs": "DKD"
  },
  {
    "code": "8778",
    "name": "Invergowrie",
    "crs": "ING"
  },
  {
    "code": "8801",
    "name": "Pitlochry",
    "crs": "PIT"
  },
  {
    "code": "8805",
    "name": "Perth",
    "crs": "PTH"
  },
  {
    "code": "8807",
    "name": "Brunstane",
    "crs": "BSU"
  },
  {
    "code": "8808",
    "name": "Newcraighall",
    "crs": "NEW"
  },
  {
    "code": "8821",
    "name": "Arisaig",
    "crs": "ARG"
  },
  {
    "code": "8822",
    "name": "Beasdale",
    "crs": "BSL"
  },
  {
    "code": "8823",
    "name": "Bridge of Orchy",
    "crs": "BRO"
  },
  {
    "code": "8824",
    "name": "Corpach",
    "crs": "CPA"
  },
  {
    "code": "8825",
    "name": "Corrour",
    "crs": "CRR"
  },
  {
    "code": "8826",
    "name": "Crianlarich",
    "crs": "CNR"
  },
  {
    "code": "8827",
    "name": "Fort William",
    "crs": "FTW"
  },
  {
    "code": "8828",
    "name": "Glenfinnan",
    "crs": "GLF"
  },
  {
    "code": "8829",
    "name": "Lochailort",
    "crs": "LCL"
  },
  {
    "code": "8830",
    "name": "Locheilside",
    "crs": "LCS"
  },
  {
    "code": "8831",
    "name": "Mallaig",
    "crs": "MLG"
  },
  {
    "code": "8833",
    "name": "Morar",
    "crs": "MRR"
  },
  {
    "code": "8834",
    "name": "Rannoch",
    "crs": "RAN"
  },
  {
    "code": "8835",
    "name": "Roy Bridge",
    "crs": "RYB"
  },
  {
    "code": "8836",
    "name": "Spean Bridge",
    "crs": "SBR"
  },
  {
    "code": "8837",
    "name": "Tulloch",
    "crs": "TUL"
  },
  {
    "code": "8838",
    "name": "Upper Tyndrum",
    "crs": "UTY"
  },
  {
    "code": "8839",
    "name": "Banavie",
    "crs": "BNV"
  },
  {
    "code": "8846",
    "name": "Loch Eil Outward Bound",
    "crs": "LHE"
  },
  {
    "code": "8860",
    "name": "Portlethen",
    "crs": "PLN"
  },
  {
    "code": "8875",
    "name": "West Brompton",
    "crs": "WBP"
  },
  {
    "code": "8877",
    "name": "Beauly",
    "crs": "BEL"
  },
  {
    "code": "8905",
    "name": "Dyce",
    "crs": "DYC"
  },
  {
    "code": "8921",
    "name": "Huntly",
    "crs": "HNT"
  },
  {
    "code": "8922",
    "name": "Insch",
    "crs": "INS"
  },
  {
    "code": "8924",
    "name": "Inverurie",
    "crs": "INR"
  },
  {
    "code": "8925",
    "name": "Keith",
    "crs": "KEH"
  },
  {
    "code": "8931",
    "name": "Laurencekirk",
    "crs": "LAU"
  },
  {
    "code": "8964",
    "name": "Stonehaven",
    "crs": "STN"
  },
  {
    "code": "8976",
    "name": "Aberdeen",
    "crs": "ABD"
  },
  {
    "code": "8977",
    "name": "Elgin",
    "crs": "ELG"
  },
  {
    "code": "9013",
    "name": "Balmossie",
    "crs": "BSI"
  },
  {
    "code": "9020",
    "name": "Barry Links",
    "crs": "BYL"
  },
  {
    "code": "9023",
    "name": "Broughty Ferry",
    "crs": "BYF"
  },
  {
    "code": "9028",
    "name": "Carnoustie",
    "crs": "CAN"
  },
  {
    "code": "9034",
    "name": "Stromness Orkney",
    "crs": "SOS"
  },
  {
    "code": "9039",
    "name": "Dundee",
    "crs": "DEE"
  },
  {
    "code": "9060",
    "name": "Monifieth",
    "crs": "MON"
  },
  {
    "code": "9079",
    "name": "Arbroath",
    "crs": "ARB"
  },
  {
    "code": "9080",
    "name": "Montrose",
    "crs": "MTS"
  },
  {
    "code": "9084",
    "name": "Belfast Lanyon Place",
    "crs": "BFC"
  },
  {
    "code": "9090",
    "name": "Aberdour",
    "crs": "AUR"
  },
  {
    "code": "9096",
    "name": "Golf Street",
    "crs": "GOF"
  },
  {
    "code": "9107",
    "name": "Burntisland",
    "crs": "BTS"
  },
  {
    "code": "9112",
    "name": "Cardenden",
    "crs": "CDD"
  },
  {
    "code": "9121",
    "name": "Cupar",
    "crs": "CUP"
  },
  {
    "code": "9128",
    "name": "Tadworth (Avenue",
    "crs": "TTA"
  },
  {
    "code": "9135",
    "name": "Dalgety Bay",
    "crs": "DAG"
  },
  {
    "code": "9136",
    "name": "Inverkeithing",
    "crs": "INK"
  },
  {
    "code": "9142",
    "name": "Kinghorn",
    "crs": "KGH"
  },
  {
    "code": "9144",
    "name": "Newcastle(Metro)",
    "crs": "NCZ"
  },
  {
    "code": "9145",
    "name": "Kirkcaldy",
    "crs": "KDY"
  },
  {
    "code": "9149",
    "name": "Ladybank",
    "crs": "LDY"
  },
  {
    "code": "9156",
    "name": "Lochgelly",
    "crs": "LCG"
  },
  {
    "code": "9160",
    "name": "Markinch",
    "crs": "MNC"
  },
  {
    "code": "9175",
    "name": "Springfield",
    "crs": "SPF"
  },
  {
    "code": "9185",
    "name": "Cowdenbeath",
    "crs": "COW"
  },
  {
    "code": "9186",
    "name": "Dunfermline Town",
    "crs": "DFE"
  },
  {
    "code": "9187",
    "name": "Dunfermline Queen Margaret",
    "crs": "DFL"
  },
  {
    "code": "9188",
    "name": "Leuchars",
    "crs": "LEU"
  },
  {
    "code": "9189",
    "name": "North Queensferry",
    "crs": "NQU"
  },
  {
    "code": "9190",
    "name": "Rosyth",
    "crs": "ROS"
  },
  {
    "code": "9217",
    "name": "Kingsknowe",
    "crs": "KGE"
  },
  {
    "code": "9218",
    "name": "Curriehill",
    "crs": "CUH"
  },
  {
    "code": "9230",
    "name": "Kirknewton",
    "crs": "KKN"
  },
  {
    "code": "9231",
    "name": "Westerhailes",
    "crs": "WTA"
  },
  {
    "code": "9236",
    "name": "Slateford",
    "crs": "SLA"
  },
  {
    "code": "9245",
    "name": "Fauldhouse",
    "crs": "FLD"
  },
  {
    "code": "9246",
    "name": "Hartwood",
    "crs": "HTW"
  },
  {
    "code": "9250",
    "name": "West Calder",
    "crs": "WCL"
  },
  {
    "code": "9251",
    "name": "Breich",
    "crs": "BRC"
  },
  {
    "code": "9301",
    "name": "Glenrothes With Thornton",
    "crs": "GLT"
  },
  {
    "code": "9304",
    "name": "Musselburgh",
    "crs": "MUB"
  },
  {
    "code": "9310",
    "name": "Addiewell",
    "crs": "ADW"
  },
  {
    "code": "9311",
    "name": "Bathgate",
    "crs": "BHG"
  },
  {
    "code": "9317",
    "name": "Drem",
    "crs": "DRM"
  },
  {
    "code": "9318",
    "name": "South Gyle",
    "crs": "SGL"
  },
  {
    "code": "9328",
    "name": "Edinburgh",
    "crs": "EDB"
  },
  {
    "code": "9329",
    "name": "Galashiels",
    "crs": "GAL"
  },
  {
    "code": "9354",
    "name": "Longniddry",
    "crs": "LND"
  },
  {
    "code": "9358",
    "name": "North Berwick",
    "crs": "NBW"
  },
  {
    "code": "9365",
    "name": "Wallyford",
    "crs": "WAF"
  },
  {
    "code": "9366",
    "name": "Prestonpans",
    "crs": "PST"
  },
  {
    "code": "9371",
    "name": "Livingston North",
    "crs": "LSN"
  },
  {
    "code": "9372",
    "name": "Livingston South",
    "crs": "LVG"
  },
  {
    "code": "9373",
    "name": "Uphall",
    "crs": "UHA"
  },
  {
    "code": "9395",
    "name": "Edinburgh Park",
    "crs": "EDP"
  },
  {
    "code": "9396",
    "name": "Stow",
    "crs": "SOI"
  },
  {
    "code": "9397",
    "name": "Dunbar",
    "crs": "DUN"
  },
  {
    "code": "9415",
    "name": "Dalmeny",
    "crs": "DAM"
  },
  {
    "code": "9419",
    "name": "Haymarket",
    "crs": "HYM"
  },
  {
    "code": "9424",
    "name": "Southease A26",
    "crs": "SSA"
  },
  {
    "code": "9438",
    "name": "Linlithgow",
    "crs": "LIN"
  },
  {
    "code": "9451",
    "name": "Annan",
    "crs": "ANN"
  },
  {
    "code": "9452",
    "name": "Fairlie",
    "crs": "FRL"
  },
  {
    "code": "9453",
    "name": "Ardrossan Harbour",
    "crs": "ADS"
  },
  {
    "code": "9455",
    "name": "Ardrossan Town",
    "crs": "ADN"
  },
  {
    "code": "9457",
    "name": "Auchinleck",
    "crs": "AUK"
  },
  {
    "code": "9463",
    "name": "Ayr",
    "crs": "AYR"
  },
  {
    "code": "9466",
    "name": "Barassie",
    "crs": "BSS"
  },
  {
    "code": "9467",
    "name": "Barrhill",
    "crs": "BRL"
  },
  {
    "code": "9483",
    "name": "Dalry",
    "crs": "DLY"
  },
  {
    "code": "9490",
    "name": "Dumfries",
    "crs": "DMF"
  },
  {
    "code": "9492",
    "name": "Dunlop",
    "crs": "DNL"
  },
  {
    "code": "9500",
    "name": "Tweedbank",
    "crs": "TWB"
  },
  {
    "code": "9501",
    "name": "Girvan",
    "crs": "GIR"
  },
  {
    "code": "9503",
    "name": "Glengarnock",
    "crs": "GLG"
  },
  {
    "code": "9507",
    "name": "James Cook University Hosp",
    "crs": "JCH"
  },
  {
    "code": "9508",
    "name": "Irvine",
    "crs": "IRV"
  },
  {
    "code": "9512",
    "name": "Kilmarnock",
    "crs": "KMK"
  },
  {
    "code": "9516",
    "name": "Kilmaurs",
    "crs": "KLM"
  },
  {
    "code": "9517",
    "name": "Kilwinning",
    "crs": "KWN"
  },
  {
    "code": "9518",
    "name": "Kirkconnel",
    "crs": "KRK"
  },
  {
    "code": "9521",
    "name": "Largs",
    "crs": "LAR"
  },
  {
    "code": "9529",
    "name": "Maybole",
    "crs": "MAY"
  },
  {
    "code": "9533",
    "name": "New Cumnock",
    "crs": "NCK"
  },
  {
    "code": "9543",
    "name": "Prestwick Town",
    "crs": "PTW"
  },
  {
    "code": "9544",
    "name": "Prestwick Intl Airport",
    "crs": "PRA"
  },
  {
    "code": "9547",
    "name": "Saltcoats",
    "crs": "SLT"
  },
  {
    "code": "9549",
    "name": "Sanquhar",
    "crs": "SQH"
  },
  {
    "code": "9552",
    "name": "Shieldmuir",
    "crs": "SDM"
  },
  {
    "code": "9553",
    "name": "Stevenston",
    "crs": "STV"
  },
  {
    "code": "9554",
    "name": "Stewarton",
    "crs": "STT"
  },
  {
    "code": "9555",
    "name": "Stranraer",
    "crs": "STR"
  },
  {
    "code": "9562",
    "name": "Troon",
    "crs": "TRN"
  },
  {
    "code": "9564",
    "name": "West Kilbride",
    "crs": "WKB"
  },
  {
    "code": "9569",
    "name": "Ardrossan South Beach",
    "crs": "ASB"
  },
  {
    "code": "9571",
    "name": "Newton-on-Ayr",
    "crs": "NOA"
  },
  {
    "code": "9586",
    "name": "Imperial Wharf",
    "crs": "IMW"
  },
  {
    "code": "9587",
    "name": "Shepherds Bush",
    "crs": "SPB"
  },
  {
    "code": "9589",
    "name": "Newcourt",
    "crs": "NCO"
  },
  {
    "code": "9608",
    "name": "Muirend",
    "crs": "MUI"
  },
  {
    "code": "9609",
    "name": "Nitshill",
    "crs": "NIT"
  },
  {
    "code": "9610",
    "name": "Gretna Green",
    "crs": "GEA"
  },
  {
    "code": "9614",
    "name": "Lockerbie",
    "crs": "LOC"
  },
  {
    "code": "9620",
    "name": "Bishopton (Renfrewshire)",
    "crs": "BPT"
  },
  {
    "code": "9622",
    "name": "Dumbreck",
    "crs": "DUM"
  },
  {
    "code": "9623",
    "name": "Pollokshields West",
    "crs": "PLW"
  },
  {
    "code": "9624",
    "name": "Cardonald",
    "crs": "CDO"
  },
  {
    "code": "9627",
    "name": "Corkerhill",
    "crs": "CKH"
  },
  {
    "code": "9628",
    "name": "Crookston",
    "crs": "CKT"
  },
  {
    "code": "9630",
    "name": "Hillington West",
    "crs": "HLW"
  },
  {
    "code": "9632",
    "name": "Mosspark",
    "crs": "MPK"
  },
  {
    "code": "9634",
    "name": "Hawkhead",
    "crs": "HKH"
  },
  {
    "code": "9635",
    "name": "Gourock",
    "crs": "GRK"
  },
  {
    "code": "9639",
    "name": "Woodhall",
    "crs": "WDL"
  },
  {
    "code": "9646",
    "name": "Inverkip",
    "crs": "INP"
  },
  {
    "code": "9648",
    "name": "Johnstone (Renfrewshire)",
    "crs": "JHN"
  },
  {
    "code": "9652",
    "name": "Langbank",
    "crs": "LGB"
  },
  {
    "code": "9655",
    "name": "Lochwinnoch",
    "crs": "LHW"
  },
  {
    "code": "9657",
    "name": "Paisley Canal",
    "crs": "PCN"
  },
  {
    "code": "9658",
    "name": "Milliken Park",
    "crs": "MIN"
  },
  {
    "code": "9664",
    "name": "Paisley St James",
    "crs": "PYJ"
  },
  {
    "code": "9665",
    "name": "Whinhill",
    "crs": "WNL"
  },
  {
    "code": "9667",
    "name": "Port Glasgow",
    "crs": "PTG"
  },
  {
    "code": "9668",
    "name": "Bogston",
    "crs": "BGS"
  },
  {
    "code": "9669",
    "name": "Gourock Pier",
    "crs": "GXX"
  },
  {
    "code": "9673",
    "name": "Wemyss Bay",
    "crs": "WMS"
  },
  {
    "code": "9674",
    "name": "Barrhead",
    "crs": "BRR"
  },
  {
    "code": "9675",
    "name": "Fort Matilda",
    "crs": "FTM"
  },
  {
    "code": "9676",
    "name": "Hillington East",
    "crs": "HLE"
  },
  {
    "code": "9680",
    "name": "Cartsdyke",
    "crs": "CDY"
  },
  {
    "code": "9681",
    "name": "Greenock Central",
    "crs": "GKC"
  },
  {
    "code": "9682",
    "name": "Greenock West",
    "crs": "GKW"
  },
  {
    "code": "9683",
    "name": "Paisley Gilmour Street",
    "crs": "PYG"
  },
  {
    "code": "9691",
    "name": "Motherwell",
    "crs": "MTH"
  },
  {
    "code": "9694",
    "name": "Wishaw",
    "crs": "WSH"
  },
  {
    "code": "9695",
    "name": "Airbles",
    "crs": "AIR"
  },
  {
    "code": "9699",
    "name": "Llantwit Major",
    "crs": "LWM"
  },
  {
    "code": "9702",
    "name": "Carluke",
    "crs": "CLU"
  },
  {
    "code": "9704",
    "name": "Carstairs",
    "crs": "CRS"
  },
  {
    "code": "9705",
    "name": "Merryton",
    "crs": "MEY"
  },
  {
    "code": "9707",
    "name": "Chatelherault",
    "crs": "CTE"
  },
  {
    "code": "9709",
    "name": "Liverpool South Parkway Hl",
    "crs": "LPY"
  },
  {
    "code": "9709",
    "name": "Liverpool South Parkway",
    "crs": "LPY"
  },
  {
    "code": "9710",
    "name": "Lanark",
    "crs": "LNK"
  },
  {
    "code": "9714",
    "name": "Bellshill",
    "crs": "BLH"
  },
  {
    "code": "9716",
    "name": "Blantyre",
    "crs": "BLT"
  },
  {
    "code": "9718",
    "name": "Cleland",
    "crs": "CEA"
  },
  {
    "code": "9721",
    "name": "Cumbernauld",
    "crs": "CUB"
  },
  {
    "code": "9723",
    "name": "Gartcosh",
    "crs": "GRH"
  },
  {
    "code": "9725",
    "name": "Greenfaulds",
    "crs": "GRL"
  },
  {
    "code": "9726",
    "name": "Hamilton Central",
    "crs": "HNC"
  },
  {
    "code": "9727",
    "name": "Hamilton West",
    "crs": "HNW"
  },
  {
    "code": "9728",
    "name": "Larkhall",
    "crs": "LRH"
  },
  {
    "code": "9738",
    "name": "Holytown",
    "crs": "HLY"
  },
  {
    "code": "9739",
    "name": "Shotts",
    "crs": "SHS"
  },
  {
    "code": "9747",
    "name": "Coatbridge Central",
    "crs": "CBC"
  },
  {
    "code": "9747",
    "name": "Coatbridge D.G.L.",
    "crs": "CBC"
  },
  {
    "code": "9752",
    "name": "Coatbridge Sunnyside",
    "crs": "CBS"
  },
  {
    "code": "9753",
    "name": "Whifflet",
    "crs": "WFF"
  },
  {
    "code": "9757",
    "name": "Drumgelloch",
    "crs": "DRU"
  },
  {
    "code": "9759",
    "name": "Airdrie",
    "crs": "ADR"
  },
  {
    "code": "9760",
    "name": "Blairhill",
    "crs": "BAI"
  },
  {
    "code": "9762",
    "name": "Coatdyke",
    "crs": "COA"
  },
  {
    "code": "9763",
    "name": "Baillieston",
    "crs": "BIO"
  },
  {
    "code": "9764",
    "name": "Bargeddie",
    "crs": "BGI"
  },
  {
    "code": "9766",
    "name": "Kirkwood",
    "crs": "KWD"
  },
  {
    "code": "9767",
    "name": "Burnside Strathclyde",
    "crs": "BUI"
  },
  {
    "code": "9768",
    "name": "Cambuslang",
    "crs": "CBL"
  },
  {
    "code": "9769",
    "name": "Carmyle",
    "crs": "CML"
  },
  {
    "code": "9771",
    "name": "Kirkhill",
    "crs": "KKH"
  },
  {
    "code": "9773",
    "name": "Neilston",
    "crs": "NEI"
  },
  {
    "code": "9774",
    "name": "Newton (Lanarkshire)",
    "crs": "NTN"
  },
  {
    "code": "9775",
    "name": "Patterton",
    "crs": "PTT"
  },
  {
    "code": "9776",
    "name": "Uddingston",
    "crs": "UDD"
  },
  {
    "code": "9777",
    "name": "Whitecraigs",
    "crs": "WCR"
  },
  {
    "code": "9778",
    "name": "Croftfoot",
    "crs": "CFF"
  },
  {
    "code": "9779",
    "name": "Mount Vernon",
    "crs": "MTV"
  },
  {
    "code": "9781",
    "name": "Williamwood",
    "crs": "WLM"
  },
  {
    "code": "9787",
    "name": "Rutherglen",
    "crs": "RUT"
  },
  {
    "code": "9789",
    "name": "Bridgeton",
    "crs": "BDG"
  },
  {
    "code": "9790",
    "name": "Dalmarnock",
    "crs": "DAK"
  },
  {
    "code": "9791",
    "name": "Busby",
    "crs": "BUS"
  },
  {
    "code": "9792",
    "name": "Clarkston",
    "crs": "CKS"
  },
  {
    "code": "9793",
    "name": "East Kilbride",
    "crs": "EKL"
  },
  {
    "code": "9794",
    "name": "Giffnock",
    "crs": "GFN"
  },
  {
    "code": "9795",
    "name": "Cathcart",
    "crs": "CCT"
  },
  {
    "code": "9796",
    "name": "Crossmyloof",
    "crs": "CMY"
  },
  {
    "code": "9802",
    "name": "Maxwell Park",
    "crs": "MAX"
  },
  {
    "code": "9803",
    "name": "Stansted Air Bus",
    "crs": "XTH"
  },
  {
    "code": "9804",
    "name": "Pollokshaws West",
    "crs": "PWW"
  },
  {
    "code": "9808",
    "name": "Priesthill & Darnley",
    "crs": "PTL"
  },
  {
    "code": "9810",
    "name": "Hairmyres",
    "crs": "HMY"
  },
  {
    "code": "9812",
    "name": "Thornliebank",
    "crs": "THB"
  },
  {
    "code": "9813",
    "name": "Glasgow Cent Ll",
    "crs": "GLC"
  },
  {
    "code": "9813",
    "name": "Glasgow Central",
    "crs": "GLC"
  },
  {
    "code": "9814",
    "name": "Crosshill",
    "crs": "COI"
  },
  {
    "code": "9816",
    "name": "Kennishead",
    "crs": "KNS"
  },
  {
    "code": "9817",
    "name": "Kings Park",
    "crs": "KGP"
  },
  {
    "code": "9818",
    "name": "Langside",
    "crs": "LGS"
  },
  {
    "code": "9819",
    "name": "Mount Florida",
    "crs": "MFL"
  },
  {
    "code": "9820",
    "name": "Pollokshaws East",
    "crs": "PWE"
  },
  {
    "code": "9821",
    "name": "Pollokshields East",
    "crs": "PLE"
  },
  {
    "code": "9822",
    "name": "Queens Park (Glasgow)",
    "crs": "QPK"
  },
  {
    "code": "9823",
    "name": "Shawlands",
    "crs": "SHL"
  },
  {
    "code": "9825",
    "name": "Thorntonhall",
    "crs": "THT"
  },
  {
    "code": "9842",
    "name": "Stepps",
    "crs": "SPS"
  },
  {
    "code": "9845",
    "name": "Hyndland",
    "crs": "HYN"
  },
  {
    "code": "9846",
    "name": "Heathrow Terminal 5",
    "crs": "HWV"
  },
  {
    "code": "9850",
    "name": "Cranbrook (Devon)",
    "crs": "CBK"
  },
  {
    "code": "9855",
    "name": "Clydebank",
    "crs": "CYK"
  },
  {
    "code": "9857",
    "name": "Hanley Bus Stn",
    "crs": "HNY"
  },
  {
    "code": "9859",
    "name": "Stone Grnvle Sq",
    "crs": "SGQ"
  },
  {
    "code": "9861",
    "name": "Alexandria",
    "crs": "ALX"
  },
  {
    "code": "9862",
    "name": "Balloch",
    "crs": "BHC"
  },
  {
    "code": "9864",
    "name": "Dalreoch",
    "crs": "DLR"
  },
  {
    "code": "9866",
    "name": "Dumbarton Central",
    "crs": "DBC"
  },
  {
    "code": "9867",
    "name": "Renton",
    "crs": "RTN"
  },
  {
    "code": "9868",
    "name": "Dumbarton East",
    "crs": "DBE"
  },
  {
    "code": "9869",
    "name": "Heathrow Central Bus Stn",
    "crs": "HTR"
  },
  {
    "code": "9876",
    "name": "Larbert",
    "crs": "LBT"
  },
  {
    "code": "9877",
    "name": "Carfin",
    "crs": "CRF"
  },
  {
    "code": "9878",
    "name": "Camelon",
    "crs": "CMO"
  },
  {
    "code": "9882",
    "name": "Coleshill Parkway",
    "crs": "CEH"
  },
  {
    "code": "9883",
    "name": "Alloa",
    "crs": "ALO"
  },
  {
    "code": "9888",
    "name": "Stirling",
    "crs": "STG"
  },
  {
    "code": "9889",
    "name": "Bridge of Allan",
    "crs": "BEA"
  },
  {
    "code": "9894",
    "name": "Easterhouse",
    "crs": "EST"
  },
  {
    "code": "9895",
    "name": "Bellgrove",
    "crs": "BLG"
  },
  {
    "code": "9897",
    "name": "Carntyne",
    "crs": "CAY"
  },
  {
    "code": "9898",
    "name": "Peterbro Bus Stn",
    "crs": "PBU"
  },
  {
    "code": "9902",
    "name": "Crosskeys",
    "crs": "CKY"
  },
  {
    "code": "9903",
    "name": "Shettleston",
    "crs": "SLS"
  },
  {
    "code": "9904",
    "name": "Garrowhill",
    "crs": "GAR"
  },
  {
    "code": "9905",
    "name": "Alexandra Parade",
    "crs": "AXP"
  },
  {
    "code": "9906",
    "name": "Duke Street",
    "crs": "DST"
  },
  {
    "code": "9909",
    "name": "High Street (Glasgow)",
    "crs": "HST"
  },
  {
    "code": "9911",
    "name": "Charing Cross (Glasgow)",
    "crs": "CHC"
  },
  {
    "code": "9914",
    "name": "Exhibition Centre (Glasgow",
    "crs": "EXG"
  },
  {
    "code": "9915",
    "name": "Ebbw Vale Parkway",
    "crs": "EBV"
  },
  {
    "code": "9916",
    "name": "Llanhilleth",
    "crs": "LTH"
  },
  {
    "code": "9917",
    "name": "Partick",
    "crs": "PTK"
  },
  {
    "code": "9919",
    "name": "Newbridge",
    "crs": "NBE"
  },
  {
    "code": "9920",
    "name": "Risca & Pontymister",
    "crs": "RCA"
  },
  {
    "code": "9921",
    "name": "Rogerstone",
    "crs": "ROR"
  },
  {
    "code": "9925",
    "name": "Llanharan",
    "crs": "LLR"
  },
  {
    "code": "9930",
    "name": "Falkirk Grahamston",
    "crs": "FKG"
  },
  {
    "code": "9931",
    "name": "Falkirk High",
    "crs": "FKK"
  },
  {
    "code": "9934",
    "name": "London Eurostar Civ",
    "crs": "LOE"
  },
  {
    "code": "9936",
    "name": "Polmont",
    "crs": "PMT"
  },
  {
    "code": "9938",
    "name": "Branchton",
    "crs": "BCN"
  },
  {
    "code": "9940",
    "name": "Bishopbriggs",
    "crs": "BBG"
  },
  {
    "code": "9943",
    "name": "Croy",
    "crs": "CRO"
  },
  {
    "code": "9950",
    "name": "Glasgow Qs Ll",
    "crs": "GLQ"
  },
  {
    "code": "9950",
    "name": "Glasgow Queen Street",
    "crs": "GLQ"
  },
  {
    "code": "9953",
    "name": "Ashfield",
    "crs": "ASF"
  },
  {
    "code": "9955",
    "name": "Lenzie",
    "crs": "LNZ"
  },
  {
    "code": "9956",
    "name": "Gilshochill",
    "crs": "GSC"
  },
  {
    "code": "9957",
    "name": "Maryhill",
    "crs": "MYH"
  },
  {
    "code": "9958",
    "name": "Possilpark & Parkhouse",
    "crs": "PPK"
  },
  {
    "code": "9959",
    "name": "Summerston",
    "crs": "SUM"
  },
  {
    "code": "9960",
    "name": "Kilpatrick",
    "crs": "KPT"
  },
  {
    "code": "9961",
    "name": "Argyle Street",
    "crs": "AGS"
  },
  {
    "code": "9962",
    "name": "Ardlui",
    "crs": "AUI"
  },
  {
    "code": "9963",
    "name": "Arrochar & Tarbet",
    "crs": "ART"
  },
  {
    "code": "9965",
    "name": "Anderston",
    "crs": "AND"
  },
  {
    "code": "9966",
    "name": "Bearsden",
    "crs": "BRN"
  },
  {
    "code": "9967",
    "name": "Drumfrochar",
    "crs": "DFR"
  },
  {
    "code": "9968",
    "name": "Bowling",
    "crs": "BWG"
  },
  {
    "code": "9969",
    "name": "Cardross",
    "crs": "CDR"
  },
  {
    "code": "9970",
    "name": "Craigendoran",
    "crs": "CGD"
  },
  {
    "code": "9971",
    "name": "Garelochhead",
    "crs": "GCH"
  },
  {
    "code": "9972",
    "name": "Anniesland",
    "crs": "ANL"
  },
  {
    "code": "9973",
    "name": "Barnhill",
    "crs": "BNL"
  },
  {
    "code": "9979",
    "name": "Garscadden",
    "crs": "GRS"
  },
  {
    "code": "9981",
    "name": "Helensburgh Central",
    "crs": "HLC"
  },
  {
    "code": "9982",
    "name": "Helensburgh Upper",
    "crs": "HLU"
  },
  {
    "code": "9983",
    "name": "Hillfoot",
    "crs": "HLF"
  },
  {
    "code": "9985",
    "name": "Milngavie",
    "crs": "MLN"
  },
  {
    "code": "9988",
    "name": "Singer",
    "crs": "SIN"
  },
  {
    "code": "9990",
    "name": "Yoker",
    "crs": "YOK"
  },
  {
    "code": "9992",
    "name": "Dalmuir",
    "crs": "DMR"
  },
  {
    "code": "9993",
    "name": "Drumry",
    "crs": "DMY"
  },
  {
    "code": "9994",
    "name": "Drumchapel",
    "crs": "DMC"
  },
  {
    "code": "9995",
    "name": "Jordanhill",
    "crs": "JOR"
  },
  {
    "code": "9996",
    "name": "Scotstounhill",
    "crs": "SCH"
  },
  {
    "code": "9997",
    "name": "Springburn",
    "crs": "SPR"
  },
  {
    "code": "9998",
    "name": "Westerton",
    "crs": "WES"
  },
  {
    "code": "DL01",
    "name": "All Saints",
    "crs": "2DA"
  },
  {
    "code": "DL02",
    "name": "Beckton",
    "crs": "3DA"
  },
  {
    "code": "DL03",
    "name": "Beckton Park",
    "crs": "3DB"
  },
  {
    "code": "DL04",
    "name": "Blackwall",
    "crs": "2DB"
  },
  {
    "code": "DL05",
    "name": "Bow Church",
    "crs": "2DC"
  },
  {
    "code": "DL06",
    "name": "Canary Wharf",
    "crs": "2DD"
  },
  {
    "code": "DL07",
    "name": "Canning Town",
    "crs": "3BA"
  },
  {
    "code": "DL08",
    "name": "Crossharbour",
    "crs": "2DE"
  },
  {
    "code": "DL09",
    "name": "Custom House",
    "crs": "3DD"
  },
  {
    "code": "DL10",
    "name": "Cyprus",
    "crs": "3DE"
  },
  {
    "code": "DL11",
    "name": "Devons Road",
    "crs": "2DF"
  },
  {
    "code": "DL12",
    "name": "East India",
    "crs": "2DG"
  },
  {
    "code": "DL13",
    "name": "Gallions Reach",
    "crs": "3DF"
  },
  {
    "code": "DL14",
    "name": "Heron Quays",
    "crs": "2DH"
  },
  {
    "code": "DL15",
    "name": "Island Gardens",
    "crs": "2DI"
  },
  {
    "code": "DL16",
    "name": "King George V",
    "crs": "3DG"
  },
  {
    "code": "DL17",
    "name": "Langdon Park",
    "crs": "2DJ"
  },
  {
    "code": "DL18",
    "name": "London City Airport",
    "crs": "3DH"
  },
  {
    "code": "DL19",
    "name": "Mudchute",
    "crs": "2DK"
  },
  {
    "code": "DL20",
    "name": "Pontoon Dock",
    "crs": "3DI"
  },
  {
    "code": "DL21",
    "name": "Poplar",
    "crs": "2DL"
  },
  {
    "code": "DL22",
    "name": "Prince Regent",
    "crs": "3DJ"
  },
  {
    "code": "DL23",
    "name": "Royal Albert",
    "crs": "3DK"
  },
  {
    "code": "DL24",
    "name": "Royal Victoria",
    "crs": "3DL"
  },
  {
    "code": "DL25",
    "name": "South Quay",
    "crs": "2DM"
  },
  {
    "code": "DL26",
    "name": "Star Lane",
    "crs": "3DM"
  },
  {
    "code": "DL27",
    "name": "Tower Gateway",
    "crs": "1DA"
  },
  {
    "code": "DL28",
    "name": "West India Quay",
    "crs": "2DN"
  },
  {
    "code": "DL29",
    "name": "West Silvertown",
    "crs": "3DN"
  },
  {
    "code": "DL30",
    "name": "Westferry",
    "crs": "2DO"
  },
  {
    "code": "G023",
    "name": "Salford Qys Mtlk",
    "crs": "SAQ"
  },
  {
    "code": "G068",
    "name": "Media City Mtlk",
    "crs": "MCT"
  },
  {
    "code": "G069",
    "name": "Abraham Mossmtlk",
    "crs": "AMM"
  },
  {
    "code": "G070",
    "name": "Centrl Park Mtlk",
    "crs": "CEM"
  },
  {
    "code": "G073",
    "name": "Firswood Mtlk",
    "crs": "FWN"
  },
  {
    "code": "G074",
    "name": "St Werburgh Mtlk",
    "crs": "SWJ"
  },
  {
    "code": "G076",
    "name": "Metrolink Zone J",
    "crs": "M0J"
  },
  {
    "code": "G077",
    "name": "Chorlton Mtlk",
    "crs": "CNK"
  },
  {
    "code": "G080",
    "name": "Monsall Mtlk",
    "crs": "MSM"
  },
  {
    "code": "G089",
    "name": "Newtnh&Mostnmtkl",
    "crs": "NMM"
  },
  {
    "code": "G101",
    "name": "Centro Termextra",
    "crs": ""
  },
  {
    "code": "G199",
    "name": "Metrolink Zone P",
    "crs": "M0P"
  },
  {
    "code": "G200",
    "name": "Bury Mtlk",
    "crs": "BUR"
  },
  {
    "code": "G201",
    "name": "Radcliffe Mtlk",
    "crs": "RCF"
  },
  {
    "code": "G202",
    "name": "Whitefield Mtlk",
    "crs": "WTF"
  },
  {
    "code": "G203",
    "name": "Besses O Bn Mtlk",
    "crs": ""
  },
  {
    "code": "G203",
    "name": "Besses O' Th' Barn Mtlk",
    "crs": "BOB"
  },
  {
    "code": "G204",
    "name": "Prestwich Mtlk",
    "crs": "PWC"
  },
  {
    "code": "G205",
    "name": "Heaton Park Mtlk",
    "crs": "HPK"
  },
  {
    "code": "G206",
    "name": "Bowker Vale Mtlk",
    "crs": "BKV"
  },
  {
    "code": "G207",
    "name": "Crumpsall Mtlk",
    "crs": ""
  },
  {
    "code": "G207",
    "name": "Crumpsall Mtlk",
    "crs": "CRJ"
  },
  {
    "code": "G208",
    "name": "Queens Road Mtlk",
    "crs": "WDR"
  },
  {
    "code": "G209",
    "name": "Traffrd Bar Mtlk",
    "crs": ""
  },
  {
    "code": "G209",
    "name": "Traffrd Bar Mtlk",
    "crs": "TBM"
  },
  {
    "code": "G210",
    "name": "Old Traffrd Mtlk",
    "crs": ""
  },
  {
    "code": "G210",
    "name": "Old Traffrd Mtlk",
    "crs": "OTR"
  },
  {
    "code": "G211",
    "name": "Stretford Mtlk",
    "crs": "SRF"
  },
  {
    "code": "G212",
    "name": "Dane Road-Mtlk",
    "crs": "DRD"
  },
  {
    "code": "G213",
    "name": "Sale Mtlk",
    "crs": "SLE"
  },
  {
    "code": "G214",
    "name": "Brooklands Mtlk",
    "crs": "BOK"
  },
  {
    "code": "G217",
    "name": "Altrincham Mtlk",
    "crs": "XNA"
  },
  {
    "code": "G231",
    "name": "Metrolink Zone A",
    "crs": "M0A"
  },
  {
    "code": "G232",
    "name": "Metrolink Zone B",
    "crs": "M0B"
  },
  {
    "code": "G233",
    "name": "Metrolink Zone C",
    "crs": "M0C"
  },
  {
    "code": "G234",
    "name": "Metrolink City",
    "crs": ""
  },
  {
    "code": "G235",
    "name": "Metrolink Zone E",
    "crs": "M0E"
  },
  {
    "code": "G236",
    "name": "Metrolink Zone F",
    "crs": "M0F"
  },
  {
    "code": "G237",
    "name": "Metrolink Zone G",
    "crs": "M0G"
  },
  {
    "code": "G238",
    "name": "Metrolink Zone H",
    "crs": "M0H"
  },
  {
    "code": "G401",
    "name": "Cornbrook Mtlk",
    "crs": "COZ"
  },
  {
    "code": "G402",
    "name": "Pomona Mtlk",
    "crs": "PMO"
  },
  {
    "code": "G403",
    "name": "Exchge Quay Mtlk",
    "crs": "EXQ"
  },
  {
    "code": "G404",
    "name": "Anchorage Mtlk",
    "crs": "ANH"
  },
  {
    "code": "G405",
    "name": "Harbour Cty Mtlk",
    "crs": "HBC"
  },
  {
    "code": "G406",
    "name": "Broadway Mtlk",
    "crs": "BRD"
  },
  {
    "code": "G407",
    "name": "Langworthy Mtlk",
    "crs": "LWY"
  },
  {
    "code": "G408",
    "name": "Weaste Mtlk",
    "crs": "WMT"
  },
  {
    "code": "G409",
    "name": "Ladywell Mtlk",
    "crs": "LDW"
  },
  {
    "code": "G410",
    "name": "Eccles Mtlk",
    "crs": "ECM"
  },
  {
    "code": "G810",
    "name": "Centro One Day",
    "crs": ""
  },
  {
    "code": "H010",
    "name": "Dublin Fypt I.F",
    "crs": "DFP"
  },
  {
    "code": "H015",
    "name": "Cullompton Bus",
    "crs": "XDX"
  },
  {
    "code": "H017",
    "name": "Glastonbury Bus",
    "crs": "XEA"
  },
  {
    "code": "H018",
    "name": "Radstock Bus",
    "crs": "XEQ"
  },
  {
    "code": "H019",
    "name": "Avebury Bus",
    "crs": "XAF"
  },
  {
    "code": "H020",
    "name": "Dunster Bus",
    "crs": "XDY"
  },
  {
    "code": "H021",
    "name": "Holsworthy Bus",
    "crs": "XEE"
  },
  {
    "code": "H045",
    "name": "Raveng/Esk Rlwy",
    "crs": ""
  },
  {
    "code": "H073",
    "name": "Chipping Norton Bus",
    "crs": "CPG"
  },
  {
    "code": "H085",
    "name": "Pontypridd+Bus",
    "crs": ""
  },
  {
    "code": "H091",
    "name": "Barnstaple+Bus",
    "crs": ""
  },
  {
    "code": "H099",
    "name": "Lincoln+Bus",
    "crs": ""
  },
  {
    "code": "H108",
    "name": "Derby+Bus",
    "crs": ""
  },
  {
    "code": "H109",
    "name": "Bath+Bus",
    "crs": ""
  },
  {
    "code": "H110",
    "name": "Chippenham+Bus",
    "crs": ""
  },
  {
    "code": "H127",
    "name": "Watchet Bus",
    "crs": "WCT"
  },
  {
    "code": "H129",
    "name": "Bournemouth+Bus",
    "crs": ""
  },
  {
    "code": "H130",
    "name": "Branksome+Bus",
    "crs": ""
  },
  {
    "code": "H131",
    "name": "Christchurch+Bus",
    "crs": ""
  },
  {
    "code": "H132",
    "name": "Poole+Bus",
    "crs": ""
  },
  {
    "code": "H161",
    "name": "Pleasurewood",
    "crs": ""
  },
  {
    "code": "H193",
    "name": "Newmarket Races",
    "crs": ""
  },
  {
    "code": "H194",
    "name": "Aldershot+Bus",
    "crs": ""
  },
  {
    "code": "H196",
    "name": "Mansfield+Bus",
    "crs": ""
  },
  {
    "code": "H207",
    "name": "Shrewsbury+Bus",
    "crs": ""
  },
  {
    "code": "H208",
    "name": "Broxbourne+Bus",
    "crs": ""
  },
  {
    "code": "H227",
    "name": "Douglas Iom",
    "crs": "DGS"
  },
  {
    "code": "H239",
    "name": "Cheshunt+Bus",
    "crs": ""
  },
  {
    "code": "H240",
    "name": "Theobaldsg+Bus",
    "crs": ""
  },
  {
    "code": "H241",
    "name": "Walthamx+Bus",
    "crs": ""
  },
  {
    "code": "H248",
    "name": "Paradise Park",
    "crs": ""
  },
  {
    "code": "H250",
    "name": "Ullapool",
    "crs": "ULP"
  },
  {
    "code": "H273",
    "name": "East M Air/Not",
    "crs": "XFI"
  },
  {
    "code": "H301",
    "name": "Ryde Hoverport",
    "crs": "XRD"
  },
  {
    "code": "H333",
    "name": "Craignure",
    "crs": "CRU"
  },
  {
    "code": "H334",
    "name": "Skye (Armadale)",
    "crs": "ARA"
  },
  {
    "code": "H335",
    "name": "Castlebay",
    "crs": "CTB"
  },
  {
    "code": "H336",
    "name": "Lochboisdale",
    "crs": "LCB"
  },
  {
    "code": "H337",
    "name": "Stornoway",
    "crs": "SOY"
  },
  {
    "code": "H365",
    "name": "Corsham Bus",
    "crs": "XAO"
  },
  {
    "code": "H367",
    "name": "Midsomer Ntn Bus",
    "crs": "XBR"
  },
  {
    "code": "H371",
    "name": "Street Bus",
    "crs": "XCU"
  },
  {
    "code": "H372",
    "name": "Wells Bri Bus",
    "crs": "XDH"
  },
  {
    "code": "H403",
    "name": "Sidmouth Bus",
    "crs": "SDT"
  },
  {
    "code": "H426",
    "name": "Calais",
    "crs": ""
  },
  {
    "code": "H443",
    "name": "Any Dutchstation",
    "crs": ""
  },
  {
    "code": "H508",
    "name": "Lampeter Bus",
    "crs": ""
  },
  {
    "code": "H519",
    "name": "Abingdon Did Bus",
    "crs": "XAE"
  },
  {
    "code": "H520",
    "name": "Wantage Bus",
    "crs": "XDC"
  },
  {
    "code": "H545",
    "name": "Helston Bus",
    "crs": "XAV"
  },
  {
    "code": "H546",
    "name": "Perranporth Bus",
    "crs": "XCL"
  },
  {
    "code": "H550",
    "name": "Fowey Bus",
    "crs": "XAS"
  },
  {
    "code": "H552",
    "name": "Wadebridge Bus",
    "crs": "WBE"
  },
  {
    "code": "H553",
    "name": "Padstow Bus",
    "crs": "PDT"
  },
  {
    "code": "H554",
    "name": "Callington Bus",
    "crs": "XAH"
  },
  {
    "code": "H556",
    "name": "Tavistock Bus",
    "crs": "XCV"
  },
  {
    "code": "H557",
    "name": "Dartmouth Bus",
    "crs": "XAP"
  },
  {
    "code": "H558",
    "name": "Kingsbridge Bus",
    "crs": "XAW"
  },
  {
    "code": "H559",
    "name": "Okehampton Bus",
    "crs": "XCG"
  },
  {
    "code": "H560",
    "name": "Bude Bus",
    "crs": "BUA"
  },
  {
    "code": "H563",
    "name": "Minehead Bus",
    "crs": "XBW"
  },
  {
    "code": "H564",
    "name": "Devizes Bus",
    "crs": "XAQ"
  },
  {
    "code": "H568",
    "name": "Marlboro Swi Bus",
    "crs": "XBH"
  },
  {
    "code": "H569",
    "name": "Lyneham Bus",
    "crs": "XBD"
  },
  {
    "code": "H570",
    "name": "Royalwtnbass Bus",
    "crs": "XDI"
  },
  {
    "code": "H571",
    "name": "Calne Bus",
    "crs": "XAI"
  },
  {
    "code": "H572",
    "name": "Tiverton Bus",
    "crs": "XDA"
  },
  {
    "code": "H603",
    "name": "Glasgow Airport",
    "crs": "GGT"
  },
  {
    "code": "H616",
    "name": "Hunstanton Bus",
    "crs": "HUS"
  },
  {
    "code": "H642",
    "name": "Newcastle Airprt",
    "crs": "APN"
  },
  {
    "code": "H711",
    "name": "Mevagissey Bus",
    "crs": "XEF"
  },
  {
    "code": "H712",
    "name": "Bristol Air Bus",
    "crs": "XPB"
  },
  {
    "code": "H715",
    "name": "St Agnes Bus",
    "crs": "XPX"
  },
  {
    "code": "H717",
    "name": "Cardiff Air Bus",
    "crs": "XCF"
  },
  {
    "code": "H729",
    "name": "Loughbro Uni Bus",
    "crs": "XLO"
  },
  {
    "code": "H738",
    "name": "Lingfield Races",
    "crs": ""
  },
  {
    "code": "H812",
    "name": "Wellington+Bus",
    "crs": ""
  },
  {
    "code": "H813",
    "name": "Aberdare+Bus",
    "crs": ""
  },
  {
    "code": "H814",
    "name": "Aberdeen+Bus",
    "crs": ""
  },
  {
    "code": "H815",
    "name": "Aberystwyth+Bus",
    "crs": ""
  },
  {
    "code": "H816",
    "name": "Bangor+Bus",
    "crs": ""
  },
  {
    "code": "H817",
    "name": "Bathgate+Bus",
    "crs": ""
  },
  {
    "code": "H818",
    "name": "Caerphilly+Bus",
    "crs": ""
  },
  {
    "code": "H819",
    "name": "Carmarthen+Bus",
    "crs": ""
  },
  {
    "code": "H820",
    "name": "Camborne+Bus",
    "crs": ""
  },
  {
    "code": "H822",
    "name": "Cwmbran+Bus",
    "crs": ""
  },
  {
    "code": "H823",
    "name": "Dunfermline+Bus",
    "crs": ""
  },
  {
    "code": "H824",
    "name": "Dundee+Bus",
    "crs": ""
  },
  {
    "code": "H825",
    "name": "Elgin+Bus",
    "crs": ""
  },
  {
    "code": "H826",
    "name": "Falkirk Grhm+Bus",
    "crs": ""
  },
  {
    "code": "H828",
    "name": "Fort William+Bus",
    "crs": ""
  },
  {
    "code": "H829",
    "name": "Haverfordwst+Bus",
    "crs": ""
  },
  {
    "code": "H830",
    "name": "Kirkcaldy+Bus",
    "crs": ""
  },
  {
    "code": "H831",
    "name": "Larbert+Bus",
    "crs": ""
  },
  {
    "code": "H832",
    "name": "Linlithgow+Bus",
    "crs": ""
  },
  {
    "code": "H833",
    "name": "Livingstn N+Bus",
    "crs": ""
  },
  {
    "code": "H834",
    "name": "Llandudnojct+Bus",
    "crs": ""
  },
  {
    "code": "H835",
    "name": "Llanelli+Bus",
    "crs": ""
  },
  {
    "code": "H836",
    "name": "Merthyr+Bus",
    "crs": ""
  },
  {
    "code": "H837",
    "name": "Newquay+Bus",
    "crs": ""
  },
  {
    "code": "H838",
    "name": "Penzance+Bus",
    "crs": ""
  },
  {
    "code": "H840",
    "name": "Redruth+Bus",
    "crs": ""
  },
  {
    "code": "H841",
    "name": "Rhyl+Bus",
    "crs": ""
  },
  {
    "code": "H842",
    "name": "Ruabon+Bus",
    "crs": ""
  },
  {
    "code": "H843",
    "name": "St Austell+Bus",
    "crs": ""
  },
  {
    "code": "H844",
    "name": "Stirling+Bus",
    "crs": ""
  },
  {
    "code": "H845",
    "name": "Tenby+Bus",
    "crs": ""
  },
  {
    "code": "H846",
    "name": "Truro+Bus",
    "crs": ""
  },
  {
    "code": "H847",
    "name": "Wrexham Ctl+Bus",
    "crs": ""
  },
  {
    "code": "H848",
    "name": "Wrexham Gen+Bus",
    "crs": ""
  },
  {
    "code": "H849",
    "name": "Mml Breakfast A",
    "crs": "BV1"
  },
  {
    "code": "H851",
    "name": "Andover+Bus",
    "crs": ""
  },
  {
    "code": "H852",
    "name": "Basingstoke+Bus",
    "crs": ""
  },
  {
    "code": "H853",
    "name": "Exter Ctrl+Bus",
    "crs": ""
  },
  {
    "code": "H855",
    "name": "Glasgow Ctrl+Bus",
    "crs": ""
  },
  {
    "code": "H857",
    "name": "Havant+Bus",
    "crs": ""
  },
  {
    "code": "H858",
    "name": "Motherwell+Bus",
    "crs": ""
  },
  {
    "code": "H860",
    "name": "Winchester+Bus",
    "crs": ""
  },
  {
    "code": "H870",
    "name": "Welwyn+Bus Wgc",
    "crs": ""
  },
  {
    "code": "H871",
    "name": "Welwyn+Bus Wn",
    "crs": ""
  },
  {
    "code": "H872",
    "name": "Hatfield+Bus",
    "crs": ""
  },
  {
    "code": "H873",
    "name": "Hertford+Bus",
    "crs": ""
  },
  {
    "code": "H874",
    "name": "Hitchin+Bus",
    "crs": ""
  },
  {
    "code": "H875",
    "name": "Baldock+Bus",
    "crs": ""
  },
  {
    "code": "H876",
    "name": "Letchworth+Bus",
    "crs": ""
  },
  {
    "code": "H877",
    "name": "Potters Bar+Bus",
    "crs": ""
  },
  {
    "code": "H879",
    "name": "Stevenage+Bus",
    "crs": ""
  },
  {
    "code": "H880",
    "name": "Knebworth+Bus",
    "crs": ""
  },
  {
    "code": "H881",
    "name": "Ware+Bus",
    "crs": ""
  },
  {
    "code": "H882",
    "name": "Hemel H+Bus",
    "crs": ""
  },
  {
    "code": "H883",
    "name": "Apsley+Bus",
    "crs": ""
  },
  {
    "code": "H884",
    "name": "Watfordjun+Busgw",
    "crs": ""
  },
  {
    "code": "H885",
    "name": "Watfordhs+Busgw",
    "crs": ""
  },
  {
    "code": "H888",
    "name": "Bushey+Busgw",
    "crs": ""
  },
  {
    "code": "H890",
    "name": "Colwyn Bay+Bus",
    "crs": ""
  },
  {
    "code": "H891",
    "name": "Flint+Bus",
    "crs": ""
  },
  {
    "code": "H892",
    "name": "Prestatyn+Bus",
    "crs": ""
  },
  {
    "code": "H893",
    "name": "St Albans+Bus",
    "crs": ""
  },
  {
    "code": "H894",
    "name": "Bishopstorfd+Bus",
    "crs": ""
  },
  {
    "code": "H895",
    "name": "Elstreebhmwd+Bus",
    "crs": ""
  },
  {
    "code": "H896",
    "name": "Harpenden+Bus",
    "crs": ""
  },
  {
    "code": "H897",
    "name": "Radlett+Bus",
    "crs": ""
  },
  {
    "code": "H920",
    "name": "Bure Valley Rly",
    "crs": ""
  },
  {
    "code": "H930",
    "name": "Carlisle+Bus",
    "crs": ""
  },
  {
    "code": "H931",
    "name": "Lancaster+Bus",
    "crs": ""
  },
  {
    "code": "H932",
    "name": "Preston+Bus",
    "crs": ""
  },
  {
    "code": "H933",
    "name": "Darlington+Bus",
    "crs": ""
  },
  {
    "code": "H934",
    "name": "Chesterfield+Bus",
    "crs": ""
  },
  {
    "code": "H935",
    "name": "Banbury+Bus",
    "crs": ""
  },
  {
    "code": "H936",
    "name": "Leamington+Bus",
    "crs": ""
  },
  {
    "code": "H937",
    "name": "Nuneaton+Bus",
    "crs": ""
  },
  {
    "code": "H938",
    "name": "Rugby+Bus",
    "crs": ""
  },
  {
    "code": "H939",
    "name": "Cheltenham+Bus",
    "crs": ""
  },
  {
    "code": "H940",
    "name": "Gloucester+Bus",
    "crs": ""
  },
  {
    "code": "H945",
    "name": "Stoke+Bus",
    "crs": ""
  },
  {
    "code": "H946",
    "name": "Bodminpkwy+Bus",
    "crs": ""
  },
  {
    "code": "H948",
    "name": "Falmouthtown+Bus",
    "crs": ""
  },
  {
    "code": "H949",
    "name": "Liskeard+Bus",
    "crs": ""
  },
  {
    "code": "H950",
    "name": "York+Bus",
    "crs": ""
  },
  {
    "code": "H951",
    "name": "Maidenhead+Bus",
    "crs": ""
  },
  {
    "code": "H952",
    "name": "Blackburn+Bus",
    "crs": ""
  },
  {
    "code": "H953",
    "name": "Darwen+Bus",
    "crs": ""
  },
  {
    "code": "H954",
    "name": "Windsorctl+Bus",
    "crs": ""
  },
  {
    "code": "H955",
    "name": "Windsorriv+Bus",
    "crs": ""
  },
  {
    "code": "H956",
    "name": "Wokingham+Bus",
    "crs": ""
  },
  {
    "code": "H957",
    "name": "Newbury+Bus",
    "crs": ""
  },
  {
    "code": "H958",
    "name": "Slough+Bus",
    "crs": ""
  },
  {
    "code": "H959",
    "name": "Burnleyctl+Bus",
    "crs": ""
  },
  {
    "code": "H960",
    "name": "Burnleymrd+Bus",
    "crs": ""
  },
  {
    "code": "H962",
    "name": "Chester+Bus",
    "crs": ""
  },
  {
    "code": "H963",
    "name": "Tvm Barnsley Zn",
    "crs": ""
  },
  {
    "code": "H964",
    "name": "Tvm Doncaster Zn",
    "crs": ""
  },
  {
    "code": "H965",
    "name": "Tvm Rotherham Zn",
    "crs": ""
  },
  {
    "code": "H966",
    "name": "Tvm Sheffield Zn",
    "crs": ""
  },
  {
    "code": "H968",
    "name": "Stalbansab+Bus",
    "crs": ""
  },
  {
    "code": "H972",
    "name": "Atw Rugby Train",
    "crs": ""
  },
  {
    "code": "H973",
    "name": "Glasgow Subway",
    "crs": "QGS"
  },
  {
    "code": "H975",
    "name": "Leeds+Buswy",
    "crs": ""
  },
  {
    "code": "H976",
    "name": "Bradfrdstn+Buswy",
    "crs": ""
  },
  {
    "code": "H977",
    "name": "Halifax+Buswy",
    "crs": ""
  },
  {
    "code": "H978",
    "name": "Wakefldstn+Buswy",
    "crs": ""
  },
  {
    "code": "H979",
    "name": "Dewsbury+Buswy",
    "crs": ""
  },
  {
    "code": "H980",
    "name": "Huddersfld+Buswy",
    "crs": ""
  },
  {
    "code": "H981",
    "name": "Keighley+Buswy",
    "crs": ""
  },
  {
    "code": "H982",
    "name": "Warngtnstn+Bus",
    "crs": ""
  },
  {
    "code": "H986",
    "name": "Weston-S-M+Bus",
    "crs": ""
  },
  {
    "code": "I016",
    "name": "Chgble Seat Rsvn",
    "crs": "NX1"
  },
  {
    "code": "I026",
    "name": "All Emt Services",
    "crs": ""
  },
  {
    "code": "I057",
    "name": "Worthing Unizone",
    "crs": ""
  },
  {
    "code": "I058",
    "name": "Brighton Unizone",
    "crs": ""
  },
  {
    "code": "I060",
    "name": "Fairford Riat",
    "crs": ""
  },
  {
    "code": "I069",
    "name": "Devon Day Out",
    "crs": ""
  },
  {
    "code": "I110",
    "name": "Firstbusrcard",
    "crs": ""
  },
  {
    "code": "I177",
    "name": "Ec Car Parking",
    "crs": ""
  },
  {
    "code": "I178",
    "name": "Cracker Me Only",
    "crs": ""
  },
  {
    "code": "I218",
    "name": "Centro 1Wk Addon",
    "crs": ""
  },
  {
    "code": "I219",
    "name": "Centro 4Wk Addon",
    "crs": ""
  },
  {
    "code": "I220",
    "name": "Centro Ann Addon",
    "crs": ""
  },
  {
    "code": "I221",
    "name": "Centro 2Wk Addon",
    "crs": ""
  },
  {
    "code": "I222",
    "name": "Centro Trm Addon",
    "crs": ""
  },
  {
    "code": "I230",
    "name": "Xc Origin",
    "crs": "QXO"
  },
  {
    "code": "I231",
    "name": "Xc Destination",
    "crs": "QXD"
  },
  {
    "code": "I351",
    "name": "Cheshire Day Rgr",
    "crs": ""
  },
  {
    "code": "I353",
    "name": "Netw 1Stpl Z 1-4",
    "crs": ""
  },
  {
    "code": "I354",
    "name": "Netw 1Stpl Z 1-5",
    "crs": ""
  },
  {
    "code": "I355",
    "name": "West Wales Dyrgr",
    "crs": ""
  },
  {
    "code": "I375",
    "name": "Northwirrallines",
    "crs": ""
  },
  {
    "code": "I389",
    "name": "W Mids Z12***",
    "crs": ""
  },
  {
    "code": "I390",
    "name": "W Mids Z123**",
    "crs": ""
  },
  {
    "code": "I391",
    "name": "W Mids Z1234*",
    "crs": ""
  },
  {
    "code": "I392",
    "name": "W Mids Z*2345",
    "crs": ""
  },
  {
    "code": "I421",
    "name": "W Mids All Zones",
    "crs": ""
  },
  {
    "code": "I467",
    "name": "W Mids Z1****",
    "crs": ""
  },
  {
    "code": "I674",
    "name": "Emr Origin",
    "crs": "QEO"
  },
  {
    "code": "I675",
    "name": "Emr Destination",
    "crs": "QED"
  },
  {
    "code": "I786",
    "name": "Gate Pass",
    "crs": ""
  },
  {
    "code": "J005",
    "name": "Colchesterzoo676",
    "crs": ""
  },
  {
    "code": "J008",
    "name": "Cosford Air Fam",
    "crs": ""
  },
  {
    "code": "J010",
    "name": "Larne Harbour NI",
    "crs": ""
  },
  {
    "code": "J014",
    "name": "Chauff Punt Camb",
    "crs": ""
  },
  {
    "code": "J017",
    "name": "Eisteddfod 2010",
    "crs": ""
  },
  {
    "code": "J037",
    "name": "Mml Breakfast D",
    "crs": "BV2"
  },
  {
    "code": "J038",
    "name": "Nbus (Bus Only)",
    "crs": ""
  },
  {
    "code": "J069",
    "name": "Camb Citybustour",
    "crs": ""
  },
  {
    "code": "J256",
    "name": "Thfc Season",
    "crs": ""
  },
  {
    "code": "J257",
    "name": "Itfc Portman Rd",
    "crs": ""
  },
  {
    "code": "J258",
    "name": "Ncfc Carrow Road",
    "crs": ""
  },
  {
    "code": "J261",
    "name": "Ctfc Season",
    "crs": ""
  },
  {
    "code": "J263",
    "name": "Quainton Road",
    "crs": "QRD"
  },
  {
    "code": "J264",
    "name": "Coles Bus Necbia",
    "crs": "XNE"
  },
  {
    "code": "J303",
    "name": "Hay Festival",
    "crs": ""
  },
  {
    "code": "J319",
    "name": "Chess Woa Adult",
    "crs": ""
  },
  {
    "code": "J345",
    "name": "Bournmth Air Bus",
    "crs": "BHA"
  },
  {
    "code": "J407",
    "name": "Brodick",
    "crs": "BDC"
  },
  {
    "code": "J409",
    "name": "Dunoon",
    "crs": "DUO"
  },
  {
    "code": "J411",
    "name": "Rothesay",
    "crs": "RTY"
  },
  {
    "code": "J423",
    "name": "Galashiels V Bwk",
    "crs": ""
  },
  {
    "code": "J423",
    "name": "Galashiels V Bwk",
    "crs": "XAA"
  },
  {
    "code": "J424",
    "name": "Melrose",
    "crs": "MLS"
  },
  {
    "code": "J425",
    "name": "Earlston",
    "crs": "EAS"
  },
  {
    "code": "J426",
    "name": "Duns",
    "crs": "DUU"
  },
  {
    "code": "J449",
    "name": "Stnstd A9 Coach",
    "crs": ""
  },
  {
    "code": "J471",
    "name": "Bridport Bus X51/X53",
    "crs": "BPO"
  },
  {
    "code": "J472",
    "name": "Lyme Regis Bus X51/X53",
    "crs": "LPO"
  },
  {
    "code": "J530",
    "name": "Gosport Ferry",
    "crs": "XOF"
  },
  {
    "code": "J543",
    "name": "Gosport Cycle",
    "crs": ""
  },
  {
    "code": "J544",
    "name": "Shrewflower Snr",
    "crs": ""
  },
  {
    "code": "J616",
    "name": "Southwold Bus",
    "crs": "XSO"
  },
  {
    "code": "J684",
    "name": "Lpool Airprt Bus",
    "crs": "LJL"
  },
  {
    "code": "J714",
    "name": "Advnt Isle Big",
    "crs": ""
  },
  {
    "code": "J715",
    "name": "Advnt Isle Junr",
    "crs": ""
  },
  {
    "code": "J717",
    "name": "Original Tour",
    "crs": ""
  },
  {
    "code": "J766",
    "name": "Uig Bus",
    "crs": "UIG"
  },
  {
    "code": "J767",
    "name": "Portree Bus",
    "crs": "PEE"
  },
  {
    "code": "J767",
    "name": "Portree",
    "crs": "PEE"
  },
  {
    "code": "J770",
    "name": "Blackwood Bus Linc",
    "crs": "XKW"
  },
  {
    "code": "J793",
    "name": "Royal Welsh Show",
    "crs": ""
  },
  {
    "code": "J807",
    "name": "Barnsley+Bussy",
    "crs": ""
  },
  {
    "code": "J808",
    "name": "Birmi Intl+Buswm",
    "crs": ""
  },
  {
    "code": "J809",
    "name": "Birmi Stns+Buswm",
    "crs": ""
  },
  {
    "code": "J810",
    "name": "Bpool Nth+Bus",
    "crs": ""
  },
  {
    "code": "J811",
    "name": "Bpool Sth+Bus",
    "crs": ""
  },
  {
    "code": "J812",
    "name": "Bolton+Busgm",
    "crs": ""
  },
  {
    "code": "J813",
    "name": "Coventry+Buswm",
    "crs": ""
  },
  {
    "code": "J814",
    "name": "Cradley H+Buswm",
    "crs": ""
  },
  {
    "code": "J815",
    "name": "Doncaster+Bussy",
    "crs": ""
  },
  {
    "code": "J816",
    "name": "Durham+Bus",
    "crs": ""
  },
  {
    "code": "J817",
    "name": "Edinburgh+Busge",
    "crs": ""
  },
  {
    "code": "J818",
    "name": "Harrogate+Bus",
    "crs": ""
  },
  {
    "code": "J819",
    "name": "Manch Stns+Busgm",
    "crs": ""
  },
  {
    "code": "J820",
    "name": "Newprt Gwent+Bus",
    "crs": ""
  },
  {
    "code": "J822",
    "name": "Perth+Bus",
    "crs": ""
  },
  {
    "code": "J823",
    "name": "Reading+Bus",
    "crs": ""
  },
  {
    "code": "J824",
    "name": "Rochdale+Busgm",
    "crs": ""
  },
  {
    "code": "J825",
    "name": "Rotherham+Bussy",
    "crs": ""
  },
  {
    "code": "J826",
    "name": "Sandw & Du+Buswm",
    "crs": ""
  },
  {
    "code": "J827",
    "name": "Sheffield+Bussy",
    "crs": ""
  },
  {
    "code": "J828",
    "name": "Solihull+Buswm",
    "crs": ""
  },
  {
    "code": "J830",
    "name": "Stockport+Busgm",
    "crs": ""
  },
  {
    "code": "J831",
    "name": "Sunderland+Bus",
    "crs": ""
  },
  {
    "code": "J832",
    "name": "Telford+Bus",
    "crs": ""
  },
  {
    "code": "J833",
    "name": "Walsall+Buswm",
    "crs": ""
  },
  {
    "code": "J834",
    "name": "Wiganstns+Busgm",
    "crs": ""
  },
  {
    "code": "J835",
    "name": "Wolverhamp+Buswm",
    "crs": ""
  },
  {
    "code": "J895",
    "name": "Ayr+Bus",
    "crs": ""
  },
  {
    "code": "J896",
    "name": "Basildon+Bus",
    "crs": ""
  },
  {
    "code": "J897",
    "name": "Benfleet+Bus",
    "crs": ""
  },
  {
    "code": "J898",
    "name": "Billericay+Bus",
    "crs": ""
  },
  {
    "code": "J900",
    "name": "Bletchley+Bus",
    "crs": ""
  },
  {
    "code": "J901",
    "name": "Braintree+Bus",
    "crs": ""
  },
  {
    "code": "J902",
    "name": "Brentwood+Bus",
    "crs": ""
  },
  {
    "code": "J903",
    "name": "Bridgend+Bus",
    "crs": ""
  },
  {
    "code": "J904",
    "name": "Bristl Pwy+Busgb",
    "crs": ""
  },
  {
    "code": "J905",
    "name": "Bristol Tm+Busgb",
    "crs": ""
  },
  {
    "code": "J906",
    "name": "Bury St Edms+Bus",
    "crs": ""
  },
  {
    "code": "J907",
    "name": "Cardiff Ctl+Bus",
    "crs": ""
  },
  {
    "code": "J908",
    "name": "Chelmsford+Bus",
    "crs": ""
  },
  {
    "code": "J909",
    "name": "Clacton+Bus",
    "crs": ""
  },
  {
    "code": "J910",
    "name": "Colchr Stns+Bus",
    "crs": ""
  },
  {
    "code": "J911",
    "name": "Dovercourt+Bus",
    "crs": ""
  },
  {
    "code": "J912",
    "name": "Dumfries+Bus",
    "crs": ""
  },
  {
    "code": "J915",
    "name": "Great Yarmth+Bus",
    "crs": ""
  },
  {
    "code": "J916",
    "name": "Harwich Town+Bus",
    "crs": ""
  },
  {
    "code": "J917",
    "name": "Harwich Intl+Bus",
    "crs": ""
  },
  {
    "code": "J918",
    "name": "Inverness+Bus",
    "crs": ""
  },
  {
    "code": "J919",
    "name": "Ipswich+Bus",
    "crs": ""
  },
  {
    "code": "J920",
    "name": "Kings Lynn+Bus",
    "crs": ""
  },
  {
    "code": "J921",
    "name": "Kilmarnock+Bus",
    "crs": ""
  },
  {
    "code": "J922",
    "name": "Leicester+Bus",
    "crs": ""
  },
  {
    "code": "J924",
    "name": "Meadowhall+Bussy",
    "crs": ""
  },
  {
    "code": "J925",
    "name": "Miltonkeyn+Bus",
    "crs": ""
  },
  {
    "code": "J926",
    "name": "Neath+Bussb",
    "crs": ""
  },
  {
    "code": "J927",
    "name": "Newcastle+Bus",
    "crs": ""
  },
  {
    "code": "J928",
    "name": "Newton Abbot+Bus",
    "crs": ""
  },
  {
    "code": "J929",
    "name": "Norwich+Bus",
    "crs": ""
  },
  {
    "code": "J930",
    "name": "Northamptn+Bus",
    "crs": ""
  },
  {
    "code": "J931",
    "name": "Oxford+Bus",
    "crs": ""
  },
  {
    "code": "J932",
    "name": "Paignton+Bus",
    "crs": ""
  },
  {
    "code": "J933",
    "name": "Plymouth+Bus",
    "crs": ""
  },
  {
    "code": "J934",
    "name": "Port Talbot+Bus",
    "crs": ""
  },
  {
    "code": "J937",
    "name": "Rayleigh+Bus",
    "crs": ""
  },
  {
    "code": "J938",
    "name": "Shenfield+Bus",
    "crs": ""
  },
  {
    "code": "J939",
    "name": "Southend Ctl+Bus",
    "crs": ""
  },
  {
    "code": "J942",
    "name": "Stanford L H+Bus",
    "crs": ""
  },
  {
    "code": "J943",
    "name": "Swansea+Bussb",
    "crs": ""
  },
  {
    "code": "J944",
    "name": "Swindon+Bus",
    "crs": ""
  },
  {
    "code": "J945",
    "name": "Taunton+Bus",
    "crs": ""
  },
  {
    "code": "J946",
    "name": "Torquay+Bus",
    "crs": ""
  },
  {
    "code": "J947",
    "name": "Totnes+Bus",
    "crs": ""
  },
  {
    "code": "J949",
    "name": "Wickford+Bus",
    "crs": ""
  },
  {
    "code": "J950",
    "name": "Witham+Bus",
    "crs": ""
  },
  {
    "code": "J951",
    "name": "Wivenhoe+Bus",
    "crs": ""
  },
  {
    "code": "J952",
    "name": "Wolverton+Bus",
    "crs": ""
  },
  {
    "code": "J977",
    "name": "Barrow+Bus",
    "crs": ""
  },
  {
    "code": "J978",
    "name": "Bridgwater+Bus",
    "crs": ""
  },
  {
    "code": "J979",
    "name": "Bromsgrove+Bus",
    "crs": ""
  },
  {
    "code": "J980",
    "name": "Chorley+Bus",
    "crs": ""
  },
  {
    "code": "J982",
    "name": "Grtmalvern+Bus",
    "crs": ""
  },
  {
    "code": "J983",
    "name": "Hereford+Bus",
    "crs": ""
  },
  {
    "code": "J984",
    "name": "Kiddermstr+Bus",
    "crs": ""
  },
  {
    "code": "J986",
    "name": "Redditch+Bus",
    "crs": ""
  },
  {
    "code": "J987",
    "name": "Worcstrstn+Bus",
    "crs": ""
  },
  {
    "code": "K023",
    "name": "Yarmouth Iow",
    "crs": "YMH"
  },
  {
    "code": "K026",
    "name": "Chinnor Bus",
    "crs": "XCQ"
  },
  {
    "code": "K026",
    "name": "Chinnor, The Red Lion",
    "crs": "XCQ"
  },
  {
    "code": "K175",
    "name": "Golflink 2015",
    "crs": "QGL"
  },
  {
    "code": "K181",
    "name": "Catterick Garrison Bus",
    "crs": "CGT"
  },
  {
    "code": "K182",
    "name": "Richmond Yks Bus",
    "crs": "RMK"
  },
  {
    "code": "K183",
    "name": "Corby Pboro Bus",
    "crs": "CBZ"
  },
  {
    "code": "K184",
    "name": "Kettering Pb Bus",
    "crs": "KEZ"
  },
  {
    "code": "K185",
    "name": "Oundle Pb Bus",
    "crs": "OUD"
  },
  {
    "code": "K208",
    "name": "St Andrews Bus",
    "crs": "SAO"
  },
  {
    "code": "K268",
    "name": "Daventry Bus",
    "crs": "DVR"
  },
  {
    "code": "K276",
    "name": "Mold Bus",
    "crs": "MOZ"
  },
  {
    "code": "K279",
    "name": "Cowes West Rdjet",
    "crs": "WTW"
  },
  {
    "code": "K279",
    "name": "West Cowes Hoverport",
    "crs": "WTW"
  },
  {
    "code": "K280",
    "name": "Cowes East Rfshp",
    "crs": "ECW"
  },
  {
    "code": "K285",
    "name": "Anglia Plus",
    "crs": ""
  },
  {
    "code": "K293",
    "name": "Whitby Bus",
    "crs": "WTZ"
  },
  {
    "code": "K294",
    "name": "Pickering Bus",
    "crs": "PIZ"
  },
  {
    "code": "K295",
    "name": "Flamingo Land",
    "crs": "FLZ"
  },
  {
    "code": "K299",
    "name": "Emid Park&Ride",
    "crs": ""
  },
  {
    "code": "K306",
    "name": "St Johns Wood A6",
    "crs": ""
  },
  {
    "code": "K345",
    "name": "Faringdon Bus",
    "crs": "FAX"
  },
  {
    "code": "K346",
    "name": "Cricklade Bus",
    "crs": "CRZ"
  },
  {
    "code": "K348",
    "name": "Eden Project Bus",
    "crs": "XFJ"
  },
  {
    "code": "K387",
    "name": "London Clipper",
    "crs": ""
  },
  {
    "code": "K392",
    "name": "Shf Supertram",
    "crs": ""
  },
  {
    "code": "K405",
    "name": "Drayton Manor Park",
    "crs": "DRY"
  },
  {
    "code": "K407",
    "name": "Latitude Fest 09",
    "crs": ""
  },
  {
    "code": "K408",
    "name": "Five Ways+Buswm",
    "crs": ""
  },
  {
    "code": "K411",
    "name": "Jewelleryq+Buswm",
    "crs": ""
  },
  {
    "code": "K412",
    "name": "Sutton Cfd+Buswm",
    "crs": ""
  },
  {
    "code": "K413",
    "name": "Hawthorns+Buswm",
    "crs": ""
  },
  {
    "code": "K415",
    "name": "Dorridge+Buswm",
    "crs": ""
  },
  {
    "code": "K417",
    "name": "Stourbdgej+Buswm",
    "crs": ""
  },
  {
    "code": "K418",
    "name": "Altrincham+Bus",
    "crs": ""
  },
  {
    "code": "K419",
    "name": "Castleford+Bus",
    "crs": ""
  },
  {
    "code": "K420",
    "name": "Llandudno+Bus",
    "crs": ""
  },
  {
    "code": "K421",
    "name": "York Dungeon",
    "crs": ""
  },
  {
    "code": "K422",
    "name": "Scrbrosealifectr",
    "crs": ""
  },
  {
    "code": "K423",
    "name": "Blckplsealifectr",
    "crs": ""
  },
  {
    "code": "K425",
    "name": "Ebbsfleet Fastrk",
    "crs": ""
  },
  {
    "code": "K427",
    "name": "Ffos Las Shuttle",
    "crs": ""
  },
  {
    "code": "K428",
    "name": "Whiteairbrighton",
    "crs": ""
  },
  {
    "code": "K429",
    "name": "Edinburghdngn Tp",
    "crs": ""
  },
  {
    "code": "K433",
    "name": "Lst & Ssd A9",
    "crs": ""
  },
  {
    "code": "K434",
    "name": "Lst & Ssd A9 St",
    "crs": ""
  },
  {
    "code": "K435",
    "name": "Lst & Ssd A9 20%",
    "crs": ""
  },
  {
    "code": "K436",
    "name": "Lst & Ssd A9 50%",
    "crs": ""
  },
  {
    "code": "K441",
    "name": "Polperro Bus",
    "crs": ""
  },
  {
    "code": "K445",
    "name": "Pontns Brean Sds",
    "crs": ""
  },
  {
    "code": "K448",
    "name": "Scilly Skybus",
    "crs": ""
  },
  {
    "code": "K451",
    "name": "Birkenhdctl+Bus",
    "crs": ""
  },
  {
    "code": "K452",
    "name": "Hamilton Sqr+Bus",
    "crs": ""
  },
  {
    "code": "K454",
    "name": "Conway Park+Bus",
    "crs": ""
  },
  {
    "code": "K455",
    "name": "Dartford+Bus",
    "crs": ""
  },
  {
    "code": "K458",
    "name": "Horsham+Bus",
    "crs": ""
  },
  {
    "code": "K459",
    "name": "Littlehaven+Bus",
    "crs": ""
  },
  {
    "code": "K464",
    "name": "University+Buswm",
    "crs": ""
  },
  {
    "code": "K468",
    "name": "Parc Y Scarlet",
    "crs": ""
  },
  {
    "code": "K473",
    "name": "Chelt Races Bus",
    "crs": "CRC"
  },
  {
    "code": "K474",
    "name": "Woodstock Bus",
    "crs": ""
  },
  {
    "code": "K475",
    "name": "Wantage Oxf Bus",
    "crs": ""
  },
  {
    "code": "K481",
    "name": "Britleisure Show",
    "crs": ""
  },
  {
    "code": "K482",
    "name": "Britleisure Disc",
    "crs": ""
  },
  {
    "code": "K483",
    "name": "Britleisure Fam",
    "crs": ""
  },
  {
    "code": "K485",
    "name": "Dudley Pt+Buswm",
    "crs": ""
  },
  {
    "code": "K486",
    "name": "Longbridge+Buswm",
    "crs": ""
  },
  {
    "code": "K488",
    "name": "Smethwk Gb+Buswm",
    "crs": ""
  },
  {
    "code": "K491",
    "name": "Stourbdgtn+Buswm",
    "crs": ""
  },
  {
    "code": "K492",
    "name": "Tipton+Buswm",
    "crs": ""
  },
  {
    "code": "K494",
    "name": "Cuffley+Bus",
    "crs": ""
  },
  {
    "code": "K496",
    "name": "Hydpk Uni Gran",
    "crs": ""
  },
  {
    "code": "K497",
    "name": "Nunsq Infrd Spl",
    "crs": ""
  },
  {
    "code": "K498",
    "name": "Ars Mid Whl Her",
    "crs": ""
  },
  {
    "code": "K499",
    "name": "Tram Termini",
    "crs": ""
  },
  {
    "code": "K500",
    "name": "Buckley Ctr Bus",
    "crs": ""
  },
  {
    "code": "K501",
    "name": "Denbigh Bus",
    "crs": ""
  },
  {
    "code": "K502",
    "name": "Ruthin Bus",
    "crs": ""
  },
  {
    "code": "K504",
    "name": "Mold Bus",
    "crs": ""
  },
  {
    "code": "K507",
    "name": "Lampeter Ayw Bus",
    "crs": ""
  },
  {
    "code": "K530",
    "name": "Pontardawe Bus",
    "crs": ""
  },
  {
    "code": "K531",
    "name": "Brecon Llo Bus",
    "crs": ""
  },
  {
    "code": "K532",
    "name": "Brecon Nwt Bus",
    "crs": ""
  },
  {
    "code": "K534",
    "name": "Cardigan Ayw Bus",
    "crs": ""
  },
  {
    "code": "K556",
    "name": "Ludlow Food Fest",
    "crs": ""
  },
  {
    "code": "K563",
    "name": "Edb Apt Bus/Tram",
    "crs": "EDA"
  },
  {
    "code": "K563",
    "name": "Edinb Airprt Bus",
    "crs": ""
  },
  {
    "code": "K565",
    "name": "Sleaford Cc",
    "crs": ""
  },
  {
    "code": "K566",
    "name": "Metheringham Cc",
    "crs": ""
  },
  {
    "code": "K567",
    "name": "Burnham Mkt Bus",
    "crs": ""
  },
  {
    "code": "K568",
    "name": "Wells Nxt Seabus",
    "crs": ""
  },
  {
    "code": "K576",
    "name": "Coseley+Buswm",
    "crs": ""
  },
  {
    "code": "K578",
    "name": "Lye +Buswm",
    "crs": ""
  },
  {
    "code": "K581",
    "name": "Rowley Rgs+Buswm",
    "crs": ""
  },
  {
    "code": "K583",
    "name": "Grantham+Bus",
    "crs": ""
  },
  {
    "code": "K584",
    "name": "Hinckley+Bus",
    "crs": ""
  },
  {
    "code": "K585",
    "name": "Workington+Bus",
    "crs": ""
  },
  {
    "code": "K586",
    "name": "Whitehaven+Bus",
    "crs": ""
  },
  {
    "code": "K587",
    "name": "Cheltenham Races",
    "crs": ""
  },
  {
    "code": "K602",
    "name": "Ruthin Wrx Bus",
    "crs": ""
  },
  {
    "code": "K604",
    "name": "Ruthin Wxc Bus",
    "crs": ""
  },
  {
    "code": "K625",
    "name": "Denbigh Wrx Bus",
    "crs": ""
  },
  {
    "code": "K626",
    "name": "Denbigh Wxc Bus",
    "crs": ""
  },
  {
    "code": "K627",
    "name": "Shotton+Bus",
    "crs": ""
  },
  {
    "code": "K629",
    "name": "Dereham Konectbus",
    "crs": "QDK"
  },
  {
    "code": "K629",
    "name": "Derehm Konectbus",
    "crs": ""
  },
  {
    "code": "K632",
    "name": "Goodwood Bus",
    "crs": ""
  },
  {
    "code": "K633",
    "name": "Ryder Cup Bus",
    "crs": ""
  },
  {
    "code": "K634",
    "name": "Avon Valley Rly",
    "crs": ""
  },
  {
    "code": "K635",
    "name": "Avon Valley Cnc",
    "crs": ""
  },
  {
    "code": "K637",
    "name": "Berkhamsted+Bus",
    "crs": ""
  },
  {
    "code": "K644",
    "name": "Isle Of Man+Bus",
    "crs": ""
  },
  {
    "code": "K647",
    "name": "Eaglescliffe+Bus",
    "crs": ""
  },
  {
    "code": "K648",
    "name": "Festival Of Xmas",
    "crs": ""
  },
  {
    "code": "K650",
    "name": "Leeds Brd Airbus",
    "crs": "XLB"
  },
  {
    "code": "K651",
    "name": "Chelt Rc & Race",
    "crs": ""
  },
  {
    "code": "K653",
    "name": "Wel Park&Ride",
    "crs": ""
  },
  {
    "code": "K654",
    "name": "Ket Park&Ride",
    "crs": ""
  },
  {
    "code": "K655",
    "name": "Mhr Park&Ride",
    "crs": ""
  },
  {
    "code": "K656",
    "name": "Wirksworth",
    "crs": ""
  },
  {
    "code": "K656",
    "name": "Wirksworth",
    "crs": "WIR"
  },
  {
    "code": "K657",
    "name": "Idridgehay",
    "crs": ""
  },
  {
    "code": "K657",
    "name": "Idridgehay",
    "crs": "XID"
  },
  {
    "code": "K674",
    "name": "Didcot+Bus",
    "crs": ""
  },
  {
    "code": "K676",
    "name": "Leyland+Bus",
    "crs": ""
  },
  {
    "code": "K677",
    "name": "Lewes+Bus",
    "crs": ""
  },
  {
    "code": "K678",
    "name": "Macclesfield+Bus",
    "crs": ""
  },
  {
    "code": "K679",
    "name": "Morecambe+Bus",
    "crs": ""
  },
  {
    "code": "K680",
    "name": "Polegate+Bus",
    "crs": ""
  },
  {
    "code": "K681",
    "name": "Hamptn Ct Flower",
    "crs": "QHC"
  },
  {
    "code": "K684",
    "name": "Leeds Fest Bus",
    "crs": "XLD"
  },
  {
    "code": "K697",
    "name": "Dorking+Bus",
    "crs": ""
  },
  {
    "code": "K698",
    "name": "Newhaven+Bus",
    "crs": ""
  },
  {
    "code": "K699",
    "name": "Seaford+Bus",
    "crs": ""
  },
  {
    "code": "K706",
    "name": "Dean Forest Railway",
    "crs": "QDF"
  },
  {
    "code": "K712",
    "name": "Torquay Conf Ctr",
    "crs": ""
  },
  {
    "code": "K714",
    "name": "Royston+Bus",
    "crs": ""
  },
  {
    "code": "K720",
    "name": "Sevenoaks+Bus",
    "crs": ""
  },
  {
    "code": "K729",
    "name": "Heaton Park Bus Stop",
    "crs": "XBE"
  },
  {
    "code": "K732",
    "name": "Metrolink Zone K",
    "crs": "M0K"
  },
  {
    "code": "K733",
    "name": "Metrolink Zone L",
    "crs": "M0L"
  },
  {
    "code": "K734",
    "name": "Metrolink Zone M",
    "crs": "M0M"
  },
  {
    "code": "K735",
    "name": "Metrolink Zone N",
    "crs": "M0N"
  },
  {
    "code": "K736",
    "name": "Metrolink Zone Q",
    "crs": "M0Q"
  },
  {
    "code": "K737",
    "name": "Rochdale Tc Mtlk",
    "crs": "RTC"
  },
  {
    "code": "K738",
    "name": "Rchdle Stn Mtlk",
    "crs": "XRM"
  },
  {
    "code": "K739",
    "name": "Newbold Mtlk",
    "crs": "NBM"
  },
  {
    "code": "K740",
    "name": "Kingsway Bp Mtlk",
    "crs": "KBM"
  },
  {
    "code": "K741",
    "name": "Milnrow Mtlk",
    "crs": "MLR"
  },
  {
    "code": "K742",
    "name": "Newhey Mtlk",
    "crs": "NHY"
  },
  {
    "code": "K743",
    "name": "Shaw & Crom Mtlk",
    "crs": "SHA"
  },
  {
    "code": "K744",
    "name": "Derker Mtlk",
    "crs": "DKR"
  },
  {
    "code": "K745",
    "name": "Oldham Mps Mtlk",
    "crs": "OLM"
  },
  {
    "code": "K746",
    "name": "Oldham Ctrl Mtlk",
    "crs": "OCM"
  },
  {
    "code": "K747",
    "name": "Oldham K St Mtlk",
    "crs": "OKS"
  },
  {
    "code": "K748",
    "name": "Westwood Mtlk",
    "crs": "WWM"
  },
  {
    "code": "K749",
    "name": "Freehold Mtlk",
    "crs": "FHM"
  },
  {
    "code": "K750",
    "name": "Sth Chadtn Mtlk",
    "crs": "SCM"
  },
  {
    "code": "K751",
    "name": "Hollinwood (Metro)",
    "crs": "HOD"
  },
  {
    "code": "K751",
    "name": "Hollinwood Mtlk",
    "crs": "HOD"
  },
  {
    "code": "K752",
    "name": "Failsworth Mtlk",
    "crs": "FLS"
  },
  {
    "code": "K753",
    "name": "New Islngtn Mtlk",
    "crs": "NIM"
  },
  {
    "code": "K754",
    "name": "Holt Town Mtlk",
    "crs": "HTM"
  },
  {
    "code": "K755",
    "name": "Etihad Camp Mtlk",
    "crs": "EHC"
  },
  {
    "code": "K756",
    "name": "Velopark Mtlk",
    "crs": "VPM"
  },
  {
    "code": "K757",
    "name": "Clayton Hal Mtlk",
    "crs": "CHB"
  },
  {
    "code": "K758",
    "name": "Edge Lane Mtlk",
    "crs": "ELM"
  },
  {
    "code": "K759",
    "name": "Cemetery Rd Mtlk",
    "crs": "CRQ"
  },
  {
    "code": "K761",
    "name": "Audenshaw Mtlk",
    "crs": "ASM"
  },
  {
    "code": "K762",
    "name": "Ashton Moss Mtlk",
    "crs": "AMO"
  },
  {
    "code": "K763",
    "name": "Ashton West Mtlk",
    "crs": "AWL"
  },
  {
    "code": "K764",
    "name": "Ashton U L Mtlk",
    "crs": "AUL"
  },
  {
    "code": "K765",
    "name": "Withington Mtlk",
    "crs": "WMM"
  },
  {
    "code": "K766",
    "name": "Burton Road Mtlk",
    "crs": "BRZ"
  },
  {
    "code": "K767",
    "name": "W Didsbury Mtlk",
    "crs": "WDI"
  },
  {
    "code": "K768",
    "name": "Didsbury Village Mtlk",
    "crs": "DVM"
  },
  {
    "code": "K769",
    "name": "E Didsbury Mtlk",
    "crs": "EDM"
  },
  {
    "code": "K770",
    "name": "Shottle",
    "crs": "SHX"
  },
  {
    "code": "K774",
    "name": "Egham+Bus",
    "crs": ""
  },
  {
    "code": "K775",
    "name": "Ely +Bus",
    "crs": ""
  },
  {
    "code": "K776",
    "name": "Buxton+Bus",
    "crs": ""
  },
  {
    "code": "K777",
    "name": "Glossop+Bus",
    "crs": ""
  },
  {
    "code": "K778",
    "name": "Hathersage+Bus",
    "crs": ""
  },
  {
    "code": "K779",
    "name": "Matlock+Bus",
    "crs": ""
  },
  {
    "code": "K781",
    "name": "Bristol Conf Ctr",
    "crs": ""
  },
  {
    "code": "K782",
    "name": "Cardiff Conf Ctr",
    "crs": ""
  },
  {
    "code": "K783",
    "name": "Digby&Sowtn Conf",
    "crs": ""
  },
  {
    "code": "K784",
    "name": "Exeter Conf Ctr",
    "crs": ""
  },
  {
    "code": "K788",
    "name": "Congleton+Bus",
    "crs": ""
  },
  {
    "code": "K799",
    "name": "Burgess Hill+Bus",
    "crs": ""
  },
  {
    "code": "K800",
    "name": "Wypte Bus",
    "crs": ""
  },
  {
    "code": "K801",
    "name": "Wypte Z12***",
    "crs": ""
  },
  {
    "code": "K802",
    "name": "Wypte Z123**",
    "crs": ""
  },
  {
    "code": "K803",
    "name": "Wypte Z1234*",
    "crs": ""
  },
  {
    "code": "K804",
    "name": "Wypte Z12345",
    "crs": ""
  },
  {
    "code": "K805",
    "name": "Wypte Z*2345",
    "crs": ""
  },
  {
    "code": "K806",
    "name": "Wypte Student",
    "crs": ""
  },
  {
    "code": "K821",
    "name": "Saffron Wldn Bus",
    "crs": "SFF"
  },
  {
    "code": "K827",
    "name": "St Austell Conf",
    "crs": ""
  },
  {
    "code": "K828",
    "name": "Newport Conf",
    "crs": ""
  },
  {
    "code": "K829",
    "name": "Totnes Conf",
    "crs": ""
  },
  {
    "code": "K830",
    "name": "Cheltenham Conf",
    "crs": ""
  },
  {
    "code": "K831",
    "name": "Oxford Conf",
    "crs": ""
  },
  {
    "code": "K832",
    "name": "Bath Spa Conf",
    "crs": ""
  },
  {
    "code": "K833",
    "name": "Chippenham Conf",
    "crs": ""
  },
  {
    "code": "K837",
    "name": "Eastmid Designer",
    "crs": "XYX"
  },
  {
    "code": "K850",
    "name": "Blenheim Palace",
    "crs": "BHP"
  },
  {
    "code": "K864",
    "name": "Metrolink Zone R",
    "crs": "M0R"
  },
  {
    "code": "K865",
    "name": "Barlow M Rd Mtlk",
    "crs": "BMM"
  },
  {
    "code": "K866",
    "name": "Sale W Park Mtlk",
    "crs": "SPM"
  },
  {
    "code": "K867",
    "name": "Northern Mr Mtlk",
    "crs": "NMR"
  },
  {
    "code": "K868",
    "name": "Wythnshw Pk Mtlk",
    "crs": "WPM"
  },
  {
    "code": "K869",
    "name": "Moor Road Mtlk",
    "crs": "MDM"
  },
  {
    "code": "K870",
    "name": "Baguley Mtlk",
    "crs": "BGK"
  },
  {
    "code": "K871",
    "name": "Roundthorn Mtlk",
    "crs": "RTH"
  },
  {
    "code": "K872",
    "name": "Metrolink Zone S",
    "crs": "M0S"
  },
  {
    "code": "K873",
    "name": "Martinsctft Mtlk",
    "crs": "MCF"
  },
  {
    "code": "K874",
    "name": "Benchill Mtlk",
    "crs": "BNK"
  },
  {
    "code": "K875",
    "name": "Crossacres Mtlk",
    "crs": "CMK"
  },
  {
    "code": "K876",
    "name": "Wythnshw Tc Mtlk",
    "crs": "WHK"
  },
  {
    "code": "K877",
    "name": "Robinswd Rd Mtlk",
    "crs": "RRM"
  },
  {
    "code": "K878",
    "name": "Peel Hall Mtlk",
    "crs": "PHM"
  },
  {
    "code": "K879",
    "name": "Shadowmoss Mtlk",
    "crs": "SMM"
  },
  {
    "code": "K880",
    "name": "Man Airport Mtlk",
    "crs": "MNA"
  },
  {
    "code": "K926",
    "name": "Mira Tech Park",
    "crs": "MTE"
  },
  {
    "code": "K942",
    "name": "Cholsey & Wallingford Rly",
    "crs": "XLN"
  },
  {
    "code": "K944",
    "name": "Campbeltown",
    "crs": "CBT"
  },
  {
    "code": "K945",
    "name": "Cumbrae",
    "crs": "CUL"
  },
  {
    "code": "K969",
    "name": "Doncaster Airport Bus",
    "crs": "RHA"
  },
  {
    "code": "K973",
    "name": "Oxford Westgate",
    "crs": "XVE"
  },
  {
    "code": "K974",
    "name": "Seahouses Bus",
    "crs": "SIB"
  },
  {
    "code": "K975",
    "name": "Robin Hood'S Bay Bus",
    "crs": "RHB"
  },
  {
    "code": "K979",
    "name": "Belford Bus",
    "crs": "BFB"
  },
  {
    "code": "K983",
    "name": "Leiston-Bus 64",
    "crs": "LIE"
  },
  {
    "code": "K984",
    "name": "Aldeburgh-Bus 64",
    "crs": "ALG"
  },
  {
    "code": "K989",
    "name": "Gosport Bus E1/E2",
    "crs": "GOP"
  },
  {
    "code": "K994",
    "name": "Countryfile Live",
    "crs": "QCF"
  },
  {
    "code": "L002",
    "name": "Mrail All Areas",
    "crs": "QMA"
  },
  {
    "code": "L003",
    "name": "Mrail Area B",
    "crs": "QMB"
  },
  {
    "code": "L004",
    "name": "Mrail Zone B1",
    "crs": "QMC"
  },
  {
    "code": "L030",
    "name": "Cosford Air Show",
    "crs": ""
  },
  {
    "code": "L047",
    "name": "East M Air/Emd",
    "crs": "EMC"
  },
  {
    "code": "L049",
    "name": "East M Air/Dby",
    "crs": "EMA"
  },
  {
    "code": "L052",
    "name": "Kingswear",
    "crs": "KWR"
  },
  {
    "code": "L053",
    "name": "Dartmouth",
    "crs": "XMT"
  },
  {
    "code": "L054",
    "name": "Churston",
    "crs": "CHS"
  },
  {
    "code": "L055",
    "name": "Goodrington Sands",
    "crs": "GUD"
  },
  {
    "code": "L056",
    "name": "Eythorne Ekr",
    "crs": "EKR"
  },
  {
    "code": "L057",
    "name": "Chinnor Rail",
    "crs": "CCK"
  },
  {
    "code": "L058",
    "name": "Blenheim Pal. Via Oxford P",
    "crs": "XFP"
  },
  {
    "code": "L061",
    "name": "Wisbech (Coach)",
    "crs": "WIS"
  },
  {
    "code": "L062",
    "name": "Kings Lynn Coach",
    "crs": "KLB"
  },
  {
    "code": "L063",
    "name": "Swaffham (Coach)",
    "crs": "SWB"
  },
  {
    "code": "L064",
    "name": "Dereham (Coach)",
    "crs": "QDM"
  },
  {
    "code": "L069",
    "name": "Leeds Castle",
    "crs": "LCA"
  },
  {
    "code": "L265",
    "name": "Corby Town Centre",
    "crs": "XXZ"
  },
  {
    "code": "M018",
    "name": "Dublin Port Stena",
    "crs": "DPS"
  },
  {
    "code": "M020",
    "name": "Antrim NI",
    "crs": "ANM"
  },
  {
    "code": "M120",
    "name": "Ballymena NI",
    "crs": "BMA"
  },
  {
    "code": "M130",
    "name": "Ballymoney NI",
    "crs": ""
  },
  {
    "code": "M160",
    "name": "Bangor NI",
    "crs": ""
  },
  {
    "code": "M180",
    "name": "Bellarena NI",
    "crs": ""
  },
  {
    "code": "M250",
    "name": "Carlow Cie",
    "crs": "CAW"
  },
  {
    "code": "M270",
    "name": "Carrickfergus NI",
    "crs": ""
  },
  {
    "code": "M320",
    "name": "Castlerock NI",
    "crs": ""
  },
  {
    "code": "M370",
    "name": "Coleraine NI",
    "crs": "CEI"
  },
  {
    "code": "M490",
    "name": "Dublin City",
    "crs": ""
  },
  {
    "code": "M510",
    "name": "Dun Laoghaire (Civ)",
    "crs": "DDB"
  },
  {
    "code": "M540",
    "name": "Dhu Varren NI",
    "crs": ""
  },
  {
    "code": "M770",
    "name": "Larne Town NI",
    "crs": ""
  },
  {
    "code": "M800",
    "name": "Lisburn NI",
    "crs": "LBN"
  },
  {
    "code": "M810",
    "name": "Londonderry Ni",
    "crs": "LDR"
  },
  {
    "code": "M830",
    "name": "Lurgan NI",
    "crs": ""
  },
  {
    "code": "M900",
    "name": "Mosney  IR",
    "crs": "MOY"
  },
  {
    "code": "M940",
    "name": "Portadown NI",
    "crs": "PTN"
  },
  {
    "code": "M960",
    "name": "Portrush Ni",
    "crs": "PTS"
  },
  {
    "code": "N160",
    "name": "Whitehead NI",
    "crs": ""
  },
  {
    "code": "N400",
    "name": "Crumlin NI",
    "crs": ""
  },
  {
    "code": "N410",
    "name": "Cullybackey NI",
    "crs": ""
  },
  {
    "code": "N440",
    "name": "Greenisland NI",
    "crs": ""
  },
  {
    "code": "N580",
    "name": "Newry NI",
    "crs": "NWY"
  },
  {
    "code": "N610",
    "name": "Poyntzpass NI",
    "crs": ""
  },
  {
    "code": "N700",
    "name": "Scarva  NI",
    "crs": ""
  },
  {
    "code": "N770",
    "name": "University NI",
    "crs": ""
  },
  {
    "code": "q001",
    "name": "Euston/Watford Junction",
    "crs": ""
  },
  {
    "code": "q003",
    "name": "Zones U123456 & Croxley Und",
    "crs": ""
  },
  {
    "code": "q004",
    "name": "Zones U123456 & Rickmansworth Und",
    "crs": ""
  },
  {
    "code": "q005",
    "name": "Zones U123456 & Chorleywood Und",
    "crs": ""
  },
  {
    "code": "q006",
    "name": "Zones U123456 & Watford Met Und",
    "crs": ""
  },
  {
    "code": "q007",
    "name": "Zones U123456 & Chalfont & Latimer Und",
    "crs": ""
  },
  {
    "code": "q008",
    "name": "Zones U123456 & Amersham",
    "crs": ""
  },
  {
    "code": "q009",
    "name": "Zones U123456 & Chesham Und",
    "crs": ""
  },
  {
    "code": "q010",
    "name": "Zones R123456 & Amersham",
    "crs": ""
  },
  {
    "code": "q011",
    "name": "Zones R123456 & Chesham Und",
    "crs": ""
  },
  {
    "code": "q012",
    "name": "Zones R123456 & Chalfont & Latimer Und",
    "crs": ""
  },
  {
    "code": "q013",
    "name": "Zones R123456 & Chorleywood Und",
    "crs": ""
  },
  {
    "code": "q014",
    "name": "Zones R123456 & Croxley Und",
    "crs": ""
  },
  {
    "code": "q015",
    "name": "Zones R123456 & Rickmansworth Und",
    "crs": ""
  },
  {
    "code": "q016",
    "name": "Zones R123456 & Watford Met Und",
    "crs": ""
  },
  {
    "code": "q017",
    "name": "Ryde Esplanade & Ryde St Johns Rd",
    "crs": ""
  },
  {
    "code": "q018",
    "name": "Smallbrook Jn & Brading",
    "crs": ""
  },
  {
    "code": "q019",
    "name": "Sandown & Lake & Shanklin",
    "crs": ""
  },
  {
    "code": "q030",
    "name": "Zones R123456 & Bushey",
    "crs": ""
  },
  {
    "code": "q031",
    "name": "Zones R123456 & Watford High Street",
    "crs": ""
  },
  {
    "code": "q032",
    "name": "Zones R123456 & Carpenders Park",
    "crs": ""
  },
  {
    "code": "q033",
    "name": "Zones U123456 & Bushey",
    "crs": ""
  },
  {
    "code": "q034",
    "name": "Zones U123456 & Watford High Street",
    "crs": ""
  },
  {
    "code": "q035",
    "name": "Zones U123456 & Carpenders Park",
    "crs": ""
  },
  {
    "code": "Q850",
    "name": "Wypte Dayrvr-Cl",
    "crs": ""
  }
];

export const stopsByNlc: StopIndex = stops.reduce((index: StopIndex, location: Stop) => {
  index[location.code] = location;

  return index;
}, {});

export const stopsByCrs: StopIndex = stops.reduce((index: StopIndex, location: Stop) => {
  index[location.crs] = location;

  return index;
}, {});

export interface StopIndex {
  [code: string]: Stop;
}
