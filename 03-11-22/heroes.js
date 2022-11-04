const heroes = [
  {
    id: 1,
    name: "Tracer",
    meta: "no",
    description:
      "Armata di due Pistole a Impulsi gemelle e bombe a tempo, Tracer è in grado di traslare nello spazio e ritornare indietro nel tempo, mentre combatte per aggiustare i torti in tutto il mondo.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png",
    ultimate: {
      nome: "Bomba a Impulsi",
      broken: "no",
    },
  },
  {
    id: 2,
    name: "Junkrat",
    meta: "yes",
    description:
      "Armato di lanciagranate e armamenti in grado di ostacolare i nemici, Junkrat è ossessionato dagli esplosivi, con cui causa caos e distruzione.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png",
    ultimate: {
      nome: "Rotobomba",
      count: "no",
    },
  },
  {
    id: 3,
    name: "Cassidy",
    meta: "no",
    description:
      "Armato del suo revolver Pacificatore, Cassidy elimina i bersagli con Scarica di Piombo e sfugge ai pericoli con la sua Capriola Tattica. ",

    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
    ultimate: {
      nome: "Mezzogiorno Di Fuoco",
      broken: "no",
    },
  },
  {
    id: 4,
    name: "Soldier76",
    meta: "yes",
    description:
      "Dotato di un arsenale all'avanguardia, tra cui un fucile a impulsi sperimentale in grado di lanciare potenti razzi, il Soldato-76 ha velocità e capacità di supporto degne dei guerrieri meglio addestrati.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png",
    ultimate: {
      name: "Visore Tattico",
      broken: "yes",
    },
  },
  {
    id: 5,
    name: "Pharah",
    meta: "yes",
    description:
      "Sorvola l'area di combattimento nella sua tuta da combattimento Raptora, armata di un Lanciarazzi che usa per bombardare i nemici con missili ad alto potenziale.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png",
    ultimate: {
      nome: "Pioggia di fuoco",
      broken: "yes",
    },
  },
  {
    id: 6,
    name: "Sojourn",
    meta: "yes",
    description:
      "I suoi potenziamenti cibernetici e il Fucile a Rotaia le forniscono la rapidità, la precisione e la potenza di fuoco per volgere a suo favore le sorti degli scontri.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png",
    ultimate: {
      nome: "Overclock",
      broken: "yes",
    },
  },
  {
    id: 7,
    name: "Sombra",
    meta: "yes",
    description:
      "Sombra, una degli hacker più famosi del mondo, usa le informazioni per manipolare chi ha il potere. Gli occultamenti e gli attacchi debilitanti le permettono di infiltrarsi ovunque e la rendono un bersaglio difficile da individuare.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png",
    ultimate: {
      nome: "E.M.P",
      broken: "yes",
    },
  },
  {
    id: 8,
    name: "Reaper",
    meta: "yes",
    description:
      "Reaper è un letale assassino armato di fucile con la capacità di muoversi per il campo di battaglia come un fantasma. Ovunque appare, la morte lo segue.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png",
    ultimate: {
      nome: "Spirale Della Morte",
      count: "yes",
    },
  },
  {
    id: 9,
    name: "Genji",
    meta: "yes",
    description:
      "Il ninja cyborg Genji Shimada ha accettato il corpo potenziato che un tempo aveva rifiutato. Così facendo, ha scoperto di possedere un grado di umanità più alto.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png",
    ultimate: {
      nome: "Spada Del Drago",
      broken: "yes",
    },
  },
  {
    id: 10,
    name: "Hanzo",
    meta: "yes",
    description:
      "Abile arciere e assassino, armato di una faretra di frecce potenziate, Hanzo Shimada aspira a diventare un guerriero senza pari.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png",
    ultimate: {
      nome: "Assalto Del Drago",
      broken: "no",
    },
  },
  {
    id: 11,
    name: "Symmetra",
    meta: "no",
    description:
      "Symmetra, un'architech della Vishkar, sfrutta la luce per plasmare la realtà. Genera torrette per ostacolare i nemici, Televarchi per far spostare gli alleati e una barriera protettiva di luce solida per controllare il flusso del combattimento.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png",
    ultimate: {
      nome: "Barriera Fotonica",
      broken: "no",
    },
  },
  {
    id: 12,
    name: "Torbjorn",
    meta: "no",
    description:
      "Overwatch possedeva gli armamenti più avanzati del pianeta, grazie a Torbjörn. Il suo ricco arsenale comprende una Sparachiodi, un martello e una forgia personale, utile per costruire delle torrette.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png",
    ultimate: {
      name: "Nucleo Ardente",
      broken: "no",
    },
  },
  {
    id: 13,
    name: "Mei",
    meta: "no",
    description:
      "Mei è una scienziata dotata di vari dispositivi in grado di alterare il meteo. Ex ricercatrice, si è unita a Winston per aiutare Overwatch ad affrontare le nuove minacce del mondo.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png",
    ultimate: {
      name: "Tormenta",
      broken: "no",
    },
  },
  {
    id: 14,
    name: "Echo",
    meta: "no",
    description:
      "Echo è un robot evolutivo dotato di intelligenza artificiale adattiva e capacità di volo, sufficientemente versatile da poter assumere svariati ruoli in situazioni di combattimento.",
    category: "NO",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png",
    ultimate: {
      name: "Duplicazione",
      broken: "no",
    },
  },
  {
    id: 15,
    name: "Bastion",
    meta: "yes",
    description:
      "Questa particolare unità Bastion, impiegata in prima linea al tempo della devastante Crisi degli Omnic, ora è affascinata dalla natura ma anche turbata dalla diffidenza degli umani. La sua capacità di mutare configurazioni lo rende un alleato versatile.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
    ultimate: {
      name: "Assetto Carro Armato",
      broken: "no",
    },
  },
  {
    id: 16,
    name: " Ashe",
    meta: "yes",
    description:
      "Ashe, la leader della Deadlock Gang, una figura rispettata da tutto il mondo criminale, combatte sul campo di battaglia seguendo le proprie regole. Può scatenare un'enorme potenza di fuoco avendo con sé due armi, una quantità più che sufficiente di dinamite e il suo fidato maggiordomo B.O.B.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
    ultimate: {
      name: "B.O.B",
      broken: "yes",
    },
  },
  {
    id: 17,
    name: "Widowmaker",
    meta: "no",
    description:
      "Widowmaker è l'assassina perfetta, armata di un fucile di precisione, Mine Venefiche e un rampino per raggiungere i punti di cecchinaggio migliori in un baleno.",
    category: "DPS",
    image:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png",
    ultimate: {
      name: "Visore Termico",
      broken: "no",
    },
  },
];
export default heroes;
